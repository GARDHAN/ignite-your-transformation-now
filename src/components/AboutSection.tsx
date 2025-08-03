
import { useState, useEffect, useRef } from 'react';
import { Star, Zap, Target, Trophy, Heart, Flame, ChevronDown } from 'lucide-react';

const AboutSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const transformationJourney = [
    {
      id: 1,
      image: "/lovable-uploads/d6cb65c9-c5ed-4d79-a325-366956fdbd1a.png",
      title: "The Spark",
      subtitle: "Every legend begins with a single decision",
      year: "2019",
      description: "Started with a dream and determination. The moment when everything changed - from being an ordinary individual to someone who decided to take control of their destiny. This was the foundation upon which greatness was built.",
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
      description: "Consistency became the foundation. Every day was a choice between comfort and growth. Through countless hours of training, learning, and pushing beyond limits, the transformation began to take shape. This phase defined character.",
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
      description: "Achieved what once seemed impossible. The culmination of years of dedication, sacrifice, and unwavering commitment. Not just a physical transformation, but a complete evolution of mindset, discipline, and purpose.",
      icon: Trophy,
      color: "from-green-400 to-emerald-500",
      motivationalText: "Your body can stand almost anything. It's your mind you have to convince"
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: [0.2, 0.5, 0.8],
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-stage') || '0');
        
        if (entry.isIntersecting) {
          if (entry.intersectionRatio > 0.5) {
            entry.target.classList.add('stage-active');
            entry.target.classList.remove('stage-inactive');
          } else {
            entry.target.classList.add('stage-entering');
          }
        } else {
          entry.target.classList.remove('stage-active', 'stage-entering');
          entry.target.classList.add('stage-inactive');
        }
      });
    }, observerOptions);

    stageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Overall section scroll progress
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

        {/* Vertical Scroll Journey */}
        <div className="relative">
          {/* Central Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full">
            <div 
              className="w-full bg-gradient-to-b from-orange-500 via-purple-500 to-green-500 rounded-full transition-all duration-1000 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Journey Stages */}
          {transformationJourney.map((stage, index) => {
            const IconComponent = stage.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <div 
                key={stage.id} 
                ref={(el) => stageRefs.current[index] = el}
                data-stage={index}
                className="relative stage-inactive transition-all duration-1000 ease-out mb-20 md:mb-32"
              >
                {/* Desktop Layout */}
                <div className="hidden md:block">
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                    <div className="w-16 h-16 rounded-full border-4 border-white shadow-xl bg-gradient-to-r from-gray-300 to-gray-400 transition-all duration-700 stage-node">
                      <div className="w-full h-full flex items-center justify-center">
                        <IconComponent size={24} className="text-gray-500 transition-all duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Content Layout - Image and Text on opposite sides */}
                  <div className="grid grid-cols-2 gap-16 items-center">
                    {/* Left Side */}
                    <div className={`${isLeft ? 'flex justify-end' : 'flex justify-start'}`}>
                      {isLeft ? (
                        // Image on left for odd stages (2019, 2024)
                        <div className="w-full max-w-md transform translate-y-8 opacity-50 transition-all duration-1000 stage-content">
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
                        <div className="w-full max-w-md transform translate-y-8 opacity-50 transition-all duration-1000 stage-content">
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
                        <div className="w-full max-w-md transform translate-y-8 opacity-50 transition-all duration-1000 stage-content">
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
                        <div className="w-full max-w-md transform translate-y-8 opacity-50 transition-all duration-1000 stage-content">
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

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform translate-y-8 opacity-50 transition-all duration-1000 stage-content">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${stage.color} p-6 text-white relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/20 blur-2xl" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/15 blur-xl" />
                      </div>
                      
                      <div className="relative z-10 flex items-center justify-between mb-4">
                        <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                          <span className="text-sm font-bold">{stage.year}</span>
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <span className="text-lg font-bold">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                      
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <IconComponent size={28} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-dm-sans font-bold mb-2">{stage.title}</h3>
                        <h4 className="text-lg font-inter opacity-90">{stage.subtitle}</h4>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Image */}
                      <div className="relative mb-6 -mt-12">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                          <img 
                            src={stage.image}
                            alt={`Abhiram's transformation - ${stage.title}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {stage.description}
                      </p>

                      {/* Motivational Quote */}
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border-l-4 border-purple-400">
                        <p className="text-sm italic text-gray-700 font-inter">
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
