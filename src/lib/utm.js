/**
 * UTM Parameters Utility
 * Captures and persists UTM parameters from URL for lead attribution.
 * Stores in sessionStorage so params persist across page navigation within a session.
 */

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const UTM_STORAGE_KEY = 'growcord_utm_params';

/**
 * Get UTM parameters from current URL
 * @returns {Object} Object with utm_source, utm_medium, utm_campaign, utm_term, utm_content (only present if in URL)
 */
export function getUtmFromUrl() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utm = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) utm[key] = value;
  });
  return utm;
}

/**
 * Get UTM parameters - from URL first, then from sessionStorage (persisted from earlier in session)
 * @returns {Object} UTM parameters object, may be empty
 */
export function getUtmParams() {
  if (typeof window === 'undefined') return {};

  // 1. Check URL first - if UTM params present, capture and persist
  const urlUtm = getUtmFromUrl();
  if (Object.keys(urlUtm).length > 0) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(urlUtm));
    } catch (e) {
      // Ignore storage errors
    }
    return urlUtm;
  }

  // 2. Fall back to sessionStorage (from earlier page in same session)
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    // Ignore parse errors
  }

  return {};
}

/**
 * Get UTM params for lead submission - returns object suitable for metadata.utm or lead.utm
 * @returns {Object} UTM params object (may be empty)
 */
export function getUtmForLead() {
  const utm = getUtmParams();
  return Object.keys(utm).length > 0 ? utm : {};
}

/**
 * Get current page path for lead attribution (e.g. /real-estate, /contact-us, /checkout)
 * @returns {string} Page path or empty string if not in browser
 */
export function getPagePath() {
  if (typeof window === 'undefined') return '';
  return window.location.pathname || '';
}
