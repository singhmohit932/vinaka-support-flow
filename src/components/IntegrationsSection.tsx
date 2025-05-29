"use client";

import { Button } from '@/components/ui/button';
import styles from '@/styles/components/IntegrationsSection.module.css';
import { 
  FaSlack, 
  FaJira, 
  FaSalesforce, 
  FaMicrosoft, 
  FaGithub,
  FaShopify,
  FaStripe,
  FaArrowRight,
  FaGitlab,
  FaBitbucket,
  FaSquare
} from 'react-icons/fa';
import { 
  SiZendesk, 
  SiHubspot, 
  SiIntercom,
  SiNotion,
  SiGoogle,
  SiAirtable,
  SiAsana,
  SiTrello,
  SiLinear
} from 'react-icons/si';
import { FiLink } from 'react-icons/fi';
import dynamic from 'next/dynamic';

// Define types for the integration items
interface Integration {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface IntegrationCategory {
  title: string;
  integrations: Integration[];
}

// Import motion from framer-motion with SSR disabled
const motion = {
  div: dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false })
};

const IntegrationsSection = () => {
  const categories: IntegrationCategory[] = [
    {
      title: 'Communication',
      integrations: [
        { name: 'Slack', icon: <FaSlack />, color: '#4A154B' },
        { name: 'Microsoft Teams', icon: <FaMicrosoft />, color: '#6264A7' },
        { name: 'Intercom', icon: <SiIntercom />, color: '#24A0ED' },
      ]
    },
    {
      title: 'Productivity',
      integrations: [
        { name: 'Notion', icon: <SiNotion />, color: '#000000' },
        { name: 'Google Workspace', icon: <SiGoogle />, color: '#4285F4' },
        { name: 'Airtable', icon: <SiAirtable />, color: '#FFBF00' },
      ]
    },
    {
      title: 'Project Management',
      integrations: [
        { name: 'Jira', icon: <FaJira />, color: '#0052CC' },
        { name: 'Asana', icon: <SiAsana />, color: '#273347' },
        { name: 'Trello', icon: <SiTrello />, color: '#0079BF' },
        { name: 'Linear', icon: <SiLinear />, color: '#5E6AD2' },
      ]
    },
    {
      title: 'CRM & Support',
      integrations: [
        { name: 'Salesforce', icon: <FaSalesforce />, color: '#00A1E0' },
        { name: 'Zendesk', icon: <SiZendesk />, color: '#03363D' },
        { name: 'HubSpot', icon: <SiHubspot />, color: '#FF7A59' },
      ]
    },
    {
      title: 'Development',
      integrations: [
        { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
        { name: 'GitLab', icon: <FaGitlab />, color: '#FCA121' },
        { name: 'Bitbucket', icon: <FaBitbucket />, color: '#0052CC' },
      ]
    },
    {
      title: 'E-commerce & Payments',
      integrations: [
        { name: 'Shopify', icon: <FaShopify />, color: '#7AB55C' },
        { name: 'Stripe', icon: <FaStripe />, color: '#635BFF' },
        { name: 'Square', icon: <FaSquare />, color: '#008B5A' },
      ]
    },
  ];

  type Company = {
    name: string;
  };

  const trustedBy: Company[] = [
    { name: 'Shopify' },
    { name: 'Netlify' },
    { name: 'Vercel' },
    { name: 'Linear' },
  ];

  // If motion is not loaded, render a simpler version without animations
  if (!motion.div) {
    return (
      <section className={styles.container}>
        <div className={styles.wrapper}>
          {/* Content without animations */}
          <div className={styles.header}>
            <span className={styles.pill}>INTEGRATIONS</span>
            <h2 className={styles.title}>Connect your favorite tools</h2>
            <p className={styles.subtitle}>
              Vinaka.ai works seamlessly with the tools your team already uses. Connect your stack and get more done in less time.
            </p>
          </div>
          {/* Rest of the content without animations */}
        </div>
      </section>
    );
  }

  const MotionDiv = motion.div;

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.pill}>INTEGRATIONS</span>
          <h2 className={styles.title}>
            Connect your favorite tools
          </h2>
          <p className={styles.subtitle}>
            Vinaka.ai works seamlessly with the tools your team already uses. Connect your stack and get more done in less time.
          </p>
        </div>

        {/* Categories Grid */}
        <div className={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <MotionDiv 
              key={category.title}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <ul className={styles.integrationsList}>
                {category.integrations.map((integration) => (
                  <li key={integration.name} className={styles.integrationItem}>
                    <div 
                      className={styles.integrationIcon}
                      style={{ backgroundColor: `${integration.color}15` }}
                    >
                      {integration.icon}
                    </div>
                    <span>{integration.name}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.viewAllButton}>
                View all {category.title.toLowerCase()} apps
                <FaArrowRight className={styles.arrowIcon} />
              </button>
            </MotionDiv>
          ))}
        </div>

        {/* API Section */}
        <div className={styles.apiSection}>
          <div className={styles.apiContent}>
            <div className={styles.apiIcon}>
              <FiLink />
            </div>
            <h3 className={styles.apiTitle}>Don't see your tool?</h3>
            <p className={styles.apiDescription}>
              Our flexible API and webhooks make it easy to connect with any service.
              Build custom integrations in minutes.
            </p>
            <Button variant="outline" className={styles.apiButton}>
              View API Documentation
            </Button>
          </div>
        </div>

        {/* Trusted By */}
        <div className={styles.trustedBy}>
          <p className={styles.trustedByText}>Trusted by innovative teams at</p>
          <div className={styles.logoGrid}>
            {trustedBy.map((company, index) => (
              <div key={index} className={styles.logoItem}>
                <span className={styles.logoText}>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
