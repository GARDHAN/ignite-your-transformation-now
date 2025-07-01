
const AboutSection = () => {
  return (
    <section className="seamless-section soft-lavender">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-dm-sans font-light text-soft-gray leading-tight">
              Meet Your Coach
            </h2>
            
            <div className="space-y-6 text-muted-gray font-inter font-light leading-relaxed text-lg">
              <p>
                I wasn't always the transformation coach you see today. 
                Just 5 years ago, I was struggling with my own body image, low confidence, and poor health.
              </p>
              
              <p>
                After trying countless approaches that never worked, I discovered the 
                science-based method that changed everything for me and now for over 1000+ people across India.
              </p>

              <p className="italic text-soft-gray font-medium">
                "My mission is simple: to prove that anyone can achieve their best physique with the right guidance and unwavering support."
              </p>
            </div>

            <div className="flex space-x-8 text-center">
              <div>
                <div className="text-3xl font-dm-sans font-medium text-soft-gray">1000+</div>
                <div className="text-sm text-muted-gray">Transformations</div>
              </div>
              <div>
                <div className="text-3xl font-dm-sans font-medium text-soft-gray">5+</div>
                <div className="text-sm text-muted-gray">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-dm-sans font-medium text-soft-gray">100%</div>
                <div className="text-sm text-muted-gray">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/c4f56d01-83f8-4c7a-a802-a3a8a12651c3.png"
              alt="Abhiram Nair - Online fitness transformation coach"
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />
            
            {/* Soft arrow illustration */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-6xl opacity-30 rotate-12">
              ↗️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
