'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { H1 } from '@/components/ui/typography'

const stats = [
  {
    number: "10 mil",
    description: "Horas de aplicação em gestão de projetos, produtos e pessoas"
  },
  {
    number: "+30",
    description: "Ferramentas de mercado para facilitar o caminho para você e sua equipe"
  },
  {
    number: "14",
    description: "Experiências na América Latina, América do Norte e Europa"
  },
  {
    number: "4.8 de 5",
    description: "Avaliação média de clientes atendidos em NPS — Net Promoter Score"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Stats() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <AnimatePresence>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="text-center"
            >
              <H1 className="text-4xl font-bold mb-2">
                {stat.number}
              </H1>
              <br />
              <p className="text-xl text-gray-600 mb-4">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}