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
      className="rounded-lg sm:rounded-2xl md:rounded-3xl border border-white/10 bg-zinc-900 p-4 sm:p-5 md:p-7 hover:border-white/20 transition"
    >
      <div className="flex gap-1 mb-3 sm:mb-4 md:mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#F6D336" stroke="#F6D336" />
        ))}
      </div>

      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
        "{text}"
      </p>

      <div className="mt-4 sm:mt-5 md:mt-6">
        <h4 className="font-semibold text-sm sm:text-base">{name}</h4>
        <p className="text-xs sm:text-sm text-zinc-500">{role}</p>
      </div>
    </motion.div>
  )
}

function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 sm:mb-12 md:mb-12">
          <p className="uppercase tracking-[0.28em] text-xs text-zinc-500 mb-2 sm:mb-3">
            Opiniones
          </p>

          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
            Negocios locales que mejoraron su presencia online.
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-5">

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
