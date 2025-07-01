
import { useState } from 'react';

const TransformationsSection = () => {
  const [activeTransformation, setActiveTransformation] = useState(0);

  const transformations = [
    {
      name: "Rahul S.",
      age: 28,
      location: "Mumbai",
      beforeImg: "/lovable-uploads/93ad2042-2e83-421e-9776-0a66831583ce.png",
      afterImg: "/lovable-uploads/ced87b72-309f-4106-b636-e62f465c9710.png",
      results: "Lost 15kg, Gained Muscle",
      timeframe: "4 months",
      testimonial: "The personalized approach completely transformed my body and confidence. Best investment ever!",
    },
    {
      name: "Priya M.",
      age: 32,
      location: "Delhi", 
      beforeImg: "/lovable-uploads/bc4beba6-36d0-4426-9c3a-5b2c5eb270c9.png",
      afterImg: "/lovable-uploads/c4f56d01-83f8-4c7a-a802-a3a8a12651c3.png",
      results: "Toned Body, +10kg Strength",
      timeframe: "3 months",
      testimonial: "The guidance was game-changing. I finally found a sustainable approach to fitness!",
    }
  ];

  return (
    <section className="seamless-section soft-blush">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-dm-sans font-light text-soft-gray mb-6 leading-tight">
            Real Transformations
          </h2>
          <p className="text-lg text-muted-gray font-inter font-light max-w-2xl mx-auto">
            See how our clients achieved their fitness transformation journey with personalized coaching
          </p>
        </div>

        {/* Featured Transformation - No containers, seamless flow */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Before/After Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src={transformations[activeTransformation].beforeImg}
                  alt={`${transformations[activeTransformation].name} before transformation`}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-red-400 text-white px-3 py-1 rounded-full text-sm font-dm-sans font-medium">BEFORE</span>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={transformations[activeTransformation].afterImg}
                  alt={`${transformations[activeTransformation].name} after transformation`}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute bottom-4 right-4">
                  <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm font-dm-sans font-medium">AFTER</span>
                </div>
              </div>
            </div>

            {/* Transformation Details - No boxes, natural flow */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-dm-sans font-medium text-soft-gray mb-2">
                  {transformations[activeTransformation].name}
                </h3>
                <p className="text-muted-gray font-inter">
                  {transformations[activeTransformation].age} years • {transformations[activeTransformation].location}
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-lg font-dm-sans font-medium text-soft-gray">
                  {transformations[activeTransformation].results}
                </div>
                <div className="text-muted-gray font-inter">
                  Timeline: {transformations[activeTransformation].timeframe}
                </div>
              </div>

              <blockquote className="text-lg italic text-muted-gray font-inter font-light border-l-4 border-gray-300 pl-6">
                "{transformations[activeTransformation].testimonial}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Transformation Gallery - Simple, no containers */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {transformations.map((transformation, index) => (
            <div 
              key={index}
              className={`cursor-pointer transition-all duration-300 hover-lift ${
                activeTransformation === index ? 'opacity-100' : 'opacity-60'
              }`}
              onClick={() => setActiveTransformation(index)}
            >
              <div className="grid grid-cols-2 gap-2 mb-4">
                <img 
                  src={transformation.beforeImg}
                  alt={`${transformation.name} before`}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <img 
                  src={transformation.afterImg}
                  alt={`${transformation.name} after`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h4 className="font-dm-sans font-medium text-soft-gray mb-1">{transformation.name}</h4>
                <p className="text-sm text-muted-gray font-inter">{transformation.results}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
