import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Download as DownloadIcon, CheckCircle, Star } from 'lucide-react';

const Download = () => {
  const [ref, isVisible] = useScrollAnimation();

  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    
    // Set the file URL to point to HANDY.html in public directory
    link.href = '/HANDY.html';
    
    // Set the download attribute to force download instead of navigation
    link.download = 'HANDY.html';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    "Cross-platform compatibility",
    "24/7 AI assistance",
    "Privacy-focused design",
    "Regular updates & improvements"
  ];

  return (
    <section id="download" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their digital experience with H.A.N.D.Y.
          </p>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">H.A.N.D.Y. Pro</h3>
                <ul className="space-y-4 text-left">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-2">Free</div>
                  <div className="text-gray-400">Forever</div>
                </div>
                
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 
                           text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 
                           transition-all duration-300 transform hover:scale-105 shadow-lg 
                           shadow-cyan-500/25 hover:shadow-cyan-500/40 text-lg"
                >
                  <DownloadIcon className="mr-3" size={24} />
                  Download Now
                </button>
                
                <div className="flex items-center justify-center mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-400">5.0 (2,847 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Compatible with Windows, macOS, and Linux • No credit card required • Instant activation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Download;
