import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            ArriendaMaquinaria
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/categorias" className="text-sm font-medium hover:text-primary">
              Categorías
            </Link>
            <Link href="/maquinaria" className="text-sm font-medium hover:text-primary">
              Maquinaria
            </Link>
            <Link href="/nosotros" className="text-sm font-medium hover:text-primary">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </div>

          <Button variant="outline" className="hidden md:flex">
            <PhoneCall className="h-4 w-4 mr-2" />
            Llamar Ahora
          </Button>
        </div>
      </div>
    </nav>
  )
}

