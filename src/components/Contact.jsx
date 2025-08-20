"use client"

import { useState, useEffect } from "react"

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Project inquiry submitted:", formData)
    // In a real implementation, this would send the data to your backend
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "abelkinfu678@gmail.com",
      link: "mailto:abelkinfu678@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: "📱",
      title: "Phone/WhatsApp",
      value: "+251936722187",
      link: "tel:+251936722187",
      description: "Call or WhatsApp for quick chat",
    },
    {
      icon: "🇪🇹",
      title: "Location",
      value: "Sululta, Ethiopia",
      link: "#",
      description: "Available for remote work globally",
    },
  ]

  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "MERN Stack applications",
      color: "from-green-400 to-green-600",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "React Native & Expo",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Figma & Photoshop",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: "⚡",
      title: "API Development",
      description: "RESTful APIs & Databases",
      color: "from-yellow-400 to-orange-500",
    },
  ]

  const socialLinks = [
    { icon: "💼", name: "LinkedIn", url: "#", color: "from-blue-400 to-blue-600" },
    { icon: "🐙", name: "GitHub", url: "#", color: "from-gray-400 to-gray-600" },
    { icon: "📱", name: "WhatsApp", url: "https://wa.me/251936722187", color: "from-green-400 to-green-600" },
    { icon: "📧", name: "Email", url: "mailto:abelkinfu678@gmail.com", color: "from-purple-400 to-pink-400" },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-black/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mx-auto rounded-full shadow-lg"></div>
          <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Ready to transform your ideas into powerful digital solutions? I'm here to help you build modern web
            applications, mobile apps, and stunning user interfaces.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-white text-xl sm:text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">{service.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`space-y-8 sm:space-y-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-green-400 mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                I'm a Full-Stack MERN Developer from Ethiopia, specializing in building modern web applications and
                mobile apps. Let's discuss your project and bring your vision to life!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="group flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-xl sm:text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base sm:text-lg mb-1 group-hover:text-green-400 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base font-medium mb-1">{info.value}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{info.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 sm:mb-6">Connect With Me</h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${social.color} rounded-xl sm:rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    title={social.name}
                  >
                    <span className="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-xl sm:rounded-2xl border border-green-400/30">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold text-sm sm:text-base">Available for new projects</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">
                Currently accepting freelance projects. Fast turnaround, competitive rates, and 100% client satisfaction
                guaranteed.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-white/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8" id="start-project">
                Start Your Project
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative">
                    <label className="block text-gray-300 text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("firstName")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        focusedField === "firstName"
                          ? "border-green-400 shadow-lg shadow-green-400/20"
                          : "border-white/20 hover:border-white/30"
                      }`}
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("lastName")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        focusedField === "lastName"
                          ? "border-green-400 shadow-lg shadow-green-400/20"
                          : "border-white/20 hover:border-white/30"
                      }`}
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      focusedField === "email"
                        ? "border-green-400 shadow-lg shadow-green-400/20"
                        : "border-white/20 hover:border-white/30"
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("projectType")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white focus:outline-none transition-all duration-300 ${
                        focusedField === "projectType"
                          ? "border-green-400 shadow-lg shadow-green-400/20"
                          : "border-white/20 hover:border-white/30"
                      }`}
                      required
                    >
                      <option value="" className="bg-gray-800">
                        Select project type
                      </option>
                      <option value="web-app" className="bg-gray-800">
                        Web Application (MERN)
                      </option>
                      <option value="mobile-app" className="bg-gray-800">
                        Mobile App (React Native)
                      </option>
                      <option value="ui-design" className="bg-gray-800">
                        UI/UX Design
                      </option>
                      <option value="api-development" className="bg-gray-800">
                        API Development
                      </option>
                      <option value="full-stack" className="bg-gray-800">
                        Full-Stack Solution
                      </option>
                      <option value="other" className="bg-gray-800">
                        Other
                      </option>
                    </select>
                  </div>

                  <div className="relative">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("budget")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white focus:outline-none transition-all duration-300 ${
                        focusedField === "budget"
                          ? "border-green-400 shadow-lg shadow-green-400/20"
                          : "border-white/20 hover:border-white/30"
                      }`}
                    >
                      <option value="" className="bg-gray-800">
                        Select budget range
                      </option>
                      <option value="500-1000" className="bg-gray-800">
                        $500 - $1,000
                      </option>
                      <option value="1000-2500" className="bg-gray-800">
                        $1,000 - $2,500
                      </option>
                      <option value="2500-5000" className="bg-gray-800">
                        $2,500 - $5,000
                      </option>
                      <option value="5000+" className="bg-gray-800">
                        $5,000+
                      </option>
                      <option value="discuss" className="bg-gray-800">
                        Let's discuss
                      </option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none resize-none transition-all duration-300 ${
                      focusedField === "message"
                        ? "border-green-400 shadow-lg shadow-green-400/20"
                        : "border-white/20 hover:border-white/30"
                    }`}
                    placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
                >
                  <span className="relative z-10">Send Project Inquiry</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Response Time Info */}
        <div
          className={`mt-12 sm:mt-16 lg:mt-20 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 p-4 sm:p-6 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm sm:text-base">Response within 24 hours</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <span className="text-gray-300 text-sm sm:text-base">Free project consultation</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
              <span className="text-gray-300 text-sm sm:text-base">Competitive pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
