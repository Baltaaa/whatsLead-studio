import { Star } from "lucide-react"
import { motion } from "framer-motion"

function TestimonialCard({ name, role, text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.1,
        delay: index * 0.12
      }}
      whileHover={{ y: -5 }}
      className="rounded-3xl border border-white/10 bg-zinc-900 p-7 hover:border-white/20 transition"
    >
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="white" stroke="white" />
        ))}
      </div>

      <p className="text-zinc-300 leading-relaxed text-[15px]">
        “{text}”
      </p>

      <div className="mt-6">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-zinc-500">{role}</p>
      </div>
    </motion.div>
  )
}

function Testimonials() {
  return (
    <section className="py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="uppercase tracking-[0.28em] text-xs text-zinc-500 mb-3">
            Opiniones
          </p>

          <h3 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Negocios locales que mejoraron su presencia online.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          <TestimonialCard
            index={0}
            name="Luciana R."
            role="Centro de Estética · Mar del Plata"
            text="Necesitábamos algo simple y profesional. Empezamos a recibir más consultas por WhatsApp desde la primera semana."
          />

          <TestimonialCard
            index={1}
            name="Matías G."
            role="Entrenador Personal · Mar del Plata"
            text="La página quedó moderna y clara. Ahora mis clientes encuentran precios, horarios y me escriben directo."
          />

          <TestimonialCard
            index={2}
            name="Valentina S."
            role="Emprendimiento Gastronómico · Mar del Plata"
            text="Nos ayudó a mostrar mejor la marca y ordenar pedidos. La experiencia fue rápida y muy prolija."
          />

        </div>

      </div>
    </section>
  )
}

export default Testimonials