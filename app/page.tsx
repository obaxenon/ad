"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import PassionProjects from "@/components/passion-projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CaseStudyModal from "@/components/case-study-modal"
import type { CaseStudy } from "@/types/case-study"
import { caseStudies } from "@/data/case-studies"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null)
  const [caseStudyIndex, setCaseStudyIndex] = useState(0)

  const handleScroll = () => {
    const sections = ["home", "portfolio", "passion-projects", "about", "contact"]
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const offsetBottom = offsetTop + element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section)
          break
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openCaseStudy = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy)
    const index = caseStudies.findIndex((cs) => cs.id === caseStudy.id)
    setCaseStudyIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null)
    document.body.style.overflow = "auto"
  }

  const navigateCaseStudy = (direction: "next" | "prev") => {
    let newIndex = direction === "next" ? caseStudyIndex + 1 : caseStudyIndex - 1

    if (newIndex < 0) {
      newIndex = caseStudies.length - 1
    } else if (newIndex >= caseStudies.length) {
      newIndex = 0
    }

    setCaseStudyIndex(newIndex)
    setSelectedCaseStudy(caseStudies[newIndex])
  }

  return (
    <main className="min-h-screen">
      <Navbar activeSection={activeSection} />

      <section id="home">
        <Hero />
      </section>

      <section id="portfolio" className="py-20">
        <Portfolio openCaseStudy={openCaseStudy} />
      </section>

      <section id="passion-projects" className="py-20 bg-secondary">
        <PassionProjects />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="contact" className="py-20 bg-secondary">
        <Contact />
      </section>

      <Footer />

      <AnimatePresence>
        {selectedCaseStudy && (
          <CaseStudyModal
            caseStudy={selectedCaseStudy}
            onClose={closeCaseStudy}
            onNavigate={navigateCaseStudy}
            totalCaseStudies={caseStudies.length}
            currentIndex={caseStudyIndex}
          />
        )}
      </AnimatePresence>
    </main>
  )
}

