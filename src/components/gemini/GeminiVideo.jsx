import { useState, useEffect } from 'react';
import { generateVideo, getVideoPrompt, isGeminiConfigured } from '../../services/gemini';

const GeminiVideo = ({ 
  prompt, 
  businessType = '', 
  className = '',
  width = 800,
  height = 450,
  fallbackSrc = null,
  autoplay = false,
  controls = true,
  loop = false
}) => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVideo = async () => {
      setLoading(true);
      setError(null);

      try {
        const videoPrompt = prompt || getVideoPrompt(businessType);
        const src = await generateVideo(videoPrompt, businessType);
        setVideoSrc(src);
      } catch (err) {
        console.error('Error loading Gemini video:', err);
        setError(err);
        if (fallbackSrc) {
          setVideoSrc(fallbackSrc);
        }
      } finally {
        setLoading(false);
      }
    };

    loadVideo();
  }, [prompt, businessType, fallbackSrc]);

  if (loading) {
    return (
      <div 
        className={`bg-gray-200 animate-pulse rounded-lg flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-gray-400">Loading video...</div>
      </div>
    );
  }

  if (error && !videoSrc) {
    return (
      <div 
        className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-gray-400">Failed to load video</div>
      </div>
    );
  }

  return (
    <video
      src={videoSrc}
      className={className}
      width={width}
      height={height}
      autoPlay={autoplay}
      controls={controls}
      loop={loop}
      muted={autoplay}
      playsInline
      onError={() => {
        if (fallbackSrc) {
          setVideoSrc(fallbackSrc);
        }
      }}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default GeminiVideo;

