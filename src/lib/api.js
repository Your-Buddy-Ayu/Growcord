const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
console.log('API_BASE_URL:', API_BASE_URL);

// Helper function to get auth token
const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('admin_token');
  }
  return null;
};

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed', status: response.status }));
    const errorObj = new Error(error.error || 'Request failed');
    errorObj.status = response.status;
    throw errorObj;
  }

  return response.json();
};

// Auth API
export const authAPI = {
  login: async (username, password) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
  },
  verify: async () => {
    return apiRequest('/auth/verify');
  },
  changePassword: async (currentPassword, newPassword) => {
    return apiRequest('/auth/change-password', {
      method: 'POST',
      body: JSON.stringify({ currentPassword, newPassword })
    });
  }
};

// Client Images API
export const clientImagesAPI = {
  getAll: async (category) => {
    const url = category ? `/client-images?category=${category}` : '/client-images';
    return apiRequest(url);
  },
  create: async (data) => {
    const token = getToken();
    // If data is FormData (file upload), use FormData
    if (data instanceof FormData) {
      const response = await fetch(`${API_BASE_URL}/client-images`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: data
      });
      if (!response.ok) throw new Error('Failed to upload image');
      return response.json();
    } else {
      // If data is object with imageUrl, use JSON
      return apiRequest('/client-images', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    }
  },
  update: async (id, data) => apiRequest(`/client-images/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: async (id) => apiRequest(`/client-images/${id}`, {
    method: 'DELETE'
  })
};

// FAQ API
export const faqAPI = {
  getAll: async (category) => {
    const url = category ? `/faq?category=${category}` : '/faq';
    return apiRequest(url);
  },
  getById: async (id) => apiRequest(`/faq/${id}`),
  create: async (data) => apiRequest('/faq', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  update: async (id, data) => apiRequest(`/faq/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: async (id) => apiRequest(`/faq/${id}`, {
    method: 'DELETE'
  })
};

// Testimonials API
export const testimonialsAPI = {
  getAll: async (activeOnly = false) => {
    const url = activeOnly ? '/testimonials?activeOnly=true' : '/testimonials';
    return apiRequest(url);
  },
  getById: async (id) => apiRequest(`/testimonials/${id}`),
  create: async (data) => {
    const token = getToken();
    // If data is FormData (file upload), use FormData
    if (data instanceof FormData) {
      const response = await fetch(`${API_BASE_URL}/testimonials`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: data
      });
      if (!response.ok) throw new Error('Failed to create testimonial');
      return response.json();
    } else {
      // If data is object with imageUrl/avatarImageUrl, use JSON
      return apiRequest('/testimonials', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    }
  },
  update: async (id, data) => {
    const token = getToken();
    // If data is FormData (file upload), use FormData
    if (data instanceof FormData) {
      const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: data
      });
      if (!response.ok) throw new Error('Failed to update testimonial');
      return response.json();
    } else {
      // If data is object, use JSON
      return apiRequest(`/testimonials/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
      });
    }
  },
  delete: async (id) => apiRequest(`/testimonials/${id}`, {
    method: 'DELETE'
  })
};

// Leads API
export const leadsAPI = {
  getAll: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/leads${queryString ? `?${queryString}` : ''}`);
  },
  getById: async (id) => apiRequest(`/leads/${id}`),
  create: async (data) => apiRequest('/leads', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  update: async (id, data) => apiRequest(`/leads/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: async (id) => apiRequest(`/leads/${id}`, {
    method: 'DELETE'
  })
};

// Calculator API
export const calculatorAPI = {
  getConfig: async () => {
    try {
      return await apiRequest('/calculator/config');
    } catch (error) {
      console.error('Error fetching calculator config:', error);
      return {};
    }
  },
  updateConfig: async (data) => {
    try {
      return await apiRequest('/calculator/config', {
        method: 'PUT',
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error('Error updating calculator config:', error);
      throw error;
    }
  },
  getPricing: async () => {
    try {
      return await apiRequest('/calculator/pricing');
    } catch (error) {
      console.error('Error fetching calculator pricing:', error);
      return {
        graphicPostPrice: 250,
        videoPostPrice: 1500,
        productPrice: 150,
        packagingPrice: 1200,
        websitePagePrice: 500,
        mockupPrice: 700,
        seoPagePrice: 250,
        seoKeywordPrice: 300,
        gstRate: 18
      };
    }
  },
  updatePricing: async (data) => {
    try {
      return await apiRequest('/calculator/pricing', {
        method: 'PUT',
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error('Error updating calculator pricing:', error);
      throw error;
    }
  },
  getOptions: async () => {
    try {
      const data = await apiRequest('/calculator-options');
      if (data && typeof data === 'object' && Object.keys(data).length > 0) {
        return data;
      }
      return {};
    } catch (error) {
      console.error('Error fetching calculator options:', error);
      return {};
    }
  },
  updateOptions: async (data) => {
    try {
      if (!data || typeof data !== 'object') {
        throw new Error('Invalid options data');
      }
      return await apiRequest('/calculator-options', {
        method: 'PUT',
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error('Error updating calculator options:', error);
      throw error;
    }
  }
};

// Help Tooltips API
export const helpTooltipsAPI = {
  getAll: async () => {
    try {
      return await apiRequest('/help-tooltips');
    } catch (error) {
      console.error('Error fetching help tooltips:', error);
      return {};
    }
  },
  getByKey: async (key) => {
    try {
      return await apiRequest(`/help-tooltips/${key}`);
    } catch (error) {
      if (error.status === 404) {
        return null;
      }
      console.error('Error fetching tooltip:', error);
      return null;
    }
  },
  update: async (key, data, imageFile) => {
    try {
      const token = getToken();
      const formData = new FormData();
      formData.append('key', key);
      formData.append('title', data.title || '');
      formData.append('description', data.description || '');
      if (data.imageUrl) {
        formData.append('imageUrl', data.imageUrl);
      }
      if (imageFile) {
        formData.append('image', imageFile);
      }

      const response = await fetch(`${API_BASE_URL}/help-tooltips`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(error.error || 'Request failed');
      }

      return response.json();
    } catch (error) {
      console.error('Error updating tooltip:', error);
      throw error;
    }
  },
  delete: async (key) => {
    try {
      const token = getToken();
      const response = await fetch(`${API_BASE_URL}/help-tooltips/${key}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(error.error || 'Request failed');
      }

      return response.json();
    } catch (error) {
      console.error('Error deleting tooltip:', error);
      throw error;
    }
  },
  getImageUrl: (filename) => {
    return `${API_BASE_URL}/help-tooltips/images/${filename}`;
  }
};

// SMS API
export const smsAPI = {
  getConfig: async () => apiRequest('/sms/config'),
  updateConfig: async (data) => apiRequest('/sms/config', {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  send: async (to, message) => apiRequest('/sms/send', {
    method: 'POST',
    body: JSON.stringify({ to, message })
  }),
  test: async (to) => apiRequest('/sms/test', {
    method: 'POST',
    body: JSON.stringify({ to })
  }),
  getTemplates: async () => {
    const config = await apiRequest('/sms/config');
    return config.templates || {};
  }
};

// OTP API
export const otpAPI = {
  send: async (phone, purpose = 'calculator-login') => apiRequest('/otp/send', {
    method: 'POST',
    body: JSON.stringify({ phone, purpose })
  }),
  verify: async (phone, otp, purpose = 'calculator-login') => apiRequest('/otp/verify', {
    method: 'POST',
    body: JSON.stringify({ phone, otp, purpose })
  }),
  resend: async (phone, purpose = 'calculator-login') => apiRequest('/otp/resend', {
    method: 'POST',
    body: JSON.stringify({ phone, purpose })
  })
};

// Email API
export const emailAPI = {
  getConfig: async () => apiRequest('/email/config'),
  updateConfig: async (data) => apiRequest('/email/config', {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  send: async (to, subject, html, text, fromEmail = null) => apiRequest('/email/send', {
    method: 'POST',
    body: JSON.stringify({ to, subject, html, text, fromEmail })
  }),
  test: async (to) => apiRequest('/email/test', {
    method: 'POST',
    body: JSON.stringify({ to })
  })
};

// Gemini API
export const geminiAPI = {
  getConfig: async () => apiRequest('/gemini/config'),
  updateConfig: async (data) => apiRequest('/gemini/config', {
    method: 'PUT',
    body: JSON.stringify(data)
  })
};

// Scripts API
export const scriptsAPI = {
  getConfig: async () => apiRequest('/scripts/config'),
  updateConfig: async (data) => apiRequest('/scripts/config', {
    method: 'PUT',
    body: JSON.stringify(data)
  })
};

// Razorpay API
export const razorpayAPI = {
  getConfig: async () => apiRequest('/razorpay/config'),
  updateConfig: async (data) => apiRequest('/razorpay/config', {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  createOrder: async (data) => apiRequest('/razorpay/create-order', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  verifyPayment: async (data) => apiRequest('/razorpay/verify-payment', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  getKey: async () => apiRequest('/razorpay/key')
};

// Orders API
export const ordersAPI = {
  getAll: async () => apiRequest('/orders')
};

// Plans API
export const plansAPI = {
  getAll: async (category) => {
    const url = category ? `/plans?category=${category}` : '/plans';
    return apiRequest(url);
  },
  getById: async (id) => apiRequest(`/plans/${id}`),
  getAllAdmin: async () => apiRequest('/plans/admin/all'),
  create: async (data) => apiRequest('/plans', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  update: async (id, data) => apiRequest(`/plans/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: async (id) => apiRequest(`/plans/${id}`, {
    method: 'DELETE'
  })
};

// Page Config API
export const pageConfigAPI = {
  get: async (pageId) => apiRequest(`/page-config/${pageId}`),
  getAll: async () => apiRequest('/page-config'),
  update: async (pageId, data) => apiRequest(`/page-config/${pageId}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: async (pageId) => apiRequest(`/page-config/${pageId}`, {
    method: 'DELETE'
  }),
  uploadImage: async (formData) => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/page-config/upload-image`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });
    if (!response.ok) throw new Error('Failed to upload image');
    return response.json();
  }
};

// Channel Partner Logos API
export const channelPartnerLogosAPI = {
  getAll: async () => apiRequest('/channel-partner-logos'),
  getAllAdmin: async () => apiRequest('/channel-partner-logos/admin'),
  create: async (formData) => {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/channel-partner-logos`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });
    if (!response.ok) throw new Error('Failed to upload logo');
    return response.json();
  },
  update: async (id, data) => apiRequest(`/channel-partner-logos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: async (id) => apiRequest(`/channel-partner-logos/${id}`, {
    method: 'DELETE'
  })
};

// Generated images mapping - fallback URLs from generated-images.json
const GENERATED_IMAGES = {
  'home-hero': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/home-hero.png',
  'home-stats-bg': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/home-stats-bg.png',
  'real-estate-hero': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/real-estate-hero.png',
  'real-estate-demo-1': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/real-estate-demo-1.png',
  'real-estate-demo-2': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/real-estate-demo-2.png',
  'real-estate-demo-3': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/real-estate-demo-3.png',
  'social-proof-rajesh': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/social-proof-rajesh.png',
  'social-proof-priya': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/social-proof-priya.png',
  'social-proof-amit': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/social-proof-amit.png',
  'social-proof-sneha': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/social-proof-sneha.png',
  'social-proof-vikram': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/social-proof-vikram.png',
  'case-study-ecommerce': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/case-study-ecommerce.png',
  'case-study-healthcare': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/case-study-healthcare.png',
  'case-study-real-estate': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/case-study-real-estate.png',
  'testimonial-rajesh': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/testimonial-rajesh.png',
  'testimonial-rajesh-avatar': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/testimonial-rajesh-avatar.png',
  'testimonial-priya': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/testimonial-priya.png',
  'testimonial-priya-avatar': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/testimonial-priya-avatar.png',
  'testimonial-amit': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/testimonial-amit.png',
  'testimonial-amit-avatar': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/testimonial-amit-avatar.png',
  'business-type-ecommerce': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/business-ecommerce.png',
  'business-type-clinics': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/business-clinics.png',
  'business-type-hospitals': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/business-hospitals.png',
  'business-type-companies': 'https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/business-companies.png',
};

// Image Fetching Helper - Fetches images from proper API endpoints with fallback to generated images
export const imageHelper = {
  /**
   * Get image URL from PageConfig with fallback to generated images
   * @param {string} pageId - Page ID (e.g., 'home', 'real-estate')
   * @param {string} imageKey - Image key in config (e.g., 'stats.backgroundImage', 'hero.imageUrl')
   * @param {string} fallbackImageId - Optional fallback image ID from generated-images.json
   * @returns {Promise<string|null>} - Image URL or null
   */
  getFromPageConfig: async (pageId, imageKey, fallbackImageId = null) => {
    try {
      const config = await pageConfigAPI.get(pageId);
      if (config) {
        // Support nested keys like 'stats.backgroundImage'
        const keys = imageKey.split('.');
        let value = config;
        for (const key of keys) {
          value = value?.[key];
          if (value === undefined) break;
        }

        if (value && typeof value === 'string') {
          // If it's already a full URL, return it
          if (value.startsWith('http')) return value;
          // Otherwise, prepend API base URL
          return `${API_BASE_URL}${value}`;
        }
      }

      // Fallback to generated images
      if (fallbackImageId && GENERATED_IMAGES[fallbackImageId]) {
        return GENERATED_IMAGES[fallbackImageId];
      }
      return null;
    } catch (error) {
      console.error(`Error fetching image from PageConfig (${pageId}.${imageKey}):`, error);
      // Fallback to generated images on error
      if (fallbackImageId && GENERATED_IMAGES[fallbackImageId]) {
        return GENERATED_IMAGES[fallbackImageId];
      }
      return null;
    }
  },

  /**
   * Get image URL from ClientImages by name or category with fallback to generated images
   * @param {string} name - Image name (e.g., 'real-estate-demo-1')
   * @param {string} category - Optional category filter
   * @param {string} fallbackImageId - Optional fallback image ID from generated-images.json
   * @returns {Promise<string|null>} - Image URL or null
   */
  getFromClientImages: async (name, category = null, fallbackImageId = null) => {
    try {
      const images = await clientImagesAPI.getAll(category);
      if (images && Array.isArray(images)) {
        const image = images.find(img =>
          img.name === name ||
          img.name?.toLowerCase().includes(name.toLowerCase()) ||
          img.path?.includes(name)
        );

        if (image && image.path) {
          return image.path.startsWith('http') ? image.path : `${API_BASE_URL}${image.path}`;
        }
      }

      // Fallback to generated images
      if (fallbackImageId && GENERATED_IMAGES[fallbackImageId]) {
        return GENERATED_IMAGES[fallbackImageId];
      }
      // Try to find by name in fallback
      if (GENERATED_IMAGES[name]) {
        return GENERATED_IMAGES[name];
      }
      return null;
    } catch (error) {
      console.error(`Error fetching image from ClientImages (${name}):`, error);
      // Fallback to generated images on error
      if (fallbackImageId && GENERATED_IMAGES[fallbackImageId]) {
        return GENERATED_IMAGES[fallbackImageId];
      }
      if (GENERATED_IMAGES[name]) {
        return GENERATED_IMAGES[name];
      }
      return null;
    }
  },

  /**
   * Get avatar image URL from Testimonials by name with fallback to generated images
   * @param {string} name - Person name
   * @param {string} fallbackImageId - Optional fallback image ID from generated-images.json
   * @returns {Promise<string|null>} - Image URL or null
   */
  getFromTestimonials: async (name, fallbackImageId = null) => {
    try {
      const testimonials = await testimonialsAPI.getAll();
      if (testimonials && Array.isArray(testimonials)) {
        const testimonial = testimonials.find(t =>
          t.name?.toLowerCase().includes(name.toLowerCase())
        );

        if (testimonial) {
          // Try avatarImageUrl first, then imageUrl
          const imageUrl = testimonial.avatarImageUrl || testimonial.imageUrl;
          if (imageUrl) {
            return imageUrl.startsWith('http') ? imageUrl : `${API_BASE_URL}${imageUrl}`;
          }
        }
      }

      // Fallback to generated images
      if (fallbackImageId && GENERATED_IMAGES[fallbackImageId]) {
        return GENERATED_IMAGES[fallbackImageId];
      }
      // Try to find by name pattern (e.g., 'rajesh' -> 'social-proof-rajesh')
      const nameLower = name.toLowerCase();
      const matchingKey = Object.keys(GENERATED_IMAGES).find(key =>
        key.includes(nameLower) || key.includes(`-${nameLower}`)
      );
      if (matchingKey) {
        return GENERATED_IMAGES[matchingKey];
      }
      return null;
    } catch (error) {
      console.error(`Error fetching image from Testimonials (${name}):`, error);
      // Fallback to generated images on error
      if (fallbackImageId && GENERATED_IMAGES[fallbackImageId]) {
        return GENERATED_IMAGES[fallbackImageId];
      }
      const nameLower = name.toLowerCase();
      const matchingKey = Object.keys(GENERATED_IMAGES).find(key =>
        key.includes(nameLower) || key.includes(`-${nameLower}`)
      );
      if (matchingKey) {
        return GENERATED_IMAGES[matchingKey];
      }
      return null;
    }
  },

  /**
   * Get image URL directly from generated images (fallback only)
   * @param {string} imageId - Image ID from generated-images.json
   * @returns {string|null} - Image URL or null
   */
  getFromGenerated: (imageId) => {
    return GENERATED_IMAGES[imageId] || null;
  },

  /**
   * Format testimonial data to ensure image URLs are properly set
   * @param {Object} testimonial - Testimonial object from API
   * @returns {Object} - Formatted testimonial with image and avatarImage properties
   */
  formatTestimonial: (testimonial) => {
    if (!testimonial) return testimonial;

    const formatted = { ...testimonial };

    // Map imageUrl to image for backward compatibility
    if (testimonial.imageUrl && !testimonial.image) {
      formatted.image = testimonial.imageUrl.startsWith('http')
        ? testimonial.imageUrl
        : `${API_BASE_URL}${testimonial.imageUrl}`;
    }

    // Map avatarImageUrl to avatarImage for backward compatibility
    if (testimonial.avatarImageUrl && !testimonial.avatarImage) {
      formatted.avatarImage = testimonial.avatarImageUrl.startsWith('http')
        ? testimonial.avatarImageUrl
        : `${API_BASE_URL}${testimonial.avatarImageUrl}`;
    }

    return formatted;
  },

  /**
   * Get optimized image URL for a specific size
   * @param {string} imageUrl - Original image URL
   * @param {string} size - Size preset: 'thumbnail', 'small', 'medium', 'large', 'xlarge'
   * @returns {string} - Optimized image URL
   */
  getOptimizedImageUrl: (imageUrl, size = 'medium') => {
    if (!imageUrl) return null;

    // Return original URL to disable on-the-fly optimization and save resources
    return imageUrl;
  }
};