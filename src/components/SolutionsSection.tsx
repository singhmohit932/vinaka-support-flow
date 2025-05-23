
import { MessageSquare, Ticket, BookOpen, Zap } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unlock Efficiency Across Every{' '}
            <span className="text-blue-600">Support Channel</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-native platform integrates seamlessly to provide a unified experience, boosting agent productivity and customer satisfaction.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`h-1 w-full bg-gradient-to-r ${solution.gradient} rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
