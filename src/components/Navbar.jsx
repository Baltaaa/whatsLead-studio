import { useEffect, useState } from "react"
import Logo from "./Logo"

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "backdrop-blur-2xl bg-black/75 border-b border-white/10 py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">


        <Logo />

        {/* Desktop */}
        {/* <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
          <a href="#servicios" className="hover:text-white transition">
            Servicios
          </a>

          <a href="#portfolio" className="hover:text-white transition">
            Clientes
          </a>

          <a href="#pricing" className="hover:text-white transition">
            Precios
          </a>

          <a href="#contacto" className="hover:text-white transition">
            Contacto
          </a>
        </nav> */}

        <a
          href="#onboarding"
          className="hidden md:block m-2 px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition"
        >
          Onboarding
        </a>

      </div>



    </header>
  )
}

export default Navbar
