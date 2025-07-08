import React, { useState } from 'react';
import { Github, ExternalLink, Eye, Star, GitBranch } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    // {
    //   id: 1,
    //   title: 'AI-Powered Medical Diagnosis',
    //   description: 'Deep learning model for early disease detection using medical imaging. Achieved 94% accuracy on validation set.',
    //   image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Computer Vision', 'Healthcare', 'TensorFlow'],
    //   category: 'computer-vision',
    //   github: '#',
    //   live: '#',
    //   stats: { stars: 127, forks: 34 }
    // },
    // {
    //   id: 2,
    //   title: 'Smart City Traffic Optimization',
    //   description: 'ML-based traffic flow prediction system that reduces congestion by 30% using real-time data analysis.',
    //   image: 'https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Time Series', 'IoT', 'Python'],
    //   category: 'data-science',
    //   github: '#',
    //   live: '#',
    //   stats: { stars: 89, forks: 23 }
    // },
    {
      id: 3,
      title: 'Project # 1',
      description: 'Still in Progress. Please re-visit soon.',
      image: '/assets/images/coming-soon.jpg',
      tags: ['NLP', 'Transformers', 'Multilingual'],
      category: 'nlp',
      github: '#',
      live: '#',
      stats: { stars: 203, forks: 67 }
    },
    // {
    //   id: 4,
    //   title: 'Automated Trading Algorithm',
    //   description: 'ML-driven trading bot with risk management and portfolio optimization. 15% annual return.',
    //   image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Finance', 'Algorithm', 'Risk Management'],
    //   category: 'finance',
    //   github: '#',
    //   live: '#',
    //   stats: { stars: 156, forks: 45 }
    // },
    // {
    //   id: 5,
    //   title: 'Green Energy Forecasting',
    //   description: 'Renewable energy production prediction using weather data and advanced time series models.',
    //   image: 'https://images.pexels.com/photos/9875420/pexels-photo-9875420.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Sustainability', 'Forecasting', 'Climate'],
    //   category: 'data-science',
    //   github: '#',
    //   live: '#',
    //   stats: { stars: 78, forks: 19 }
    // },
    // {
    //   id: 6,
    //   title: 'AI Art Generator',
    //   description: 'Creative AI tool for generating unique artwork using GANs and style transfer techniques.',
    //   image: 'https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['GANs', 'Art', 'Creative AI'],
    //   category: 'computer-vision',
    //   github: '#',
    //   live: '#',
    //   stats: { stars: 234, forks: 89 }
    // },
    //     {
    //   id: 6,
    //   title: 'AI Art Generator',
    //   description: 'Creative AI tool for generating unique artwork using GANs and style transfer techniques.',
    //   image: 'https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['GANs', 'Art', 'Creative AI'],
    //   category: 'computer-vision',
    //   github: '#',
    //   live: '#',
    //   stats: { stars: 234, forks: 89 }
    // },
    //     {
    //   id: 6,
    //   title: 'AI Art Generator',
    //   description: 'Creative AI tool for generating unique artwork using GANs and style transfer techniques.',
    //   image: 'https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['GANs', 'Art', 'Creative AI'],
    //   category: 'computer-vision',
    //   github: '#',
    //   live: '#',
    //   stats: { stars: 234, forks: 89 }
    // },
    //     {
    //   id: 6,
    //   title: 'AI Art Generator',
    //   description: 'Creative AI tool for generating unique artwork using GANs and style transfer techniques.',
    //   image: 'https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['GANs', 'Art', 'Creative AI'],
    //   category: 'computer-vision',
    //   github: '#',
    //   live: '#',
    //   stats: { stars: 234, forks: 89 }
    // },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'computer-vision', name: 'Computer Vision', count: projects.filter(p => p.category === 'computer-vision').length },
    { id: 'nlp', name: 'NLP', count: projects.filter(p => p.category === 'nlp').length },
    { id: 'data-science', name: 'Data Science', count: projects.filter(p => p.category === 'data-science').length },
    { id: 'finance', name: 'Finance', count: projects.filter(p => p.category === 'finance').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Some of my favorite ML projects that I'm proud to share! 🚀
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700 flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700 flex items-center space-x-1">
                    <GitBranch className="h-3 w-3" />
                    <span>{project.stats.forks}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to see more? 🤔
            </h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub for more projects and open-source contributions!
            </p>
            <a
              href="https://github.com/Irtaqa007-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
              <span>View All Projects</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;