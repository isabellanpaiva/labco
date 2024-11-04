'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Interface for our props
interface ProductCardProps {
  title: string
  description: string[]  // Array for multiple lines
  buttonText: string
  buttonLink: string
  delay?: number  // Optional delay for animation
  isRight?: boolean
}

export function ProductCard({ 
  title, 
  description, 
  buttonText, 
  buttonLink, 
  delay = 0,
  isRight = false
}: ProductCardProps) {
  return (
<Card className={`
  relative overflow-hidden bg-black text-white min-h-[88vh] 
  ${isRight 
    ? 'w-[90%] rounded-l-2xl rounded-r-none ml-auto -mr-1' // Added negative right margin
    : 'w-[90%] rounded-r-2xl rounded-l-none mr-auto -ml-1' // Added negative left margin
  }
  flex items-center justify-center my-[10vh]
`}>
  
   {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-neutral-900" />

      {/* Content */}
      <motion.div 
        className="relative z-10 px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.5, duration: 0.5 }}
      >
        <div className={`
  flex flex-col space-y-4 sm:space-y-6 
  ${isRight ? 'text-right sm:text-right' : 'text-left sm:text-left'}
`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {title}
          </h2>
          <div className="text-lg sm:text-xl text-gray-300">
            {description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          
          <div className="pt-4 sm:pt-8">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-gray-200"
              onClick={() => window.location.href = buttonLink}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </motion.div>
    </Card>
  )
}