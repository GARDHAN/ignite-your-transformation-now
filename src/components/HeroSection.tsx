
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Navbar />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/326ee1ad-0478-425b-a3ea-5bbc94c629cd.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-16">
          {/* Left side - Coach info and CTA */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dm-sans font-bold mb-4 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
              with Abhiram Nair
            </h2>
            
            <p className="text-lg text-white/90 font-inter font-light mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Your trusted online fitness transformation coach helping you achieve your best physique with personalized guidance and proven results
            </p>
            
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-coral-500 hover:bg-coral-600 text-white font-dm-sans font-bold px-12 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-coral-400 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              Start Your Journey
            </Button>
          </div>

          {/* Right side - Brand name */}
          <div className="text-center lg:text-right">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-dm-sans font-bold text-white tracking-tight animate-fade-in">
              themight
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
