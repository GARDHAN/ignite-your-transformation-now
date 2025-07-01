
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/71d8584d-cdfb-4d16-bc1f-453ee44580e4.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-dm-sans font-bold mb-4 text-white tracking-tight">
            themight
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-dm-sans font-bold mb-6 text-white">
            with Abhiram Nair
          </h2>
          
          <p className="text-lg text-white/90 font-inter font-light mb-8 max-w-2xl mx-auto">
            Your trusted online fitness transformation coach helping you achieve your best physique with personalized guidance and proven results
          </p>
          
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-coral-500 hover:bg-coral-600 text-white font-dm-sans font-bold px-12 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-coral-400"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
