import { useState } from 'react';
import { useFormData } from "@/context/FormContext";
import { leadsAPI } from "@/lib/api";
import { getUtmForLead, getPagePath } from "@/lib/utm";
import { useRouter } from "next/navigation";
import { trackLead } from "@/components/FacebookPixel";
import { gtm } from "@/lib/analytics";

const FormSubmitButton = () => {
  const { formData } = useFormData();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!formData.phone && !formData.email) {
      setError('Please provide phone number or email');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      await leadsAPI.create({ ...formData, pageId: getPagePath() || '/calculator', utm: getUtmForLead() });

      // Track Lead event in Facebook Pixel
      trackLead(formData.total || null, 'INR', 'Calculator Form Submission');

      // GTM: Track Lead Generation
      gtm.trackLead('Calculator Form', 'INR', formData.total || 0, formData);

      alert('Thank you! Your quote request has been submitted. We will contact you soon.');
      router.push('/');
    } catch (err) {
      setError(err.message || 'Failed to submit. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-6">
      {error && (
        <div className="mb-4 bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl">
          {error}
        </div>
      )}
      <button
        onClick={handleSubmit}
        disabled={submitting}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg"
      >
        {submitting ? 'Submitting...' : 'Submit Quote Request'}
      </button>
    </div>
  );
};

export default FormSubmitButton;

