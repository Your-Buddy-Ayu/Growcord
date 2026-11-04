"use client";

import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { scriptsAPI } from '@/lib/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Module-level config to store conversion IDs
let linkedinConversionConfig = {
    addToCartId: '',
    initiateCheckoutId: '',
    purchaseId: ''
};

// LinkedIn Insight Tag helper function
const initLinkedInInsightTag = (partnerId) => {
    if (!partnerId || typeof window === 'undefined' || window.lintrk) return;

    window._linkedin_partner_id = partnerId;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(window._linkedin_partner_id);

    (function (l) {
        if (!l) {
            window.lintrk = function (a, b) {
                window.lintrk.q.push([a, b])
            };
            window.lintrk.q = []
        }
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
    })(window.lintrk);
};

const LinkedInInsightTagContent = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [partnerId, setPartnerId] = useState(null);
    const [initialized, setInitialized] = useState(false);

    // Load Partner ID from API or Env
    useEffect(() => {
        const loadPartnerId = async () => {
            try {
                const config = await scriptsAPI.getConfig();

                if (config?.linkedinPartnerId) {
                    setPartnerId(config.linkedinPartnerId);
                }

                // Store conversion IDs for helper functions
                linkedinConversionConfig = {
                    addToCartId: config?.linkedinAddToCartId || '',
                    initiateCheckoutId: config?.linkedinInitiateCheckoutId || '',
                    purchaseId: config?.linkedinPurchaseId || ''
                };
            } catch (error) {
                console.error('Error loading LinkedIn Insight Tag config:', error);
            }
        };

        loadPartnerId();
    }, []);

    // Initialize LinkedIn Insight Tag when partnerId is available
    useEffect(() => {
        if (partnerId && !initialized) {
            initLinkedInInsightTag(partnerId);
            setInitialized(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [partnerId, initialized]);

    // LinkedIn Insight Tag automatically tracks page views by loading the script
    // But we can trigger conversion events manually

    return null;
};

const LinkedInInsightTag = () => {
    return (
        <Suspense fallback={null}>
            <LinkedInInsightTagContent />
        </Suspense>
    )
}

// Helper function to track custom conversion events
// Usage: trackLinkedInEvent(123456) where 123456 is the Conversion ID
// Helper function to track custom conversion events
export const trackLinkedInEvent = (conversionId) => {
    try {
        // Client-side tracking
        if (typeof window !== 'undefined' && window.lintrk && conversionId) {
            window.lintrk('track', { conversion_id: conversionId });
        }

        // Server-side tracking (CAPI)
        // We'll try to get the li_fat_id cookie if available
        const getCookie = (name) => {
            if (typeof document === 'undefined') return null;
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        };

        const li_fat_id = getCookie('li_fat_id');

        // Send to backend
        fetch(`${API_BASE_URL}/tracking/linkedin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                conversionId,
                li_fat_id,
                // If we had user email from context, we would send it here
                // email: userEmail 
            })
        }).catch(err => console.warn('CAPI error:', err));

    } catch (e) {
        console.warn('LinkedIn tracking failed:', e);
    }
};

// Helper function to track specific conversion events
export const trackLinkedInAddToCart = () => {
    if (linkedinConversionConfig.addToCartId) {
        trackLinkedInEvent(linkedinConversionConfig.addToCartId);
    }
};

export const trackLinkedInInitiateCheckout = () => {
    if (linkedinConversionConfig.initiateCheckoutId) {
        trackLinkedInEvent(linkedinConversionConfig.initiateCheckoutId);
    }
};

export const trackLinkedInPurchase = () => {
    if (linkedinConversionConfig.purchaseId) {
        trackLinkedInEvent(linkedinConversionConfig.purchaseId);
    }
};

export default LinkedInInsightTag;

/**
 * LinkedIn doesn't have "standard" event names like Meta/GTM. 
 * Instead, they use specific Conversion IDs created in the LinkedIn Campaign Manager.
 * 
 * To add a new conversion:
 * 1. Go to LinkedIn Campaign Manager > Analyze > Conversion Tracking.
 * 2. Create a "Conversion" and get its ID.
 * 3. Call trackLinkedInEvent(ID) in the code.
 */
