import { useState, useEffect } from 'react';
import { helpTooltipsAPI } from "@/lib/api";
import { FaInfoCircle, FaTimes } from 'react-icons/fa';

const HelpTooltip = ({ tooltipKey, title }) => {
  const [tooltip, setTooltip] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTooltip();
  }, [tooltipKey]);

  const loadTooltip = async () => {
    if (!tooltipKey) return;
    try {
      setLoading(true);
      const data = await helpTooltipsAPI.getByKey(tooltipKey);
      if (data && (data.title || data.description || data.imageUrl)) {
        setTooltip(data);
      } else {
        setTooltip(null);
      }
    } catch (error) {
      // Tooltip doesn't exist yet, don't show icon
      setTooltip(null);
    } finally {
      setLoading(false);
    }
  };

  // Don't show icon if no tooltip exists or still loading
  if (!tooltip || loading) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="inline-flex items-center justify-center w-5 h-5 ml-2 text-orange-600 hover:text-orange-700 hover:bg-orange-100 rounded-full transition-colors"
        aria-label={`Learn more about ${title}`}
        title={`Learn more about ${title}`}
      >
        <FaInfoCircle className="w-4 h-4" />
      </button>

      {showModal && tooltip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">{tooltip.title || title}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {tooltip.imageUrl && (
                <div className="mb-4">
                  <img
                    src={tooltip.imageUrl.startsWith('http') ? tooltip.imageUrl : `${import.meta.env.VITE_API_URL || 'http://localhost:3001/api'}${tooltip.imageUrl}`}
                    alt={tooltip.title || title}
                    className="w-full h-auto rounded-lg shadow-md"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {tooltip.description && (
                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {tooltip.description}
                  </p>
                </div>
              )}

              {!tooltip.description && !tooltip.imageUrl && (
                <p className="text-gray-500 italic">No information available yet.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpTooltip;

