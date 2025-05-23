
import { Button } from '@/components/ui/button';
import { Sparkles, MessageSquare, Zap } from 'lucide-react';

const AISection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-semibold text-lg">AI-Powered Innovation</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Meet Your New AI Partner:{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Truly Native, Truly Intuitive
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              At vinaka.ai, AI isn't an add-on; it's at our core. We've built an AI-native platform designed to understand, learn, and empower your agents like never before.
            </p>

            {/* Key Highlight */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <div className="flex items-start">
                <MessageSquare className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Natural Language Interface (NLI)</h3>
                  <p className="text-blue-100">
                    Leverage <strong>Natural Language Interface (NLI)</strong> to effortlessly query customer data, automate tasks, and run complex workflows using simple, everyday language. No coding required, just smarter support.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-blue-100 mb-8 italic">
              "Imagine agents instantly retrieving insights, predicting issues, and automating responses – all by just asking. That's the power of vinaka.ai."
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore AI Capabilities
            </Button>
          </div>

          {/* Right Visual */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Interface Mockup */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Search Bar */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center">
                    <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700 text-sm">Ask vinaka.ai anything...</span>
                  </div>
                  <div className="mt-2 text-blue-600 font-medium">
                    "Show me all tickets from VIP customers this week"
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Found 23 tickets</div>
                    <div className="text-xs text-green-600">Average resolution: 2.3 hours</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Priority escalations: 3</div>
                    <div className="text-xs text-orange-600">Requires immediate attention</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-3 shadow-lg animate-pulse">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-3 shadow-lg animate-bounce">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
