import { useState, useEffect } from 'react'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('services')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies. From simple landing pages to complex enterprise solutions.',
      icon: '🌐',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'API Development'],
      color: 'purple',
      gradient: 'from-purple-500/10 to-purple-600/10',
      border: 'border-purple-400/30',
      textColor: 'text-purple-400'
    },
    {
      id: 2,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that work seamlessly on iOS and Android. Native performance with modern development frameworks.',
      icon: '📱',
      features: ['React Native Apps', 'Flutter Development', 'Native iOS/Android', 'App Store Publishing'],
      color: 'pink',
      gradient: 'from-pink-500/10 to-pink-600/10',
      border: 'border-pink-400/30',
      textColor: 'text-pink-400'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive user experiences. From wireframes to high-fidelity prototypes.',
      icon: '🎨',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Design Systems'],
      color: 'purple',
      gradient: 'from-purple-500/10 to-pink-500/10',
      border: 'border-purple-400/30',
      textColor: 'text-purple-400'
    }
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services I Offer
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Services Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 cursor-pointer ${
                hoveredService === service.id 
                  ? `${service.border} ${service.border.replace('/30', '/50')} bg-white/10 shadow-2xl` 
                  : 'border-white/10 bg-white/5'
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Service Icon */}
              <div className={`text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 ${hoveredService === service.id ? 'animate-bounce' : ''}`}>
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className={`text-2xl font-semibold ${service.textColor} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-300 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color === 'purple' ? 'from-purple-400 to-pink-400' : 'from-pink-400 to-purple-400'}`}></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Service Actions */}
              <div className="flex justify-between items-center">
                <button className={`px-6 py-2 bg-gradient-to-r ${service.color === 'purple' ? 'from-purple-500 to-pink-500' : 'from-pink-500 to-purple-500'} text-white font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-lg`}>
                  Learn More
                </button>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.color === 'purple' ? 'from-purple-400 to-pink-400' : 'from-pink-400 to-purple-400'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-sm">→</span>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Additional Services Info */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-12 p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">24/7 Support</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-gray-300">Fast Delivery</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <span className="text-gray-300">Quality Guarantee</span>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className={`mt-20 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            {
              name: 'Basic',
              price: '$999',
              description: 'Perfect for small projects',
              features: ['Single Page Website', 'Responsive Design', 'Basic SEO', '1 Month Support']
            },
            {
              name: 'Professional',
              price: '$2,499',
              description: 'Ideal for growing businesses',
              features: ['Multi-page Website', 'E-commerce Integration', 'Advanced SEO', '3 Months Support', 'Custom Features']
            },
            {
              name: 'Enterprise',
              price: '$4,999',
              description: 'For large-scale projects',
              features: ['Full-stack Application', 'Custom Development', 'Priority Support', '6 Months Support', 'Performance Optimization']
            }
          ].map((tier, index) => (
            <div
              key={tier.name}
              className={`p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
                index === 1 
                  ? 'border-purple-400/50 bg-purple-400/10 shadow-2xl' 
                  : 'border-white/10 bg-white/5'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">{tier.price}</div>
              <p className="text-gray-400 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                index === 1
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105'
                  : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 