
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Star, Zap, Target, Trophy, Heart, Flame, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const AboutSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const transformationJourney = [
    {
      id: 1,
      image: "/lovable-uploads/d6cb65c9-c5ed-4d79-a325-366956fdbd1a.png",
      title: "The Spark",
      subtitle: "Every legend begins with a single decision",
      year: "2019",
      description: "Started with a dream and determination",
      icon: Flame,
      color: "from-orange-400 to-red-500",
      motivationalText: "The journey of a thousand miles begins with a single step"
    },
    {
      id: 2,
      image: "/lovable-uploads/a2120b02-0b55-4ff2-ac59-a3ef49df1ed7.png",
      title: "The Grind",
      subtitle: "Where discipline meets dedication",
      year: "2021",
      description: "Consistency became the foundation",
      icon: Zap,
      color: "from-blue-400 to-purple-500",
      motivationalText: "Success is the sum of small efforts repeated daily"
    },
    {
      id: 3,
      image: "/lovable-uploads/dd520506-8312-4484-a9fb-754cbb9305cc.png",
      title: "The Transformation",
      subtitle: "From vision to reality",
      year: "2024",
      description: "Achieved what once seemed impossible",
      icon: Trophy,
      color: "from-green-400 to-emerald-500",
      motivationalText: "Your body can stand almost anything. It's your mind you have to convince"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveStage(prev => (prev + 1) % transformationJourney.length);
      }, 4000);
    } else {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, transformationJourney.length]);

  // Scroll-based progress for desktop
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && window.innerWidth >= 768) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        const scrolled = Math.max(0, windowHeight - rect.top);
        const progress = Math.min(scrolled / sectionHeight, 1);
        setScrollProgress(progress);
        
        // Update active stage based on scroll progress
        const stageIndex = Math.floor(progress * transformationJourney.length);
        setActiveStage(Math.min(stageIndex, transformationJourney.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left - next stage
        setActiveStage(prev => (prev + 1) % transformationJourney.length);
      } else {
        // Swiped right - previous stage
        setActiveStage(prev => prev === 0 ? transformationJourney.length - 1 : prev - 1);
      }
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  const nextStage = () => {
    setActiveStage(prev => (prev + 1) % transformationJourney.length);
    setIsAutoPlaying(false);
  };

  const prevStage = () => {
    setActiveStage(prev => prev === 0 ? transformationJourney.length - 1 : prev - 1);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`absolute animate-bounce ${className}`}
      style={{ animationDelay: `${delay}ms`, animationDuration: '3s' }}
    >
      {children}
    </div>
  );

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
      {/* Floating Background Elements */}
      <FloatingElement delay={0} className="top-20 left-10 text-purple-200">
        <Star size={24} />
      </FloatingElement>
      <FloatingElement delay={1000} className="top-40 right-20 text-blue-200">
        <Target size={32} />
      </FloatingElement>
      <FloatingElement delay={2000} className="bottom-40 left-20 text-green-200">
        <Heart size={28} />
      </FloatingElement>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-dm-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
            The Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-inter max-w-3xl mx-auto">
            Witness the transformation that inspired thousands to begin their own journey
          </p>
        </div>

        {/* Desktop Timeline Layout */}
        <div className="hidden md:block relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full">
            <div 
              className="w-full bg-gradient-to-b from-orange-500 via-purple-500 to-green-500 rounded-full transition-all duration-1000 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Journey Stages */}
          {transformationJourney.map((stage, index) => {
            const IconComponent = stage.icon;
            const isLeft = index % 2 === 0;
            const isActive = activeStage >= index;
            
            return (
              <div key={stage.id} className="relative mb-32">
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full border-4 border-white shadow-xl transition-all duration-700 ${
                    isActive 
                      ? `bg-gradient-to-r ${stage.color} scale-110` 
                      : 'bg-gray-300 scale-90'
                  }`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <IconComponent 
                        size={24} 
                        className={`transition-all duration-500 ${
                          isActive ? 'text-white' : 'text-gray-500'
                        }`} 
                      />
                    </div>
                  </div>
                </div>

                {/* Content Layout - Image and Text on opposite sides */}
                <div className="grid grid-cols-2 gap-16 items-center">
                  {/* Left Side */}
                  <div className={`${isLeft ? 'flex justify-end' : 'flex justify-start'}`}>
                    {isLeft ? (
                      // Image on left for odd stages (2019, 2024)
                      <div className={`w-full max-w-md transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        {/* Year Badge */}
                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${stage.color} mb-4`}>
                          {stage.year}
                        </div>

                        {/* Image Container */}
                        <div className="relative group mb-6">
                          <div className="overflow-hidden rounded-2xl shadow-2xl">
                            <img 
                              src={stage.image}
                              alt={`Abhiram's transformation - ${stage.title}`}
                              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          {/* Floating Number */}
                          <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                            <span className="text-2xl font-bold text-gray-800">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Content on left for even stages (2021)
                      <div className={`w-full max-w-md transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        <h3 className="text-3xl font-dm-sans font-bold text-gray-800 mb-2">
                          {stage.title}
                        </h3>
                        <h4 className="text-lg font-inter text-gray-600 mb-3">
                          {stage.subtitle}
                        </h4>
                        <p className="text-sm text-gray-500 mb-4">
                          {stage.description}
                        </p>

                        {/* Motivational Quote */}
                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <p className="text-sm italic text-gray-700 font-inter">
                            "{stage.motivationalText}"
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side */}
                  <div className={`${isLeft ? 'flex justify-start' : 'flex justify-end'}`}>
                    {isLeft ? (
                      // Content on right for odd stages (2019, 2024)
                      <div className={`w-full max-w-md transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        <h3 className="text-3xl font-dm-sans font-bold text-gray-800 mb-2">
                          {stage.title}
                        </h3>
                        <h4 className="text-lg font-inter text-gray-600 mb-3">
                          {stage.subtitle}
                        </h4>
                        <p className="text-sm text-gray-500 mb-4">
                          {stage.description}
                        </p>

                        {/* Motivational Quote */}
                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <p className="text-sm italic text-gray-700 font-inter">
                            "{stage.motivationalText}"
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Image on right for even stages (2021)
                      <div className={`w-full max-w-md transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        {/* Year Badge */}
                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${stage.color} mb-4`}>
                          {stage.year}
                        </div>

                        {/* Image Container */}
                        <div className="relative group mb-6">
                          <div className="overflow-hidden rounded-2xl shadow-2xl">
                            <img 
                              src={stage.image}
                              alt={`Abhiram's transformation - ${stage.title}`}
                              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          {/* Floating Number */}
                          <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                            <span className="text-2xl font-bold text-gray-800">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Interactive Card Carousel */}
        <div className="md:hidden relative">
          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-3">
              {transformationJourney.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-all duration-500 ${
                    index === activeStage 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Card Container */}
          <div 
            className="relative h-[600px] perspective-1000"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {transformationJourney.map((stage, index) => {
              const IconComponent = stage.icon;
              const isActive = index === activeStage;
              const isNext = index === (activeStage + 1) % transformationJourney.length;
              const isPrev = index === (activeStage - 1 + transformationJourney.length) % transformationJourney.length;
              
              let cardClass = 'absolute inset-0 transition-all duration-700 ease-out transform-gpu';
              
              if (isActive) {
                cardClass += ' scale-100 z-30 opacity-100 translate-x-0';
              } else if (isNext) {
                cardClass += ' scale-90 z-20 opacity-60 translate-x-8 rotate-y-12';
              } else if (isPrev) {
                cardClass += ' scale-90 z-20 opacity-60 -translate-x-8 -rotate-y-12';
              } else {
                cardClass += ' scale-75 z-10 opacity-30 translate-x-16';
              }

              return (
                <div key={stage.id} className={cardClass}>
                  <div className={`relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border-2 transition-all duration-700 ${
                    isActive ? `border-transparent bg-gradient-to-br ${stage.color}` : 'border-gray-200'
                  }`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/20 blur-3xl" />
                      <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-white/15 blur-2xl" />
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <div className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-500 ${
                        isActive 
                          ? 'bg-white/20 text-white backdrop-blur-sm' 
                          : `bg-gradient-to-r ${stage.color} text-white`
                      }`}>
                        {stage.year}
                      </div>
                    </div>

                    {/* Stage Number */}
                    <div className="absolute top-6 right-6 z-10">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                        isActive 
                          ? 'bg-white/20 text-white backdrop-blur-sm' 
                          : 'bg-white text-gray-800 shadow-lg'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {/* Icon */}
                      <div className="flex justify-center mb-6 mt-16">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 ${
                          isActive 
                            ? 'bg-white/20 backdrop-blur-sm scale-110' 
                            : `bg-gradient-to-r ${stage.color}`
                        }`}>
                          <IconComponent 
                            size={32} 
                            className={`transition-all duration-500 ${
                              isActive ? 'text-white' : 'text-white'
                            }`} 
                          />
                        </div>
                      </div>

                      {/* Image */}
                      <div className="relative mb-6 flex-shrink-0">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                          <img 
                            src={stage.image}
                            alt={`Abhiram's transformation - ${stage.title}`}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 flex flex-col justify-center text-center">
                        <h3 className={`text-2xl font-dm-sans font-bold mb-2 transition-all duration-500 ${
                          isActive ? 'text-white' : 'text-gray-800'
                        }`}>
                          {stage.title}
                        </h3>
                        <h4 className={`text-lg font-inter mb-3 transition-all duration-500 ${
                          isActive ? 'text-white/90' : 'text-gray-600'
                        }`}>
                          {stage.subtitle}
                        </h4>
                        <p className={`text-sm mb-4 transition-all duration-500 ${
                          isActive ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {stage.description}
                        </p>

                        {/* Motivational Quote */}
                        <div className={`p-4 rounded-lg transition-all duration-500 ${
                          isActive 
                            ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                            : 'bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-400'
                        }`}>
                          <p className={`text-sm italic font-inter transition-all duration-500 ${
                            isActive ? 'text-white/90' : 'text-gray-700'
                          }`}>
                            "{stage.motivationalText}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevStage}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleAutoPlay}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  isAutoPlaying 
                    ? 'bg-purple-500 text-white shadow-lg' 
                    : 'bg-white text-gray-600 shadow-lg'
                }`}
              >
                <Play size={20} className={isAutoPlaying ? 'animate-pulse' : ''} />
              </button>

              <div className="text-sm text-gray-500 font-inter">
                {activeStage + 1} / {transformationJourney.length}
              </div>
            </div>

            <button 
              onClick={nextStage}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Swipe Indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400 font-inter animate-pulse">
              ← Swipe to navigate →
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "1000+", label: "Lives Transformed", icon: Heart },
              { number: "5+", label: "Years of Excellence", icon: Star },
              { number: "100%", label: "Dedication", icon: Trophy }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <div className="text-4xl font-dm-sans font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-inter">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Inspiration */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <blockquote className="text-3xl font-dm-sans font-light italic leading-relaxed mb-8">
              "I wasn't born with a perfect physique. Every muscle, every achievement, every transformation story you see today was built through consistency, discipline, and an unwavering belief in the process."
            </blockquote>
            <cite className="text-xl font-inter opacity-90">— Abhiram Nair</cite>
            
            <div className="mt-8 flex justify-center">
              <ChevronDown className="w-8 h-8 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
