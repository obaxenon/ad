"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio")
    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="hero-gradient min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block">Hello, I'm</span>
          <span className="text-primary block mt-2">Alcott Dube</span>
        </h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
          <h2 className="text-xl md:text-2xl font-light mb-8 text-white/80">
            <span className="inline-block mx-2">AI Solutions Architect</span>
            <span className="inline-block mx-2 text-primary">•</span>
            <span className="inline-block mx-2">Product Designer</span>
            <span className="inline-block mx-2 text-primary">•</span>
            <span className="inline-block mx-2">Front-End Web Developer</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {["Portfolio", "Passion Projects", "About", "Contact"].map((section, index) => (
            <button
              key={section}
              onClick={() => {
                const sectionId = section.toLowerCase().replace(" ", "-")
                const element = document.getElementById(sectionId)
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  })
                }
              }}
              className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
            >
              {section}
            </button>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollToPortfolio}
        className="absolute bottom-10 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-primary" size={32} />
      </motion.button>
    </div>
  )
}

