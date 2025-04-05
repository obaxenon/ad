"use client"

import { motion } from "framer-motion"
import { cvData } from "@/data/cv-data"

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-primary">Summary</h3>
          <p className="text-white/80 leading-relaxed">{cvData.summary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-primary">Experience</h3>
          <div className="space-y-8">
            {cvData.experience.map((job, index) => (
              <div key={index} className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <h4 className="text-xl font-medium">{job.title}</h4>
                <p className="text-primary mb-2">
                  {job.company} | {job.period}
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
          <div className="space-y-4">
            {cvData.education.map((edu, index) => (
              <div key={index} className="bg-secondary p-4 rounded-lg">
                <h4 className="text-lg font-medium">{edu.institution}</h4>
                <p className="text-primary mb-2">{edu.year}</p>
                <ul className="list-disc list-inside text-white/80">
                  {edu.qualifications.map((qualification, idx) => (
                    <li key={idx}>{qualification}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-primary">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-3">Hard Skills</h4>
              <ul className="list-disc list-inside text-white/80 space-y-1">
                {cvData.skills.hard.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3">Soft Skills</h4>
              <ul className="list-disc list-inside text-white/80 space-y-1">
                {cvData.skills.soft.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3">Tools & Technologies</h4>
              <ul className="list-disc list-inside text-white/80 space-y-1">
                {cvData.skills.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

