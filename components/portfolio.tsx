"use client"

import { motion } from "framer-motion"
import { caseStudies } from "@/data/case-studies"
import type { CaseStudy } from "@/types/case-study"
import Image from "next/image"

interface PortfolioProps {
  openCaseStudy: (caseStudy: CaseStudy) => void
}

export default function Portfolio({ openCaseStudy }: PortfolioProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          A showcase of my professional work across various industries and technologies.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {caseStudies.map((caseStudy) => (
          <motion.div
            key={caseStudy.id}
            variants={item}
            className="card-hover bg-secondary rounded-lg overflow-hidden"
            onClick={() => openCaseStudy(caseStudy)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={caseStudy.coverImage || "/placeholder.svg"}
                alt={caseStudy.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
              <p className="text-white/70 mb-4 line-clamp-2">{caseStudy.shortDescription}</p>
              <button className="text-primary font-medium flex items-center">
                View Case Study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

