/**
 * Gemini API Service
 * 
 * This service provides functions to generate images and videos using Google's Gemini API.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Get your API key from: https://makersuite.google.com/app/apikey
 * 2. Create a .env file in the root directory (copy from .env.example)
 * 3. Add your API key: VITE_GEMINI_API_KEY=your_actual_key_here
 * 4. Restart your dev server
 * 
 * The API key is loaded once at module initialization and cached for all requests.
 */

// Load API key once at module initialization (not on each request)
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta';

// Cache for generated images to avoid regenerating the same content
const imageCache = new Map();
const videoCache = new Map();

/**
 * Generate an image using Gemini/Imagen API
 * NOTE: Image generation is disabled on the frontend. Images must be pre-generated using the script.
 * This function returns null to prevent unnecessary API calls.
 * For admin panel image generation, use the ImageUploadWithAI component which calls the authenticated endpoint.
 * @param {string} prompt - The prompt for image generation
 * @param {string} businessType - Type of business (e.g., 'ecommerce', 'clinics')
 * @returns {Promise<null>} - Always returns null - images should be fetched from database
 */
export const generateImage = async (prompt, businessType = '') => {
  // Silently return null - no console warning needed as this is expected behavior
  return null;
};

/**
 * Generate a video using Gemini API
 * @param {string} prompt - The prompt for video generation
 * @param {string} businessType - Type of business
 * @returns {Promise<string>} - URL of generated video or null
 */
export const generateVideo = async (prompt, businessType = '') => {
  // Check cache first
  const cacheKey = `${prompt}-${businessType}`;
  if (videoCache.has(cacheKey)) {
    return videoCache.get(cacheKey);
  }

  // Video generation not yet implemented
  // Return null to let component handle fallback
  console.warn('Video generation not yet implemented');
  return null;
};

/**
 * Get business-specific image prompt
 * @param {string} businessType - Type of business
 * @param {string} context - Additional context for the image
 * @returns {string} - Formatted prompt
 */
export const getImagePrompt = (businessType, context = '') => {
  const prompts = {
    ecommerce: `Professional e-commerce website showcasing online store with products, shopping cart, and modern design. ${context}`,
    clinics: `Modern medical clinic with appointment booking system, patient portal, and healthcare professionals. ${context}`,
    'real-estate': `Professional real estate website with property listings, virtual tours, and modern design. ${context}`,
    hospitals: `Comprehensive hospital management system with multiple departments, patient care, and digital solutions. ${context}`,
    companies: `Professional business website with modern design, company information, and contact forms. ${context}`,
  };

  return prompts[businessType] || `Professional business website. ${context}`;
};

/**
 * Get business-specific video prompt
 * @param {string} businessType - Type of business
 * @param {string} context - Additional context for the video
 * @returns {string} - Formatted prompt
 */
export const getVideoPrompt = (businessType, context = '') => {
  const prompts = {
    ecommerce: `Short video showcasing e-commerce platform features: product browsing, cart, checkout process. ${context}`,
    clinics: `Short video showing clinic management system: appointment booking, patient portal, medical records. ${context}`,
    'real-estate': `Short video displaying real estate platform: property listings, virtual tours, lead management. ${context}`,
    hospitals: `Short video presenting hospital management system: multi-department scheduling, patient care, analytics. ${context}`,
    companies: `Short video demonstrating professional business website: modern design, services, contact forms. ${context}`,
  };

  return prompts[businessType] || `Short video showcasing business website features. ${context}`;
};

/**
 * Get pre-generated image URL based on image ID
 * NOTE: This endpoint is deprecated. Images should be fetched directly from:
 * - PageConfig: /api/page-config/:pageId (for hero images, stats backgrounds, etc.)
 * - Testimonials: /api/testimonials (for testimonial images)
 * - ClientImages: /api/client-images (for client images, CTA images, etc.)
 * 
 * @param {string} imageId - The image identifier
 * @returns {Promise<null>} - Always returns null - use proper API endpoints instead
 */
export const getGeneratedImageUrl = async (imageId) => {
  console.warn(`getGeneratedImageUrl("${imageId}") called but this endpoint is deprecated. Fetch images from proper API endpoints (PageConfig, Testimonials, ClientImages) instead.`);
  return null;
};


/**
 * Check if Gemini API is configured
 * @returns {boolean}
 */
export const isGeminiConfigured = () => {
  return !!GEMINI_API_KEY;
};

