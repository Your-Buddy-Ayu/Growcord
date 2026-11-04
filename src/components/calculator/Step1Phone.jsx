import { useState, useEffect, useRef } from "react";
import { useFormData } from "@/context/FormContext";
import { otpAPI, leadsAPI } from "@/lib/api";
import { getUtmForLead, getPagePath } from "@/lib/utm";

const Step1Phone = ({ next }) => {
  const { formData, setFormData } = useFormData();
  const [otpSent, setOtpSent] = useState(false);
  const [otpSubmitted, setOtpSubmitted] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(0);
  const leadRegisteredRef = useRef(null); // Track which phone number has been registered

  // Register lead when phone number is entered (10 digits)
  useEffect(() => {
    const registerLead = async () => {
      // Only register if phone is 10 digits, not already registered for this number, and not empty
      if (formData.phone.length === 10 && leadRegisteredRef.current !== formData.phone && formData.phone) {
        try {
          const currentPhone = formData.phone;
          leadRegisteredRef.current = currentPhone; // Mark this phone number as registered to prevent duplicates

          await leadsAPI.create({
            phone: currentPhone,
            source: 'calculator',
            status: 'New',
            pageId: getPagePath() || '/calculator',
            utm: getUtmForLead(),
            notes: ['Lead registered from calculator - phone number entered']
          });
          console.log('Lead registered successfully for phone:', currentPhone);
          setError(""); // Clear any previous errors
        } catch (error) {
          console.error('Error registering lead:', error);
          // If lead registration fails (e.g. API down), we should still let them try OTP but warn them
          // setError("Network error: Could not register lead. Please check your connection.");
        }
      } else if (formData.phone.length !== 10) {
        // Reset ref if phone number is changed to invalid length
        leadRegisteredRef.current = null;
      }
    };

    registerLead();
  }, [formData.phone]);

  // Countdown timer for resend OTP
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSendOtp = async () => {
    if (formData.phone.length !== 10) {
      setError("❌ Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await otpAPI.send(formData.phone, 'calculator-login');
      if (result.success) {
        setOtpSent(true);
        setCountdown(60); // 60 seconds countdown before allowing resend
        // In development mode, show OTP if returned
        if (result.otp) {
          console.log('OTP (dev mode):', result.otp);
        }
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setError(error.message || "Failed to send OTP. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (countdown > 0) return;
    await handleSendOtp();
  };

  const handleSubmitOtp = async () => {
    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await otpAPI.verify(formData.phone, otp, 'calculator-login');
      if (result.success) {
        setOtpSubmitted(true);
        setFormData((prev) => ({ ...prev, otpVerified: true }));
        console.log('OTP Verified, calling next()');
        next();
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError(error.message || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="modern-form-title">
        <span>📱</span>
        Phone Number Verification
      </h2>

      {/* Phone Input */}
      <div className="modern-form-group">
        <label className="modern-form-label">Phone Number</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value.slice(0, 10) })
          }
          className="modern-form-input"
          placeholder="Enter 10-digit number"
          maxLength={10}
        />
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Show Send OTP button before OTP sent */}
      {!otpSent && (
        <button
          onClick={handleSendOtp}
          disabled={formData.phone.length !== 10 || loading}
          className="modern-button modern-button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
      )}

      {/* Show OTP input after sending OTP */}
      {otpSent && !otpSubmitted && (
        <div className="modern-form-group">
          <label className="modern-form-label">Enter OTP</label>
          <p className="text-sm text-gray-600 mb-2">
            We&apos;ve sent a 6-digit OTP to {formData.phone}
          </p>
          <input
            type="tel"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="Enter 6-digit OTP"
            className="modern-form-input"
            maxLength={6}
            disabled={loading}
          />
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleSubmitOtp}
              disabled={otp.length !== 6 || loading}
              className="modern-button modern-button-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
            <button
              onClick={handleResendOtp}
              disabled={countdown > 0 || loading}
              className="modern-button modern-button-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {countdown > 0 ? `Resend (${countdown}s)` : "Resend"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step1Phone;
