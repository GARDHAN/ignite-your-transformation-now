
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-sage-100 to-sage-200 text-forest-800 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4 text-forest-800">
              Abhiram Nair
            </h3>
            <p className="text-forest-700 font-poppins mb-6 max-w-md">
              India's trusted <span className="text-forest-600 font-semibold">online fitness transformation coach</span> helping 1000+ people achieve their dream physique through personalized workout and nutrition plans.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/abhiramnair" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-sm">📷</span>
              </a>
              <a href="https://www.youtube.com/@abhiramnair" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-sm">📺</span>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-sm text-cream">💬</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4 text-forest-800">Quick Links</h4>
            <ul className="space-y-2 text-forest-700 font-poppins">
              <li><a href="#vsl-section" className="hover:text-forest-600 transition-colors">Success Stories</a></li>
              <li><a href="#transformations" className="hover:text-forest-600 transition-colors">Transformations</a></li>
              <li><a href="#pricing" className="hover:text-forest-600 transition-colors">Coaching Plans</a></li>
              <li><a href="#registration-form" className="hover:text-forest-600 transition-colors">Get Started</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4 text-forest-800">Contact</h4>
            <div className="space-y-3 text-forest-700 font-poppins">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:coach@abhiramnair.com" className="hover:text-forest-600 transition-colors">
                  coach@abhiramnair.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📱</span>
                <a href="tel:+919876543210" className="hover:text-forest-600 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Keywords for SEO */}
        <div className="border-t border-sage-300 pt-8 mb-8">
          <div className="text-center text-sm text-forest-700 font-poppins">
            <p className="mb-2">
              <span className="font-semibold">Specializing in:</span> Online fitness coaching India • Personalized workout and nutrition plans • 
              Body recomposition • Muscle gain and fat loss programs • Fitness transformation journey • 
              Best online fitness coaching • Holistic fitness and mindset coaching
            </p>
            <p>
              Transform your body, build confidence, and start your fitness journey today with India's most trusted transformation coach
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-sage-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-forest-700 font-poppins">
          <p>&copy; {currentYear} Abhiram Nair. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-forest-600 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-forest-600 transition-colors">Terms of Service</a>
            <a href="/refund" className="hover:text-forest-600 transition-colors">Refund Policy</a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-sage-300 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-forest-700 font-poppins">
            <div className="flex items-center gap-1">
              <span className="text-forest-600">🔒</span>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-blue-400">💳</span>
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              <span>5-Star Rated Coach</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-forest-600">✅</span>
              <span>1000+ Success Stories</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
