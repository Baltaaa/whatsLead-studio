import { motion } from "framer-motion"
import { ArrowRight, Zap, Users, TrendingUp, CheckCircle2, Rocket, Clock, Smile, Building2 } from "lucide-react"
import { useState, useRef } from "react"

function CountUpNumber({ end, duration = 1500 }) {
  const [count, setCount] = useState(0)
  const hasStarted = useRef(false)

  const onVisible = (el) => {
    if (!el || hasStarted.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        hasStarted.current = true
        const startTime = Date.now()
        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) requestAnimationFrame(animate)
        }
        animate()
        observer.disconnect()
      }
    }, { threshold: 0.1 })
    observer.observe(el)
  }

  return <span ref={onVisible}>{count}</span>
}

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center pt-20 sm:pt-24 md:pt-28 overflow-hidden">

      {/* Lights */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-zinc-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-14 items-center">

        {/* Left */}
        <div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="uppercase tracking-[0.28em] text-xs text-zinc-500 mb-3 sm:mb-5"
          >
            WhatsLead Studio
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-white"
          >
            Landings que venden. <b className="text-[#6fffe9] font-extrabold">Ya.</b>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 sm:mt-6 md:mt-7 text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed"
          >
            No vendemos solo un diseño bonito. Vendemos resultados. Landings optimizadas para convertir visitantes en clientes reales en 48-72 horas.
          </motion.p>

          {/* Trust Signals Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
              <CheckCircle2 size={16} className="text-zinc-300" />
              <span className="text-zinc-300 whitespace-nowrap">120+ Landings</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
              <TrendingUp size={16} className="text-zinc-300" />
              <span className="text-zinc-300 whitespace-nowrap">+156% conversión</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
              <Zap size={16} className="text-zinc-300" />
              <span className="text-zinc-300 whitespace-nowrap">48-72 horas</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              Solicitar Propuesta
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.02 }}
              className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/40 transition font-semibold"
            >
              Ver Casos de Éxito
            </motion.a>

          </motion.div>

          {/* Guarantee */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-sm text-zinc-500"
          >
            <p>✓ Garantía 30 días | Soporte 24/7 | Optimizado SEO</p>
          </motion.div>

        </div>

        {/* Right - Stats Box */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >

          <div className="rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black p-6 sm:p-8 shadow-2xl space-y-4 sm:space-y-6">

            {/* Stat 1 */}
            <div className="border-b border-white/10 pb-4 sm:pb-6 flex justify-between items-start gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-zinc-500 mb-1 sm:mb-2">Promedio de Conversión</p>
                <motion.p 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                >
                  +<CountUpNumber end={156} />%
                </motion.p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 sm:mt-1">Más leads que antes</p>
              </div>
              <Rocket className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
            </div>

            {/* Stat 2 */}
            <div className="border-b border-white/10 pb-4 sm:pb-6 flex justify-between items-start gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-zinc-500 mb-1 sm:mb-2">Tiempo de Entrega</p>
                <p className="text-3xl sm:text-4xl md:text-4xl font-bold text-white">48-72h</p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 sm:mt-1">Tu landing lista para vender</p>
              </div>
              <Clock className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
            </div>

            {/* Stat 3 */}
            <div className="border-b border-white/10 pb-4 sm:pb-6 flex justify-between items-start gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-zinc-500 mb-1 sm:mb-2">Tasa de Satisfacción</p>
                <p className="text-3xl sm:text-4xl md:text-4xl font-bold text-white"><CountUpNumber end={94} />%</p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 sm:mt-1">Clientes que vuelven</p>
              </div>
              <Smile className="text-amber-400 mt-1 flex-shrink-0" size={24} />
            </div>

            {/* Stat 4 */}
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-zinc-500 mb-1 sm:mb-2">Empresas Confían</p>
                <p className="text-3xl sm:text-4xl md:text-4xl font-bold text-white"><CountUpNumber end={30} />+</p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 sm:mt-1">Desde CABA hasta provincias</p>
              </div>
              <Building2 className="text-violet-400 mt-1 flex-shrink-0" size={24} />
            </div>

            {/* Badge */}
            <div className="pt-6 border-t border-white/10">
              <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 w-fit">
                <p className="text-xs font-semibold text-white">⭐ Top rated en consultoría digital</p>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </motion.section>
  )
}

export default Hero
