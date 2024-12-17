import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-300 to-teal-300 text-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dirección */}
          <div className="space-y-2">
            <p className="text-sm">
              Blanco Encalada 575, Quillota, Valparaíso
            </p>
          </div>

          {/* Tienda Links */}
          <div className="space-y-4">
            <h3 className="font-semibold uppercase">Tienda</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                href="/cotizar-repuestos" 
                className="text-sm hover:underline"
              >
                Cotizar Repuestos
              </Link>
              <Link 
                href="/cotizar-maquinarias" 
                className="text-sm hover:underline"
              >
                Cotizar Maquinarias
              </Link>
              <Link 
                href="/soluciones" 
                className="text-sm hover:underline"
              >
                Soluciones
              </Link>
            </div>
          </div>

          {/* Horarios y Contacto */}
          <div className="space-y-4">
            <h3 className="font-semibold">Horarios de Atención</h3>
            <div className="space-y-2 text-sm">
              <p>Lunes a Viernes: 8:30 - 18:30</p>
              <p>
                Sábado - Domingo: WhatsApp{' '}
                <Link 
                  href="https://wa.me/56944611678" 
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +56944611678
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

