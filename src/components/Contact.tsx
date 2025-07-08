import React from 'react';
import { Mail, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'irtaqa007@gmail.com' },
    { icon: MessageCircle, title: 'WhatsApp', value: '+639676853379' },
    { icon: MapPin, title: 'Location', value: 'Islamabad, PAK' },
    { icon: MessageCircle, title: 'Response Time', value: 'Usually within 24 hours' }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com/Irtaqa007-dev', color: 'hover:text-gray-800' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/irtaqa-naveed/', color: 'hover:text-blue-600' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Connect!
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            I'd love to hear from you! Whether it's about a project, collaboration, or just to say hi! 👋
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 h-full flex flex-col">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8">
                  I'm always excited to discuss new opportunities, interesting projects, or just chat about
                  the latest in AI and machine learning. Don't hesitate to reach out!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.title === 'Email' ? `mailto:${info.value}` : '#'}
                      className={`flex items-center space-x-3 p-4 bg-white/80 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 ${info.title === 'Email' ? 'w-full' : ''}`}
                    >
                      <div className="flex-shrink-0">
                        <info.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{info.title}</h4>
                        <p className="text-gray-600 text-xs">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8 h-full flex flex-col">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Me</h3>
                <p className="text-gray-600 mb-6">
                  Stay connected and follow my journey in the world of AI and ML!
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-3 bg-white/80 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-center mt-12 flex-1">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Ready to build something amazing together? 🚀
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Whether you have a crazy idea or need help with your next ML project,
                    I'm here to help make it happen!
                  </p>
                  <div className="flex justify-center space-x-4">
                    <span className="text-3xl animate-bounce">💡</span>
                    <span className="text-3xl animate-bounce animation-delay-200">🤝</span>
                    <span className="text-3xl animate-bounce animation-delay-400">✨</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;