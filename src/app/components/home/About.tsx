'use client'
import { motion } from 'framer-motion'

// Properly structured animation variant
const fadeIn = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6 
    }
  }
}

export default function About() {
  return (
    <section className="container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left side - About */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="flex flex-col justify-between space-y-20" 
        >
          <div>
            <motion.h2 
              variants={fadeIn}
              className="text-4xl font-bold mb-6 dark:text-white"
            >
              Sobre
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-neutral-600 dark:text-neutral-300"
            >
              Combinamos design e tecnologia <br />
              para ajudar pessoas e empresas<br />
              a tirarem suas idéias do papel. 
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}