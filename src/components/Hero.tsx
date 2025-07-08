import React, { useState, useEffect } from 'react';
import {Github, Linkedin, Mail, Download, ArrowDown, MessageCircle} from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['My models are confident. Wrong but confidnet.🤖', 'Automating the future, while still debugging the present. 🤯', "AI won't steal your job. I might 😎"];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='0.05'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15 15v-30l-15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-purple-200 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pink-200 rounded-full animate-float animation-delay-1000 opacity-60"></div>
        <div className="absolute bottom-40 left-40 w-20 h-20 bg-blue-200 rounded-full animate-float animation-delay-2000 opacity-60"></div>
        <div className="absolute bottom-20 right-40 w-14 h-14 bg-purple-200 rounded-full animate-float animation-delay-3000 opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/assets/images/irtaqa3.jpg"
              alt="Irtaqa Naveed"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white/50 backdrop-blur-sm relative z-0"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Hi, I'm Irtaqa! 👋
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold mb-8 h-12">
            <span className="text-grey-800">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            ML engineer with a non-traditional path — from military systems to machine learning. 7+ years in tech, 4 in Machine Learning, and a deep appreciation for clean code, smart models, and systems that perform under pressure. Weapons and algorithms have more in common than you'd think.✨
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
                onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/resume/Irtaqa_Naveed_ML.pdf';
                link.download = 'Irtaqa_Naveed_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                }}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/Irtaqa007-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
              >
                <Github className="h-6 w-6 text-gray-700 group-hover:text-purple-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/irtaqa-naveed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-gray-700 group-hover:text-blue-600" />
              </a>
             <a
  href="whatsapp://send?phone=639676853379&text=Hey%20Irtaqa!%20I%20would%20like%20to%20know%20more%20about%20your%20ML%20Services."
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
>
  <MessageCircle className="h-6 w-6 text-gray-700 group-hover:text-pink-600" />
</a>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;