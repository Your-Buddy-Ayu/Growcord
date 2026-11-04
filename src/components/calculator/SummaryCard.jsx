import { usePathname } from "next/navigation";
import { useFormData } from "@/context/FormContext";
import { useEffect, useRef, useState } from "react";
import { calculatorAPI, razorpayAPI } from "@/lib/api";
import { useCalculatorOptions } from "@/context/CalculatorOptionsContext";

const SummaryCard = () => {
  const { formData } = useFormData();
  const { options } = useCalculatorOptions();
  const pathname = usePathname();
  const scrollRef = useRef(null);
  const [gstRate, setGstRate] = useState(18);
  const downPaymentPercentage = options?.downPaymentPercentage || 10;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [formData]);

  useEffect(() => {
    const loadGstRate = async () => {
      try {
        const pricing = await calculatorAPI.getPricing();
        if (pricing?.gstRate) {
          setGstRate(pricing.gstRate);
        }
      } catch (error) {
        console.error('Error loading GST rate:', error);
      }
    };
    loadGstRate();
  }, []);

  const total = formData?.total || 0;
  const oneTimeTotal = formData?.oneTimeTotal || 0;
  const monthlyTotal = formData?.monthlyTotal || 0;
  const yearlyTotal = formData?.yearlyTotal || 0;
  const isSummaryPage = pathname === "/calculator/summary";

  // Calculate totals with GST
  const oneTimeWithGST = Math.round(oneTimeTotal * (1 + gstRate / 100));
  const monthlyWithGST = Math.round(monthlyTotal * (1 + gstRate / 100));
  const yearlyWithGST = Math.round(yearlyTotal * (1 + gstRate / 100));
  const totalWithGST = Math.round(total * (1 + gstRate / 100));

  // Calculate down payment
  const downPayment = Math.round(totalWithGST * (downPaymentPercentage / 100));

  const renderItem = (label, value, price) => {
    if (!value && !price) return null;
    return (
      <div className="modern-summary-item">
        <span className="modern-summary-label">{label}</span>
        <span className="modern-summary-value">
          {value && `${value} `}
          {price && `₹${price.toLocaleString()}`}
        </span>
      </div>
    );
  };

  const renderList = (label, items) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="modern-summary-item">
        <div className="w-full">
          <span className="modern-summary-label block mb-2">{label}</span>
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index} className="text-sm text-gray-700 flex justify-between py-1">
                <span className="font-medium">{item.name}</span>
                <span className="font-bold text-gray-900">₹{item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Handle Payment
  const handlePayment = async () => {
    try {
      if (!formData.phone || !formData.otpVerified) {
        alert("Please complete Step 1 (Phone Verification) first.");
        return;
      }

      // Create Order
      const orderData = await calculatorAPI.createOrder({
        amount: downPayment,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        notes: {
          phone: formData.phone,
          customerName: "Customer", // You might want to collect name in Step 1 or 2
          planDetails: `Down Payment for ${formData.websiteType || 'Custom Plan'}`
        }
      });

      if (!orderData || !orderData.id) {
        throw new Error("Failed to create order");
      }

      // Get Razorpay Key
      const { keyId } = await razorpayAPI.getKey();

      const options = {
        key: keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Growcord",
        description: "Down Payment",
        order_id: orderData.id,
        handler: async function (response) {
          try {
            // Verify Payment
            const verificationResult = await razorpayAPI.verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderDetails: {
                amount: downPayment,
                plan: { name: `Custom Project (${formData.websiteType})` },
                customer: {
                  name: "Customer",
                  email: "customer@example.com", // Should ideally be collected
                  phone: formData.phone
                }
              }
            });

            if (verificationResult.success) {
              window.location.href = `/checkout/confirmation?orderId=${response.razorpay_order_id}`;
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (verifyError) {
            console.error("Payment verification error:", verifyError);
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "Customer",
          email: "customer@growcord.in",
          contact: formData.phone,
        },
        theme: {
          color: "#ea580c", // orange-600
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.description);
      });
      rzp1.open();
    } catch (error) {
      console.error("Payment initiation error:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  return (
    <div className="modern-summary-card">
      <h2 className="modern-summary-header">Cost Summary</h2>
      <div
        ref={scrollRef}
        className={isSummaryPage ? "" : "overflow-y-auto max-h-[calc(100vh-200px)] pr-2"}
      >
        <div className="space-y-1">
          {renderItem("Company Type", formData.companyType, formData.companyTypePrice)}
          {renderList("Compliances", formData.compliances)}
          {renderList("Branding", formData.branding)}
          {renderItem("Logo", formData.logoType, formData.logoPrice)}
          {formData.packagingCount > 0 && renderItem(
            "Product Packaging",
            `${formData.packagingCount} × ₹1,200`,
            formData.packagingPrice
          )}
          {renderList("Hosting", formData.host)}
          {renderItem("Website Type", formData.websiteType, formData.websitePrice)}
          {renderList("Website Features", formData.features)}
          {formData.websitePages > 0 && renderItem(
            "Website Pages",
            `${formData.websitePages} × ₹500`,
            formData.websitePagesPrice
          )}
          {formData.mockups > 0 && renderItem(
            "Mockups",
            `${formData.mockups} × ₹700`,
            formData.mockupsPrice
          )}
          {renderList("Website Integrations", formData.integrations)}
          {formData.products > 0 && renderItem(
            "Products",
            `${formData.products} × ₹150`,
            formData.products * 150
          )}
          {renderList("E-commerce Features", formData.EcomFeatures)}
          {renderList("Paid Features", formData.PaidFeatures)}
          {renderItem("Social Media", formData.socialType, formData.socialPrice)}
          {formData.graphicPosts > 0 && renderItem(
            "Graphic Posts",
            `${formData.graphicPosts} × ₹250`,
            formData.graphicPosts * 250
          )}
          {formData.videoPosts > 0 && renderItem(
            "Video Posts",
            `${formData.videoPosts} × ₹1,500`,
            formData.videoPosts * 1500
          )}
          {renderList("Add-ons", formData.addOn)}
          {renderList("Platforms", formData.platForms)}
          {renderList("Ads Platforms", formData.ads)}
          {formData.monthlyBudget > 0 && renderItem("Monthly Budget", null, formData.monthlyBudget)}
          {renderItem("SEO Plan", formData.seo, formData.seoPrice)}
          {formData.seoPages > 0 && renderItem(
            "SEO Pages",
            `${formData.seoPages} × ₹250`,
            formData.seoPagesPrice
          )}
          {formData.seoKeywords > 0 && renderItem(
            "SEO Keywords",
            `${formData.seoKeywords} × ₹300`,
            formData.seoKeywordsPrice
          )}
          {renderList("On-Page SEO", formData.onPageSEO)}
          {renderList("Off-Page SEO", formData.offPageSEO)}
        </div>
      </div>
      <div className="modern-summary-total">
        <span className="modern-summary-total-label">Subtotal</span>
        <span className="modern-summary-total-value">₹{total.toLocaleString()}</span>
      </div>
      <div className="modern-summary-total border-t-2 border-gray-200 pt-4 mt-4">
        <span className="modern-summary-total-label">GST ({gstRate}%)</span>
        <span className="modern-summary-total-value">₹{Math.round(total * (gstRate / 100)).toLocaleString()}</span>
      </div>
      {/* Cost Breakdown */}
      <div className="space-y-2 mt-4 pt-4 border-t-2 border-gray-200">
        <div className="flex justify-between items-center text-base">
          <span className="text-gray-700 font-bold">One-time Cost:</span>
          <span className="font-black text-gray-900 text-lg">₹{oneTimeWithGST.toLocaleString()}</span>
        </div>
        {monthlyTotal > 0 && (
          <div className="flex justify-between items-center text-base">
            <span className="text-gray-700 font-bold">Monthly Recurring:</span>
            <span className="font-black text-gray-900 text-lg">₹{monthlyWithGST.toLocaleString()}/mo</span>
          </div>
        )}
        {yearlyTotal > 0 && (
          <div className="flex justify-between items-center text-base">
            <span className="text-gray-700 font-bold">Yearly Recurring:</span>
            <span className="font-black text-gray-900 text-lg">₹{yearlyWithGST.toLocaleString()}/yr</span>
          </div>
        )}
      </div>

      <div className="modern-summary-total border-t-2 border-orange-300 pt-4 mt-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4">
        <span className="modern-summary-total-label text-2xl font-black">Total (INR)</span>
        <span className="modern-summary-total-value text-3xl font-black text-orange-600">₹{totalWithGST.toLocaleString()}</span>
      </div>

      {/* Down Payment Section */}
      {isSummaryPage && (
        <div className="mt-4 pt-4 border-t-2 border-green-300 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-gray-900">Pay Now ({downPaymentPercentage}%):</span>
            <span className="text-2xl font-black text-green-600">₹{downPayment.toLocaleString()}</span>
          </div>
          <p className="text-xs text-gray-600 text-center mt-2">
            Remaining ₹{(totalWithGST - downPayment).toLocaleString()} to be paid later
          </p>
          <button
            onClick={handlePayment}
            className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-lg text-lg"
          >
            Book This Quote Now
          </button>
        </div>
      )}

      <p className="text-xs text-gray-500 mt-2 text-center">All prices include taxes</p>
    </div>
  );
};

export default SummaryCard;
