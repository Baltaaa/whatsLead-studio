import { MessageCircleMore, Mail } from "lucide-react"
import Logo from "./Logo"

function Footer() {
  return (
    <footer className="px-5 md:px-10 pb-10 pt-20">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-4 text-zinc-500 max-w-sm leading-relaxed">
              Landing pages modernas diseñadas para generar clientes reales.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>

            <div className="flex flex-col gap-3 text-zinc-400">
              <a href="#servicios" className="hover:text-white transition">
                Servicios
              </a>

              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>

              <a href="#pricing" className="hover:text-white transition">
                Precios
              </a>
            </div>
          </div>

          {/* Contact */}
         {/* <div>
            <h4 className="font-semibold mb-4">Conectemos</h4>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <MessageCircleMore size={18} />
              </a>

              <a
                href="mailto:whatsleadstudio@gmail.com"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <Mail size={18} />
              </a>

            </div>
          </div> */}

        </div> 

        <div className="mt-12 pt-8 border-t border-white/5 text-sm text-zinc-600 flex flex-col md:flex-row gap-3 justify-between">
          <p>© 2026 WhatsLead Studio</p>
          <p>Diseñado para vender más.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer