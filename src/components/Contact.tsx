import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Validate fields
    let newErrors = { name: '', email: '', subject: '', message: '' };
    let hasError = false;

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      hasError = true;
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address';
        hasError = true;
      }
    }
    if (!subject.trim()) {
      newErrors.subject = 'Subject is required';
      hasError = true;
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email to your address (irtaqanaveed00@gmail.com)
      const responseToYou = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_cxxfze4', // Replace with your actual EmailJS service ID
          template_id: 'template_pegr6qm', // Replace with your actual EmailJS template ID for sending to you
          user_id: '18ou2LSw3I84fKJXN', // Replace with your actual EmailJS user ID
          template_params: {
            from_name: name.trim(),
            from_email: email.trim(), // User's email as sender
            reply_to: email.trim(),
            to_email: 'irtaqanaveed07@protonmail.com', // Your email
            subject: subject.trim(),
            message: message.trim(),
          },
        }),
      });

      if (!responseToYou.ok) {
        throw new Error(`Email to you failed: ${responseToYou.statusText}`);
      }

      // Send auto-reply to user's email
      const responseToUser = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_cxxfze4', // Replace with your actual EmailJS service ID
          template_id: 'template_m3fshxx', // Replace with your actual EmailJS template ID for auto-reply
          user_id: '18ou2LSw3I84fKJXN', // Replace with your actual EmailJS user ID
          template_params: {
            from_name: name.trim(),
            from_email: email.trim(),
            reply_to: 'irtaqanaveed07@protonmail.com',
            to_email: email.trim(), // User's email
            subject: 'Love from Irtaqa',
            message: `Hi ${name.trim()},\n\nThanks a ton for reaching out. I've received your message and I'll get back to you as soon as I can. In the meantime, feel free to explore more of my work.\n\nTalk soon!\nIrtaqa Naveed`,
          },
        }),
      });

      if (!responseToUser.ok) {
        throw new Error(`Auto-reply failed: ${responseToUser.statusText}`);
      }

      // Simulate delay for user feedback
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Thanks for reaching out! I've sent you an auto-reply. 😊");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Oops! Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'irtaqanaveed07@protonmail.com',
      link: 'mailto:irtaqanaveed07@protonmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Islamabad, PAK',
    },
    {
      icon: MessageCircle,
      title: 'Response Time',
      value: 'Usually within 24 hours',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Irtaqa007-dev',
      color: 'hover:text-gray-800',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/irtaqa-naveed/',
      color: 'hover:text-blue-600',
    },
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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Social Links */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Me</h3>
                <p className="text-gray-600 mb-6">
                  Stay connected and follow my journey in the world of AI and ML!
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
              {/* Fun Call to Action */}
              <div className="text-center mt-16">
                <div className="inline-block bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
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

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Let's collaborate on something amazing!"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none`}
                    placeholder="Tell me about your project, idea, or just say hello!"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;