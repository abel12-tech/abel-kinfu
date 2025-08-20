"use client";

import { useState, useEffect } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with advanced product management, secure payment processing, inventory tracking, and admin dashboard. Built with MERN stack for scalability.",
      image: "/modern-ecommerce-interface.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux Toolkit",
        "Stripe",
      ],
      category: "E-Commerce",
      industry: "Retail & Commerce",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "FinTech Mobile App",
      description:
        "Cross-platform financial management app with real-time transactions, budget tracking, investment portfolio, and secure banking integration using React Native.",
      image: "/fintech-mobile-banking-app.png",
      technologies: [
        "React Native",
        "Expo",
        "Node.js",
        "MongoDB",
        "Redux Toolkit",
        "Plaid API",
      ],
      category: "Mobile App",
      industry: "Financial Technology",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description:
        "Comprehensive healthcare platform with patient records, appointment scheduling, telemedicine features, and medical analytics dashboard for healthcare providers.",
      image: "/healthcare-dashboard.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Socket.io",
      ],
      category: "Web Platform",
      industry: "Healthcare & Medical",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "EdTech Learning Platform",
      description:
        "Interactive online learning platform with video streaming, progress tracking, quiz system, and student-teacher communication built for educational institutions.",
      image: "/online-education-platform.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux Toolkit",
        "WebRTC",
      ],
      category: "Web Platform",
      industry: "Education Technology",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "E-Commerce": "from-green-400 to-blue-400",
      "Mobile App": "from-purple-400 to-pink-400",
      "Web Platform": "from-blue-400 to-cyan-400",
      Healthcare: "from-red-400 to-pink-400",
    };
    return colors[category] || "from-purple-400 to-pink-400";
  };

  return (
    <section
      id="projects"
      className="py-24 bg-black/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Industry Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Showcasing MERN Stack & React Native solutions across different
            industries
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Projects Grid */}
        <div
          className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Industry Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-green-400 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-green-400/20 to-blue-400/20 text-green-400 text-xs rounded-full border border-green-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              label: "MERN Projects",
              value: "75+",
              icon: (
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              ),
            },
            {
              label: "Happy Clients",
              value: "30+",
              icon: (
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
            },
            {
              label: "Years Experience",
              value: "5+",
              icon: (
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
            {
              label: "Tech Stack",
              value: "15+",
              icon: (
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              ),
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-green-400 mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
