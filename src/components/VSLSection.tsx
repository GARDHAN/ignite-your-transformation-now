
const VSLSection = () => {
  return (
    <section id="vsl-section" className="py-16 lg:py-24 hero-gradient">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block bg-coral-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📺 Watch This First
          </div>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold mb-6">
            See How <span className="gradient-text">Real People</span> 
            <br />Got Their Dream Body
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch Abhiram's personal transformation story and discover the exact system that has helped 
            thousands achieve their <span className="font-semibold text-coral-600">fitness transformation journey</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-scale-in">
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover-lift">
            {/* Video placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-coral-500/20 to-lavender-500/20">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-white/30 transition-all cursor-pointer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-lg font-semibold">Transformation Video</p>
                <p className="text-sm opacity-80">Click to play</p>
              </div>
            </div>
            
            {/* Video overlay with stats */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-4 text-white">
              <div className="flex justify-between items-center text-sm">
                <span>🎯 Complete Body Recomposition Guide</span>
                <span>⏱️ 8:24</span>
              </div>
            </div>
          </div>

          {/* Video benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4 bg-white rounded-xl shadow-md hover-lift">
              <span className="text-2xl mb-2 block">🎯</span>
              <h4 className="font-semibold mb-2">Proven System</h4>
              <p className="text-sm text-gray-600">The exact method used by 1000+ clients</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md hover-lift">
              <span className="text-2xl mb-2 block">⚡</span>
              <h4 className="font-semibold mb-2">Fast Results</h4>
              <p className="text-sm text-gray-600">See changes in just 30 days</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md hover-lift">
              <span className="text-2xl mb-2 block">🏆</span>
              <h4 className="font-semibold mb-2">Guaranteed</h4>
              <p className="text-sm text-gray-600">100% satisfaction promise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
