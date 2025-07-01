
import { useState } from 'react';

const TransformationsSection = () => {
  const [activeTransformation, setActiveTransformation] = useState(0);

  const transformations = [
    {
      name: "Rahul S.",
      age: 28,
      location: "Mumbai",
      beforeImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&q=80",
      afterImg: "https://images.unsplash.com/photo-1583468982228-19f19164aad2?auto=format&fit=crop&w=300&q=80",
      results: "Lost 15kg, Gained Muscle",
      timeframe: "4 months",
      testimonial: "Abhiram's personalized workout plan completely transformed my body and confidence. Best investment ever!",
      program: "Fat Loss + Muscle Gain"
    },
    {
      name: "Priya M.",
      age: 32,
      location: "Delhi",
      beforeImg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=300&q=80",
      afterImg: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=300&q=80",
      results: "Toned Body, +10kg Strength",
      timeframe: "3 months",
      testimonial: "The nutrition guidance was game-changing. I finally found a sustainable approach to fitness!",
      program: "Body Recomposition"
    },
    {
      name: "Amit K.",
      age: 35,
      location: "Bangalore",
      beforeImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&q=80",
      afterImg: "https://images.unsplash.com/photo-1583468982228-19f19164aad2?auto=format&fit=crop&w=300&q=80",
      results: "20kg Weight Loss",
      timeframe: "6 months",
      testimonial: "From 95kg to 75kg! Abhiram's holistic approach changed my entire lifestyle.",
      program: "Complete Transformation"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-coral-500 font-semibold text-sm uppercase tracking-wide">Success Stories</span>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold mt-2 mb-6">
            Real <span className="gradient-text">Transformations</span>
            <br />Real Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our clients achieved their <span className="font-semibold text-coral-600">fitness transformation journey</span> with 
            personalized coaching and proven strategies
          </p>
        </div>

        {/* Featured Transformation */}
        <div className="mb-16 animate-scale-in">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Before/After Images */}
              <div className="relative">
                <div className="grid grid-cols-2 h-full">
                  <div className="relative group">
                    <img 
                      src={transformations[activeTransformation].beforeImg}
                      alt={`${transformations[activeTransformation].name} before transformation`}
                      className="w-full h-64 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-semibold">BEFORE</span>
                    </div>
                  </div>
                  <div className="relative group">
                    <img 
                      src={transformations[activeTransformation].afterImg}
                      alt={`${transformations[activeTransformation].name} after transformation`}
                      className="w-full h-64 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 text-white">
                      <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">AFTER</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transformation Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">{transformations[activeTransformation].name}</h3>
                  <p className="text-gray-600">{transformations[activeTransformation].age} years • {transformations[activeTransformation].location}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-coral-50 p-4 rounded-lg text-center">
                    <div className="text-lg font-bold text-coral-600">{transformations[activeTransformation].results}</div>
                    <div className="text-sm text-gray-600">Results</div>
                  </div>
                  <div className="bg-mint-50 p-4 rounded-lg text-center">
                    <div className="text-lg font-bold text-mint-600">{transformations[activeTransformation].timeframe}</div>
                    <div className="text-sm text-gray-600">Timeline</div>
                  </div>
                </div>

                <blockquote className="text-lg italic text-gray-700 mb-6 border-l-4 border-coral-500 pl-4">
                  "{transformations[activeTransformation].testimonial}"
                </blockquote>

                <div className="bg-gradient-to-r from-coral-500 to-mint-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  {transformations[activeTransformation].program}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Gallery */}
        <div className="grid md:grid-cols-3 gap-6">
          {transformations.map((transformation, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover-lift ${
                activeTransformation === index ? 'ring-2 ring-coral-500' : ''
              }`}
              onClick={() => setActiveTransformation(index)}
            >
              <div className="grid grid-cols-2">
                <img 
                  src={transformation.beforeImg}
                  alt={`${transformation.name} before`}
                  className="w-full h-32 object-cover"
                />
                <img 
                  src={transformation.afterImg}
                  alt={`${transformation.name} after`}
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-1">{transformation.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{transformation.results}</p>
                <div className="text-xs text-coral-600 font-semibold">{transformation.timeframe}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Ready to start your own transformation story?</p>
          <button 
            onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Your Transformation Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
