"use client";

import { useState, useEffect } from "react";
import { imageHelper } from "@/lib/api";
import Image from "next/image";

const GeminiImage = ({
  prompt,
  businessType = "",
  imageId = null,
  alt = "Generated image",
  className = "",
  width = 800,
  height = 600,
  fallbackSrc = null,
  fill = false,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Cleanup preventer for unmounted components

    const loadImage = async () => {
      setLoading(true);
      setError(null);

      try {
        let foundUrl = null;

        // 1. First priority: Try to get from proper API endpoints
        if (imageId) {
          foundUrl =
            (await imageHelper.getFromClientImages(imageId)) ||
            imageHelper.getFromGenerated(imageId);
        }

        // 2. Second priority: Check localStorage cache by imageId
        if (!foundUrl && imageId && typeof window !== "undefined") {
          foundUrl = localStorage.getItem(`gemini-image-${imageId}`);
        }

        // 3. Third priority: Check localStorage cache by prompt
        if (!foundUrl && prompt && typeof window !== "undefined") {
          foundUrl = localStorage.getItem(`gemini-image-${prompt}`);
        }

        // 4. Last resort: Use fallbackSrc if nothing else worked
        if (!foundUrl && fallbackSrc) {
          foundUrl = fallbackSrc;
        }

        if (isMounted) {
          if (foundUrl) {
            setImageSrc(foundUrl);
          } else {
            setError(new Error("Image not available."));
          }
          setLoading(false);
        }
      } catch (err) {
        console.error("Error loading Gemini image:", err);
        if (isMounted) {
          // Try fallback on error
          const errorFallback =
            fallbackSrc ||
            (imageId ? imageHelper.getFromGenerated(imageId) : null);
          if (errorFallback) {
            setImageSrc(errorFallback);
          } else {
            setError(err);
          }
          setLoading(false);
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [prompt, businessType, imageId, fallbackSrc]);

  // Handle dynamic styling for fill vs strict dimensions
  const styleObj = fill ? { width: "100%", height: "100%" } : { width, height };

  if (loading) {
    return (
      <div
        className={`bg-slate-100 animate-pulse rounded-lg flex items-center justify-center ${className}`}
        style={styleObj}
      >
        <div className="text-slate-400 text-xs font-semibold">
          Loading image...
        </div>
      </div>
    );
  }

  if (error && !imageSrc) {
    return (
      <div
        className={`bg-slate-100 rounded-lg flex items-center justify-center ${className}`}
        style={styleObj}
      >
        <div className="text-slate-400 text-xs font-semibold">
          Failed to load
        </div>
      </div>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={className}
      {...(!fill && { width, height })}
      fill={fill}
      loading="lazy"
      onError={() => {
        // Prevent infinite loop if the fallback image itself fails to load
        if (fallbackSrc && imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc);
        } else {
          setError(true);
        }
      }}
      {...props}
    />
  );
};

export default GeminiImage;
