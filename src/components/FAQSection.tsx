
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How is this different from other online fitness programs?",
      answer: "Unlike generic programs, every aspect is personalized - your workout plan, nutrition guide, and meal plans are created specifically for your body type, goals, and lifestyle. You get direct access to me as your dedicated transformation coach, not just pre-recorded videos."
    },
    {
      question: "Can I really get results training from home?",
      answer: "Absolutely! Many of my most successful transformations happened with home workouts. I design programs using minimal equipment or bodyweight exercises. The key is having the right plan, proper form guidance, and consistent support - which you get with my coaching."
    },
    {
      question: "What if I'm a complete beginner with no fitness experience?",
      answer: "Perfect! Most of my clients started as complete beginners. I specialize in taking people from zero fitness experience to their best physique. Your program will start at your current level and progressively advance as you get stronger."
    },
    {
      question: "How much time do I need to commit daily?",
      answer: "Workouts range from 30-60 minutes, 3-6 days per week depending on your chosen plan and availability. I work with your schedule - whether you have 30 minutes or 2 hours, we'll create a plan that fits your life."
    },
    {
      question: "Will you create Indian meal plans that I actually enjoy?",
      answer: "Yes! All nutrition plans are designed around Indian foods and spices you love. No bland chicken and broccoli - think dal, sabzi, roti, rice, and Indian proteins prepared in healthy, delicious ways that support your goals."
    },
    {
      question: "What if I don't see results in the first month?",
      answer: "I'm so confident in my proven system that I offer a 100% satisfaction guarantee. If you follow the plan and don't see significant progress in 30 days, you get a full refund. Your success is my reputation."
    },
    {
      question: "How do you track my progress and provide support?",
      answer: "Through our dedicated app, regular check-ins, progress photos, body measurements, and direct WhatsApp support. I personally review every client's progress and adjust plans as needed. You're never alone in this journey."
    },
    {
      question: "Is this suitable for women too?",
      answer: "Absolutely! About 40% of my clients are women. I create gender-specific programs that address unique needs - whether it's toning, strength building, or body recomposition. The principles of transformation are universal."
    },
    {
      question: "Can I upgrade or change my plan later?",
      answer: "Yes, you can upgrade your plan at any time. Many clients start with shorter programs and extend when they see amazing results. I'll help you choose the best option based on your progress and goals."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-coral-500 font-semibold text-sm uppercase tracking-wide">Got Questions?</span>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold mt-2 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about starting your <span className="font-semibold text-coral-600">fitness transformation journey</span>
          </p>
        </div>

        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl px-6 hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-coral-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-gradient-to-r from-coral-50 to-mint-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              I'm here to help! Get personalized answers to your specific situation.
            </p>
            <button 
              onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Ask Me Directly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
