"use client";

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import MetricsSection from '@/components/MetricsSection';
import AISection from '@/components/AISection';
import IntegrationsSection from '@/components/IntegrationsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { useContactForm } from '@/context/ContactFormContext';

const Index = () => {
  const { isOpen } = useContactForm();
  
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="solutions">
        <SolutionsSection />
      </div>
      <div id="metrics">
        <MetricsSection />
      </div>
      <div id="ai">
        <AISection />
      </div>
      <div id="integrations">
        <IntegrationsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <Footer />
      </div>
      {isOpen && <ContactForm />}
    </div>
  );
};

export default Index;
