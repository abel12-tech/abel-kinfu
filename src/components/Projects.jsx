import { useState, useEffect } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('projects')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      description: 'Cross-platform mobile app for fitness tracking with real-time analytics, workout plans, and social features. Built with React Native and Firebase.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization. Features include custom reports, data filtering, and export capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Task Management System',
      description: 'Collaborative task management system with real-time updates, team collaboration, and project tracking features.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      technologies: ['React', 'Socket.io', 'Express', 'MySQL'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, weather maps, and customizable widgets.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      technologies: ['React Native', 'OpenWeather API', 'AsyncStorage', 'Geolocation'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations, responsive design, and interactive elements.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      web: 'from-purple-400 to-pink-400',
      mobile: 'from-pink-400 to-purple-400',
      design: 'from-purple-400 to-blue-400'
    }
    return colors[category] || colors.web
  }

  return (
    <section id="projects" className="py-24 bg-black/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Featured Projects */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <span className="text-white text-lg">🌐</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <span className="text-white text-lg">📁</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-3 group-hover:text-pink-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 text-purple-400 text-xs rounded-full border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Featured Project</span>
                  <span>2024</span>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Project Statistics */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { label: 'Projects Completed', value: '50+', icon: '🎯' },
            { label: 'Happy Clients', value: '30+', icon: '😊' },
            { label: 'Years Experience', value: '5+', icon: '⏰' },
            { label: 'Technologies', value: '20+', icon: '🛠️' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-purple-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 