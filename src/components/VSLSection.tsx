
const VSLSection = () => {
  return (
    <section id="vsl-section" className="seamless-section relative overflow-hidden bg-gradient-to-b from-beige to-cream">
      {/* Background Image with glass overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-cream/85 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-4xl mx-auto section-padding relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block bg-forest-600 text-cream px-4 py-2 rounded-full text-sm font-poppins font-medium mb-6">
            Watch this first
          </div>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-forest-800 mb-6 leading-tight">
            See How Real People Got Their Dream Body
          </h2>
          <p className="text-lg text-forest-700 font-poppins font-light max-w-2xl mx-auto">
            Watch success stories and discover the exact system that has helped thousands achieve their fitness transformation journey
          </p>
        </div>

        <div className="relative aspect-video bg-beige-200 rounded-3xl overflow-hidden shadow-xl border-2 border-sage-200">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Transformation Success Stories"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
