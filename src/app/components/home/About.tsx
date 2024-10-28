import Stats from './Stats'

export default function About() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-6">Sobre</h2>
      <p className="text-xl text-gray-600 max-w-2xl mb-16">
        Combinamos design e tecnologia <br />
        para ajudar pessoas e empresas <br />
        a tirarem suas ideias do papel.
      </p>
      <Stats />
    </section>
  )
}