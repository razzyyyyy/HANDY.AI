
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Download, Mic, Settings, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const [ref, isVisible] = useScrollAnimation();

  const steps = [
    {
      icon: <Download className="w-12 h-12" />,
      title: "Download & Install",
      description: "Get H.A.N.D.Y. with a simple download and automatic installation process.",
      step: "01"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Quick Setup",
      description: "Configure your preferences and connect your devices in just a few minutes.",
      step: "02"
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: "Voice Activation",
      description: "Start using voice commands immediately with our advanced recognition system.",
      step: "03"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Experience Magic",
      description: "Watch as H.A.N.D.Y. learns and adapts to make your life easier every day.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get started with H.A.N.D.Y. in four simple steps and transform your digital experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full 
                              flex items-center justify-center text-white shadow-lg shadow-cyan-500/30
                              hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 border-2 border-cyan-400 
                              rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm">
                  {step.step}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r 
                              from-cyan-500 to-transparent transform translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
