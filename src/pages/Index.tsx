
import HeroSection from '@/components/HeroSection';
import VSLSection from '@/components/VSLSection';
import AboutSection from '@/components/AboutSection';
import TransformationsSection from '@/components/TransformationsSection';
import WhatYouGetSection from '@/components/WhatYouGetSection';
import PricingSection from '@/components/PricingSection';
import RegistrationForm from '@/components/RegistrationForm';
import InstagramFeed from '@/components/InstagramFeed';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroSection />
      <VSLSection />
      <AboutSection />
      <TransformationsSection />
      <WhatYouGetSection />
      <PricingSection />
      <RegistrationForm />
      <InstagramFeed />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
