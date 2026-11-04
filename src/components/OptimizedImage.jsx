"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * OptimizedImage component wrapping next/image
 */
const OptimizedImage = ({
  src,
  alt = "Image",
  className = "",
  width,
  height,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  loading = "lazy",
  priority = false,
  fill = false, // Fill prop ko extract kar liya
  ...props
}) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div
        className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}
        style={fill ? { width: "100%", height: "100%" } : { width, height }}
      >
        <div className="text-gray-400 text-sm">Failed to load</div>
      </div>
    );
  }

  // Handle sizes object gracefully (if passed from CaseStudy.jsx etc.)
  const formattedSizes =
    typeof sizes === "string"
      ? sizes
      : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      // conditional rendering for width/height vs fill
      {...(!fill && { width: width || 800, height: height || 600 })}
      fill={fill}
      sizes={formattedSizes}
      loading={priority ? "eager" : loading}
      priority={priority}
      onError={() => setError(true)}
      {...props}
    />
  );
};

export default OptimizedImage;
