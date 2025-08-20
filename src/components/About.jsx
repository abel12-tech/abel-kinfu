"use client"

import { useState, useEffect } from "react"

const About = () => {
  const [counts, setCounts] = useState({ projects: 0, experience: 0, clients: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          const timer = setTimeout(() => {
            setCounts({ projects: 75, experience: 5, clients: 30 })
          }, 500)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const expertise = [
    {
      title: "Full-Stack Web Development",
      description: "MERN Stack (MongoDB, Express.js, React.js, Node.js) with modern tools like Vite and Redux Toolkit",
      icon: "🌐",
      gradient: "from-green-500/20 to-green-600/20",
      border: "border-green-400/30",
      textColor: "text-green-400",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile apps using React Native and Expo for iOS and Android",
      icon: "📱",
      gradient: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-400/30",
      textColor: "text-blue-400",
    },
    {
      title: "UI/UX Design",
      description: "Modern, responsive designs using Figma and Photoshop with focus on user experience",
      icon: "🎨",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-400/30",
      textColor: "text-purple-400",
    },
    {
      title: "API Development",
      description: "RESTful APIs, database design, authentication, and server-side architecture",
      icon: "⚡",
      gradient: "from-yellow-500/20 to-orange-500/20",
      border: "border-yellow-400/30",
      textColor: "text-yellow-400",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-black/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Abel
            </span>
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Hi, I'm <span className="text-green-400 font-semibold">Abel</span>, a passionate Full-Stack Developer
                based in
                <span className="text-blue-400 font-semibold"> Ethiopia</span>. I specialize in building modern web
                applications using the <span className="text-green-400 font-semibold">MERN stack</span> and creating
                cross-platform mobile apps with <span className="text-blue-400 font-semibold">React Native</span>.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                My expertise spans from crafting responsive frontends with{" "}
                <span className="text-purple-400 font-semibold">React.js and Tailwind CSS</span>
                to building robust backends with{" "}
                <span className="text-green-400 font-semibold">Node.js, Express.js, and MongoDB</span>. I also create
                intuitive mobile experiences using{" "}
                <span className="text-blue-400 font-semibold">React Native and Expo</span>.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                I'm committed to delivering high-quality, scalable solutions that help businesses grow and succeed in
                the digital world. Let's work together to bring your ideas to life!
              </p>
            </div>

            {/* Animated Statistics */}
            <div
              className={`grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="group text-center p-4 sm:p-6 bg-white/5 rounded-lg sm:rounded-xl border border-white/10 hover:border-green-400/30 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counts.projects}+
                </div>
                <div className="text-gray-400 text-sm sm:text-base">Projects Completed</div>
              </div>

              <div className="group text-center p-4 sm:p-6 bg-white/5 rounded-lg sm:rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counts.experience}+
                </div>
                <div className="text-gray-400 text-sm sm:text-base">Years Experience</div>
              </div>

              <div className="group text-center p-4 sm:p-6 bg-white/5 rounded-lg sm:rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counts.clients}+
                </div>
                <div className="text-gray-400 text-sm sm:text-base">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Expertise Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {expertise.map((skill, index) => (
              <div
                key={skill.title}
                className={`p-4 sm:p-6 bg-gradient-to-br ${skill.gradient} rounded-lg sm:rounded-xl border ${skill.border} hover:scale-105 transition-all duration-300 group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold ${skill.textColor} mb-2 sm:mb-3`}>{skill.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`mt-12 sm:mt-16 lg:mt-20 text-center transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 p-6 sm:p-8 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm sm:text-base font-medium">Available for new projects</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <span className="text-gray-300 text-sm sm:text-base font-medium">Remote work worldwide</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
              <span className="text-gray-300 text-sm sm:text-base font-medium">24/7 communication</span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              Ready to turn your ideas into reality? Let's build something amazing together!
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Get In Touch</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
