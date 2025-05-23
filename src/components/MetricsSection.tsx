
import { Button } from '@/components/ui/button';
import { TrendingUp, Target, Heart } from 'lucide-react';

const MetricsSection = () => {
  const metrics = [
    {
      icon: TrendingUp,
      metric: '+40%',
      title: 'Deflection Rate',
      description: 'Reduce inbound ticket volume by empowering customers with instant self-service answers.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Target,
      metric: '+60%',
      title: 'FCR',
      description: 'Equip your agents with the right information at their fingertips for faster, more effective resolutions.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Heart,
      metric: '+25 Points',
      title: 'CSAT Boost',
      description: 'Transform customer satisfaction with personalized, efficient, and empathetic support experiences.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Drive Tangible Results:{' '}
            <span className="text-blue-600">Experience Real ROI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vinaka.ai isn't just a platform; it's a catalyst for measurable improvement in your support operations.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`${metric.bgColor} ${metric.borderColor} border-2 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${metric.color} bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <metric.icon className="w-8 h-8" />
              </div>

              {/* Metric */}
              <div className={`text-4xl lg:text-5xl font-bold ${metric.color} mb-2`}>
                {metric.metric}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {metric.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 mr-4"
          >
            Calculate Your ROI
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-lg transition-all duration-200"
          >
            See Our Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
