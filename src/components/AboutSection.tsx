
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const transformationStory = [
    {
      image: "/lovable-uploads/d6cb65c9-c5ed-4d79-a325-366956fdbd1a.png",
      caption: "The Beginning",
      subtitle: "Starting the journey"
    },
    {
      image: "/lovable-uploads/a2120b02-0b55-4ff2-ac59-a3ef49df1ed7.png",
      caption: "Progress",
      subtitle: "Building strength"
    },
    {
      image: "/lovable-uploads/dd520506-8312-4484-a9fb-754cbb9305cc.png",
      caption: "Transformation",
      subtitle: "Achieving the goal"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformationStory.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformationStory.length) % transformationStory.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="seamless-section soft-lavender">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-dm-sans font-bold text-soft-gray leading-tight mb-6">
            Meet Your Coach
          </h2>
          <p className="text-xl text-muted-gray font-inter font-light max-w-3xl mx-auto">
            From humble beginnings to transformation expert - witness Abhiram's journey that inspired thousands
          </p>
        </div>

        {/* Visual Journey Slider */}
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-3xl">
          <div className="relative h-[600px] lg:h-[700px]">
            {transformationStory.map((story, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 transform translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 transform -translate-x-full'
                      : 'opacity-0 transform translate-x-full'
                }`}
              >
                <div className="grid lg:grid-cols-2 h-full">
                  {/* Image Side */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={story.image}
                      alt={`Abhiram's transformation - ${story.caption}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="flex items-center justify-center p-8 lg:p-16">
                    <div className="text-center animate-fade-in">
                      <div className="text-6xl lg:text-8xl font-dm-sans font-bold text-soft-gray/20 mb-4">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-dm-sans font-bold text-soft-gray mb-4">
                        {story.caption}
                      </h3>
                      <p className="text-lg text-muted-gray font-inter font-light mb-8">
                        {story.subtitle}
                      </p>
                      
                      {/* Journey Progress */}
                      <div className="flex justify-center space-x-2">
                        {transformationStory.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              idx === currentSlide 
                                ? 'w-12 bg-soft-gray' 
                                : 'w-2 bg-soft-gray/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-soft-gray" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-soft-gray" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-dm-sans font-bold text-soft-gray mb-2">1000+</div>
            <div className="text-sm lg:text-base text-muted-gray font-inter">Transformations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-dm-sans font-bold text-soft-gray mb-2">5+</div>
            <div className="text-sm lg:text-base text-muted-gray font-inter">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-dm-sans font-bold text-soft-gray mb-2">100%</div>
            <div className="text-sm lg:text-base text-muted-gray font-inter">Success Rate</div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-16 animate-fade-in">
          <blockquote className="text-2xl lg:text-3xl font-dm-sans font-light text-soft-gray italic leading-relaxed max-w-4xl mx-auto">
            "I wasn't always the coach you see today. My transformation journey proves that anyone can achieve their best physique with the right guidance."
          </blockquote>
          <cite className="block mt-6 text-lg text-muted-gray font-inter">— Abhiram Nair</cite>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
