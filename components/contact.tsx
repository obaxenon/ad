"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Linkedin } from "lucide-react"

export default function Contact() {
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Feel free to reach out to me through any of the following channels.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        <motion.a
          href="tel:+27693337332"
          variants={item}
          className="bg-black p-8 rounded-lg text-center border border-white/10 hover:border-primary transition-colors card-hover"
        >
          <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-white/80">+27 69 333 7332</p>
        </motion.a>

        <motion.a
          href="mailto:alcottde@gmail.com"
          variants={item}
          className="bg-black p-8 rounded-lg text-center border border-white/10 hover:border-primary transition-colors card-hover"
        >
          <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-white/80">alcottde@gmail.com</p>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/alcot"
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          className="bg-black p-8 rounded-lg text-center border border-white/10 hover:border-primary transition-colors card-hover"
        >
          <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Linkedin className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
          <p className="text-white/80">linkedin.com/in/alcot</p>
        </motion.a>
      </motion.div>
    </div>
  )
}

