import { Scale, Award, Briefcase, Users, TrendingUp, ArrowRight, CheckCircle, FileText } from "lucide-react"
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

function LegalDemo() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-white text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-amber-600/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
          <p className="text-xl font-serif font-bold text-amber-800">LEXIS</p>
          <a href="https://wa.me/542236690101" className="px-6 py-2 bg-amber-700 text-white rounded-sm font-medium text-sm hover:bg-amber-800 transition">
            Consulta gratis
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-10 py-32 max-w-7xl mx-auto border-b border-amber-100">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] text-amber-700 mb-8 font-semibold uppercase">Estudio Jurídico Corporativo</p>
            <h1 className="text-7xl md:text-8xl font-serif font-black leading-tight mb-8">
              Defensa estratégica.
            </h1>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-light max-w-lg">
              14 años asesorando empresas y particulares en derecho civil, empresarial, laboral y penal con estrategia clara y resultados concretos.
            </p>
            <a href="https://wa.me/542236690101" className="inline-flex px-8 py-3 bg-amber-700 text-white hover:bg-amber-800 transition font-semibold">
              Agendar consulta <ArrowRight className="ml-2" size={18} />
            </a>
          </div>

          {/* STATS LADO DERECHO */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-6 border-b-2 border-amber-200">
              <div>
                <p className="text-5xl font-serif font-black text-slate-900 mb-1"><CountUpNumber end={850} />+</p>
                <p className="text-sm text-slate-600 font-medium">Casos ganados</p>
              </div>
              <Scale className="text-amber-700" size={36} />
            </div>
            <div className="flex items-center justify-between pb-6 border-b-2 border-amber-200">
              <div>
                <p className="text-5xl font-serif font-black text-slate-900 mb-1"><CountUpNumber end={14} />+</p>
                <p className="text-sm text-slate-600 font-medium">Años de experiencia</p>
              </div>
              <Award className="text-amber-700" size={36} />
            </div>
            <div className="flex items-center justify-between pb-6 border-b-2 border-amber-200">
              <div>
                <p className="text-5xl font-serif font-black text-slate-900 mb-1"><CountUpNumber end={98} />%</p>
                <p className="text-sm text-slate-600 font-medium">Clientes retienen</p>
              </div>
              <TrendingUp className="text-amber-700" size={36} />
            </div>
            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-5xl font-serif font-black text-slate-900 mb-1">450+</p>
                <p className="text-sm text-slate-600 font-medium">Clientes activos</p>
              </div>
              <Users className="text-amber-700" size={36} />
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE PRÁCTICA */}
      <section className="px-6 md:px-10 py-32 max-w-7xl mx-auto border-b border-amber-100">
        <h2 className="text-6xl font-serif font-black mb-4">Áreas de práctica</h2>
        <p className="text-lg text-slate-600 mb-16 font-light">Especialización en todas las ramas del derecho</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Scale, title: "Derecho Civil", items: ["Contratos", "Responsabilidad", "Familia"] },
            { icon: Briefcase, title: "Derecho Empresarial", items: ["Constitución", "Fusiones", "Adquisiciones"] },
            { icon: FileText, title: "Derecho Laboral", items: ["Despidos", "Conflictos", "Asesoría"] },
            { icon: Scale, title: "Sucesiones", items: ["Testamentos", "Legítimas", "Desacuerdos"] },
            { icon: Award, title: "Defensa Penal", items: ["Representación", "Procesos", "Defensas"] },
            { icon: CheckCircle, title: "Consultoría Legal", items: ["Cumplimiento", "Riesgos", "Auditoría"] }
          ].map((area, i) => {
            const Icon = area.icon
            return (
              <div key={i} className="border border-amber-200 p-8">
                <Icon className="text-amber-700 mb-4" size={32} />
                <h3 className="text-xl font-serif font-bold mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, j) => (
                    <li key={j} className="text-sm text-slate-600 flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* VENTAJAS CORPORATIVAS */}
      <section className="px-6 md:px-10 py-32 max-w-7xl mx-auto border-b border-amber-100">
        <h2 className="text-6xl font-serif font-black mb-16">Por qué Lexis</h2>
        <div className="space-y-8">
          {[
            { title: "Confidencialidad absoluta", desc: "Secreto profesional garantizado bajo pacto de confidencialidad." },
            { title: "Estrategia clara", desc: "Explicamos el panorama legal de forma simple y accesible." },
            { title: "Experiencia probada", desc: "14 años asesorando desde startups hasta empresas medianas." },
            { title: "Atención personalizada", desc: "Tu caso lo maneja el abogado directamente, sin intermediarios." }
          ].map((v, i) => (
            <div key={i} className="flex gap-6 pb-8 border-b border-amber-100 last:border-0">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-700 font-bold">0{i+1}</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">{v.title}</h3>
                <p className="text-slate-600 font-light">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="px-6 md:px-10 py-32 max-w-7xl mx-auto border-b border-amber-100">
        <h2 className="text-6xl font-serif font-black mb-16">Clientes satisfechos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Mariana G.", role: "Empresaria", text: "Excelente asesoramiento. Explicación clara de cada paso. Protección legal completa." },
            { name: "Federico L.", role: "Emprendedor", text: "Resolución rápida en asunto complicado. Trato impecable. Resultados excelentes." },
            { name: "Roberto M.", role: "Propietario", text: "Herencia compleja resuelta. Claridad y confidencialidad total. Profesionales reales." },
            { name: "Lucía S.", role: "Gerenta RRHH", text: "Asesoramiento laboral delicado. Estrategia legal impecable. Intereses protegidos." }
          ].map((t, i) => (
            <div key={i} className="border border-amber-200 p-8">
              <p className="text-slate-700 mb-6 leading-relaxed font-light">"{t.text}"</p>
              <p className="font-serif font-bold">{t.name}</p>
              <p className="text-sm text-slate-600">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10 py-32 max-w-3xl mx-auto border-b border-amber-100">
        <h2 className="text-6xl font-serif font-black mb-16">Preguntas frecuentes</h2>
        <div className="space-y-3">
          {[
            { q: "¿Costo de consulta inicial?", a: "Gratis. Evaluamos tu caso y te damos presupuesto sin obligación." },
            { q: "¿Hablar con el abogado?", a: "Sí. Tu caso lo maneja el abogado directamente, nunca delegamos." },
            { q: "¿Tiempo de un proceso?", a: "Contrato: 1-2 semanas. Sucesión: 3-6 meses. Juicio: 1-3 años." },
            { q: "¿Planes de pago?", a: "Sí. Honorarios mensuales o por valor según el tipo de caso." },
            { q: "¿Documentación necesaria?", a: "Evaluamos en consulta. Generalmente: DNI, contrato y correspondencia previa." }
          ].map((faq, idx) => (
            <div key={idx} className="border border-amber-200 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-serif font-bold flex justify-between items-center hover:bg-amber-50 transition"
              >
                {faq.q}
                <span className={`transition-transform ${openFaq === idx ? "rotate-180" : ""}`}>▼</span>
              </button>
              {openFaq === idx && (
                <div className="px-6 py-4 bg-amber-50 text-slate-700 border-t border-amber-200 font-light">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section className="px-6 md:px-10 py-32 max-w-7xl mx-auto border-b border-amber-100">
        <h2 className="text-6xl font-serif font-black mb-16">Nuestro proceso</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { num: "01", title: "Consulta gratis", desc: "Escuchamos sin compromiso" },
            { num: "02", title: "Estrategia", desc: "Diseñamos plan legal claro" },
            { num: "03", title: "Ejecución", desc: "Iniciamos procedimientos" },
            { num: "04", title: "Resolución", desc: "Mejor resultado posible" }
          ].map((step, i) => (
            <div key={i} className="border border-amber-200 p-6">
              <p className="text-3xl font-serif font-black text-amber-700 mb-3">{step.num}</p>
              <h3 className="font-serif font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-32 max-w-7xl mx-auto">
        <div className="border border-amber-300 bg-amber-50 p-16 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-black mb-6">
            Consulta gratis hoy
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto font-light">
            Evaluamos tu caso, explicamos opciones legales y presupuesto sin obligación de contratar.
          </p>
          <a href="https://wa.me/542236690101" className="inline-flex px-10 py-4 bg-amber-700 text-white font-semibold hover:bg-amber-800 transition">
            Agendar consulta <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-12 max-w-7xl mx-auto border-t border-amber-100">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <p className="font-serif font-bold text-amber-800 mb-4">LEXIS Legal Firm</p>
            <p className="text-sm text-slate-600 font-light">Estudio jurídico especializado con 14+ años de experiencia.</p>
          </div>
          <div>
            <p className="font-bold mb-4">Horarios</p>
            <p className="text-sm text-slate-600 font-light">Lunes a viernes: 9:00 - 19:00</p>
            <p className="text-sm text-slate-600 font-light">Sábados: Consulta previa</p>
          </div>
          <div>
            <p className="font-bold mb-4">Contacto</p>
            <p className="text-sm text-slate-600 font-light">WhatsApp: +54 223 669 0101</p>
            <p className="text-sm text-slate-600 font-light">Buenos Aires, Argentina</p>
          </div>
        </div>
        <div className="pt-8 border-t border-amber-100 text-center text-sm text-slate-600 font-light">
          © 2024 Lexis Legal Firm. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

export default LegalDemo
