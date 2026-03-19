"use client"

import Link from "next/link"
import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4 hover:opacity-80 transition-opacity">
              <div className="p-1.5 rounded-lg bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              BIOKRONE
            </Link>
            <p className="text-background/70 text-sm max-w-md">
              Empresa mexicana lider en el desarrollo y comercializacion de productos biologicos para la agricultura sustentable. Comprometidos con el medio ambiente y la productividad del campo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/" className="hover:text-background transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#cobertura" className="hover:text-background transition-colors">
                  Cobertura
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-background transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-background transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/productos?categoria=FUNGICIDAS" className="hover:text-background transition-colors">
                  Fungicidas
                </Link>
              </li>
              <li>
                <Link href="/productos?categoria=BIOFORTIFICANTES" className="hover:text-background transition-colors">
                  Biofortificantes
                </Link>
              </li>
              <li>
                <Link href="/productos?categoria=BIOINSECTICIDAS" className="hover:text-background transition-colors">
                  Bioinsecticidas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            {new Date().getFullYear()} BIOKRONE. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">
              Aviso de privacidad
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terminos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
