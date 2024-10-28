'use client'
import { motion } from 'framer-motion'
import { H1 } from '@/components/ui/typography'
import { useEffect, useState } from 'react'

export default function Tagline() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <H1 className="text-center">
          Pessoas. Produtos. Potenciais.
        </H1>
      </motion.div>
    </section>
  )
}