import React, { useState } from 'react';
import { Code, Database, Brain, Zap, Cpu, BarChart3 } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('ml');

  const skillCategories = {
    ml: {
      title: 'Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      skills: [
        { name: 'TensorFlow', level: 95 },
        { name: 'PyTorch', level: 90 },
        { name: 'Scikit-learn', level: 95 },
        { name: 'Keras', level: 85 },
        { name: 'OpenCV', level: 80 },
        { name: 'Hugging Face', level: 85 },
      ]
    },
    programming: {
      title: 'Programming',
      icon: Code,
      color: 'from-blue-600 to-cyan-600',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 85 },
        { name: 'C++', level: 65 },
      ]
    },
    data: {
      title: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-green-600 to-teal-600',
      skills: [
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 90 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Seaborn', level: 80 },
        { name: 'Tableau', level: 75 },
        { name: 'Power BI', level: 70 },
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: Zap,
      color: 'from-orange-600 to-red-600',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Google Cloud', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 70 },
        { name: 'MLflow', level: 80 },
        { name: 'Apache Spark', level: 75 },
      ]
    },
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            The tools and technologies I love working with! 🛠️
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const cat = skillCategories[category];
            const Icon = cat.icon;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:shadow-md'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              {skillCategories[activeCategory].title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            My Daily Tech Stack ☕
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Jupyter', 'Git', 'VS Code'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;