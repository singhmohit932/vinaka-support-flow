import { Button } from '@/components/ui/button';
import { useContactForm } from '@/context/ContactFormContext';
import ContactForm from './ContactForm';

const HeroSection = () => {
  const { isOpen: isContactOpen, openContactForm } = useContactForm();

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Empower Your{' '}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Support Team.
              </span>
              <br />
              Transform Customer Experiences.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Seamless B2B customer support starts here. Vinaka.ai is built to elevate your team's efficiency and delight your customers, making every interaction count.
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <Button 
                size="lg" 
                onClick={openContactForm}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                See How We Can Help
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={openContactForm}
                className="w-full sm:w-auto border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-lg transition-all duration-200"
              >
                Contact Our Team
              </Button>
              {isContactOpen && <ContactForm />}
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Trusted by leading B2B enterprises worldwide
            </p>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
                alt="Collaborative support team working together"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-bounce">
              <div className="text-2xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <div className="text-2xl font-bold text-green-600">45%</div>
              <div className="text-sm text-gray-600">Faster Resolution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
