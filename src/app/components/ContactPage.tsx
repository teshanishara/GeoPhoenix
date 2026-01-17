import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Linkedin } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'teshan.ishara@gmail.com',
      subContent: 'CEO Email',
      link: 'mailto:teshan.ishara@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'WhatsApp / Call',
      content: '+94 71 529 8267',
      subContent: '24/7 Available',
      link: 'tel:+94715298267',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Sri Lanka',
      subContent: 'Serving clients worldwide',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      content: 'Teshan Ishara',
      subContent: 'Connect with me',
      link: 'https://www.linkedin.com/in/teshan-ishara-80b9bb156',
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Contact Me</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Get in touch to discuss your geospatial analysis needs. I'm here to help turn your data into insights.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-black border border-gray-800 p-6 rounded-xl text-center hover:border-orange-500 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-white mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-300 mb-1 hover:text-orange-500 transition-colors block"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-300 mb-1">{info.content}</p>
                )}
                <p className="text-sm text-gray-500">{info.subContent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-white mb-4">Send Me a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-teal-900/20 border border-teal-600 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-teal-400 mb-2">Message Sent!</h3>
                  <p className="text-teal-300">
                    Thank you for contacting me. I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-white"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-white"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-300 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="starter">Starter Pack ($40)</option>
                      <option value="intermediate">Intermediate Pack ($80)</option>
                      <option value="pro">Pro Package ($200)</option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none text-white"
                      placeholder="Tell me about your project and requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Office & Quick Info */}
            <div>
              <h2 className="text-white mb-4">Get In Touch</h2>
              <p className="text-gray-400 mb-8">
                Based in Sri Lanka, serving clients across 20+ countries worldwide.
              </p>

              <div className="space-y-6">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                  <h3 className="text-white mb-3">Office Location</h3>
                  <div className="space-y-2 text-gray-400">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-orange-500" />
                      <span>Sri Lanka</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 flex-shrink-0 text-orange-500" />
                      <a href="tel:+94715298267" className="hover:text-orange-500 transition-colors">
                        +94 71 529 8267
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 flex-shrink-0 text-orange-500" />
                      <a href="mailto:teshan.ishara@gmail.com" className="hover:text-orange-500 transition-colors">
                        teshan.ishara@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 flex-shrink-0 text-orange-500" />
                      <a 
                        href="https://www.linkedin.com/in/teshan-ishara-80b9bb156" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition-colors"
                      >
                        linkedin.com/in/teshan-ishara
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-600 to-teal-600 rounded-xl p-6">
                  <h3 className="text-white mb-2">24/7 Support Available</h3>
                  <p className="text-orange-100 mb-4">
                    Need immediate assistance? I'm available around the clock to help with your urgent GIS needs.
                  </p>
                  <a
                    href="tel:+94715298267"
                    className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    Call Now
                  </a>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-white mb-2">Response Time</h3>
                  <p className="text-gray-400">
                    I typically respond to inquiries within 24 hours. For urgent projects, please call or message via WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">
              Quick answers to common questions about my services
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <h3 className="text-white mb-2">What is the typical project timeline?</h3>
              <p className="text-gray-400">
                Project timelines vary based on scope and complexity. Starter packages typically take 2-3 weeks, 
                Intermediate packages 4-6 weeks, and Pro packages are customized based on requirements.
              </p>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <h3 className="text-white mb-2">Do you work with international clients?</h3>
              <p className="text-gray-400">
                Yes! I serve clients across 20+ countries worldwide and have experience working across different 
                time zones and regulatory environments.
              </p>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <h3 className="text-white mb-2">What file formats do you support?</h3>
              <p className="text-gray-400">
                I work with all major GIS formats including Shapefile, GeoJSON, KML, GeoTIFF, and more. 
                I can also handle proprietary formats and provide data conversion services.
              </p>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-colors">
              <h3 className="text-white mb-2">Can I upgrade my package later?</h3>
              <p className="text-gray-400">
                Absolutely! You can upgrade your package at any time during the project. 
                I'll credit your initial investment towards the upgraded package.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
