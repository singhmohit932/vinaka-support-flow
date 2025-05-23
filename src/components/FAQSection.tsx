
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is vinaka.ai?",
      answer: "Vinaka.ai is an AI-native B2B customer support platform designed to empower support teams with intelligent automation, omnichannel management, and natural language interfaces to transform customer experiences."
    },
    {
      question: "How does AI benefit my support team?",
      answer: "Our AI provides intelligent ticket routing, automated responses, predictive insights, and natural language querying capabilities. This reduces manual work, improves resolution times, and allows agents to focus on complex, high-value interactions."
    },
    {
      question: "Is vinaka.ai scalable for enterprise teams?",
      answer: "Absolutely. Vinaka.ai is built for enterprise-scale operations with robust infrastructure, advanced security measures, and seamless integrations that grow with your business needs."
    },
    {
      question: "What about data security and compliance?",
      answer: "We prioritize security with enterprise-grade encryption, SOC 2 compliance, GDPR adherence, and comprehensive audit trails. Your customer data is protected with the highest industry standards."
    },
    {
      question: "How quickly can we implement vinaka.ai?",
      answer: "Most teams are up and running within 2-4 weeks. Our implementation team provides dedicated support, training, and migration assistance to ensure a smooth transition with minimal disruption."
    },
    {
      question: "Do you offer training and support?",
      answer: "Yes! We provide comprehensive onboarding, ongoing training sessions, dedicated customer success managers, and 24/7 technical support to ensure your team maximizes the platform's potential."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to common questions about vinaka.ai and how it can transform your support operations.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-gray-600 mb-6">
            Didn't find your answer? We're here to help!
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
