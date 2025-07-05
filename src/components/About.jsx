import { useState, useEffect } from 'react'

const About = () => {
  const [counts, setCounts] = useState({ projects: 0, experience: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          const timer = setTimeout(() => {
            setCounts({ projects: 50, experience: 5 })
          }, 500)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      icon: '🌐',
      gradient: 'from-purple-500/20 to-purple-600/20',
      border: 'border-purple-400/30',
      textColor: 'text-purple-400'
    },
    {
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications',
      icon: '📱',
      gradient: 'from-pink-500/20 to-pink-600/20',
      border: 'border-pink-400/30',
      textColor: 'text-pink-400'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions',
      icon: '🎨',
      gradient: 'from-purple-500/20 to-pink-500/20',
      border: 'border-purple-400/30',
      textColor: 'text-purple-400'
    },
    {
      title: 'Graphic Design',
      description: 'Creative visual branding and design',
      icon: '✨',
      gradient: 'from-pink-500/20 to-purple-500/20',
      border: 'border-pink-400/30',
      textColor: 'text-pink-400'
    }
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-black/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                I'm a passionate Software Engineer with expertise in creating innovative digital solutions. 
                With years of experience in web development, mobile app development, and graphic design, 
                I bring a unique blend of technical skills and creative vision to every project.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                My approach combines cutting-edge technology with user-centered design principles, 
                ensuring that every solution not only meets technical requirements but also delivers 
                exceptional user experiences that drive business growth.
              </p>
            </div>

            {/* Animated Statistics */}
            <div className={`grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="group text-center p-4 sm:p-6 bg-white/5 rounded-lg sm:rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counts.projects}+
                </div>
                <div className="text-gray-400 text-sm sm:text-base">Projects Completed</div>
              </div>
              
              <div className="group text-center p-4 sm:p-6 bg-white/5 rounded-lg sm:rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counts.experience}+
                </div>
                <div className="text-gray-400 text-sm sm:text-base">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className={`grid grid-cols-2 gap-3 sm:gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-3 sm:space-y-4">
              <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg sm:rounded-xl border border-purple-400/30">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-2">Web Development</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Modern, responsive websites and web applications</p>
              </div>
              <div className="p-4 sm:p-6 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-lg sm:rounded-xl border border-pink-400/30">
                <h3 className="text-lg sm:text-xl font-semibold text-pink-400 mb-2">Mobile Apps</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Cross-platform mobile applications</p>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
              <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl border border-purple-400/30">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-2">UI/UX Design</h3>
                <p className="text-gray-300 text-xs sm:text-sm">User-centered design solutions</p>
              </div>
              <div className="p-4 sm:p-6 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg sm:rounded-xl border border-pink-400/30">
                <h3 className="text-lg sm:text-xl font-semibold text-pink-400 mb-2">Graphic Design</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Creative visual branding and design</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-12 sm:mt-16 lg:mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 p-4 sm:p-8 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm sm:text-base">Available for new projects</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-gray-300 text-sm sm:text-base">Remote work ready</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <span className="text-gray-300 text-sm sm:text-base">Fast response time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 