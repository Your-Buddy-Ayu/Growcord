import { useState, useEffect } from "react";
import OptimizedImage from "../OptimizedImage";
import { imageHelper } from "@/lib/api";

const CaseStudy = ({ caseStudy }) => {
  const [imageUrl, setImageUrl] = useState(caseStudy.image);

  useEffect(() => {
    // Load image from ClientImages or PageConfig with fallback to generated images
    const loadImage = async () => {
      if (caseStudy.imageId && !imageUrl) {
        try {
          // Try ClientImages first
          let url = await imageHelper.getFromClientImages(
            caseStudy.imageId,
            "case-study",
            caseStudy.imageId,
          );

          // If not found, use fallback from generated images
          if (!url) {
            url = imageHelper.getFromGenerated(caseStudy.imageId);
          }

          if (url) {
            setImageUrl(url);
          }
        } catch (error) {
          console.error("Error loading case study image:", error);
          // Fallback to generated image on error
          const fallbackUrl = imageHelper.getFromGenerated(caseStudy.imageId);
          if (fallbackUrl) {
            setImageUrl(fallbackUrl);
          }
        }
      }
    };
    loadImage();
  }, [caseStudy.imageId, imageUrl]);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 group border-2 border-gray-100 hover:border-orange-200 hover:-translate-y-2 relative">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

      {imageUrl ? (
        <div className="relative h-72 overflow-hidden">
          <OptimizedImage
            src={imageUrl}
            alt={caseStudy.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
            sizes={{
              mobile: "small",
              tablet: "medium",
              desktop: "large",
            }}
            onError={(e) => {
              // Try fallback image if main image fails
              const fallbackUrl = imageHelper.getFromGenerated(
                caseStudy.imageId,
              );
              if (fallbackUrl && e.target.src !== fallbackUrl) {
                e.target.src = fallbackUrl;
                setImageUrl(fallbackUrl);
              } else {
                setImageUrl(null);
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          {/* Category Badge Overlay */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-orange-600 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg">
              {caseStudy.category}
            </span>
            {caseStudy.metric && (
              <span className="bg-white text-orange-600 px-4 py-2 rounded-xl text-xs font-black shadow-lg">
                {caseStudy.metric}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="relative h-72 overflow-hidden bg-gray-200">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            {caseStudy.category} Case Study
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-orange-600 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg">
              {caseStudy.category}
            </span>
            {caseStudy.metric && (
              <span className="bg-white text-orange-600 px-4 py-2 rounded-xl text-xs font-black shadow-lg">
                {caseStudy.metric}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="py-10 px-3 relative z-10">
        <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-orange-600 transition-colors leading-tight">
          {caseStudy.title}
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          {caseStudy.description}
        </p>

        {caseStudy.results && caseStudy.results.length > 0 && (
          <div className="grid grid-cols-3 mb-8 gap-1">
            {caseStudy.results.map((result, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-purple-50 px-3 py-0.5 rounded-xl border-2 border-orange-100 group-hover:border-orange-300 transition-colors"
              >
                <div className="text-2xl font-black bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-1">
                  {result.value}
                </div>
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {caseStudy.client && (
          <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-100">
            {caseStudy.client.avatar ? (
              <img
                src={caseStudy.client.avatar}
                alt={caseStudy.client.name}
                className="w-16 h-16 rounded-2xl object-cover border-4 border-orange-200 shadow-lg"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl items-center justify-center text-white font-black text-xl shadow-lg hidden">
              {caseStudy.client.name.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg">
                {caseStudy.client.name}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {caseStudy.client.role}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;
