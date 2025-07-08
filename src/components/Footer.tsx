import React from 'react';
import { Heart, Coffee, Code, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-6 w-6" />
            <span className="text-xl font-bold">Irtaqa Naveed</span>
            <Sparkles className="h-6 w-6" />
          </div>
          
          <p className="text-purple-200 mb-6">
            ML Engineer • AI Enthusiast • Problem Solver
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-purple-200 mb-6">
            <span>Made with</span>
            <Heart className="h-5 w-5 text-pink-400 animate-pulse" />
            <span>and lots of</span>
            <Coffee className="h-5 w-5 text-yellow-400" />
            <span>by Irtaqa</span>
          </div>
          
          <div className="border-t border-purple-800 pt-6">
            <p className="text-purple-300 text-sm">
              © {new Date().getFullYear()} Irtaqa Naveed. All rights reserved.
              <span className="ml-2">
                Thanks for visiting my little corner of the internet! 🌟
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;