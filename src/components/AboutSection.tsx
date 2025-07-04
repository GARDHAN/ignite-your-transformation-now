
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Star, Zap, Target, Trophy, Heart, Flame, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const transformationJourney = [
    {
      id: 1,
      image: "/lovable-uploads/d6cb65c9-c5ed-4d79-a325-366956fdbd1a.png",
      title: "The Spark",
      subtitle: "Every legend begins with a single decision",
      year: "2019",
      description: "Started with a dream and determination to transform not just my body, but my entire lifestyle.",
      icon: Flame,
      color: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      motivationalText: "The journey of a thousand miles begins with a single step",
      position: { x: -20, y: 0, rotation: -5 }
    },
    {
      id: 2,
      image: "/lovable-uploads/a2120b02-0b55-4ff2-ac59-a3ef49df1ed7.png",
      title: "The Grind",
      subtitle: "Where discipline meets dedication",
      year: "2021",
      description: "Consistency became my foundation. Every rep, every meal, every choice mattered.",
      icon: Zap,
      color: "from-blue-400 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      motivationalText: "Success is the sum of small efforts repeated daily",
      position: { x: 0, y: -10, rotation: 0 }
    },
    {
      id: 3,
      image: "/lovable-uploads/dd520506-8312-4484-a9fb-754cbb9305cc.png",
      title: "The Transformation",
      subtitle: "From vision to reality",
      year: "2024",
      description: "Achieved what once seemed impossible through unwavering commitment.",
      icon: Trophy,
      color: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      motivationalText: "Your body can stand almost anything. It's your mind you have to convince",
      position: { x: 20, y: 5, rotation: 5 }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        const scrolled = Math.max(0, windowHeight - rect.top);
        const progress = Math.min(scrolled / sectionHeight, 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`absolute animate-bounce ${className}`}
      style={{ animationDelay: `${delay}ms`, animationDuration: '4s' }}
    >
      {children}
    </div>
  );

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
      {/* Enhanced Floating Background Elements */}
      <FloatingElement delay={0} className="top-20 left-10 text-purple-200 opacity-60">
        <Star size={32} />
      </FloatingElement>
      <FloatingElement delay={1500} className="top-40 right-20 text-blue-200 opacity-60">
        <Target size={40} />
      </FloatingElement>
      <FloatingElement delay={3000} className="bottom-40 left-20 text-green-200 opacity-60">
        <Heart size={36} />
      </FloatingElement>
      <FloatingElement delay={4500} className="top-60 left-1/2 text-orange-200 opacity-60">
        <Zap size={28} />
      </FloatingElement>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="relative inline-block">
            <h2 className="text-7xl lg:text-8xl font-dm-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 mb-6 relative z-10">
              The Journey
            </h2>
            <div className="absolute inset-0 text-7xl lg:text-8xl font-dm-sans font-bold text-purple-100 blur-sm transform translate-x-1 translate-y-1">
              The Journey
            </div>
          </div>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
            Witness the transformation that inspired thousands to begin their own journey of self-discovery
          </p>
          
          {/* Progress Indicator */}
          <div className="mt-8 w-32 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        {/* Interactive Card Layout */}
        <div className="relative">
          {/* Central Connection Line */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-30" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {transformationJourney.map((stage, index) => {
              const IconComponent = stage.icon;
              const isActive = activeCard === index;
              const isInView = scrollProgress > (index * 0.2);
              
              return (
                <div 
                  key={stage.id}
                  className={`relative transform transition-all duration-700 ${
                    isInView 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                    transform: isActive 
                      ? `translateY(${stage.position.y}px) translateX(${stage.position.x}px) rotate(${stage.position.rotation}deg) scale(1.05)` 
                      : `translateY(${stage.position.y}px) translateX(${stage.position.x}px) rotate(${stage.position.rotation}deg)`
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Card Container */}
                  <div className={`relative group cursor-pointer transition-all duration-500 ${
                    isActive ? 'z-20' : 'z-10'
                  }`}>
                    {/* Card Background with Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stage.bgGradient} rounded-3xl transform transition-all duration-500 ${
                      isActive ? 'scale-110 shadow-2xl' : 'scale-100 shadow-lg'
                    }`} />
                    
                    {/* Main Card Content */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 overflow-hidden">
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${stage.color} mb-6 shadow-lg`}>
                        <IconComponent size={16} />
                        {stage.year}
                      </div>

                      {/* Image Container with 3D Effect */}
                      <div className={`relative mb-6 transform transition-all duration-500 ${
                        isActive ? 'scale-105 rotate-1' : 'scale-100 rotate-0'
                      }`}>
                        <div className="relative overflow-hidden rounded-2xl shadow-xl">
                          <img 
                            src={stage.image}
                            alt={`Abhiram's transformation - ${stage.title}`}
                            className={`w-full h-56 object-cover transition-all duration-700 ${
                              isActive ? 'scale-110' : 'scale-100'
                            }`}
                          />
                          
                          {/* Image Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-300 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`} />
                          
                          {/* Floating Number */}
                          <div className={`absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center font-bold text-lg text-gray-800 transition-all duration-300 ${
                            isActive ? 'scale-125 rotate-12' : 'scale-100 rotate-0'
                          }`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-dm-sans font-bold text-gray-800 leading-tight">
                          {stage.title}
                        </h3>
                        <h4 className="text-lg font-inter text-gray-600 font-medium">
                          {stage.subtitle}
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {stage.description}
                        </p>

                        {/* Motivational Quote Card */}
                        <div className={`bg-gradient-to-r ${stage.bgGradient} p-4 rounded-xl border-l-4 border-opacity-50 transition-all duration-300 ${
                          isActive ? 'border-gray-400 shadow-md' : 'border-gray-300'
                        }`}>
                          <p className="text-sm italic text-gray-700 font-inter leading-relaxed">
                            "{stage.motivationalText}"
                          </p>
                        </div>

                        {/* Interactive Arrow */}
                        <div className={`flex justify-end transition-all duration-300 ${
                          isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}>
                          <div className={`p-2 rounded-full bg-gradient-to-r ${stage.color} text-white shadow-lg`}>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stage.color} rounded-3xl blur-xl opacity-0 transition-opacity duration-500 -z-10 ${
                      isActive ? 'opacity-20' : 'opacity-0'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Results Section */}
        <div className="mt-32 text-center">
          <h3 className="text-4xl font-dm-sans font-bold text-gray-800 mb-12">
            The Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "1000+", label: "Lives Transformed", icon: Heart, color: "from-red-400 to-pink-500" },
              { number: "5+", label: "Years of Excellence", icon: Star, color: "from-yellow-400 to-orange-500" },
              { number: "100%", label: "Dedication", icon: Trophy, color: "from-green-400 to-emerald-500" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <div className="text-5xl font-dm-sans font-bold text-gray-800 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-inter font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Final Inspiration */}
        <div className="mt-32 text-center animate-fade-in">
          <div className="relative max-w-5xl mx-auto bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 rounded-3xl p-12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full" />
              <div className="absolute top-20 right-20 w-12 h-12 border border-white rounded-full" />
            </div>
            
            <div className="relative z-10">
              <blockquote className="text-3xl lg:text-4xl font-dm-sans font-light italic leading-relaxed mb-8">
                "I wasn't born with a perfect physique. Every muscle, every achievement, every transformation story you see today was built through consistency, discipline, and an unwavering belief in the process."
              </blockquote>
              <cite className="text-xl font-inter opacity-90 block mb-8">— Abhiram Nair</cite>
              
              <div className="flex justify-center">
                <div className="animate-bounce bg-white/20 rounded-full p-4">
                  <ChevronDown className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
