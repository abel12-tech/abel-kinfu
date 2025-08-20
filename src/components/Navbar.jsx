"use client"

import { useState, useEffect } from "react"

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToProjectForm = () => {
    const projectElement = document.getElementById("start-project")
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = ["home", "about", "skills", "projects", "services", "contact"]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/20 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">
              Abel Kinfu
            </h1>
            <p className="text-xs text-gray-400 mt-1">MERN Stack Developer</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden group ${
                    activeSection === item
                      ? "text-green-400 bg-green-400/20 shadow-lg"
                      : "text-gray-300 hover:text-green-400"
                  }`}
                >
                  <span className="relative z-10">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  {activeSection === item && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-xl animate-pulse"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={scrollToProjectForm}
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div
                className={`w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
              >
                <span
                  className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}
                ></span>
                <span
                  className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item)
                  setIsMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item
                    ? "text-green-400 bg-green-400/20 shadow-lg"
                    : "text-gray-300 hover:text-green-400 hover:bg-green-400/10"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            {/* Mobile CTA */}
            <button
              onClick={() => {
                scrollToProjectForm()
                setIsMenuOpen(false)
              }}
              className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-xl hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
