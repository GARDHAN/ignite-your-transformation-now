
const WhatYouGetSection = () => {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Workout Plan",
      description: "Custom exercise routines designed specifically for your body type, fitness level, and goals",
      highlight: "100% Tailored"
    },
    {
      icon: "🏆",
      title: "Best Physique Coaching",
      description: "Expert guidance to help you achieve your dream body with proven muscle building techniques",
      highlight: "Premium Coaching"
    },
    {
      icon: "🥗",
      title: "Complete Nutrition Guide",
      description: "Science-based nutrition strategies that fuel your transformation and optimize results",
      highlight: "Macro Optimized"
    },
    {
      icon: "📋",
      title: "Custom Meal Plans",
      description: "Easy-to-follow meal plans with Indian foods that fit your lifestyle and preferences",
      highlight: "India-Specific"
    },
    {
      icon: "💪",
      title: "Muscle Gain Protocol",
      description: "Proven strategies for lean muscle development and strength building",
      highlight: "Science-Based"
    },
    {
      icon: "🔥",
      title: "Fat Loss System",
      description: "Effective fat burning protocols that preserve muscle while shedding unwanted weight",
      highlight: "Muscle Preserving"
    },
    {
      icon: "❤️",
      title: "Overall Health Optimization",
      description: "Holistic approach covering sleep, stress management, and lifestyle improvements",
      highlight: "Complete Wellness"
    },
    {
      icon: "📱",
      title: "24/7 App Access",
      description: "Track progress, access workouts, and stay connected with your coach anytime",
      highlight: "Always Available"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-coral-500 font-semibold text-sm uppercase tracking-wide">Complete Package</span>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold mt-2 mb-6">
            What You <span className="gradient-text">Get</span> With
            <br />Your Transformation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need for a complete <span className="font-semibold text-coral-600">body recomposition</span> journey - 
            from personalized plans to ongoing support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover-lift border border-gray-100 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <div className="mb-2">
                <span className="inline-block bg-gradient-to-r from-coral-500 to-mint-500 text-white text-xs px-2 py-1 rounded-full font-semibold mb-2">
                  {feature.highlight}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-coral-600 transition-colors">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-coral-50 via-white to-mint-50 rounded-3xl p-8 lg:p-12 text-center animate-fade-in border border-coral-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-playfair font-bold mb-6">
              The Complete <span className="gradient-text">Transformation System</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Assess & Plan</h4>
                <p className="text-sm text-gray-600">Complete body analysis and custom plan creation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-mint-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">Execute & Track</h4>
                <p className="text-sm text-gray-600">Follow your plan with daily guidance and progress tracking</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-lavender-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Transform & Maintain</h4>
                <p className="text-sm text-gray-600">Achieve your goals and learn to maintain them for life</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-lg font-semibold text-gray-800 mb-2">
                🎁 Bonus: Mindset & Lifestyle Coaching
              </p>
              <p className="text-gray-600">
                Beyond physical transformation - develop the mental strength and habits for lasting success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
