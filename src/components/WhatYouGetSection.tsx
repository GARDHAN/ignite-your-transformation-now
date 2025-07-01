
const WhatYouGetSection = () => {
  const features = [
    "Personalized workout plan",
    "Best physique coaching", 
    "Complete nutrition guidance",
    "Custom meal plans",
    "Muscle gain protocols",
    "Fat loss strategies",
    "Overall health optimization",
    "24/7 support access",
    "Body recomposition",
    "Mindset coaching",
    "Progress tracking",
    "Lifestyle transformation"
  ];

  return (
    <section className="seamless-section soft-sage relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/ff997e0e-dbd0-4fbb-8282-c403c9a1ebb5.png')`,
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto section-padding relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-dm-sans font-bold text-soft-gray mb-6 leading-tight">
            What You Get
          </h2>
          <p className="text-lg text-muted-gray font-inter font-light max-w-2xl mx-auto">
            Everything you need for complete body recomposition and transformation
          </p>
        </div>

        {/* Infinite Sliding Text Animation */}
        <div className="relative mb-16 overflow-hidden">
          <div className="flex animate-slide-infinite">
            {/* First set of features */}
            {features.map((feature, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✨</span>
                    <p className="font-dm-sans font-bold text-soft-gray whitespace-nowrap text-lg">
                      {feature}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {features.map((feature, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✨</span>
                    <p className="font-dm-sans font-bold text-soft-gray whitespace-nowrap text-lg">
                      {feature}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Static Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.slice(0, 8).map((feature, index) => (
            <div key={index} className="text-center space-y-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="text-3xl mb-3">✨</div>
              <p className="font-dm-sans font-bold text-soft-gray">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
