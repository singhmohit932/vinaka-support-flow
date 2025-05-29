"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import styles from '@/styles/components/FAQSection.module.css';

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
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Frequently Asked{' '}
            <span className={styles.highlight}>Questions</span>
          </h2>
          <p className={styles.subtitle}>
            Get answers to common questions about vinaka.ai and how it can transform your support operations.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={styles.faqItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={styles.faqButton}
              >
                <h3 className={styles.question}>
                  {faq.question}
                </h3>
                <div className={styles.chevron}>
                  {openFAQ === index ? (
                    <ChevronUp className={styles.chevronIcon} />
                  ) : (
                    <ChevronDown className={styles.chevronIcon} />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className={styles.answerContainer}>
                  <div className={styles.answerContent}>
                    <p className={styles.answer}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta} style={{ animationDelay: '0.8s' }}>
          <p className={styles.ctaText}>
            Didn't find your answer? We're here to help!
          </p>
          <Button 
            size="lg" 
            className={styles.ctaButton}
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
