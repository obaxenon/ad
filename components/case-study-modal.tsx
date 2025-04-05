"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Globe } from "lucide-react"
import type { CaseStudy } from "@/types/case-study"
import Image from "next/image"

interface CaseStudyModalProps {
  caseStudy: CaseStudy
  onClose: () => void
  onNavigate: (direction: "next" | "prev") => void
  totalCaseStudies: number
  currentIndex: number
}

export default function CaseStudyModal({
  caseStudy,
  onClose,
  onNavigate,
  totalCaseStudies,
  currentIndex,
}: CaseStudyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowRight") {
        onNavigate("next")
      } else if (e.key === "ArrowLeft") {
        onNavigate("prev")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, onNavigate])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay bg-black/80"
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-secondary rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black text-white p-2 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="relative h-64 md:h-80 lg:h-96">
          <Image src={caseStudy.coverImage || "/placeholder.svg"} alt={caseStudy.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">{caseStudy.title}</h2>

            {/* Website button at the top */}
            {caseStudy.websiteUrl && (
              <a
                href={caseStudy.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-black font-bold rounded-md hover:bg-primary/80 transition-colors shadow-lg"
              >
                <Globe size={20} className="mr-2" />
                Visit Website
              </a>
            )}

            {caseStudy.websiteNote && (
              <div className="inline-flex items-center px-6 py-3 bg-black/70 border-2 border-primary text-primary font-bold rounded-md shadow-lg">
                {caseStudy.websiteNote}
              </div>
            )}
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-primary font-semibold mb-2">Objective</h3>
              <p className="text-white/80">{caseStudy.objective}</p>
            </div>
            <div>
              <h3 className="text-primary font-semibold mb-2">Duration</h3>
              <p className="text-white/80">{caseStudy.duration}</p>
              <h3 className="text-primary font-semibold mt-4 mb-2">Role</h3>
              <p className="text-white/80">{caseStudy.role}</p>
            </div>
            <div>
              <h3 className="text-primary font-semibold mb-2">Challenges</h3>
              <ul className="text-white/80 list-disc pl-5 space-y-1">
                {caseStudy.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-primary font-semibold mb-4">Process</h3>
            <div className="space-y-6">
              {caseStudy.process.map((step, index) => (
                <div key={index} className="bg-black/30 p-6 rounded-lg">
                  <h4 className="font-medium text-lg mb-3">{step.title}</h4>
                  <div className="text-white/80 space-y-3">
                    {typeof step.description === "string" ? (
                      <p>{step.description}</p>
                    ) : (
                      step.description.map((paragraph, i) => <p key={i}>{paragraph}</p>)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-primary font-semibold mb-4">Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="bg-black/30 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">{result.stat}</div>
                  <p className="text-white/80">{result.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Website button at the bottom */}
          {caseStudy.websiteUrl && (
            <div className="flex justify-center mt-8 mb-4">
              <a
                href={caseStudy.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-black border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-black transition-colors shadow-lg"
              >
                <Globe size={24} className="mr-3" />
                Visit {caseStudy.title} Website
              </a>
            </div>
          )}

          {caseStudy.websiteNote && !caseStudy.websiteUrl && (
            <div className="flex justify-center mt-8 mb-4">
              <div className="inline-flex items-center px-8 py-4 bg-black/70 border-2 border-primary text-primary font-bold rounded-md shadow-lg">
                {caseStudy.websiteNote}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center p-4 border-t border-white/10">
          <button
            onClick={() => onNavigate("prev")}
            className="flex items-center text-white/80 hover:text-primary transition-colors"
            aria-label="Previous case study"
          >
            <ChevronLeft size={20} className="mr-1" />
            Previous
          </button>
          <div className="text-white/60 text-sm">
            {currentIndex + 1} of {totalCaseStudies}
          </div>
          <button
            onClick={() => onNavigate("next")}
            className="flex items-center text-white/80 hover:text-primary transition-colors"
            aria-label="Next case study"
          >
            Next
            <ChevronRight size={20} className="ml-1" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

