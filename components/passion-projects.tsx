"use client"

import { motion } from "framer-motion"
import { passionProjects } from "@/data/passion-projects"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function PassionProjects() {
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Passion Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Personal projects I've built to explore new technologies and ideas.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {passionProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="card-hover bg-black rounded-lg overflow-hidden border border-white/10"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white/70 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.demoUrl}
                  className="inline-flex items-center px-5 py-2 bg-primary text-black font-medium rounded-full hover:bg-primary/80 transition-colors"
                >
                  View Demo
                  <ExternalLink size={16} className="ml-2" />
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 bg-black border border-primary text-primary font-medium rounded-full hover:bg-primary/10 transition-colors"
                >
                  Open in New Tab
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

