import { useState, useEffect } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('frontend')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('skills')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      color: 'purple',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Vue.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 88 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: '⚙️',
      color: 'pink',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 82 },
        { name: 'Express.js', level: 90 },
        { name: 'REST APIs', level: 92 }
      ]
    },
    mobile: {
      title: 'Mobile & Design',
      icon: '📱',
      color: 'purple',
      skills: [
        { name: 'React Native', level: 90 },
        { name: 'Figma', level: 88 },
        { name: 'Adobe Creative', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'UI/UX Design', level: 87 },
        { name: 'Prototyping', level: 90 }
      ]
    }
  }

  const getColorClasses = (color) => {
    const colors = {
      purple: {
        bg: 'bg-purple-400',
        text: 'text-purple-400',
        border: 'border-purple-400/30',
        hover: 'hover:border-purple-400/50',
        gradient: 'from-purple-400 to-pink-400'
      },
      pink: {
        bg: 'bg-pink-400',
        text: 'text-pink-400',
        border: 'border-pink-400/30',
        hover: 'hover:border-pink-400/50',
        gradient: 'from-pink-400 to-purple-400'
      }
    }
    return colors[color] || colors.purple
  }

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Category Tabs */}
        <div className={`flex justify-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            {Object.entries(skillCategories).map(([key, category]) => {
              const colors = getColorClasses(category.color)
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${
                    activeCategory === key
                      ? `${colors.bg} text-white shadow-lg`
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-base sm:text-lg">{category.icon}</span>
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {Object.entries(skillCategories).map(([key, category]) => {
            const colors = getColorClasses(category.color)
            const isActive = activeCategory === key
            
            return (
              <div
                key={key}
                className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl border transition-all duration-500 ${
                  isActive 
                    ? `${colors.border} ${colors.hover} bg-white/5 shadow-xl scale-105` 
                    : 'border-white/10 bg-white/5'
                } ${isActive ? 'opacity-100' : 'opacity-40'}`}
              >
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className={`text-xl sm:text-2xl font-semibold ${colors.text} mb-6 sm:mb-8`}>
                  {category.title}
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                          {skill.name}
                        </span>
                        <span className={`text-xs sm:text-sm font-bold ${colors.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1000 ease-out ${
                              isVisible && isActive ? 'w-full' : 'w-0'
                            }`}
                            style={{ 
                              width: isVisible && isActive ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 100}ms`
                            }}
                          ></div>
                        </div>
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300`}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Stats */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs sm:text-sm">Average Level</span>
                    <span className={`text-base sm:text-lg font-bold ${colors.text}`}>
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Skills */}
        <div className={`mt-12 sm:mt-16 lg:mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['Git', 'Docker', 'AWS', 'Firebase', 'GraphQL', 'Redux', 'Jest', 'Webpack'].map((tech, index) => (
              <div
                key={tech}
                className="px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-purple-400 hover:border-purple-400/30 transition-all duration-300 hover:scale-105 cursor-pointer text-sm sm:text-base"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 