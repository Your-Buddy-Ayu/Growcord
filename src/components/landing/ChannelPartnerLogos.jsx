import { useState, useEffect } from "react";
import { channelPartnerLogosAPI } from "@/lib/api";

const ChannelPartnerLogos = ({ selectedIds = [] }) => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    loadPartners();
  }, []);

  const loadPartners = async () => {
    try {
      const data = await channelPartnerLogosAPI.getAll();
      if (data && data.length > 0) {
        if (selectedIds && selectedIds.length > 0) {
          setPartners(data.filter(p => selectedIds.includes(p.id)));
        } else {
          setPartners(data);
        }
      }
    } catch (error) {
      console.error('Error loading channel partner logos:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  if (partners.length === 0) {
    return null;
  }

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
            Trusted By
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Leading Real Estate Channel Partners
          </h3>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto" style={{ fontSize: '1.05rem' }}>
            We power high-conversion landing pages for top developers and channel partners across India
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center pb-4 md:pb-0 no-scrollbar">
          {partners.map((partner, index) => (
            <div
              key={partner.id || index}
              className="min-w-[45%] snap-center md:min-w-0 group flex items-center justify-center p-2 bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-24 flex items-center justify-center">
                <img
                  src={partner.path}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain transition-opacity duration-300"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/150x60/FF6B35/FFFFFF?text=${encodeURIComponent(partner.name)}`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600" style={{ fontSize: '1.05rem' }}>
            Join 500+ channel partners already using our high-conversion landing pages
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChannelPartnerLogos;

