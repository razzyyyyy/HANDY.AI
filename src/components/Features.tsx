
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mic, Smartphone, FolderOpen, Shield, Brain, Zap } from 'lucide-react';

const Features = () => {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Command Recognition",
      description: "Advanced speech processing technology that understands natural language commands with 99% accuracy."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Device Control",
      description: "Seamlessly control your smart devices, launch applications, and manage system settings with simple voice commands."
    },
    {
      icon: <FolderOpen className="w-8 h-8" />,
      title: "File & Task Management",
      description: "Intelligent file organization, automated task scheduling, and productivity optimization for your daily workflow."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "System Scanning",
      description: "Real-time system monitoring, security scans, and performance optimization with detailed feedback reports."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Learning",
      description: "Adaptive learning algorithms that understand your preferences and improve assistance over time."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Ultra-responsive processing with sub-second response times for all commands and requests."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the advanced capabilities that make H.A.N.D.Y. your ultimate digital assistant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20 
                         hover:border-cyan-500/40 transition-all duration-500 hover:transform hover:scale-105
                         shadow-lg hover:shadow-cyan-500/20 ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-cyan-400 mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white text-center">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
