import { Check } from "lucide-react"
import { motion } from "framer-motion"

function Plan({ name, price, featured, items, note, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.1
      }}
      whileHover={{
        y: -6
      }}
      className={`rounded-3xl p-8 border transition relative overflow-hidden ${
        featured
          ? "border-white bg-white text-black"
          : "border-white/10 bg-zinc-900 text-white"
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-widest bg-[#6fffe9] opacity-90 py-1 px-5 rounded-2xl">
          Recomendado
        </div>
      )}

      <h4 className="text-2xl font-bold">{name}</h4>

      <p className="mt-4 text-5xl font-bold">{price}</p>

      <p className={`mt-2 ${featured ? "text-black/70" : "text-zinc-500"}`}>
        Pago único
      </p>

      <div className="mt-8 space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3 items-start">
            <Check size={18} className="mt-1 shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <p
        className={`mt-8 text-sm ${
          featured ? "text-black/70" : "text-zinc-500"
        }`}
      >
        {note}
      </p>

      <a
        href="#contacto"
        className={`mt-8 block text-center rounded-full px-6 py-4 font-semibold transition ${
          featured
            ? "bg-black text-white hover:bg-zinc-800"
            : "bg-white text-black hover:scale-105"
        }`}
      >
        Solicitar propuesta
      </a>
    </motion.div>
  )
}

function Pricing() {
  return (
    <section id="precios" className="py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="uppercase tracking-[0.28em] text-xs text-zinc-500 mb-3">
            Pricing
          </p>

          <h3 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
            Soluciones pensadas para vender más.
          </h3>

          <p className="mt-5 text-zinc-400 max-w-2xl text-lg">
            Landing pages modernas orientadas a conversión, presencia premium
            y generación de consultas reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          <Plan
            index={1}
            name="Starter"
            price="USD 99"
            note="Ideal para emprendimientos que necesitan presencia profesional inmediata."
            items={[
              "Landing page 1 sección",
              "Diseño responsive",
              "Botón directo a WhatsApp",
              "Copy base vendedor",
              "Entrega rápida",
              "Publicación online"
            ]}
          />

          <Plan
            index={2}
            featured
            name="Growth"
            price="USD 179"
            note="El plan más elegido para negocios que quieren consultas constantes."
            items={[
              "Todo Starter incluido",
              "Diseño premium superior",
              "Secciones adicionales",
              "Testimonios y confianza",
              "Formulario de contacto",
              "SEO local básico",
              "Mayor conversión móvil"
            ]}
          />

          <Plan
            index={3}
            name="Premium"
            price="USD 299"
            note="Para marcas que quieren destacar fuerte y vender en serio."
            items={[
              "Todo Growth incluido",
              "Animaciones premium",
              "Branding visual superior",
              "Analytics visitas",
              "CTA estratégicos avanzados",
              "Captura de leads",
              "Entrega prioritaria"
            ]}
          />

        </div>

        <div className="mt-10 border border-white/10 rounded-3xl bg-zinc-900 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-zinc-500 mb-2">
              Mantenimiento mensual
            </p>

            <h4 className="text-2xl font-bold">
              Desde USD 29 / mes
            </h4>

            <p className="text-zinc-400 mt-2 max-w-xl">
              Hosting, soporte, cambios de texto, actualizaciones y mejoras
              continuas para que tu web siga rindiendo.
            </p>
          </div>

          <a
            href="#contacto"
            className="rounded-full px-6 py-4 bg-white text-black font-semibold hover:scale-105 transition text-center"
          >
            Consultar mantenimiento
          </a>

        </div>

      </div>
    </section>
  )
}

export default Pricing