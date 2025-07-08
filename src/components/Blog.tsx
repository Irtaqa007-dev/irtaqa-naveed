import React, { useState } from 'react';
import { Calendar, Clock, Eye, Heart, MessageCircle, Coffee, Lightbulb, Zap } from 'lucide-react';

const Blog = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const blogPosts = [
    {
      id: 1,
      title: "My First Dummy Blog",
      excerpt: "In this section I will be posting my findings and experiments as well as challanges I have faced.  🐱",
      image: "/assets/images/coming-soon-mini.jpg",
      date: "2024-01-15",
      readTime: "5 min",
      views: 1247,
      likes: 89,
      comments: 23,
      category: "Computer Vision",
      tags: ["AI Fails", "Funny", "Learning"],
      featured: true
    },
    // {
    //   id: 2,
    //   title: "10 Things I Learned After Training 1000 Models",
    //   excerpt: "From 'Hello World' to production nightmares - here's what nobody tells you about ML in the real world (and why coffee is essential).",
    //   image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   date: "2024-01-10",
    //   readTime: "8 min",
    //   views: 2156,
    //   likes: 156,
    //   comments: 45,
    //   category: "Machine Learning",
    //   tags: ["Lessons", "Experience", "Tips"]
    // },
    // {
    //   id: 3,
    //   title: "How I Accidentally Created an AI That Only Speaks in Memes",
    //   excerpt: "Training a chatbot on internet data seemed like a good idea... until it started responding to everything with 'This is fine' 🔥🐶",
    //   image: "https://images.pexels.com/photos/8849288/pexels-photo-8849288.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   date: "2024-01-05",
    //   readTime: "6 min",
    //   views: 3421,
    //   likes: 234,
    //   comments: 67,
    //   category: "NLP",
    //   tags: ["Humor", "Chatbots", "Oops"]
    // },
    // {
    //   id: 4,
    //   title: "The Great GPU Shortage: A Love Story",
    //   excerpt: "My romantic relationship with cloud computing and why I now dream in CUDA cores. Also featuring: the time I tried to mine crypto on my laptop.",
    //   image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   date: "2023-12-28",
    //   readTime: "7 min",
    //   views: 1876,
    //   likes: 123,
    //   comments: 34,
    //   category: "Hardware",
    //   tags: ["GPU", "Cloud", "Struggles"]
    // },
    // {
    //   id: 5,
    //   title: "Debugging ML Models: A Detective Story",
    //   excerpt: "Join me on a thrilling adventure of finding why my model thinks all dogs are muffins. Plot twist: it was the data all along! 🕵️‍♀️",
    //   image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   date: "2023-12-20",
    //   readTime: "9 min",
    //   views: 1654,
    //   likes: 98,
    //   comments: 28,
    //   category: "Debugging",
    //   tags: ["Problem Solving", "Data Quality", "Mystery"]
    // },
    // {
    //   id: 6,
    //   title: "Explaining AI to My Grandma (And Why She's Now Afraid of Her Smart TV)",
    //   excerpt: "The heartwarming and slightly terrifying story of introducing my 85-year-old grandma to artificial intelligence. Spoiler: she's convinced Alexa is plotting against her.",
    //   image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   date: "2023-12-15",
    //   readTime: "4 min",
    //   views: 2987,
    //   likes: 187,
    //   comments: 52,
    //   category: "AI Ethics",
    //   tags: ["Family", "Education", "Wholesome"]
    // }
  ];

  const categories = ['All', 'Computer Vision', 'Machine Learning', 'NLP', 'Hardware', 'Debugging', 'AI Ethics'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Blog
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Where I share my ML adventures, fails, and the occasional success! 📝
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <Coffee className="h-5 w-5" />
            <span>Powered by caffeine and curiosity</span>
            <Lightbulb className="h-5 w-5" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:shadow-md hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Featured Post ⭐
            </h3>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <span className="text-yellow-500 text-lg">⭐</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views}</span>
                        </div>
                        <button
                          onClick={() => toggleLike(post.id)}
                          className={`flex items-center space-x-1 transition-colors ${
                            likedPosts.includes(post.id) ? 'text-red-500' : 'hover:text-red-500'
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                          <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                        </button>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured || selectedCategory !== 'All').map((post) => (
            <article key={post.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{post.views}</span>
                    </div>
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center space-x-1 transition-colors ${
                        likedPosts.includes(post.id) ? 'text-red-500' : 'hover:text-red-500'
                      }`}
                    >
                      <Heart className={`h-3 w-3 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                      <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                    </button>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <button className="text-purple-600 hover:text-pink-600 font-semibold text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Fun Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 inline-block shadow-lg">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-800">
                Got a topic suggestion?
              </h3>
              <Zap className="h-6 w-6 text-yellow-500" />
            </div>
            <p className="text-gray-600 mb-6">
              I'm always looking for new ML adventures to write about! 
              Drop me a line if you have ideas (or if you want to hear more cat vs. toaster stories).
            </p>
              <SuggestTopicButton />
          </div>
        </div>
      </div>
    </section>
  );
};

const SuggestTopicButton = () => {
  return (
    <a

        href="whatsapp://send?phone=639676853379&text=Hey%20Irtaqa!%20I%20would%20like%20to%20know%20more%20about%20your%20ML%20Services."
  target="_blank"
  rel="noopener noreferrer"
  className="p-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"


      // className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
    >

      Suggest a Topic 💡
    </a>
  );
};

export default Blog;