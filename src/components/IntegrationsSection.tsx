
import { Button } from '@/components/ui/button';

const IntegrationsSection = () => {
  const integrations = [
    { name: 'Slack', logo: '💬' },
    { name: 'Jira', logo: '🔧' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'Zendesk', logo: '🎫' },
    { name: 'HubSpot', logo: '🧡' },
    { name: 'Intercom', logo: '💭' },
    { name: 'Confluence', logo: '📝' },
    { name: 'Microsoft Teams', logo: '👥' },
    { name: 'Twilio', logo: '📞' },
    { name: 'Shopify', logo: '🛍️' },
    { name: 'Stripe', logo: '💳' },
    { name: 'GitHub', logo: '🐙' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Seamlessly Connect Your{' '}
            <span className="text-blue-600">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your B2B support operations rely on a suite of tools. Vinaka.ai plays well with others, ensuring your data flows freely and your teams stay connected.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group text-center animate-fade-in hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {integration.logo}
              </div>
              <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                {integration.name}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Visual */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              One Platform, Endless Possibilities
            </h3>
            <p className="text-gray-600 mb-6">
              Connect all your favorite tools and watch your support ecosystem come together seamlessly.
            </p>
            
            {/* Connection Visualization */}
            <div className="relative max-w-md mx-auto">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-sm">vinaka.ai</span>
              </div>
              
              {/* Connection Lines */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-blue-600 to-transparent"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 rotate-45 w-px h-20 bg-gradient-to-b from-blue-600 to-transparent origin-top"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -rotate-45 w-px h-20 bg-gradient-to-b from-blue-600 to-transparent origin-top"></div>
              
              {/* Connected Services */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {['💬', '🔧', '☁️'].map((emoji, index) => (
                  <div key={index} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-lg">{emoji}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 mr-4"
          >
            View All Integrations
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-lg transition-all duration-200"
          >
            Request Custom Integration
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
