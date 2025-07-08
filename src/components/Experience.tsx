import React from 'react';
import { MapPin, Calendar, Building, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
    id: 1,
    title: 'Machine Learning Engineer',
    company: 'Rapidev',
    location: 'Islamabad, Pakistan',
    period: '2024 – 2024',
    type: 'Full-time',
    description: 'Worked on real-time video analytics for facial recognition and optimized ML pipelines for deployment.',
    achievements: [
      'Built facial recognition systems using OpenCV, YoloV8, and Milvus',
      'Reduced compute usage by 60% through SSIM-based frame deduplication',
      'Implemented distributed training with Ray to boost training speed',
      'Developed FastAPI inference services deployed via Docker on AWS'
    ],
    technologies: ['Python', 'FastAPI', 'Docker', 'AWS', 'Ray', 'Milvus'],
    color: 'from-purple-600 to-pink-600'
  },
    {
    id: 2,
    title: 'IT Officer (Commissioned Officer)',
    company: 'Pakistan Air Force',
    location: 'Pakistan',
    period: '2017 – 2024',
    type: 'Full-time',
    description: 'Experienced AI/ML Engineer and Technical Leader with a strong background in building data-driven solutions for mission-critical environments. Proven ability to lead teams, manage secure IT operations, and develop end-to-end software systems with real-world impact.',
    achievements: [
      'Built and deployed ML models for real-time ops, using Python, TensorFlow, and scikit-learn.',
      'Led cross-functional teams to deliver secure, scalable AI solutions in high-stakes settings',
      'Promoted to Flight Lieutenant for exceptional tech leadership and innovation.',
      'Managed IT Centre operations, infrastructure, and cybersecurity protocols.',
      'Contributed full-stack dev work on CALMS, an enterprise logistics system used across PAF.',
      'Maintained top-tier standards for ethical AI, system performance, and data integrity.'
    ],
    technologies: ['Python', 'Docker', 'AWS', 'Pandas', 'Matplotlib', 'SQL'],
    color: 'from-blue-600 to-cyan-600'
  }];

  const education = [
    {
      degree: 'M.S. in Robotics and Intelligent Machines Engineering',
      school: 'National University of Science and Technology(NUST), Islamabad',
      period: '2016 - 2018',
      details: 'Thesis: "Traffic Rules Violation Detection Using AI"',
      gpa: '3.6/4.0'
    },
    {
      degree: 'B.S. in Computer Science',
      school: 'University of Engineering and Technology(UET), Taxila',
      period: '2011 - 2015',
      details: 'Thesis: "Accident Prevention Technology for Motorways of Pakistan"',
      gpa: '2.7/4.0'
    },
  ];

  const certifications = [
    'IBM Data Scientist Professional Certificate',
    'Deep Learning Specialization by Andrew Ng.',
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            The path that led me to where I am today! 🌟
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Professional Experience</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-600 rounded-full shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${exp.color}`}>
                        {exp.type}
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h4>
                    <div className="flex items-center space-x-2 mb-3">
                      <Building className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600 font-medium">{exp.company}</span>
                      <MapPin className="h-4 w-4 text-gray-500 ml-2" />
                      <span className="text-gray-600">{exp.location}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <Award className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Education 🎓</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
                  <p className="text-purple-600 font-medium">{edu.school}</p>
                  <p className="text-gray-600 text-sm">{edu.period}</p>
                  <p className="text-gray-600 text-sm">{edu.details}</p>
                  <p className="text-gray-600 text-sm font-medium">GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Certifications 🏆</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <Award className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;