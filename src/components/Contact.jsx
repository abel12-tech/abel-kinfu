import { useState, useEffect } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('contact')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'abelkinfu@gmail.com',
      link: 'mailto:abelkinfu@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+251936722187',
      link: 'tel:+251936722187'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Sululta, Oromia, Ethiopia',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: '💼', name: 'LinkedIn', url: '#', color: 'from-blue-400 to-blue-600' },
    { icon: '🐙', name: 'GitHub', url: '#', color: 'from-gray-400 to-gray-600' },
    { icon: '🐦', name: 'Twitter', url: '#', color: 'from-blue-400 to-cyan-400' },
    { icon: '📸', name: 'Instagram', url: '#', color: 'from-pink-400 to-purple-400' }
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-black/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-pink-400/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full shadow-lg"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-6">Get In Touch</h3>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Ready to bring your ideas to life? I'm here to help you create exceptional digital experiences. 
                Let's discuss your project and explore how we can work together.
              </p>
            </div>
            {/* Contact Details */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="group flex items-center space-x-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-purple-400 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-white text-xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            {/* Availability Status */}
            <div className="p-6 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-2xl border border-green-400/30">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for new projects</span>
              </div>
              <p className="text-gray-300 text-sm">
                I'm currently accepting new clients and would love to hear about your project.
              </p>
            </div>
          </div>
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-8">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        focusedField === 'firstName' 
                          ? 'border-purple-400 shadow-lg shadow-purple-400/20' 
                          : 'border-white/20 hover:border-white/30'
                      }`}
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        focusedField === 'lastName' 
                          ? 'border-purple-400 shadow-lg shadow-purple-400/20' 
                          : 'border-white/20 hover:border-white/30'
                      }`}
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      focusedField === 'email' 
                        ? 'border-purple-400 shadow-lg shadow-purple-400/20' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="relative">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      focusedField === 'subject' 
                        ? 'border-purple-400 shadow-lg shadow-purple-400/20' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="relative">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none resize-none transition-all duration-300 ${
                      focusedField === 'message' 
                        ? 'border-purple-400 shadow-lg shadow-purple-400/20' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group relative w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Response Time Info */}
        <div className={`mt-12 sm:mt-16 lg:mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-8 p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Response within 24 hours</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-gray-300">Free consultation</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <span className="text-gray-300">Project discussion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 