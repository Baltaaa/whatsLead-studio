import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Smile, Scale } from 'lucide-react'

const demos = [
  
  {
    id: 'dental',
    title: 'Nova Dental Care',
    category: 'Odontología | Moderno',
    tagline: 'Sonreír vuelve a ser simple.',
    description: 'Clínica dental moderna con implantes de carga inmediata, ortodoncia invisible y estética.',
    icon: Smile,
    color: 'cyan',
    colorClass: 'cyan-300',
    gradient: 'from-cyan-300/10 to-cyan-600/20',
    href: '/demo/dental',
    features: ['+540 pacientes', '18+ años', '99% recomendaciones'],
    preview: '/portfolio-2.jpg'
  },
  {
    id: 'beauty',
    title: 'Glow Beauty Studio',
    category: 'Estética | Premium',
    tagline: 'Tu mejor versión empieza hoy.',
    description: 'Landing para salón de belleza con servicios premium, testimonios y sistema de reservas.',
    icon: Sparkles,
    color: 'pink',
    colorClass: 'pink-200',
    gradient: 'from-pink-300/10 to-pink-600/20',
    href: '/demo/beauty',
    features: ['+320 clientas', '10+ años', '98% satisfacción'],
    preview: '/portfolio-1.jpg'
  },
  {
    id: 'legal',
    title: 'Lexis Legal Firm',
    category: 'Asesoramiento | Corporativo',
    tagline: 'Defensa estratégica con respaldo profesional.',
    description: 'Estudio jurídico especializado en derecho civil, empresarial, laboral y penal.',
    icon: Scale,
    color: 'amber',
    colorClass: 'amber-400',
    gradient: 'from-amber-300/10 to-amber-600/20',
    href: '/demo/legal',
    features: ['+850 casos ganados', '14+ años', '98% clientes retienen'],
    preview: '/portfolio-3.jpg'
  }
]

function DemoCard({ demo, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = demo.icon

  return (
    <motion.a
      href={demo.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group  rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-white/30 transition-all duration-300 h-full flex flex-col cursor-pointer"
    >
      {/* Header con fondo gradient */}
      <div className={`relative h-24 sm:h-28 md:h-32 bg-gradient-to-r ${demo.gradient} border-b border-white/10 p-3 sm:p-4 md:p-6 flex items-end`}>
        <div className="flex items-end gap-2 sm:gap-3 md:gap-4 w-full">
          <div className={`p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl md:rounded-2xl bg-${demo.colorClass}/20  flex-shrink-0`}>
            <Icon size={20} className={`text-${demo.colorClass}`} />
          </div>
          <div className="min-w-0 flex-1">
            <p className={`text-xs uppercase tracking-widest text-${demo.colorClass} font-semibold mb-0.5 truncate`}>
              {demo.category}
            </p>
            <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white truncate">{demo.title}</h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-3 sm:p-5 md:p-8 justify-between">
        {/* Main text */}
        <div className="mb-4 sm:mb-5 md:mb-6">
          <p className={`text-sm sm:text-base md:text-xl font-bold text-${demo.colorClass} mb-2 sm:mb-3 leading-relaxed`}>
            "{demo.tagline}"
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {demo.description}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6 py-3 sm:py-4 md:py-6 border-y border-white/5">
          {demo.features.map((feature, idx) => (
            <div key={idx} className="text-center min-w-0">
              <p className="text-xs text-zinc-500 mb-0.5 sm:mb-1 truncate">Destacado</p>
              <p className={`text-xs sm:text-sm font-bold text-${demo.colorClass} truncate`}>{feature}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-2 sm:pt-3 md:pt-4 gap-2">
          <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-${demo.colorClass}/10 border-${demo.colorClass}/30 text-xs font-semibold text-${demo.colorClass} whitespace-nowrap`}>
            Ver demo
          </span>
          <ArrowRight size={16} className={`text-zinc-600 group-hover:text-${demo.colorClass} transition-colors flex-shrink-0`} />
        </div>
      </div>
    </motion.a>
  )
}

function DemoGrid() {
  return (
    <section id="demos" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <p className="uppercase tracking-[0.28em] text-xs text-zinc-500 mb-2 sm:mb-4">
            Ejemplos de nuestro servicio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-white mb-4 sm:mb-6">
            Landings que generan engagement.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl leading-relaxed">
            Cada demo es un ejemplo real de landing completo. Navegalas, exploralas y visualiza cómo podría verse tu negocio. Son landings in-page funcionales con todos los elementos que venderemos.
          </p>
        </motion.div>

        {/* Demo Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-8">
          {demos.map((demo, index) => (
            <DemoCard key={demo.id} demo={demo} index={index} />
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default DemoGrid
