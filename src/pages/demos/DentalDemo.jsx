import { Smile, Award, TrendingUp, Users, ArrowRight, CheckCircle, Zap, Star } from "lucide-react"
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

const treatments = [
  { icon: Smile, title: "Implantes", subtitle: "Carga inmediata", price: "$45.000" },
  { icon: Zap, title: "Ortodoncia", subtitle: "Invisible", price: "$25.000" },
  { icon: Star, title: "Blanqueamiento", subtitle: "8 tonos", price: "$8.500" },
  { icon: Award, title: "Diseño", subtitle: "Sonrisa", price: "$5.000" },
  { icon: CheckCircle, title: "Coronas", subtitle: "CAD/CAM", price: "$18.000" },
  { icon: TrendingUp, title: "Limpieza", subtitle: "Avanzada", price: "$3.500" }
]

function DentalDemo() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 text-white min-h-screen">
      {/* NAVBAR NEON */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-wider">
            <span className="text-cyan-400">N</span>OVA
          </div>
          <a href="https://wa.me/542236690101" className="px-6 py-2 bg-cyan-500 text-black rounded-md font-bold text-sm hover:bg-cyan-400 transition">
            Solicitar
          </a>
        </div>
      </nav>

      {/* HERO GEOMÉTRICO */}
      <section className="relative px-6 md:px-10 py-32 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-lg mb-6">
              <p className="text-sm font-bold text-cyan-300 tracking-widest">CLÍNICA DENTAL</p>
            </div>
            <h1 className="text-7xl md:text-8xl font-black leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400">
              Sonreír es nuestro trabajo.
            </h1>
            <p className="text-lg text-cyan-100/70 mb-10 leading-relaxed max-w-lg font-light">
              Tecnología CAD/CAM, implantes con carga inmediata y orthodoxia invisible. Resultados que duran.
            </p>
            <a href="https://wa.me/542236690101" className="inline-flex px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition group">
              Reservar ahora <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
            </a>
          </div>

          {/* STATS DERECHA */}
          <div className="grid grid-cols-2 gap-4">
            <div className="group bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 border border-cyan-500/30 p-6 rounded-xl hover:border-cyan-400/60 transition">
              <div className="text-4xl font-black text-cyan-300 mb-2"><CountUpNumber end={540} />+</div>
              <p className="text-sm text-cyan-200 font-medium">Pacientes</p>
            </div>
            <div className="group bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 border border-cyan-500/30 p-6 rounded-xl hover:border-cyan-400/60 transition">
              <div className="text-4xl font-black text-cyan-300 mb-2"><CountUpNumber end={18} />+</div>
              <p className="text-sm text-cyan-200 font-medium">Años exp</p>
            </div>
            <div className="group bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 border border-cyan-500/30 p-6 rounded-xl hover:border-cyan-400/60 transition">
              <div className="text-4xl font-black text-cyan-300 mb-2"><CountUpNumber end={99} />%</div>
              <p className="text-sm text-cyan-200 font-medium">Satisfacción</p>
            </div>
            <div className="group bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 border border-cyan-500/30 p-6 rounded-xl hover:border-cyan-400/60 transition">
              <div className="text-4xl font-black text-cyan-300 mb-2">10<span className="text-sm">+</span></div>
              <p className="text-sm text-cyan-200 font-medium">Años Gtía</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRATAMIENTOS GRID */}
      <section className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
        <h2 className="text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white">Tratamientos</h2>
        <p className="text-cyan-200/60 mb-16 text-lg font-light">Tecnología de punta para sonrisas perfectas</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {treatments.map((t, i) => {
            const Icon = t.icon
            return (
              <div key={i} className="group relative bg-gradient-to-br from-cyan-500/10 to-slate-900 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-400/50 transition overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/10 group-hover:to-cyan-500/0 transition" />
                <div className="relative">
                  <Icon className="text-cyan-400 mb-4" size={28} />
                  <h3 className="text-xl font-black mb-1">{t.title}</h3>
                  <p className="text-sm text-cyan-200/60 mb-4">{t.subtitle}</p>
                  <p className="text-lg font-bold text-cyan-300">{t.price}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
        <h2 className="text-6xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white">Por qué Nova</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "CAD/CAM", desc: "Coronas en el mismo día con precisión milimétrica" },
            { title: "Carga inmediata", desc: "Dientes funcionales el mismo día del implante" },
            { title: "Anestesia avanzada", desc: "Sin dolor. Sedación consciente disponible" },
            { title: "Esterilización", desc: "Protocolo quirúrgico en cada procedimiento" }
          ].map((v, i) => (
            <div key={i} className="bg-gradient-to-br from-cyan-500/10 to-slate-900 border border-cyan-500/20 p-6 rounded-lg">
              <p className="text-sm text-cyan-300 font-bold mb-2 uppercase">{v.title}</p>
              <p className="text-cyan-100/70 font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
        <h2 className="text-6xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white">Pacientes reales</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Martín P.", role: "Empresario", text: "Implantes impecables. Menos traumático de lo esperado. Ahora muerdo bien." },
            { name: "Julieta S.", role: "Docente", text: "Alineadores invisibles. Nadie notó que me trataba. Doctora muy profesional." },
            { name: "Carlos M.", role: "Ingeniero", text: "No tenía miedo. Empatía total. Ahora vuelvo sin pánico." },
            { name: "Daniela L.", role: "Fotógrafa", text: "Blanqueamiento increíble. Sonrisa brillante. Duró exactamente lo prometido." }
          ].map((t, i) => (
            <div key={i} className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-lg">
              <p className="text-cyan-100/70 mb-6 leading-relaxed italic">"{t.text}"</p>
              <p className="font-bold text-cyan-200">{t.name}</p>
              <p className="text-sm text-cyan-300/60">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10 py-24 max-w-3xl mx-auto">
        <h2 className="text-6xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white">FAQ</h2>
        <div className="space-y-3">
          {[
            { q: "¿Duran los implantes?", a: "20-30 años o más. Prácticamente permanentes con buen cuidado." },
            { q: "¿Duele la cirugía?", a: "No. Anestesia local. Molestias post-op controlables con antibióticos." },
            { q: "¿Costo de ortodoncia?", a: "$25.000 diagnóstico. Plan completo según complejidad (12-24 meses)." },
            { q: "¿Blanquear dientes tratados?", a: "Sí, excepto coronas. Después igualamos con coronas si es necesario." },
            { q: "Después de implante?", a: "Descanso 48h, higiene delicada, antibióticos, dieta blanda 1 semana." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-bold flex justify-between items-center hover:bg-cyan-500/10 transition"
              >
                {faq.q}
                <span className={`transition-transform ${openFaq === idx ? "rotate-180" : ""}`}>▼</span>
              </button>
              {openFaq === idx && (
                <div className="px-6 py-4 bg-cyan-500/10 text-cyan-100/70 border-t border-cyan-500/20 font-light">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
        <div className="relative rounded-2xl border border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-slate-900 p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-100">
              Tu sonrisa nos espera
            </h2>
            <p className="text-lg text-cyan-100/70 mb-8 max-w-2xl mx-auto font-light">
              Primera consulta gratis. Evaluamos tu caso y diseñamos el plan perfecto.
            </p>
            <a href="https://wa.me/542236690101" className="inline-flex px-10 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition">
              Solicitar turno <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-12 max-w-7xl mx-auto border-t border-cyan-500/20">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <p className="font-bold text-cyan-300 mb-4 tracking-wider">NOVA DENTAL</p>
            <p className="text-sm text-cyan-100/60 font-light">Clínica moderna con tecnología de punta.</p>
          </div>
          <div>
            <p className="font-bold text-cyan-300 mb-4">Horarios</p>
            <p className="text-sm text-cyan-100/60 font-light">Lunes a viernes: 9:00 - 20:00</p>
            <p className="text-sm text-cyan-100/60 font-light">Sábados: 10:00 - 17:00</p>
          </div>
          <div>
            <p className="font-bold text-cyan-300 mb-4">Contacto</p>
            <p className="text-sm text-cyan-100/60 font-light">WhatsApp: +54 223 669 0101</p>
            <p className="text-sm text-cyan-100/60 font-light">Mar del Plata, Buenos Aires</p>
          </div>
        </div>
        <div className="pt-8 border-t border-cyan-500/20 text-center text-sm text-cyan-400/40">
          © 2024 Nova Dental Care
        </div>
      </footer>
    </div>
  )
}

export default DentalDemo
