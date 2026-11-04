import GeminiVideo from "../gemini/GeminiVideo";

const VideoSection = ({ video, title, description, businessType }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-2 text-sm font-bold mb-6 backdrop-blur-sm">
            Watch & Learn
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            {title}
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            {description}
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-50"></div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            {video ? (
              <GeminiVideo
                prompt={title}
                businessType={businessType}
                className="w-full h-auto"
                controls={true}
                autoplay={false}
              />
            ) : (
              <div className="aspect-video bg-gradient-to-br from-orange-500 via-purple-600 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-6">🎥</div>
                  <div className="text-3xl font-bold mb-2">Video Placeholder</div>
                  <div className="text-xl opacity-90">Add your video here</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

