
const VSLSection = () => {
  return (
    <section className="seamless-section bg-white">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-12">
          <div className="inline-block bg-soft-gray text-white px-4 py-2 rounded-full text-sm font-dm-sans font-light mb-6">
            Watch this first
          </div>
          <h2 className="text-4xl lg:text-5xl font-dm-sans font-light text-soft-gray mb-6 leading-tight">
            See How Real People Got Their Dream Body
          </h2>
          <p className="text-lg text-muted-gray font-inter font-light max-w-2xl mx-auto">
            Watch success stories and discover the exact system that has helped thousands achieve their fitness transformation journey
          </p>
        </div>

        <div className="relative aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
          {/* Video placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center text-soft-gray">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-gray-50 transition-all cursor-pointer shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-lg font-dm-sans font-light">Transformation Stories</p>
              <p className="text-sm font-inter font-light opacity-70">Click to play</p>
            </div>
          </div>
        </div>

        {/* Video benefits - seamless integration */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="space-y-3">
            <span className="text-2xl">🎯</span>
            <h4 className="font-dm-sans font-medium text-soft-gray">Proven System</h4>
            <p className="text-sm text-muted-gray font-inter font-light">The exact method used by 1000+ clients</p>
          </div>
          <div className="space-y-3">
            <span className="text-2xl">⚡</span>
            <h4 className="font-dm-sans font-medium text-soft-gray">Fast Results</h4>
            <p className="text-sm text-muted-gray font-inter font-light">See changes in just 30 days</p>
          </div>
          <div className="space-y-3">
            <span className="text-2xl">🏆</span>
            <h4 className="font-dm-sans font-medium text-soft-gray">Guaranteed</h4>
            <p className="text-sm text-muted-gray font-inter font-light">100% satisfaction promise</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
