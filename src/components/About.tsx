import React from 'react';
import {
  Code,
  Brain,
  Heart,
  Coffee,
  Plane,
  PawPrint,
  Scissors,
  Target,
  Database
} from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '7', icon: Code },
    { label: 'ML Models Built', value: '4', icon: Brain },
    { label: 'Projects Completed', value: '9', icon: Heart },
    { label: 'Datasets', value: '6', icon: Database },
  ];

  const interests = [
  { name: 'Travel', icon: Plane, color: 'text-purple-600' },
  { name: 'Dogs', icon: PawPrint, color: 'text-yellow-600' },
  { name: 'Knitting', icon: Scissors, color: 'text-pink-600' },
  { name: 'Weapons', icon: Target, color: 'text-red-600' },
];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Get to know the person behind the algorithms! 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 pl-20 text-justify">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hey! I’m Irtaqa — an ML Engineer living in a never-ending situationship with models. Training them, breaking them, fixing them, and then watching them break again. It’s a cycle. But hey, I love it. Been doing this for years now, and somehow I’m still excited every time a model finally converges without acting like it has commitment issues.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              When I’m not buried in experiments, I’m usually traveling, hitting the range, or hanging with dogs that probably judge my code less than humans do. Military background gave me the discipline, ML gave me the headaches — both made me sharper.
           </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              At the end of the day, it’s simple: I build models that (eventually) work, and I stay ready for whatever chaos comes next.
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 transform shadow-xl w-90 h-[380px] flex items-center justify-center">
            <img
                src="/assets/images/irtaqa2.jpg"
                alt="Irtaqa at work"
                className="w-60 h-120 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                <stat.icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            What I Love Besides ML 💖
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-md transition-all duration-300">
                <interest.icon className={`h-5 w-5 ${interest.color}`} />
                <span className="text-gray-700 font-medium">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;