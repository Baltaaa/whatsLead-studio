import { Sparkles, Star, MessageCircle, Shield, Zap, Smile, Heart, Award, Clock, Users, TrendingUp, ArrowRight } from "lucide-react"
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

const services = [
  {
    icon: Sparkles,
    title: "Labios Premium",
    desc: "Volumen y definición con ácido hialurónico de última generación",
    price: "$12.000"
  },
  {
    icon: Zap,
    title: "Botox & Glow",
    desc: "Rejuvenecimiento facial manteniendo expresividad natural",
    price: "$15.000"
  },
  {
    icon: Heart,
    title: "Limpieza Profunda",
    desc: "Tratamiento facial express con efecto lifting instantáneo",
    price: "$8.500"
  },
  {
    icon: Smile,
    title: "Peelings Químicos",
    desc: "Renovación celular avanzada para piel radiante",
    price: "$10.000"
  },
  {
    icon: Star,
    title: "Pestañas Volumen",
    desc: "Extensiones de última tecnología con duración de 30 días",
    price: "$6.500"
  },
  {
    icon: Award,
    title: "Cejas Perfectas",
    desc: "Diseño y laminado para cejas de ensueño",
    price: "$5.000"
  }
]

const testimonials = [
  {
    name: "Camila R.",
    role: "Abogada",
    text: "Excelente atención. Los resultados son súper naturales y la profesionalidad es impecable. Volví cada mes sin dudarlo.",
    rating: 5
  },
  {
    name: "Florencia T.",
    role: "Diseñadora Gráfica",
    text: "Me sentí cómoda desde el minuto uno. El ambiente es relajante y el trato es cálido. Ahora es mi salón de confianza.",
    rating: 5
  },
  {
    name: "Sofía M.",
    role: "Productora",
    text: "Increíble el resultado del botox. Me ves más descansada pero sigo siendo yo. Eso es lo que buscaba.",
    rating: 5
  },
  {
    name: "Valentina L.",
    role: "Modelo",
    text: "Para eventos especiales siempre voy a Glow. Las pestañas me dejan espectacular y todo el día dura perfecto.",
    rating: 5
  }
]

const faqs = [
  {
    q: "¿El Botox deja una cara artificial?",
    a: "No. Usamos técnicas modernas que mantienen tu expresividad natural. Solo eliminamos arrugas de expresión, nunca bloqueamos movimientos."
  },
  {
    q: "¿Cuánto duran los resultados?",
    a: "Generalmente 3-4 meses. Algunos efectos se notan desde el primer día, pero el máximo potencial lo ves a los 7-10 días."
  },
  {
    q: "¿Hay contraindicaciones con el Botox?",
    a: "Excepto en embarazo y lactancia, es muy seguro. Siempre recomendamos una consulta previa para evaluar tu caso."
  },
  {
    q: "¿Los tratamientos duelen?",
    a: "Utilizamos agujas muy finas y cremas anestésicas. La mayoría describe molestia mínima. Es completamente tolerable."
  }
]

function BeautyDemo() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-white text-black">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
          <p className="text-lg font-light tracking-widest">GLOW</p>
          <a href="https://wa.me/542236690101" className="px-6 py-2 bg-pink-500 text-white rounded-lg font-medium text-sm hover:bg-pink-600 transition">
            Reservar
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-24 items-center">
          <div>
            <p className="text-xs sm:text-sm tracking-[0.3em] text-pink-600 mb-4 sm:mb-8 font-medium uppercase">Estética facial premium</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6 sm:mb-8 tracking-tight">
              Tu mejor versión empieza hoy.
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 mb-8 sm:mb-12 leading-relaxed font-light max-w-lg">
              Tratamientos con tecnología de vanguardia y resultados naturales que realzan tu belleza.
            </p>
            <a href="https://wa.me/542236690101" className="inline-flex px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-lg hover:bg-zinc-900 transition font-medium text-sm sm:text-base">
              Reservar consulta <ArrowRight className="ml-2" size={18} />
            </a>
          </div>

          {/* STATS LADO DERECHO */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-0">
            <div className="flex items-center justify-between p-4 sm:p-6 border border-black/10 rounded-lg sm:rounded-xl gap-4">
              <div className="flex-1">
                <p className="text-3xl sm:text-4xl md:text-5xl font-light mb-1"><CountUpNumber end={320} />+</p>
                <p className="text-xs sm:text-sm text-zinc-600 font-light">Clientas felices</p>
              </div>
              <Users className="text-pink-500 flex-shrink-0" size={24} />
            </div>
            <div className="flex items-center justify-between p-4 sm:p-6 border border-black/10 rounded-lg sm:rounded-xl gap-4">
              <div className="flex-1">
                <p className="text-3xl sm:text-4xl md:text-5xl font-light mb-1"><CountUpNumber end={10} />+</p>
                <p className="text-xs sm:text-sm text-zinc-600 font-light">Años experiencia</p>
              </div>
              <Award className="text-pink-500 flex-shrink-0" size={24} />
            </div>
            <div className="flex items-center justify-between p-4 sm:p-6 border border-black/10 rounded-lg sm:rounded-xl gap-4">
              <div className="flex-1">
                <p className="text-3xl sm:text-4xl md:text-5xl font-light mb-1"><CountUpNumber end={98} />%</p>
                <p className="text-xs sm:text-sm text-zinc-600 font-light">Satisfacción</p>
              </div>
              <Star className="text-pink-500 flex-shrink-0" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-28 max-w-7xl mx-auto border-t border-black/5">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-3 sm:mb-4">Servicios</h2>
        <p className="text-sm sm:text-base md:text-lg text-zinc-600 mb-12 sm:mb-16 font-light">Cada tratamiento personalizado según tu piel</p>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {services.map((svc, i) => (
            <div key={i} className="group border border-black/10 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl hover:border-pink-500/50 hover:bg-pink-50/30 transition">
              <p className="text-xs text-pink-600 mb-2 sm:mb-3 font-medium uppercase">{svc.desc}</p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-3 sm:mb-4">{svc.title}</h3>
              <p className="text-lg sm:text-xl md:text-xl font-medium text-pink-600">{svc.price}</p>
            </div>
          ))}
        </div>
      </section>



      {/* BENEFICIOS */}
      <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-28 max-w-7xl mx-auto border-t border-black/5">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-10 sm:mb-16">¿Por qué Glow?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <p className="text-xs text-pink-600 font-medium mb-2 sm:mb-3 uppercase">Productos</p>
            <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-4">Premium importados</h3>
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">Marcas líderes mundiales certificadas con garantía de procedencia.</p>
          </div>
          <div>
            <p className="text-xs text-pink-600 font-medium mb-2 sm:mb-3 uppercase">Técnica</p>
            <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-4">Vanguardia</h3>
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">Capacitación continua en técnicas modernas de estética facial.</p>
          </div>
          <div>
            <p className="text-xs text-pink-600 font-medium mb-2 sm:mb-3 uppercase">Ambiente</p>
            <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-4">Boutique exclusivo</h3>
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">Diseñado para tu comodidad y relajación total durante cada procedimiento.</p>
          </div>
          <div>
            <p className="text-xs text-pink-600 font-medium mb-2 sm:mb-3 uppercase">Seguridad</p>
            <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-4">Protocolos quirúrgicos</h3>
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">Esterilización de hospital en cada procedimiento. Tu seguridad es prioridad.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-28 max-w-7xl mx-auto border-t border-black/5">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-10 sm:mb-16">Testimonios</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-black/10 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl">
              <p className="text-sm sm:text-base text-zinc-700 mb-4 sm:mb-6 font-light leading-relaxed italic">"{t.text}"</p>
              <p className="font-medium text-sm sm:text-base">{t.name}</p>
              <p className="text-xs sm:text-sm text-zinc-600">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-28 max-w-3xl mx-auto border-t border-black/5">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-10 sm:mb-16">Preguntas frecuentes</h2>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-black/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left font-medium flex justify-between items-center hover:bg-pink-50/30 transition text-sm sm:text-base"
              >
                {faq.q}
                <span className={`transition-transform flex-shrink-0 ml-2`}>▼</span>
              </button>
              {openFaq === idx && (
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-pink-50/30 text-zinc-700 font-light border-t border-black/10 text-sm sm:text-base">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-28 max-w-7xl mx-auto">
        <div className="rounded-lg sm:rounded-2xl border border-black/10 bg-black text-white p-8 sm:p-12 md:p-16 text-center">
          <Heart className="mx-auto mb-4 sm:mb-6 opacity-80" size={32} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">¿Listo para brillar?</h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-light">
            Reservá tu consulta gratis. Diseñaremos el plan perfecto según tu piel.
          </p>
          <a href="https://wa.me/542236690101" className="inline-flex px-6 sm:px-8 py-2.5 sm:py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition text-sm sm:text-base">
            Escribir por WhatsApp <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 sm:px-6 md:px-10 py-8 sm:py-12 max-w-7xl mx-auto border-t border-black/5">
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
          <div>
            <p className="font-medium text-pink-600 mb-2 sm:mb-4 text-sm sm:text-base">GLOW</p>
            <p className="text-xs sm:text-sm text-zinc-600 font-light">Estética facial premium con resultados naturales.</p>
          </div>
          <div>
            <p className="font-medium mb-2 sm:mb-4 text-sm sm:text-base">Horarios</p>
            <p className="text-xs sm:text-sm text-zinc-600 font-light">Lunes a viernes: 10:00 - 20:00</p>
            <p className="text-xs sm:text-sm text-zinc-600 font-light">Sábados: 10:00 - 18:00</p>
          </div>
          <div>
            <p className="font-medium mb-2 sm:mb-4 text-sm sm:text-base">Contacto</p>
            <p className="text-xs sm:text-sm text-zinc-600 font-light">WhatsApp: +54 223 669 0101</p>
            <p className="text-xs sm:text-sm text-zinc-600 font-light">Mar del Plata, Buenos Aires</p>
          </div>
        </div>
        <div className="pt-6 sm:pt-8 border-t border-black/5 text-center text-xs sm:text-sm text-zinc-600 font-light">
          © 2024 Glow Beauty Studio
        </div>
      </footer>
    </div>
  )
}

export default BeautyDemo
