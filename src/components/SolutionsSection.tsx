
import { MessageSquare, Ticket, BookOpen, Zap } from 'lucide-react';
import styles from '@/styles/components/SolutionsSection.module.css';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: MessageSquare,
      title: 'Unified Omnichannel Experience',
      description: 'Manage all customer interactions – email, chat, social, voice – from a single, intuitive dashboard. Never miss a query again.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Ticket,
      title: 'Intelligent Ticket Management',
      description: 'Streamline ticket resolution with AI-powered routing, prioritization, and real-time insights, reducing agent workload and improving FCR.',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Dynamic Knowledge Base',
      description: 'Empower agents and customers with an always-on, AI-curated knowledge base, deflecting common queries and providing instant answers.',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Automated Workflow Optimization',
      description: 'Automate repetitive tasks and routine processes, freeing up your agents to focus on complex, high-value customer interactions.',
      gradient: 'from-orange-500 to-blue-500'
    }
  ];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Unlock Efficiency Across Every{' '}
            <span className={styles.highlight}>Support Channel</span>
          </h2>
          <p className={styles.subtitle}>
            Our AI-native platform integrates seamlessly to provide a unified experience, boosting agent productivity and customer satisfaction.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className={styles.grid}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={styles.card}
              style={{
                animationDelay: `${index * 0.1}s`,
                '--gradient': solution.gradient,
              } as React.CSSProperties}
            >
              {/* Icon */}
              <div className={styles.iconContainer} style={{ background: `linear-gradient(to right, ${solution.gradient.replace('from-', '').replace('to-', '')})` }}>
                <solution.icon className={styles.icon} />
              </div>

              {/* Content */}
              <h3 className={styles.cardTitle}>
                {solution.title}
              </h3>
              <p className={styles.cardDescription}>
                {solution.description}
              </p>

              {/* Hover Effect */}
              <div className={styles.hoverEffect}>
                <div className={styles.hoverLine} style={{ background: `linear-gradient(to right, ${solution.gradient.replace('from-', '').replace('to-', '')})` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
