
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream to-beige">
      <Navbar />
      
      {/* Background Image with overlay matching new palette */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/326ee1ad-0478-425b-a3ea-5bbc94c629cd.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50/80 to-forest-100/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-16">
          {/* Left side - Coach info and CTA */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 text-forest-800 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              with Abhiram Nair
            </h2>
            
            <p className="text-lg text-forest-700 font-poppins font-light mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Your trusted online fitness transformation coach helping you achieve your best physique with personalized guidance and proven results
            </p>
            
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-forest-600 hover:bg-forest-700 text-cream font-poppins font-semibold px-12 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-forest-500 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              Start Your Journey
            </Button>
          </div>

          {/* Right side - Brand name */}
          <div className="text-center lg:text-right">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-forest-800 tracking-tight animate-fade-in">
              themight
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
