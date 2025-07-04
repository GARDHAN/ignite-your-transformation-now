
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Star, Zap, Target, Trophy, Heart, Flame, ArrowRight, Quote } from 'lucide-react';

const AboutSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const transformationJourney = [
    {
      id: 1,
      image: "/lovable-uploads/d6cb65c9-c5ed-4d79-a325-366956fdbd1a.png",
      title: "The Foundation",
      subtitle: "Where legends are born",
      year: "2019",
      description: "Every extraordinary transformation begins with a single decision. The commitment to change, to grow, and to become the best version of yourself.",
      icon: Flame,
      color: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
      motivationalText: "Excellence is not a skill, it's an attitude",
      metrics: { label: "Days of Dedication", value: "1,825+" }
    },
    {
      id: 2,
      image: "/lovable-uploads/a2120b02-0b55-4ff2-ac59-a3ef49df1ed7.png",
      title: "The Mastery",
      subtitle: "Discipline becomes destiny",
      year: "2021",
      description: "Through unwavering consistency and scientific precision, each workout, each meal, and each choice compounds into extraordinary results.",
      icon: Zap,
      color: "from-blue-600 to-indigo-700",
      bgGradient: "from-blue-50 to-indigo-50",
      motivationalText: "Success is the sum of small efforts repeated daily",
      metrics: { label: "Clients Transformed", value: "500+" }
    },
    {
      id: 3,
      image: "/lovable-uploads/dd520506-8312-4484-a9fb-754cbb9305cc.png",
      title: "The Legacy",
      subtitle: "Inspiring thousands to greatness",
      year: "2024",
      description: "What started as a personal journey has evolved into a mission to empower others to unlock their true potential and achieve their dreams.",
      icon: Trophy,
      color: "from-emerald-600 to-teal-700",
      bgGradient: "from-emerald-50 to-teal-50",
      motivationalText: "Your only limit is your mind",
      metrics: { label: "Lives Changed", value: "1000+" }
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

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-widest">Transformation Journey</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-dm-sans font-bold text-gray-900 mb-6 leading-tight">
            Meet Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
              Coach
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
            A journey of transformation, dedication, and inspiring thousands to achieve their ultimate potential
          </p>
          
          {/* Progress Indicator */}
          <div className="mt-8 w-40 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        {/* Professional Timeline Layout */}
        <div className="space-y-32">
          {transformationJourney.map((stage, index) => {
            const IconComponent = stage.icon;
            const isActive = activeCard === index;
            const isInView = scrollProgress > (index * 0.25);
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={stage.id}
                className={`relative transform transition-all duration-1000 ${
                  isInView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}>
                  {/* Image Section */}
                  <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className={`relative group cursor-pointer transition-all duration-500 ${
                      isActive ? 'transform scale-105' : ''
                    }`}>
                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <img 
                          src={stage.image}
                          alt={`Abhiram's transformation - ${stage.title}`}
                          className={`w-full h-96 object-cover transition-all duration-700 ${
                            isActive ? 'scale-110' : 'scale-100'
                          }`}
                        />
                        
                        {/* Professional Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Year Badge */}
                        <div className={`absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg`}>
                          <div className="flex items-center gap-2">
                            <IconComponent size={16} className={`bg-gradient-to-r ${stage.color} bg-clip-text text-transparent`} />
                            <span className="font-bold text-gray-900">{stage.year}</span>
                          </div>
                        </div>

                        {/* Metrics Badge */}
                        <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                          <div className="text-center">
                            <div className="font-bold text-gray-900">{stage.metrics.value}</div>
                            <div className="text-xs text-gray-600">{stage.metrics.label}</div>
                          </div>
                        </div>
                      </div>

                      {/* Professional Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${stage.color} rounded-3xl blur-xl opacity-0 transition-opacity duration-500 -z-10 ${
                        isActive ? 'opacity-20' : 'opacity-0'
                      }`} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-4">
                      <h3 className="text-4xl lg:text-5xl font-dm-sans font-bold text-gray-900 leading-tight">
                        {stage.title}
                      </h3>
                      <h4 className="text-xl text-gray-600 font-inter font-medium">
                        {stage.subtitle}
                      </h4>
                      <p className="text-lg text-gray-700 leading-relaxed font-inter">
                        {stage.description}
                      </p>
                    </div>

                    {/* Professional Quote Card */}
                    <div className={`relative p-6 bg-gradient-to-br ${stage.bgGradient} rounded-2xl border border-gray-200/50 shadow-lg`}>
                      <Quote className="absolute top-4 left-4 w-6 h-6 text-gray-400" />
                      <blockquote className="text-lg italic text-gray-800 font-inter leading-relaxed pl-8">
                        {stage.motivationalText}
                      </blockquote>
                      <div className="mt-4 flex items-center justify-between">
                        <cite className="text-sm font-medium text-gray-600">— Abhiram Nair</cite>
                        <div className={`p-2 rounded-full bg-gradient-to-r ${stage.color} text-white shadow-md transition-transform duration-200 ${
                          isActive ? 'scale-110' : 'scale-100'
                        }`}>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Results Section */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-widest">Impact & Results</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </div>
          
          <h3 className="text-4xl font-dm-sans font-bold text-gray-900 mb-12">
            Measurable Excellence
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "1000+", label: "Lives Transformed", icon: Heart, color: "from-rose-500 to-pink-600" },
              { number: "5+", label: "Years of Excellence", icon: Star, color: "from-amber-500 to-orange-600" },
              { number: "100%", label: "Commitment", icon: Trophy, color: "from-emerald-500 to-teal-600" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className="text-4xl font-dm-sans font-bold text-gray-900 mb-3 group-hover:scale-105 transition-transform duration-300">
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

        {/* Professional Final Inspiration */}
        <div className="mt-32 text-center animate-fade-in">
          <div className="relative max-w-5xl mx-auto bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 text-white overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
            
            <div className="relative z-10">
              <Quote className="w-12 h-12 mx-auto mb-8 text-white/60" />
              <blockquote className="text-2xl lg:text-3xl font-dm-sans font-light leading-relaxed mb-8">
                "I believe that every person has the potential for greatness within them. My mission is to help you unlock that potential, overcome your limitations, and achieve the extraordinary life you deserve."
              </blockquote>
              <cite className="text-xl font-inter opacity-90 block mb-8">— Abhiram Nair, Certified Transformation Coach</cite>
              
              <div className="flex justify-center">
                <div className="animate-bounce bg-white/10 rounded-full p-4 backdrop-blur-sm">
                  <ChevronDown className="w-6 h-6" />
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
