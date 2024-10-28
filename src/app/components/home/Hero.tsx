'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hero-title"
      >
        LabCo
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="hero-subtitle"
      >
        Seu laboratório de design e soluções em tecnologia
      </motion.p>
    </section>
  )
}