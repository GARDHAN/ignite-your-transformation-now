
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Kickstarter",
      duration: "1 Month",
      price: "₹4,999",
      originalPrice: "₹7,999",
      popular: false,
      description: "Perfect for getting started with your fitness journey",
      features: [
        "Personalized workout plan",
        "Basic nutrition guidance",
        "Weekly check-ins",
        "App access",
        "Email support"
      ],
      cta: "Start Your Journey",
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Game Changer",
      duration: "3 Months",
      price: "₹12,999",
      originalPrice: "₹19,999",
      popular: true,
      description: "Most popular - See real transformation results",
      features: [
        "Everything in Kickstarter",
        "Complete meal plans",
        "Bi-weekly video calls",
        "Progress photos analysis",
        "Supplement guidance",
        "24/7 WhatsApp support"
      ],
      cta: "Transform Now",
      gradient: "from-coral-500 to-coral-600"
    },
    {
      name: "Beast Mode",
      duration: "6 Months",
      price: "₹22,999",
      originalPrice: "₹35,999",
      popular: false,
      description: "Complete body recomposition and lifestyle change",
      features: [
        "Everything in Game Changer",
        "Advanced training protocols",
        "Custom macro cycling",
        "Monthly body composition analysis",
        "Mindset coaching sessions",
        "Lifetime plan access"
      ],
      cta: "Go Beast Mode",
      gradient: "from-mint-500 to-mint-600"
    },
    {
      name: "Legend Status",
      duration: "12 Months",
      price: "₹39,999",
      originalPrice: "₹65,999",
      popular: false,
      description: "The ultimate transformation with lifetime support",
      features: [
        "Everything in Beast Mode",
        "Weekly 1-on-1 coaching calls",
        "Custom workout video creation",
        "Family nutrition guidance",
        "Competition prep (if desired)",
        "Lifetime coaching community access",
        "Annual in-person meetup"
      ],
      cta: "Become a Legend",
      gradient: "from-lavender-500 to-lavender-600"
    }
  ];

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-coral-500 font-semibold text-sm uppercase tracking-wide">Investment Plans</span>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold mt-2 mb-6">
            Choose Your <span className="gradient-text">Transformation</span>
            <br />Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan for your <span className="font-semibold text-coral-600">fitness transformation journey</span>. 
            All plans include our proven system and dedicated support.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden hover-lift transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-coral-500 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-coral-500 to-coral-600 text-white text-center py-2 text-sm font-semibold">
                  🔥 MOST POPULAR
                </div>
              )}

              <div className={`p-6 lg:p-8 ${plan.popular ? 'pt-12' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl lg:text-4xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                    <div className="text-sm text-gray-600 mt-1">{plan.duration}</div>
                  </div>

                  <div className="text-xs text-mint-600 font-semibold bg-mint-50 px-3 py-1 rounded-full inline-block">
                    Save {Math.round(((parseInt(plan.originalPrice.replace('₹', '').replace(',', '')) - parseInt(plan.price.replace('₹', '').replace(',', ''))) / parseInt(plan.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className="text-mint-500 mt-0.5">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={scrollToForm}
                  className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-lg transition-all duration-300 text-white font-semibold py-3 rounded-full`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee & Additional Info */}
        <div className="bg-gradient-to-r from-coral-50 to-mint-50 rounded-2xl p-8 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              🛡️ 100% Satisfaction Guarantee
            </h3>
            <p className="text-gray-700 mb-6">
              Not satisfied with your results in the first 30 days? Get a full refund, no questions asked. 
              We're that confident in our <span className="font-semibold text-coral-600">proven transformation system</span>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <span className="text-mint-500 text-lg">💳</span>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-coral-500 text-lg">📱</span>
                <span>Instant Access</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lavender-500 text-lg">🎯</span>
                <span>Results Guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-red-800 font-semibold mb-2">⏰ Limited Time Offer</p>
            <p className="text-red-700 text-sm">
              Current pricing valid only for the next 48 hours. Start your transformation today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
