'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const MissionVision: React.FC = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side - Mission */}
        <motion.div
          {...fadeIn}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Missão</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Construir e impulsionar<br />
              ecossistemas que entreguem<br />
              boas experiências 🌎 
            </p>
          </div>

          <div className="relative mt-8 bg-black dark:bg-gray-800 rounded-lg overflow-hidden h-[300px]">
            <Image 
              src="/images/home/HomeImage1.jpg"
              alt="Mission visualization"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              onError={(e) => {
                console.error('Error loading image:', e);
                // You can set a fallback image here if needed
                // e.currentTarget.src = '/fallback.jpg';
              }}
            />
          </div>
        </motion.div>
        
        {/* Right side - Vision & Image */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image 
              src="/images/home/HomeImage2.jpg"
              alt="Vision representation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              onError={(e) => {
                console.error('Error loading image:', e);
                // You can set a fallback image here if needed
                // e.currentTarget.src = '/fallback.jpg';
              }}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-0 right-0 bg-black dark:bg-gray-800 rounded-lg p-8 max-w-sm"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Visão</h2>
            <p className="text-xl text-gray-300 mb-4">
              Garantir um futuro <br />
              onde tecnologia é ferramenta <br />
              para a liberdade ⚫
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVision