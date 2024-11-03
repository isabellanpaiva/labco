'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

interface LogoProps {
  src: string
  alt: string
  className?: string
  position: {
    desktop: { top: string, left: string }
    tablet: { top: string, left: string }
    mobile: { top: string, left: string }
  }
  rotate?: number
  withBg?: boolean
}

// Componente Logo responsivo
const Logo: React.FC<LogoProps> = ({ src, alt, position, rotate = 0, withBg = false, className = '' }) => {
  const [currentPosition, setCurrentPosition] = useState(position.desktop)
  
  // Função para atualizar posição baseada no tamanho da tela
  const updatePosition = () => {
    const width = window.innerWidth
    if (width < 640) { // mobile
      setCurrentPosition(position.mobile)
    } else if (width < 1024) { // tablet
      setCurrentPosition(position.tablet)
    } else { // desktop
      setCurrentPosition(position.desktop)
    }
  }

  // Atualiza posição quando o componente monta e quando a tela é redimensionada
  useEffect(() => {
    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  return (
    <motion.div 
      variants={logoVariants}
      className={`absolute ${className} ${
        // Tamanhos responsivos
        'w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden'
      } ${withBg ? 'bg-white p-2 sm:p-3 lg:p-4' : ''}`}
      style={{ 
        top: currentPosition.top, 
        left: currentPosition.left,
        rotate: `${rotate}deg`
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: rotate + 5, 
        zIndex: 20,
        transition: { duration: 0.2 } 
      }}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={128}
        height={128}
        className={`object-${withBg ? 'contain' : 'cover'} w-full h-full`}
      />
    </motion.div>
  )
}

export default function Products() {
  // Array com as posições para cada logo em diferentes breakpoints
  const logoPositions = [
    {
      src: "/images/products/JS-logo.png",
      alt: "JavaScript Logo",
      position: {
        desktop: { top: '8%', left: '8%' },
        tablet: { top: '5%', left: '5%' },
        mobile: { top: '5%', left: '5%' }
      },
      rotate: -8
    },
    {
      src: "/images/products/CSS-logo.png",
      alt: "CSS Logo",
      position: {
        desktop: { top: '12%', left: '25%' },
        tablet: { top: '5%', left: '35%' },
        mobile: { top: '25%', left: '5%' }
      },
      rotate: 8,
      withBg: true
    },
    {
      src: "/images/products/HTML-logo.png",
      alt: "HTML Logo",
      position: {
        desktop: { top: '32%', left: '6%' },
        tablet: { top: '25%', left: '15%' },
        mobile: { top: '25%', left: '35%' }
      },
      rotate: -5,
      withBg: true
    },
    {
      src: "/images/products/FF-logo.jpeg",
      alt: "FlutterFlow Logo",
      position: {
        desktop: { top: '35%', left: '28%' },
        tablet: { top: '45%', left: '5%' },
        mobile: { top: '45%', left: '5%' }
      },
      rotate: 5
    },
    {
      src: "/images/products/IDX-logo.png",
      alt: "IDX Logo",
      position: {
        desktop: { top: '55%', left: '12%' },
        tablet: { top: '45%', left: '35%' },
        mobile: { top: '45%', left: '35%' }
      },
      rotate: -12,
      withBg: true
    },
    {
      src: "/images/products/Figma-logo.png",
      alt: "Figma Logo",
      position: {
        desktop: { top: '58%', left: '32%' },
        tablet: { top: '65%', left: '15%' },
        mobile: { top: '65%', left: '5%' }
      },
      rotate: 10,
      withBg: true
    },
    {
      src: "/images/products/VS-logo.png",
      alt: "Visual Studio Logo",
      position: {
        desktop: { top: '78%', left: '20%' },
        tablet: { top: '85%', left: '35%' },
        mobile: { top: '65%', left: '35%' }
      },
      rotate: -7,
      withBg: true
    }
  ]

  return (
    <Card className="relative overflow-hidden bg-black text-white min-h-screen w-5/6 -ml-[1px] rounded-none rounded-r-lg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-neutral-900" />
      
      {/* Logos espalhados */}
      <motion.div 
        className="absolute inset-0 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {logoPositions.map((logo, index) => (
          <Logo
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            position={logo.position}
            rotate={logo.rotate}
            withBg={logo.withBg}
          />
        ))}
      </motion.div>
      
      {/* Conteúdo central */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex flex-col space-y-4 sm:space-y-6 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Fábrica
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Desenvolvimento de páginas web<br />
            e aplicativos digitais<br />
            através de ferramentas high, low and no code.
          </p>
          
          <div className="pt-4 sm:pt-8">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-gray-200"
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </motion.div>
    </Card>
  )
}