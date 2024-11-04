'use client'

import { ProductCard } from './ProductCard'

// Data structure for our products
const productData = [
  {
    title: "Fábrica",
    description: [
      "Desenvolvimento de páginas web",
      "e aplicativos digitais",
      "através de ferramentas high, low and no code."
    ],
    buttonText: "Saiba mais",
    buttonLink: "/fabrica",
  },
  {
    title: "Escritório",
    description: [
      "Consultoria de negócios",
      "focada em produto e inovação",
      "para diferentes tipos de negócio"
    ],
    buttonText: "Saiba mais",
    buttonLink: "/escritorio",
  },
  {
    title: "Garagem",
    description: [
      "Mentoria individual",
      "para profissionais das áreas",
      "de produto e tecnologia."
    ],
    buttonText: "Saiba mais",
    buttonLink: "/garagem",
  },
  {
    title: "Laboratório",
    description: [
      "Agenda de experimentação criativa",
      "relacionadas à arte, ",
      "facilitação de grupos e inovação."
    ],
    buttonText: "Saiba mais",
    buttonLink: "/laboratorio",
  },
]

export default function Products() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {productData.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          buttonText={product.buttonText}
          buttonLink={product.buttonLink}
          delay={index * 0.2} // Stagger the animations
          isRight={index % 2 === 1}
        />
      ))}
    </div>
  )
}