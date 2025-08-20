"use client";

import { useState, useEffect } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToProjectForm = () => {
    const projectElement = document.getElementById("start-project");
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      id: 1,
      title: "MERN Stack Development",
      description:
        "Full-stack web applications using MongoDB, Express.js, React, and Node.js. Scalable, secure, and modern solutions for your business needs.",
      icon: (
        <svg
          className="w-16 h-16 text-green-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      features: [
        "React Frontend",
        "Node.js Backend",
        "MongoDB Database",
        "Express API",
        "Redux Toolkit",
      ],
      color: "green",
      gradient: "from-green-500/10 to-blue-500/10",
      border: "border-green-400/30",
      textColor: "text-green-400",
    },
    {
      id: 2,
      title: "React Native Apps",
      description:
        "Cross-platform mobile applications using React Native and Expo. Native performance with faster development and deployment cycles.",
      icon: (
        <svg
          className="w-16 h-16 text-blue-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M1.5 4.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm3 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6.5-10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm3 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6.5-10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-3 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
        </svg>
      ),
      features: [
        "React Native",
        "Expo Framework",
        "iOS & Android",
        "App Store Publishing",
        "Native Features",
      ],
      color: "blue",
      gradient: "from-blue-500/10 to-purple-500/10",
      border: "border-blue-400/30",
      textColor: "text-blue-400",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Modern, user-centered design solutions using Figma and Photoshop. Creating intuitive interfaces that enhance user experience and drive engagement.",
      icon: (
        <svg
          className="w-16 h-16 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 3h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V5a2 2 0 012-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 17a4 4 0 004-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v8a4 4 0 004 4z"
          />
        </svg>
      ),
      features: [
        "Figma Design",
        "Photoshop Graphics",
        "User Research",
        "Wireframing",
        "Responsive Design",
      ],
      color: "purple",
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-400/30",
      textColor: "text-purple-400",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              My Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Professional development services from Ethiopia, delivering
            world-class solutions globally
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Services Grid */}
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 cursor-pointer ${
                hoveredService === service.id
                  ? `${service.border} ${service.border.replace(
                      "/30",
                      "/50"
                    )} bg-white/10 shadow-2xl`
                  : "border-white/10 bg-white/5"
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Service Icon */}
              <div
                className={`mb-8 group-hover:scale-110 transition-transform duration-500 flex justify-center ${
                  hoveredService === service.id ? "animate-pulse" : ""
                }`}
              >
                {service.icon}
              </div>

              {/* Service Title */}
              <h3
                className={`text-2xl font-semibold ${service.textColor} mb-4 group-hover:scale-105 transition-transform duration-300 text-center`}
              >
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-300 mb-8 leading-relaxed text-center">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                        service.color === "green"
                          ? "from-green-400 to-blue-400"
                          : service.color === "blue"
                          ? "from-blue-400 to-purple-400"
                          : "from-purple-400 to-pink-400"
                      }`}
                    ></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional Services Info */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-12 p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Remote Work Ready</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div
                className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <span className="text-gray-300">Fast Delivery</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div
                className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <span className="text-gray-300">Quality Guarantee</span>
            </div>
          </div>
        </div>

        <div
          className={`mt-20 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              name: "Basic",
              price: "$500",
              description: "Perfect for small projects",
              features: [
                "React Frontend",
                "Basic API Integration",
                "Responsive Design",
                "2 Weeks Support",
                "Basic SEO",
              ],
            },
            {
              name: "Standard",
              price: "$1,000",
              description: "Complete web solution",
              features: [
                "Full MERN Stack",
                "Database Design",
                "Authentication System",
                "1 Month Support",
                "Advanced Features",
                "Deployment",
              ],
            },
            {
              name: "Premium",
              price: "$1,500",
              description: "Full-stack + mobile app",
              features: [
                "MERN Stack + Mobile",
                "React Native App",
                "Advanced Backend",
                "2 Months Support",
                "Performance Optimization",
                "Custom Integrations",
              ],
            },
          ].map((tier, index) => (
            <div
              key={tier.name}
              className={`p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
                index === 1
                  ? "border-green-400/50 bg-green-400/10 shadow-2xl"
                  : "border-white/10 bg-white/5"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl font-bold text-green-400 mb-2">
                {tier.price}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-400 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToProjectForm}
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === 1
                    ? "bg-gradient-to-r from-green-500 to-blue-500 text-white hover:scale-105"
                    : "border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
