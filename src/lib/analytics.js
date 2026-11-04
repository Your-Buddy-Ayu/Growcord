/**
 * Analytics Service for GTM Data Layer Events
 * Centralizes all GTM event tracking logic.
 */

// docs/FEDERATION.md §13.1 website hook  never a hardcoded host, same env var as lib/api.js.
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const VISITOR_ID_KEY = 'growcord_visitor_id';
const SESSION_ID_KEY = 'growcord_session_id';

const generateId = () => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `id_${Date.now()}_${Math.random().toString(36).slice(2)}`;
};

// Best-effort, per-viewer identifiers for the funnel.event feed (docs/FEDERATION.md §4.3).
// Never throws  a private window or blocked storage just means no visitor/session id is sent.
const getOrCreateVisitorId = () => {
    if (typeof window === 'undefined') return undefined;
    try {
        let id = window.localStorage.getItem(VISITOR_ID_KEY);
        if (!id) {
            id = generateId();
            window.localStorage.setItem(VISITOR_ID_KEY, id);
        }
        return id;
    } catch (e) {
        return undefined;
    }
};

const getSessionId = () => {
    if (typeof window === 'undefined') return undefined;
    try {
        let id = window.sessionStorage.getItem(SESSION_ID_KEY);
        if (!id) {
            id = generateId();
            window.sessionStorage.setItem(SESSION_ID_KEY, id);
        }
        return id;
    } catch (e) {
        return undefined;
    }
};

/**
 * Posts one funnel event to the Growcord Federation emitter's HTTP entrypoint
 * (server/routes/tracking.js `POST /event` -> `funnel.event`). Fire-and-forget: analytics
 * must never block or throw into the UI.
 */
const postTrackingEvent = ({ event, value } = {}) => {
    if (typeof window === 'undefined' || !event) return;
    try {
        const body = JSON.stringify({
            event,
            visitorId: getOrCreateVisitorId(),
            sessionId: getSessionId(),
            path: window.location?.pathname,
            url: window.location?.href,
            referrer: document?.referrer || undefined,
            value: typeof value === 'number' ? value : undefined
        });

        fetch(`${API_BASE_URL}/tracking/event`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body,
            keepalive: true
        }).catch(() => {
            // swallow  tracking must never surface an error to the user
        });
    } catch (e) {
        // swallow  same reasoning
    }
};

export const gtm = {
    /**
     * Push a generic event to the data layer
     * @param {string} eventName - The name of the event
     * @param {Object} data - Additional data to push
     */
    push: (eventName, data = {}) => {
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: eventName,
                ...data
            });

            // Support direct GA4/gtag if initialized
            if (typeof window.gtag === 'function') {
                window.gtag('event', eventName, data);
            }

            // Forward to Microsoft Clarity
            if (window.clarity) {
                window.clarity("event", eventName, data);
            }
        }
    },

    /**
     * Track WhatsApp Button Click
     * @param {string} pageName - The page where the click occurred
     * @param {string} label - Optional label (default: 'Floating Button')
     */
    trackWhatsAppClick: (pageName, label = 'Floating Button') => {
        gtm.push('whatsapp_click', {
            label,
            page: pageName
        });
    },

    /**
     * Track Popup Impressions
     * @param {string} trigger - How the popup was triggered ('manual_cta', 'auto_trigger')
     * @param {string} label - Additional context
     */
    trackPopupImpression: (trigger, label) => {
        gtm.push('popup_impression', {
            trigger,
            label
        });
    },

    /**
     * Track Form Step Completion
     * @param {string} formName - Name of the form (e.g., 'Demo Popup')
     * @param {number} step - Step number completed
     * @param {string} label - Description of the step
     * @param {Object} userData - Additional user details
     */
    trackFormStep: (formName, step, label, userData = {}) => {
        gtm.push('form_step_complete', {
            formName,
            step,
            label,
            ...userData
        });
    },

    /**
     * Track Lead Generation (Final Submission)
     * @param {string} formName - Name of the form
     * @param {string} currency - Currency code (default: 'INR')
     * @param {number} value - Value of the lead (default: 0)
     * @param {Object} userData - User details (name, email, phone, etc.)
     */
    trackLead: (formName, currency = 'INR', value = 0, userData = {}) => {
        gtm.push('generate_lead', {
            formName,
            currency,
            value,
            ...userData
        });

        // docs/FEDERATION.md §4.3 funnel vocabulary: 'lead' is a first-class event.
        postTrackingEvent({ event: 'lead', value });
    },

    /**
     * Track Custom Event
     * Wrapper for consistent usage
     */
    trackEvent: (eventName, params) => {
        gtm.push(eventName, params);

        // Forward to the Growcord Federation funnel.event feed (docs/FEDERATION.md §4.3).
        // Anything not in the fixed vocabulary is stored as 'custom' by the server, so this
        // is safe to call for every event name this app already tracks.
        postTrackingEvent({ event: eventName, value: typeof params?.value === 'number' ? params.value : undefined });
    },

    /**
     * Track Add To Cart Event
     * @param {Object} productData - Product details
     */
    trackAddToCart: ({ itemId, itemName, value, currency = 'INR' }) => {
        gtm.push('add_to_cart', {
            currency,
            value,
            items: [{
                item_id: itemId,
                item_name: itemName,
                price: value,
                quantity: 1
            }]
        });
    },

    /**
     * Track Purchase Event
     * @param {Object} purchaseData - Purchase details
     */
    trackPurchase: ({ transactionId, value, currency = 'INR', items = [], userData = {} }) => {
        gtm.push('purchase', {
            transaction_id: transactionId,
            value,
            currency,
            items,
            user_data: userData // Group user data under user_data object or spread checks
        });

        // Also push flat user properties if needed for easier access in GTM
        if (Object.keys(userData).length > 0) {
            gtm.push('user_data_update', userData);
        }

        // docs/FEDERATION.md §4.3 funnel vocabulary: 'purchase' is a first-class event.
        postTrackingEvent({ event: 'purchase', value });
    }
};
