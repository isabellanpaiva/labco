import Navbar from './components/home/Navbar'
import Hero from './components/home/Hero'
import MissionVision from './components/home/MissionVision'
import Tagline from './components/home/Tagline'
import About from './components/home/About'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <MissionVision />
        <Tagline />
        <About />
      </div>
    </main>
  )
}
