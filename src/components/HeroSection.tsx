
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/bc4beba6-36d0-4426-9c3a-5b2c5eb270c9.png')`,
        }}
      >
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-dm-sans font-light mb-8 text-soft-gray tracking-tight">
            themight
          </h1>
          
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-soft-gray hover:bg-gray-600 text-white font-dm-sans font-normal px-12 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
