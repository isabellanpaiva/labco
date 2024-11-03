'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="container">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="typography-h1 text-6xl mb-6"
        >
          LabCo
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="typography-h2 font-normal border-none"
        >
          Seu laboratório de design e soluções em tecnologia
        </motion.h2>
      </div>
    </section>
  )
}