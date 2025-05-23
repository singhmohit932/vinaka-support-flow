
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import MetricsSection from '@/components/MetricsSection';
import AISection from '@/components/AISection';
import IntegrationsSection from '@/components/IntegrationsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <HeroSection />
      <SolutionsSection />
      <MetricsSection />
      <AISection />
      <IntegrationsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
