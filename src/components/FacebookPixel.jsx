"use client";

import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'; // Next.js hooks
import { scriptsAPI } from '@/lib/api';

// Facebook Pixel helper function
const initFacebookPixel = (pixelId) => {
  if (!pixelId || window.fbq) return;

  // Create fbq function
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
      n.callMethod ?
      n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
  }(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');

  // Initialize pixel
  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
};

const FacebookPixelContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pixelId, setPixelId] = useState(null);
  const [initialized, setInitialized] = useState(false);

  // Load pixel ID from API
  useEffect(() => {
    const loadPixelId = async () => {
      try {
        const config = await scriptsAPI.getConfig();
        if (config.facebookPixel) {
          setPixelId(config.facebookPixel);
        }
      } catch (error) {
        console.error('Error loading Facebook Pixel config:', error);
      }
    };

    loadPixelId();
  }, []);

  // Initialize Facebook Pixel when pixelId is available
  useEffect(() => {
    if (pixelId && !initialized) {
      initFacebookPixel(pixelId);
      setInitialized(true);
    }
  }, [pixelId, initialized]);

  // Track PageView on route change (using pathname and searchParams)
  useEffect(() => {
    if (pixelId && initialized && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname, searchParams, pixelId, initialized]);

  return null;
};

const FacebookPixel = () => {
  return (
    <Suspense fallback={null}>
      <FacebookPixelContent />
    </Suspense>
  )
}

// Helper function to track custom events
export const trackFacebookEvent = (eventName, eventData = {}) => {
  if (window.fbq) {
    window.fbq('track', eventName, eventData);
  }
};

// Helper function to track Lead event
export const trackLead = (value = null, currency = 'INR', contentName = null) => {
  if (window.fbq) {
    const eventData = {};
    if (value !== null) eventData.value = value;
    if (currency) eventData.currency = currency;
    if (contentName) eventData.content_name = contentName;

    window.fbq('track', 'Lead', eventData);
  }
};

// Helper function to track Purchase event
export const trackPurchase = (value, currency = 'INR', contentName = null) => {
  if (window.fbq) {
    const eventData = {
      value: value,
      currency: currency
    };
    if (contentName) eventData.content_name = contentName;

    window.fbq('track', 'Purchase', eventData);
  }
};

// Helper function to track ViewContent event
export const trackViewContent = (contentName, contentType = 'page', value = null) => {
  if (window.fbq) {
    const eventData = {
      content_name: contentName,
      content_type: contentType
    };
    if (value !== null) eventData.value = value;

    window.fbq('track', 'ViewContent', eventData);
  }
};

// Helper function to track InitiateCheckout event
export const trackInitiateCheckout = (value, currency = 'INR', contentName = null) => {
  if (window.fbq) {
    const eventData = {
      value: value,
      currency: currency
    };
    if (contentName) eventData.content_name = contentName;

    window.fbq('track', 'InitiateCheckout', eventData);
  }
};

// Helper function to track AddToCart event
export const trackAddToCart = (value, currency = 'INR', contentName = null) => {
  if (window.fbq) {
    const eventData = {
      value: value,
      currency: currency
    };
    if (contentName) eventData.content_name = contentName;

    window.fbq('track', 'AddToCart', eventData);
  }
};

export default FacebookPixel;

