
import { useTypewriter } from '../hooks/useTypewriter';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const typewriterText = useTypewriter({
    words: ['Your Personal AI Assistant', 'Voice Command Recognition', 'Smart Device Control', 'Efficient Task Management'],
    delay: 100,
    deleteDelay: 50,
  });

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            H.A.N.D.Y.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-2">
            Helpful Assistant Navigating Daily Yields
          </p>
        </div>

        <div className="h-20 mb-12">
          <p className="text-2xl md:text-4xl font-light text-cyan-300">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of personal computing with H.A.N.D.Y., your intelligent companion 
            designed to streamline your digital life through advanced AI technology.
          </p>
          
          <button
            onClick={scrollToFeatures}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 
                     text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 
                     transition-all duration-300 transform hover:scale-105 shadow-lg 
                     shadow-cyan-500/25 hover:shadow-cyan-500/40"
          >
            Discover Features
            <ChevronDown className="ml-2 animate-bounce" size={20} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown 
          className="text-cyan-400 animate-bounce cursor-pointer hover:text-cyan-300 transition-colors"
          size={32}
          onClick={scrollToFeatures}
        />
      </div>
    </section>
  );
};

export default Hero;
