import {
  TrendingUp,
  Smartphone,
  Zap,
  Sparkles,
  CheckCircle2,
  Clock,
  Shield
} from "lucide-react"
import { motion } from "framer-motion"

export const Whatsapp = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="#FFFFFF" d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
  </svg>
)

function Card({ icon, title, text, metric, className = "", index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.1
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black p-8 hover:border-white/30 transition-all duration-300 ${className}`}
    >
      {/* Glow effect */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>

        {/* Title and Description */}
        <div className="flex-1">
          <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">{title}</h4>
          <p className="text-base text-zinc-400 leading-relaxed">{text}</p>
        </div>

        {/* Metric if provided */}
        {metric && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-xs text-zinc-500 mb-2">Resultado promedio</p>
            <p className="text-2xl font-bold text-white">{metric}</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function Bento() {
  const services = [
    {
      icon: <TrendingUp size={32} />,
      title: "Landing que Venden",
      text: "Diseñadas específicamente para convertir visitantes en clientes. Cada elemento está optimizado para maximizar tus ventas.",
      metric: "+156% conversiones",
      span: "md:col-span-2"
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Conversión Garantizada",
      text: "Copy persuasivo, diseño de confianza y estructura probada. Resultado: más leads en tu bandeja.",
      metric: "+89 leads/mes",
      span: "md:col-span-1"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile First",
      text: "Perfecto en celulares, tablets y computadoras. El 87% de tus clientes potenciales navega desde el móvil.",
      metric: "100% responsive",
      span: "md:col-span-1"
    },
    {
      icon: <Clock size={32} />,
      title: "Entrega Express",
      text: "Tu landing lista para vender en 48-72 horas. Sin esperas, sin complicaciones. Rápido y profesional.",
      metric: "48-72 hs",
      span: "md:col-span-1"
    },
    {
      icon: <Shield size={32} />,
      title: "Soporte Incluido",
      text: "No te dejamos solo. Ajustes, optimizaciones y mejoras. Tu éxito es nuestro éxito.",
      metric: "24/7 disponible",
      span: "md:col-span-2"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Diseño Modernizado",
      text: "Minimalista, elegante y moderno. Transmite profesionalismo y confianza. Los mejores se ven así.",
      metric: "99% satisfacción",
      span: "md:col-span-1"
    },
  ]

  return (
    <section id="servicios" className="py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.28em] text-xs text-zinc-500 mb-4">
            Por qué Elegir WhatsLeadStudio
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Todo pensado para vender más.
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            No solo hacemos sitios bonitos. Hacemos landings que convierten visitantes en clientes reales.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
          {services.map((service, index) => (
            <div key={index} className={service.span}>
              <Card
                index={index}
                icon={service.icon}
                title={service.title}
                text={service.text}
                metric={service.metric}
              />
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8 p-8 rounded-2xl border border-[#6fffe9]/40 bg-zinc-900/50"
        >
          <div>
            <p className="text-4xl font-bold text-white mb-2">30+</p>
            <p className="text-zinc-400">Landings creadas para empresas</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white mb-2">$20M+</p>
            <p className="text-zinc-400">En ventas generadas para clientes</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white mb-2">94%</p>
            <p className="text-zinc-400">Tasa de satisfacción de clientes</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Bento
