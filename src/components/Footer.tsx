
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" }
  ];

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "How It Works", "Download", "Documentation"]
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Bug Reports", "Feature Requests"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Blog"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "License", "Security"]
    }
  ];

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-cyan-500/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-cyan-400 tracking-wider mb-4">H.A.N.D.Y.</h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Revolutionizing personal computing with intelligent AI assistance. 
                Your helpful companion for navigating daily digital yields.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
                           text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300
                           hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 H.A.N.D.Y. AI Assistant. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with ❤️ for the future of AI assistance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
