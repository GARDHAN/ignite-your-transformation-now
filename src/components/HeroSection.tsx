
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding max-w-6xl mx-auto animate-fade-in">
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 leading-tight">
            It's Either <span className="gradient-text">Now</span>
            <br />
            or It's <span className="gradient-text">Never</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light opacity-90 mb-8 max-w-3xl mx-auto">
            Transform your body, mindset, and life with India's most trusted 
            <span className="text-coral-400 font-semibold"> online fitness transformation coach</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Transformation Today
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300"
            onClick={() => document.getElementById('vsl-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Watch Success Stories
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <span className="text-mint-400 text-xl">✓</span>
            <span>1000+ Transformations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-mint-400 text-xl">✓</span>
            <span>Certified Fitness Coach</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-mint-400 text-xl">✓</span>
            <span>100% Results Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
