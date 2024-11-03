'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function MissionVision() {
  return (
    <section className="container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left side - Mission */}
        <motion.div
          {...fadeIn}
          className="flex flex-col justify-between space-y-20" 
        >
          <div>
            <motion.h2 className="typography-h2 border-none">Missão</motion.h2>
            <motion.p className="typography-lead">
              Construir e impulsionar<br />
              ecossistemas que entreguem<br />
              boas experiências 🌎 
            </motion.p>
          </div>

          <div className="relative mt-8 bg-black dark:bg-gray-800 rounded-lg overflow-hidden h-[300px]">
            <Image 
              src="/images/home/HomeImage1.png"
              alt="Mission visualization"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              onError={(e) => console.error('Error loading image:', e)}
            />
          </div>
        </motion.div>
        
        {/* Right side - Vision & Image */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="relative h-full" 
        >
          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image 
              src="/images/home/HomeImage2.png"
              alt="Vision representation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              onError={(e) => console.error('Error loading image:', e)}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-40 right-0 rounded-lg p-8 max-w-sm"
          >
             <motion.h2 className="typography-h2 border-none">Visão</motion.h2>
             <motion.p className="typography-lead">
              Garantir um futuro <br />
              onde tecnologia é ferramenta <br />
              para a liberdade ⚫
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}