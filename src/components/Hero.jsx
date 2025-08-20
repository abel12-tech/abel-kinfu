"use client"

import { useEffect, useRef } from "react"
import myImage from "../assets/me.png"

const Hero = ({ scrollToSection }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles = []
    const particleCount = 30

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.size = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.3 + 0.1
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 197, 94, ${this.opacity})`
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-green-900/40 to-slate-900/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Hero Content - Left Side */}
          <div className="max-w-2xl text-center lg:text-left order-2 lg:order-1 lg:flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abel Kinfu
            </h1>

            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
              </h2>
              <h3 className="text-lg sm:text-xl text-gray-300 font-semibold mb-2">
                MERN Stack • React Native • UI/UX Design
              </h3>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 lg:mb-6 leading-relaxed">
              Building modern web applications with <span className="text-green-400 font-semibold">React.js</span>,{" "}
              <span className="text-green-400 font-semibold">Node.js</span>, and{" "}
              <span className="text-green-400 font-semibold">MongoDB</span>. Creating cross-platform mobile apps with{" "}
              <span className="text-blue-400 font-semibold">React Native</span> and{" "}
              <span className="text-blue-400 font-semibold">Expo</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center lg:justify-start mb-4 text-sm sm:text-base">
              <span className="text-green-400 font-semibold">📞 +251936722187</span>
              <span className="text-blue-400 font-semibold">🇪🇹 Sululta, Ethiopia</span>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              {["React.js", "Node.js", "MongoDB", "Express.js", "React Native", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm text-gray-300 hover:border-green-400/50 hover:text-green-400 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10">View My Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-400 hover:text-white transition-all duration-300 transform hover:scale-105 overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10">Contact Me Now</span>
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm sm:text-base font-medium">Available for freelance projects</span>
            </div>
          </div>

          {/* Profile Image with Animation - Right Side */}
          <div className="relative order-1 lg:order-2 lg:flex-1 flex justify-center lg:justify-end mb-6 lg:mb-0">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl opacity-20 blur-xl"></div>

            <div className="relative w-72 h-96 rounded-2xl overflow-hidden flex justify-center items-end border-4 border-green-400/30 shadow-2xl hover:border-green-400/60 transition-all duration-500 bg-white/5">
              <img
                src={myImage}
                alt="Abel Kinfu - Full-Stack MERN Developer from Ethiopia"
                className="w-full h-full object-cover drop-shadow-2xl"
                loading="eager"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm sm:text-base lg:text-lg">💻</span>
            </div>

            <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-400/30 rounded-full"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/30 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center group cursor-pointer hover:border-blue-400 transition-colors duration-300">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 group-hover:bg-blue-400 transition-colors duration-300"></div>
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-16 sm:w-32 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
      <div className="absolute top-3/4 right-0 w-16 sm:w-32 h-px bg-gradient-to-l from-transparent via-blue-400 to-transparent"></div>
    </section>
  )
}

export default Hero
