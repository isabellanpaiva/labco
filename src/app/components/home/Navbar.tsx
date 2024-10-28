import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <Link href="/" className="relative group">
          <div className="w-8 h-8 bg-black rounded-full" />
        </Link>
        
        <div className="flex items-center gap-8">
          <Link href="/sobre" className="nav-link">
            Sobre
          </Link>
          <Link href="/servicos" className="nav-link">
            Serviços
          </Link>
          <Link href="/cases" className="nav-link">
            Cases
          </Link>
          <Button variant="default" className="bg-black text-white rounded-full">
            Contato
          </Button>
        </div>
      </div>
    </nav>
  )
}