import { useEffect, useRef } from 'react'
import myPortrait from '../assets/me.png'

const Hero = ({ scrollToSection }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    const particles = []
    const particleCount = 50

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
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
        ctx.fillStyle = `rgba(147, 51, 234, ${this.opacity})`
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
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-slate-900/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Hero Content - Left Side */}
          <div className="max-w-2xl text-center lg:text-left order-2 lg:order-1 lg:flex-1">
            {/* Name Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Abel Kinfu
            </h1>
            {/* Animated Text */}
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Software Engineer
                </span>
              </h2>
              <h3 className="text-lg sm:text-xl text-gray-300 font-semibold mb-2">
                Web, App & Graphic Designer
              </h3>
            </div>
            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 lg:mb-6 leading-relaxed">
              Transforming ideas into exceptional digital experiences with cutting-edge technology and creative design solutions.
            </p>
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center lg:justify-start mb-4 text-sm sm:text-base">
              <span className="text-purple-400 font-semibold">📞 +251936722187</span>
              <span className="text-pink-400 font-semibold">📍 Sululta, Oromia, Ethiopia</span>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
          {/* Profile Image with Animation - Right Side (Below on mobile) */}
          <div className="relative order-1 lg:order-2 lg:flex-1 flex justify-center lg:justify-end mb-6 lg:mb-0">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500 animate-pulse"></div>
            {/* Image Container - Fixed Size */}
            <div className="relative w-72 h-96 rounded-2xl overflow-hidden flex justify-center items-end border-4 border-purple-400/30 shadow-2xl group-hover:border-purple-400/60 transition-all duration-500 bg-white/5">
              <img
                src={myPortrait}
                alt="Abel Kinfu Portrait"
                className="w-full h-full object-cover drop-shadow-2xl"
                loading="eager"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white font-bold text-sm sm:text-base lg:text-lg">👨‍💻</span>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 bg-purple-400/30 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center group cursor-pointer hover:border-pink-400 transition-colors duration-300">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse group-hover:bg-pink-400 transition-colors duration-300"></div>
        </div>
      </div>
      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-16 sm:w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      <div className="absolute top-3/4 right-0 w-16 sm:w-32 h-px bg-gradient-to-l from-transparent via-pink-400 to-transparent"></div>
    </section>
  )
}

export default Hero 