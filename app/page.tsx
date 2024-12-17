import { SearchIcon } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Maquinaria de construcción"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Arriendo de Maquinaria
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8">
            Encuentra la maquinaria perfecta para tu proyecto
          </p>
          <div className="flex w-full max-w-md gap-2">
            <Input
              placeholder="Buscar maquinaria..."
              className="bg-white text-black"
            />
            <Button>
              <SearchIcon className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías de Maquinaria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center group-hover:text-primary">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Maquinaria Destacada</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item) => (
              <Card key={item.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">${item.price}/día</span>
                      <Button>Ver Detalles</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

const categories = [
  {
    name: "Excavadoras",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Grúas",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Retroexcavadoras",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Compactadoras",
    image: "/placeholder.svg?height=400&width=400",
  },
]

const equipment = [
  {
    name: "Excavadora CAT 320",
    description: "Excavadora de tamaño mediano ideal para construcción",
    image: "/placeholder.svg?height=300&width=400",
    price: 250000,
  },
  {
    name: "Grúa Torre Liebherr",
    description: "Grúa torre de alta capacidad para proyectos grandes",
    image: "/placeholder.svg?height=300&width=400",
    price: 450000,
  },
  {
    name: "Retroexcavadora JCB",
    description: "Retroexcavadora versátil para múltiples usos",
    image: "/placeholder.svg?height=300&width=400",
    price: 180000,
  },
]

