"use client"

import { useState, useEffect } from "react"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("frontend")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      color: "purple",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Vite", level: 88, icon: "⚡" },
        { name: "Redux Toolkit", level: 90, icon: "🔄" },
        { name: "JavaScript ES6+", level: 94, icon: "📜" },
        { name: "HTML5/CSS3", level: 96, icon: "🌐" },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      ),
      color: "green",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 92, icon: "🚀" },
        { name: "MongoDB", level: 88, icon: "🍃" },
        { name: "REST APIs", level: 94, icon: "🔗" },
        { name: "JWT Auth", level: 85, icon: "🔐" },
        { name: "Mongoose ODM", level: 87, icon: "📊" },
      ],
    },
    mobile: {
      title: "Mobile Development",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v16H7V4z" />
        </svg>
      ),
      color: "blue",
      skills: [
        { name: "React Native", level: 90, icon: "📱" },
        { name: "Expo", level: 88, icon: "🔧" },
        { name: "React Navigation", level: 85, icon: "🧭" },
        { name: "AsyncStorage", level: 82, icon: "💾" },
        { name: "Native APIs", level: 80, icon: "⚙️" },
        { name: "App Store Deploy", level: 85, icon: "🚀" },
      ],
    },
    design: {
      title: "Design & Tools",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      color: "pink",
      skills: [
        { name: "Figma", level: 88, icon: "🎨" },
        { name: "Photoshop", level: 85, icon: "🖼️" },
        { name: "UI/UX Design", level: 87, icon: "✨" },
        { name: "Responsive Design", level: 92, icon: "📐" },
        { name: "Prototyping", level: 85, icon: "🔄" },
        { name: "Brand Identity", level: 80, icon: "🎯" },
      ],
    },
  }

  const getColorClasses = (color) => {
    const colors = {
      purple: {
        bg: "bg-purple-500",
        text: "text-purple-400",
        border: "border-purple-400/30",
        hover: "hover:border-purple-400/50",
        gradient: "from-purple-500 to-purple-600",
      },
      green: {
        bg: "bg-green-500",
        text: "text-green-400",
        border: "border-green-400/30",
        hover: "hover:border-green-400/50",
        gradient: "from-green-500 to-green-600",
      },
      blue: {
        bg: "bg-blue-500",
        text: "text-blue-400",
        border: "border-blue-400/30",
        hover: "hover:border-blue-400/50",
        gradient: "from-blue-500 to-blue-600",
      },
      pink: {
        bg: "bg-pink-500",
        text: "text-pink-400",
        border: "border-pink-400/30",
        hover: "hover:border-pink-400/50",
        gradient: "from-pink-500 to-pink-600",
      },
    }
    return colors[color] || colors.purple
  }

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-purple-400 via-green-400 to-blue-400 mx-auto rounded-full shadow-lg"></div>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Full-Stack MERN Developer & React Native Mobile App Developer from Ethiopia
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex justify-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
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
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className={`${colors.text}`}>{category.icon}</span>
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{category.title.split(" ")[0]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {Object.entries(skillCategories).map(([key, category]) => {
            const colors = getColorClasses(category.color)
            const isActive = activeCategory === key

            return (
              <div
                key={key}
                className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl border transition-all duration-500 ${
                  isActive
                    ? `${colors.border} ${colors.hover} bg-white/5 shadow-xl scale-105`
                    : "border-white/10 bg-white/5"
                } ${isActive ? "opacity-100" : "opacity-60"}`}
              >
                <div className={`text-3xl sm:text-4xl mb-4 sm:mb-6 ${colors.text} transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl sm:text-2xl font-semibold ${colors.text} mb-6 sm:mb-8`}>{category.title}</h3>

                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">{skill.icon}</span>
                          <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-xs sm:text-sm font-bold ${colors.text}`}>{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible && isActive ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 100}ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Stats */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs sm:text-sm">Expertise Level</span>
                    <span className={`text-base sm:text-lg font-bold ${colors.text}`}>
                      {Math.round(
                        category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length,
                      )}
                      %
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-12 sm:mt-16 lg:mt-20 text-center transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
            Development Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {["Git & GitHub", "VS Code", "Postman", "npm/yarn", "Chrome DevTools", "Firebase", "Vercel", "Netlify"].map(
              (tech, index) => (
                <div
                  key={tech}
                  className="px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-purple-400 hover:border-purple-400/30 transition-all duration-300 hover:scale-105 cursor-pointer text-sm sm:text-base"
                >
                  {tech}
                </div>
              ),
            )}
          </div>
        </div>

        <div
          className={`mt-12 sm:mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 p-6 sm:p-8 bg-gradient-to-r from-purple-500/10 via-green-500/10 to-blue-500/10 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm sm:text-base font-medium">MERN Stack Specialist</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <span className="text-gray-300 text-sm sm:text-base font-medium">React Native Expert</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
              <span className="text-gray-300 text-sm sm:text-base font-medium">Full-Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
