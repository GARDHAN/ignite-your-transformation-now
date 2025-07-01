
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
          backgroundImage: `url('/lovable-uploads/73c57247-12dd-4e19-98f6-f35d7216b844.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding max-w-6xl mx-auto animate-fade-in">
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 leading-tight text-gray-100">
            It's Either <span className="text-orange-400">Now</span>
            <br />
            or It's <span className="text-orange-400">Never</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 mb-8 max-w-3xl mx-auto">
            Transform your body, mindset, and life with India's most trusted 
            <span className="text-orange-400 font-semibold"> online fitness transformation coach</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Transformation Today
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 text-gray-200 hover:bg-gray-200 hover:text-gray-800 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300"
            onClick={() => document.getElementById('vsl-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Watch Success Stories
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>1000+ Transformations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>Certified Fitness Coach</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>100% Results Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
