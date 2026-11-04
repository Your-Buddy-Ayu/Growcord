import { useState, useEffect } from 'react';
import { FaTimes, FaPhone, FaUser, FaBuilding, FaEnvelope, FaCalendarAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import { leadsAPI } from '@/lib/api';
import { getUtmForLead, getPagePath } from '@/lib/utm';
import { gtm } from '@/lib/analytics';

const DemoPopup = ({ config, pageId, onClose }) => {
  const [step, setStep] = useState(1); // 1: Phone, 2: Details
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: '',
    company: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [errors, setErrors] = useState({});

  // Validate phone number
  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile number format
    return phoneRegex.test(phone.replace(/\D/g, ''));
  };

  // Validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle phone submission (Step 1)
  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    const phone = formData.phone.replace(/\D/g, ''); // Remove non-digits

    if (!phone) {
      setErrors({ phone: 'Phone number is required' });
      return;
    }

    if (!validatePhone(phone)) {
      setErrors({ phone: 'Please enter a valid 10-digit mobile number' });
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      // Save phone as lead immediately
      await leadsAPI.create({
        phone,
        source: 'demo-popup',
        pageId: pageId || getPagePath() || '/',
        utm: getUtmForLead(),
        metadata: { step: 1, timestamp: new Date().toISOString() }
      });

      setFormData({ ...formData, phone });

      // GTM: Track Step 1 Success
      gtm.trackFormStep('Demo Popup', 1, 'Phone Number Submitted', { phone });

      setStep(2); // Move to next step
    } catch (error) {
      console.error('Error saving phone:', error);
      setErrors({ phone: 'Failed to save. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  // Handle final submission (Step 2)
  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name?.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      // Update lead with complete information
      await leadsAPI.create({
        phone: formData.phone,
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company?.trim() || '',
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        source: 'demo-popup',
        pageId: pageId || getPagePath() || '/',
        utm: getUtmForLead(),
        metadata: { step: 2, timestamp: new Date().toISOString() }
      });

      // Track Lead event in Facebook Pixel
      const { trackLead } = await import('../../components/FacebookPixel');
      trackLead(0, 'INR', 'Demo Popup Form');

      // GTM: Track Lead Generation
      gtm.trackLead('Demo Popup', 'INR', 0, {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime
      });

      setSubmitted(true);

      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  // Get tomorrow's date as minimum date
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-scale-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-green-600 text-4xl" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            {config?.successMessage || "We've received your demo request. Our team will contact you shortly!"}
          </p>
          <p className="text-sm text-gray-500">This window will close automatically...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b-2 border-orange-500 p-6 rounded-t-2xl flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-1 text-orange-600">
              {step === 1
                ? (config?.step1Title || 'Book a Demo')
                : (config?.step2Title || 'Complete Your Details')
              }
            </h2>
            <p className="text-gray-700 text-sm font-medium">
              {step === 1
                ? (config?.step1Subtitle || 'Get started with a quick phone number')
                : (config?.step2Subtitle || 'Help us schedule the perfect time for you')
              }
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-colors"
            aria-label="Close"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className={`flex items-center ${step >= 1 ? 'text-orange-600' : 'text-gray-300'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                1
              </div>
              <div className={`w-16 h-1 ${step >= 2 ? 'bg-orange-600' : 'bg-gray-200'}`}></div>
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
              2
            </div>
          </div>

          {/* Step 1: Phone Number */}
          {step === 1 && (
            <form onSubmit={handlePhoneSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaPhone className="text-orange-600" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your 10-digit mobile number"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 bg-white ${errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  maxLength={10}
                  autoFocus
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1 font-medium">{errors.phone}</p>
                )}
                <p className="text-xs text-gray-600 mt-2">
                  We&apos;ll use this to contact you about your demo
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    Continue <FaPhone />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Step 2: Complete Details */}
          {step === 2 && (
            <form onSubmit={handleFinalSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaUser className="text-orange-600" />
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 bg-white ${errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  autoFocus
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1 font-medium">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaEnvelope className="text-orange-600" />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 bg-white ${errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1 font-medium">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaBuilding className="text-orange-600" />
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Your company name (optional)"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaCalendarAlt className="text-orange-600" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    min={getMinDate()}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 bg-white ${errors.preferredDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-red-600 text-sm mt-1 font-medium">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaClock className="text-orange-600" />
                    Preferred Time *
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 bg-white ${errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                      }`}
                  >
                    <option value="">Select time</option>
                    <option value="09:00-10:00">9:00 AM - 10:00 AM</option>
                    <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
                    <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
                    <option value="12:00-13:00">12:00 PM - 1:00 PM</option>
                    <option value="13:00-14:00">1:00 PM - 2:00 PM</option>
                    <option value="14:00-15:00">2:00 PM - 3:00 PM</option>
                    <option value="15:00-16:00">3:00 PM - 4:00 PM</option>
                    <option value="16:00-17:00">4:00 PM - 5:00 PM</option>
                    <option value="17:00-18:00">5:00 PM - 6:00 PM</option>
                  </select>
                  {errors.preferredTime && (
                    <p className="text-red-600 text-sm mt-1 font-medium">{errors.preferredTime}</p>
                  )}
                </div>
              </div>

              {errors.submit && (
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4">
                  <p className="text-red-700 text-sm font-medium">{errors.submit}</p>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request <FaCheckCircle />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoPopup;

