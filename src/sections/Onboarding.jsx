import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

function Onboarding() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = new FormData(e.target)

    const nombre = form.get("nombre")
    const rubro = form.get("rubro")
    const whatsapp = form.get("whatsapp")
    const instagram = form.get("instagram")
    const servicios = form.get("servicios")
    const colores = form.get("colores")
    const objetivo = form.get("objetivo")
    const referencia = form.get("referencia")

    const message = `
*ONBOARDING CLIENTE - WHATSLEAD STUDIO*

*Marca:* ${nombre}

*Rubro:* ${rubro}

*WhatsApp:* ${whatsapp}

*Instagram:* ${instagram}

*Servicios / Productos:* ${servicios}

*Colores / Estilo deseado:* ${colores}

*Objetivo principal:* ${objetivo}

*Referencias que le gustan:* ${referencia}
    `

    const url = `https://wa.me/542236690101?text=${encodeURIComponent(
      message
    )}`

    window.open(url, "_blank")
    setSent(true)
    e.target.reset()
  }

  return (
    <section
      id="onboarding"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto">

        <div className="mb-8 sm:mb-12">
          <p className="uppercase tracking-[0.28em] text-xs text-zinc-500 mb-2 sm:mb-3">
            Onboarding
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
            Empezá tu proyecto en minutos.
          </h2>

          <p className="mt-3 sm:mt-5 text-zinc-400 max-w-2xl text-sm sm:text-base md:text-lg">
            Completá este formulario y preparamos una propuesta profesional
            personalizada para tu negocio.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 gap-3 sm:gap-5"
        >
          <input
            name="nombre"
            required
            placeholder="Nombre de la marca"
            className="bg-zinc-900 border border-white/10 rounded-lg sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-4 outline-none focus:border-white text-sm"
          />

          <input
            name="rubro"
            required
            placeholder="Rubro / actividad"
            className="bg-zinc-900 border border-white/10 rounded-lg sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-4 outline-none focus:border-white text-sm"
          />

          <input
            name="whatsapp"
            required
            placeholder="WhatsApp"
            className="bg-zinc-900 border border-white/10 rounded-lg sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-4 outline-none focus:border-white text-sm"
          />

          <input
            name="instagram"
            placeholder="Instagram"
            className="bg-zinc-900 border border-white/10 rounded-lg sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-4 outline-none focus:border-white text-sm"
          />

          <textarea
            name="servicios"
            rows="3"
            placeholder="¿Qué vendés o qué servicios ofrecés?"
            className="sm:col-span-2 bg-zinc-900 border border-white/10 rounded-lg sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-4 outline-none focus:border-white text-sm"
          />

          <input
            name="colores"
            placeholder="Colores / estilo deseado"
            className="bg-zinc-900 border border-white/10 rounded-lg sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-4 outline-none focus:border-white text-sm"
          />

          <input
            name="objetivo"
            placeholder="Objetivo principal (más clientes, turnos, ventas...)"
            className="bg-zinc-900 border border-white/10 rounded-lg sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-4 outline-none focus:border-white text-sm"
          />

          <textarea
            name="referencia"
            rows="3"
            placeholder="Webs o marcas que te gusten como referencia"
            className="sm:col-span-2 bg-zinc-900 border border-white/10 rounded-lg sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-4 outline-none focus:border-white text-sm"
          />

          <button
            type="submit"
            className="sm:col-span-2 mt-2 rounded-full bg-white text-black font-semibold px-4 sm:px-6 py-2.5 sm:py-4 hover:scale-[1.02] transition flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Send size={16} />
            Enviar datos por WhatsApp
          </button>
        </motion.form>

        {sent && (
          <div className="mt-4 sm:mt-6 flex items-center gap-2 text-zinc-300 text-sm sm:text-base">
            <CheckCircle2 size={18} />
            Datos preparados correctamente.
          </div>
        )}

      </div>
    </section>
  )
}

export default Onboarding
