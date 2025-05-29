
import { Button } from '@/components/ui/button';
import { Sparkles, MessageSquare, Zap } from 'lucide-react';
import styles from '@/styles/components/AISection.module.css';

const AISection = () => {
  return (
    <section className={styles.container}>
      {/* Background Effects */}
      <div className={styles.background}>
        <div className={styles.backgroundPattern}></div>
      </div>
      
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.content}>
            <div className={styles.header}>
              <Sparkles className={styles.badgeIcon} />
              <span className={styles.badge}>AI-Powered Innovation</span>
            </div>
            
            <h2 className={styles.title}>
              Meet Your New AI Partner:{' '}
              <span className={styles.highlight}>
                Truly Native, Truly Intuitive
              </span>
            </h2>
            
            <p className={styles.description}>
              At vinaka.ai, AI isn't an add-on; it's at our core. We've built an AI-native platform designed to understand, learn, and empower your agents like never before.
            </p>

            {/* Key Highlight */}
            <div className={styles.highlightCard}>
              <div className={styles.highlightContent}>
                <MessageSquare className={styles.highlightIcon} />
                <div>
                  <h3 className={styles.highlightTitle}>Natural Language Interface (NLI)</h3>
                  <p className={styles.highlightText}>
                    Leverage <strong>Natural Language Interface (NLI)</strong> to effortlessly query customer data, automate tasks, and run complex workflows using simple, everyday language. No coding required, just smarter support.
                  </p>
                </div>
              </div>
            </div>

            <p className={styles.quote}>
              "Imagine agents instantly retrieving insights, predicting issues, and automating responses – all by just asking. That's the power of vinaka.ai."
            </p>

            <Button 
              size="lg" 
              className={styles.ctaButton}
            >
              <Zap className={styles.ctaIcon} />
              Explore AI Capabilities
            </Button>
          </div>

          {/* Right Visual */}
          <div className={styles.visualContainer} style={{ animationDelay: '0.2s' }}>
            <div className={styles.visualWrapper}>
              {/* Main Interface Mockup */}
              <div className={styles.mockup}>
                <div className={styles.windowControls}>
                  <div className={styles.windowButtonRed}></div>
                  <div className={styles.windowButtonYellow}></div>
                  <div className={styles.windowButtonGreen}></div>
                </div>
                
                {/* Search Bar */}
                <div className={styles.searchBar}>
                  <div className={styles.searchBarHeader}>
                    <Sparkles className={styles.searchIcon} />
                    <span className={styles.searchPlaceholder}>Ask vinaka.ai anything...</span>
                  </div>
                  <div className={styles.searchQuery}>
                    "Show me all tickets from VIP customers this week"
                  </div>
                </div>

                {/* Results */}
                <div className={styles.results}>
                  <div className={styles.resultItem}>
                    <div className={styles.resultText}>Found 23 tickets</div>
                    <div className={styles.resultStats}>Average resolution: 2.3 hours</div>
                  </div>
                  <div className={styles.resultItem}>
                    <div className={styles.resultText}>Priority escalations: 3</div>
                    <div className={styles.resultAlert}>Requires immediate attention</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className={styles.floatingElementTopRight}>
                <Sparkles className={styles.floatingIcon} />
              </div>
              
              <div className={styles.floatingElementBottomLeft}>
                <Zap className={styles.floatingIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
