import { Check } from "lucide-react"
import { motion } from "framer-motion"

function Plan({ name, price, featured, items, index }) {
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
        <div className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-widest bg-[#75757E]/30 opacity-90 py-1 px-5 rounded-2xl">
          Popular
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
            <Check size={18} />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <a
        href="#contacto"
        className={`mt-8 block text-center rounded-full px-6 py-4 font-semibold transition ${
          featured
            ? "bg-black text-white hover:bg-zinc-800"
            : "bg-white text-black hover:scale-105"
        }`}
      >
        Elegir plan
      </a>
    </motion.div>
  )
}

function Pricing() {
  return (
    <section className="py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="uppercase tracking-[0.28em] text-xs text-zinc-500 mb-3">
            Precios
          </p>

          <h3 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Planes pensados para empezar ya.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          <Plan
          index={1}
            name="Starter"
            price="USD 99"
            items={[
              "Landing simple",
              "Botón WhatsApp",
              "Diseño responsive",
              "Entrega rápida"
            ]}
          />

          <Plan
          index={2}
            featured
            name="Pro"
            price="USD 149"
            items={[
              "Landing premium",
              "Copy vendedor",
              "WhatsApp optimizado",
              "Sección testimonios",
              "Mayor conversión"
            ]}
          />

          <Plan
          index={3}
            name="Elite"
            price="USD 249"
            items={[
              "Diseño premium total",
              "Animaciones",
              "Bento layout",
              "Alta percepción de marca",
              "Entrega prioritaria"
            ]}
          />

        </div>

      </div>
    </section>
  )
}

export default Pricing