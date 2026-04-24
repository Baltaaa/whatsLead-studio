import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import DemoGrid from '../components/DemoGrid'

const portfolioItems = [
  {
    id: 1,
    title: 'Estudio Jurídico de Lujo',
    category: 'Abogados | Buenos Aires',
    image: '/portfolio-1.jpg',
    results: '+150% consultas',
    description: 'Landing página premium para estudio de abogados corporativo',
    metrics: [
      { label: 'Incremento de leads', value: '+156%' },
      { label: 'Tiempo promedio en sitio', value: '3m 45s' },
      { label: 'Tasa de conversión', value: '12.4%' }
    ]
  },
  {
    id: 2,
    title: 'Clínica Odontológica Premium',
    category: 'Salud Dental | CABA',
    image: '/portfolio-2.jpg',
    results: '+89 pacientes',
    description: 'Plataforma digital completa con sistema de turnos integrado',
    metrics: [
      { label: 'Citas solicitadas', value: '+89' },
      { label: 'Visitantes únicos/mes', value: '2,341' },
      { label: 'Bounce rate', value: '32%' }
    ]
  },
  {
    id: 3,
    title: 'Inmobiliaria de Lujo',
    category: 'Propiedades | Buenos Aires',
    image: '/portfolio-3.jpg',
    results: '+$2M USD',
    description: 'Showcase de propiedades premium con recorridos virtuales 3D',
    metrics: [
      { label: 'Propiedades vendidas', value: '7' },
      { label: 'Valor transado', value: '$2.1M USD' },
      { label: 'Clientes potenciales', value: '300+' }
    ]
  },
  {
    id: 4,
    title: 'Consultoría Empresarial',
    category: 'Negocios | CABA',
    image: '/portfolio-4.jpg',
    results: '+$450K ARS',
    description: 'Sitio B2B de consultoría con generador de propuestas automático',
    metrics: [
      { label: 'Clientes nuevos', value: '12' },
      { label: 'Valor de proyectos', value: '$450K ARS' },
      { label: 'Engagement rate', value: '8.7%' }
    ]
  },
  {
    id: 5,
    title: 'Boutique de Moda',
    category: 'Retail | Buenos Aires',
    image: '/portfolio-5.jpg',
    results: '+180% ventas',
    description: 'E-commerce integrado con catálogo dinámico y compra directa',
    metrics: [
      { label: 'Aumento de ventas', value: '+180%' },
      { label: 'Transacciones/mes', value: '324' },
      { label: 'Ticket promedio', value: '$8,500 ARS' }
    ]
  },
  {
    id: 6,
    title: 'Salón de Belleza Premium',
    category: 'Estética | CABA',
    image: '/portfolio-6.jpg',
    results: '+95% ocupación',
    description: 'Plataforma de reservas con servicio al cliente 24/7 integrado',
    metrics: [
      { label: 'Ocupación de turnos', value: '95%' },
      { label: 'Clientes nuevos/mes', value: '+34' },
      { label: 'Retención', value: '87%' }
    ]
  }
]

function PortfolioCard({ item, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden h-48 bg-zinc-800">
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'
              }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6 justify-between">
          {/* Title and Category */}
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
              {item.category}
            </p>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-400 mb-4">{item.description}</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 mb-4 py-4 border-t border-white/5">
            {item.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <p className="text-xs text-zinc-500 mb-1">{metric.label}</p>
                <p className="text-sm font-bold text-white">{metric.value}</p>
              </div>
            ))}
          </div>

          {/* Result Badge and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <p className="text-xs font-semibold text-white">{item.results}</p>
            </div>
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <ArrowRight size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-5 md:px-10">
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
            Casos de Éxito
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white mb-6">
            Landings que Venden.
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Proyectos reales de empresas argentinas que transformaron su presencia digital y aumentaron sus conversiones significativamente.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-zinc-900 to-black p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tu proyecto será el próximo caso de éxito?
          </h3>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
            Empresas de todos los rubros confían en nosotros para crear sus landings de alto rendimiento.
          </p>
          <a href="#contacto" className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition-transform">
            Comenzar Mi Landing
          </a>
        </motion.div>
      </div>

      {/* DEMO GRID SECTION */}
      <DemoGrid />
    </section>
  )
}

export default Portfolio
