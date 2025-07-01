
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "The Starter",
      duration: "1 Month",
      description: "Perfect for getting started with your fitness journey",
      features: [
        "Personalized workout plan",
        "Basic nutrition guidance", 
        "Weekly check-ins",
        "App access"
      ]
    },
    {
      name: "The Breakthrough", 
      duration: "3 Months",
      description: "Most popular - See real transformation results",
      features: [
        "Everything in The Starter",
        "Complete meal plans",
        "Bi-weekly video calls",
        "Progress analysis",
        "24/7 support"
      ],
      popular: true
    },
    {
      name: "The Total Shift",
      duration: "6 Months", 
      description: "Complete body recomposition and lifestyle change",
      features: [
        "Everything in The Breakthrough",
        "Advanced training protocols",
        "Custom macro cycling",
        "Monthly body analysis",
        "Mindset coaching"
      ]
    }
  ];

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="seamless-section soft-peach">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-dm-sans font-light text-soft-gray mb-6 leading-tight">
            Choose Your Journey
          </h2>
          <p className="text-lg text-muted-gray font-inter font-light max-w-2xl mx-auto">
            Select the perfect plan for your fitness transformation journey
          </p>
        </div>

        {/* Plans - no containers, seamless flow */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`text-center space-y-6 transition-all duration-300 hover-lift ${
                plan.popular ? 'transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="text-sm font-dm-sans font-medium text-soft-gray mb-4">
                  ✨ Most Popular
                </div>
              )}

              <div className="space-y-3">
                <h3 className="text-2xl font-dm-sans font-medium text-soft-gray">{plan.name}</h3>
                <div className="text-muted-gray font-inter text-sm">{plan.duration}</div>
                <p className="text-muted-gray font-inter font-light text-sm">{plan.description}</p>
              </div>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-center gap-2">
                    <span className="text-green-400 text-sm">✓</span>
                    <span className="text-muted-gray font-inter font-light text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={scrollToForm}
                className="bg-soft-gray hover:bg-gray-600 text-white font-dm-sans font-normal px-8 py-3 rounded-full transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-gray font-inter font-light mb-6">
            100% satisfaction guarantee - Not satisfied in the first 30 days? Get a full refund.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-gray font-inter font-light">
            <div>💳 Secure Payment</div>
            <div>📱 Instant Access</div>
            <div>🎯 Results Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
