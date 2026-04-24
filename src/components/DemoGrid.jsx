import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Smile, Scale } from 'lucide-react'

const demos = [
  {
    id: 'beauty',
    title: 'Glow Beauty Studio',
    category: 'Estética | Premium',
    tagline: 'Tu mejor versión empieza hoy.',
    description: 'Landing para salón de belleza con servicios premium, testimonios y sistema de reservas.',
    icon: Sparkles,
    color: 'pink',
    colorClass: 'pink-300',
    gradient: 'from-pink-300/10 to-pink-600/20',
    href: '/demos/beauty',
    features: ['+320 clientas', '10+ años', '98% satisfacción'],
    preview: '/portfolio-1.jpg'
  },
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
    href: '/demos/dental',
    features: ['+540 pacientes', '18+ años', '99% recomendaciones'],
    preview: '/portfolio-2.jpg'
  },
  {
    id: 'legal',
    title: 'Lexis Legal Firm',
    category: 'Asesoramiento | Corporativo',
    tagline: 'Defensa estratégica con respaldo profesional.',
    description: 'Estudio jurídico especializado en derecho civil, empresarial, laboral y penal.',
    icon: Scale,
    color: 'amber',
    colorClass: 'amber-300',
    gradient: 'from-amber-300/10 to-amber-600/20',
    href: '/demos/legal',
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
      className="group block rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-white/30 transition-all duration-300 h-full flex flex-col cursor-pointer"
    >
      {/* Header con fondo gradient */}
      <div className={`relative h-32 bg-gradient-to-r ${demo.gradient} border-b border-white/10 p-6 flex items-end`}>
        <div className="flex items-end gap-4">
          <div className={`p-3 rounded-2xl bg-${demo.colorClass}/20 border border-${demo.colorClass}/30`}>
            <Icon size={28} className={`text-${demo.colorClass}`} />
          </div>
          <div>
            <p className={`text-xs uppercase tracking-widest text-${demo.colorClass} font-semibold mb-1`}>
              {demo.category}
            </p>
            <h3 className="text-2xl font-bold text-white">{demo.title}</h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-8 justify-between">
        {/* Main text */}
        <div className="mb-6">
          <p className={`text-xl font-bold text-${demo.colorClass} mb-3 leading-relaxed`}>
            "{demo.tagline}"
          </p>
          <p className="text-zinc-400 leading-relaxed">
            {demo.description}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-3 mb-6 py-6 border-y border-white/5">
          {demo.features.map((feature, idx) => (
            <div key={idx} className="text-center">
              <p className="text-xs text-zinc-500 mb-1">Destacado</p>
              <p className={`text-sm font-bold text-${demo.colorClass}`}>{feature}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-4">
          <span className={`px-4 py-2 rounded-full bg-${demo.colorClass}/10 border border-${demo.colorClass}/30 text-xs font-semibold text-${demo.colorClass}`}>
            Ver demo
          </span>
          <ArrowRight size={20} className={`text-zinc-600 group-hover:text-${demo.colorClass} transition-colors`} />
        </div>
      </div>
    </motion.a>
  )
}

function DemoGrid() {
  return (
    <section id="demos" className="py-24 px-5 md:px-10">
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
            Ejemplos de nuestro servicio
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white mb-6">
            Landings que generan engagement.
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Cada demo es un ejemplo real de landing completo. Navegalas, exploralas y visualiza cómo podría verse tu negocio. Son landings in-page funcionales con todos los elementos que venderemos.
          </p>
        </motion.div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <DemoCard key={demo.id} demo={demo} index={index} />
          ))}
        </div>

        {/* Insight section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-r from-zinc-900 to-black p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Cada demo es diferente. Por qué.
          </h3>
          <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
            No creemos en templates estáticos. Cada negocio es único y necesita un diseño que refleje su identidad. La demo de Beauty tiene un estilo minimalista y elegant, la de Dental es más modern y tech, y la de Legal es corporativa y profesional. Así es como trabajamos: cada cliente recibe un diseño pensado para su rubro específico.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="rounded-xl border border-pink-300/20 bg-pink-300/5 p-6">
              <p className="font-bold text-pink-300 mb-2">Beauty Studio</p>
              <p className="text-sm text-zinc-400">Estética minimalista, colores cálidos, foco en confianza y calidad.</p>
            </div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 p-6">
              <p className="font-bold text-cyan-300 mb-2">Dental Care</p>
              <p className="text-sm text-zinc-400">Diseño moderno, tecnología visible, seguridad y profesionalismo.</p>
            </div>
            <div className="rounded-xl border border-amber-300/20 bg-amber-300/5 p-6">
              <p className="font-bold text-amber-300 mb-2">Legal Firm</p>
              <p className="text-sm text-zinc-400">Corporativo, serio, confiable. Énfasis en experiencia y resultados.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DemoGrid
