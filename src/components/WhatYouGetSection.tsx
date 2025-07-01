
const WhatYouGetSection = () => {
  const features = [
    "Personalized workout plan",
    "Best physique coaching", 
    "Complete nutrition guidance",
    "Custom meal plans",
    "Muscle gain protocols",
    "Fat loss strategies",
    "Overall health optimization",
    "24/7 support access"
  ];

  return (
    <section className="seamless-section soft-sage">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-dm-sans font-light text-soft-gray mb-6 leading-tight">
            What You Get
          </h2>
          <p className="text-lg text-muted-gray font-inter font-light max-w-2xl mx-auto">
            Everything you need for complete body recomposition and transformation
          </p>
        </div>

        {/* Features list - no containers, natural flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-2xl mb-3">✨</div>
              <p className="font-dm-sans font-light text-soft-gray">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Process flow - seamless design */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-dm-sans font-light text-soft-gray mb-12 text-center">
            The Complete Transformation System
          </h3>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-soft-gray rounded-full flex items-center justify-center text-white font-dm-sans font-medium mx-auto">
                1
              </div>
              <h4 className="font-dm-sans font-medium text-soft-gray">Assess & Plan</h4>
              <p className="text-muted-gray font-inter font-light text-sm">
                Complete body analysis and custom plan creation
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-soft-gray rounded-full flex items-center justify-center text-white font-dm-sans font-medium mx-auto">
                2
              </div>
              <h4 className="font-dm-sans font-medium text-soft-gray">Execute & Track</h4>
              <p className="text-muted-gray font-inter font-light text-sm">
                Follow your plan with daily guidance and progress tracking
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-soft-gray rounded-full flex items-center justify-center text-white font-dm-sans font-medium mx-auto">
                3
              </div>
              <h4 className="font-dm-sans font-medium text-soft-gray">Transform & Maintain</h4>
              <p className="text-muted-gray font-inter font-light text-sm">
                Achieve your goals and learn to maintain them for life
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
