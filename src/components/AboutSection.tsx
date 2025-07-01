
const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className="animate-slide-in-left">
            <div className="mb-6">
              <span className="text-coral-500 font-semibold text-sm uppercase tracking-wide">Meet Your Coach</span>
              <h2 className="text-3xl lg:text-5xl font-playfair font-bold mt-2 mb-6">
                From <span className="gradient-text">Struggle</span> to 
                <br />Transformation Coach
              </h2>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                I wasn't always the <span className="font-semibold text-coral-600">transformation coach</span> you see today. 
                Just 5 years ago, I was struggling with my own body image, low confidence, and poor health.
              </p>
              
              <p>
                After trying countless diet plans and workout routines that never worked, I discovered the 
                science-based approach to <span className="font-semibold">body recomposition</span> that changed everything.
              </p>

              <p>
                Today, I've helped over <span className="font-bold text-mint-600">1000+ people</span> across India 
                achieve their dream physique through my <span className="font-semibold">personalized workout and nutrition plans</span>.
              </p>

              <div className="bg-gradient-to-r from-coral-50 to-mint-50 p-6 rounded-xl border-l-4 border-coral-500">
                <p className="font-semibold text-gray-800 mb-2">"My Mission:"</p>
                <p className="italic">
                  To prove that anyone can achieve their <span className="font-semibold">best physique</span> with the right guidance, 
                  personalized approach, and unwavering support.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md hover-lift">
                <div className="text-2xl font-bold text-coral-500">1000+</div>
                <div className="text-sm text-gray-600">Transformations</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover-lift">
                <div className="text-2xl font-bold text-mint-500">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover-lift">
                <div className="text-2xl font-bold text-lavender-500">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"
                  alt="Abhiram Nair - Online fitness transformation coach"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg hover-lift">
                <div className="text-center">
                  <div className="text-xl font-bold text-coral-500">💪</div>
                  <div className="text-xs font-semibold">Certified Coach</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg hover-lift">
                <div className="text-center">
                  <div className="text-xl font-bold text-mint-500">🏆</div>
                  <div className="text-xs font-semibold">Best Results</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-coral-200 rounded-full opacity-20"></div>
              <div className="absolute bottom-1/4 -right-8 w-12 h-12 bg-mint-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
