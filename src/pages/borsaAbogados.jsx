import { Scale, Award, Briefcase, Users, TrendingUp, ArrowRight, CheckCircle, FileText, Heart, Shield, Zap } from "lucide-react"
import { useState, useRef, useEffect } from "react"

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

// Animated scroll indicator
function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY < 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return isVisible ? (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#D1A649' }}>
        <div className="w-1 h-2 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#D1A649' }} />
      </div>
    </div>
  ) : null
}

function BorsaAbogados() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out;
        }
        .hero-image {
          opacity: 0.95;
          object-fit: cover;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#32486c] backdrop-blur border-b shadow-sm" style={{ borderColor: '#D1A649' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 sm:py-5 flex justify-between items-center">
          
            <img src="/borsa-logo2.png" alt="Borsa Abogados" className="h-8 sm:h-10 scale-[2.9]" />
          
          <a href="https://wa.me/542236690101" className="px-4 sm:px-6 py-2 text-white rounded-sm font-medium text-xs sm:text-sm hover:shadow-lg hover:scale-105 transition-all" style={{ backgroundColor: '#D1A649' }}>
            Consulta
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto border-b overflow-hidden" style={{ borderColor: '#D1A649' }}>
        <div className="grid md:grid-cols-2 gap-8 md:gap-24 items-center relative z-10">
          <div className="animate-fade-in-up">
            <p className="text-xs sm:text-sm tracking-[0.2em] mb-4 sm:mb-8 font-semibold uppercase opacity-80" style={{ color: '#D1A649' }}>Estudio Jurídico Especializado</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-tight mb-6 sm:mb-8" style={{ color: '#32486C' }}>
              Defensa legal de excelencia.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 sm:mb-12 leading-relaxed font-light max-w-lg">
              Más de 30 años asesorando empresas y particulares en derecho penal, familia, laboral, contratos y asuntos de accidentes con estrategia clara y resultados concretos en Mar del Plata.
            </p>
            <a href="https://wa.me/542236690101" className="inline-flex px-6 sm:px-8 py-2.5 sm:py-3 text-white hover:opacity-90 hover:shadow-lg hover:scale-105 transition-all font-semibold text-sm sm:text-base rounded-sm" style={{ backgroundColor: '#32486C' }}>
              Agendar consulta <ArrowRight className="ml-2" size={18} />
            </a>
          </div>

          {/* HERO IMAGE */}
          <div className="relative h-64 sm:h-72 md:h-96 rounded-lg overflow-hidden shadow-2xl mt-8 md:mt-0 animate-slide-in-right">
            <img src="/borsa-office-hero.jpg" alt="Oficina Borsa Abogados" className="hero-image w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
        
        {/* STATS */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-16 sm:mt-20 pt-16 sm:pt-20 border-t relative z-10" style={{ borderColor: '#D1A649' }}>
          <div className="flex items-center justify-between pb-4 sm:pb-6 gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s', borderBottom: '2px solid #D1A649' }}>
            <div className="flex-1">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-black mb-1" style={{ color: '#32486C' }}><CountUpNumber end={850} />+</p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Casos ganados</p>
            </div>
            <Scale style={{ color: '#D1A649' }} className="flex-shrink-0 animate-pulse" size={32} />
          </div>
          <div className="flex items-center justify-between pb-4 sm:pb-6 gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s', borderBottom: '2px solid #D1A649' }}>
            <div className="flex-1">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-black mb-1" style={{ color: '#32486C' }}><CountUpNumber end={30} />+</p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Años experiencia</p>
            </div>
            <Award style={{ color: '#D1A649' }} className="flex-shrink-0 animate-pulse" size={32} />
          </div>
          <div className="flex items-center justify-between pb-4 sm:pb-6 gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s', borderBottom: '2px solid #D1A649' }}>
            <div className="flex-1">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-black mb-1" style={{ color: '#32486C' }}><CountUpNumber end={98} />%</p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Clientes retienen</p>
            </div>
            <TrendingUp style={{ color: '#D1A649' }} className="flex-shrink-0 animate-pulse" size={32} />
          </div>
          <div className="flex items-center justify-between pt-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex-1">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-black mb-1" style={{ color: '#32486C' }}>1000+</p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Clientes activos</p>
            </div>
            <Users style={{ color: '#D1A649' }} className="flex-shrink-0 animate-pulse" size={32} />
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* ÁREAS DE PRÁCTICA */}
      <section className="relative px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto border-b overflow-hidden" style={{ borderColor: '#D1A649' }}>
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black mb-3 sm:mb-4 animate-fade-in-up" style={{ color: '#32486C' }}>Áreas de práctica</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-10 sm:mb-16 font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Especialización completa en todas las ramas del derecho civil, penal y comercial</p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: Scale, title: "Derecho Penal", items: ["Defensa penal especializada", "Delitos graves", "Procesos penales"] },
              { icon: Heart, title: "Derecho de Familia", items: ["Divorcios", "Tenencia de menores", "Asuntos matrimoniales"] },
              { icon: Briefcase, title: "Derecho Laboral", items: ["Despidos", "Conflictos laborales", "Asesoramiento empresarial"] },
              { icon: FileText, title: "Contratos", items: ["Redacción contractual", "Revisión legal", "Negociación"] },
              { icon: Zap, title: "ART y Accidentes", items: ["Accidentes de tránsito", "Asuntos laborales", "Indemnizaciones"] },
              { icon: Shield, title: "Asesoramiento Legal", items: ["Consultoría jurídica", "Cumplimiento legal", "Auditoría legal"] }
            ].map((area, i) => {
              const Icon = area.icon
              return (
                <div key={i} className="border p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-2 transition-all duration-300 group cursor-pointer animate-fade-in-up" style={{ borderColor: '#D1A649', animationDelay: `${i * 0.1}s` }}>
                  <Icon style={{ color: '#D1A649' }} className="mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4" style={{ color: '#32486C' }}>{area.title}</h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {area.items.map((item, j) => (
                      <li key={j} className="text-xs sm:text-sm text-slate-600 flex items-center gap-2 group-hover:text-slate-900 transition-colors">
                        <div className="w-1 h-1 flex-shrink-0 group-hover:scale-150 transition-transform" style={{ backgroundColor: '#D1A649' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SOBRE BORSA ABOGADOS */}
      <section className="relative px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto border-b overflow-hidden" style={{ borderColor: '#D1A649' }}>
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black mb-3 sm:mb-4 animate-fade-in-up" style={{ color: '#32486C' }}>Sobre Borsa Abogados</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-10 sm:mb-16 font-light max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Fundado hace más de 30 años en Mar del Plata, nuestro estudio se ha consolidado como referente en asesoramiento jurídico integral para empresas y particulares con trayectoria probada.</p>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 items-start">
            {/* TEXTO */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="group">
                <h3 className="text-xl font-serif font-bold mb-3 group-hover:opacity-80 transition-all" style={{ color: '#D1A649' }}>Nuestra Misión</h3>
                <p className="text-slate-600 font-light leading-relaxed">Proporcionar soluciones legales claras, efectivas y accesibles que protejan los intereses de nuestros clientes. Combinamos experiencia, dedicación y un profundo conocimiento del sistema judicial para lograr los mejores resultados posibles en cada caso.</p>
              </div>
              <div className="pt-4 border-t" style={{ borderColor: '#D1A649' }}>
                <h3 className="text-xl font-serif font-bold mb-3" style={{ color: '#D1A649' }}>Nuestros Valores</h3>
                <p className="text-slate-600 font-light leading-relaxed">Confidencialidad absoluta, transparencia, profesionalismo y dedicación personalizada caracterizan nuestro trabajo. Cada cliente recibe atención directa del abogado responsable sin intermediarios, garantizando seguimiento cercano.</p>
              </div>
            </div>

            {/* IMAGEN */}
            <div className="relative h-64 sm:h-72 md:h-96 rounded-lg overflow-hidden shadow-2xl animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <img src="/borsa-consultation.jpg" alt="Consulta legal Borsa" className="hero-image w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t" style={{ borderColor: '#D1A649' }}>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-serif font-bold mb-3" style={{ color: '#D1A649' }}>Experiencia Comprobada</h3>
              <p className="text-slate-600 font-light leading-relaxed">Décadas de trayectoria nos permiten resolver casos complejos con eficiencia. Nuestro equipo de profesionales está actualizado en todas las ramas del derecho y mantiene vínculos sólidos con juzgados y autoridades judicales locales.</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-serif font-bold mb-3" style={{ color: '#D1A649' }}>Compromiso Local</h3>
              <p className="text-slate-600 font-light leading-relaxed">Profundo conocimiento de la realidad legal de Mar del Plata y la región. Nos conocen juzgados, fiscalías y colegas que facilita la resolución ágil y efectiva de asuntos judicales complejos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="relative px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto border-b overflow-hidden" style={{ borderColor: '#D1A649' }}>
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black mb-10 sm:mb-16 animate-fade-in-up" style={{ color: '#32486C' }}>Por qué Borsa Abogados</h2>
          <div className="space-y-8">
            {[
              { title: "Confidencialidad garantizada", desc: "Secreto profesional absoluto bajo pacto de confidencialidad. Protegemos la privacidad de nuestros clientes como prioridad máxima y nunca compartimos información sensible." },
              { title: "Atención personalizada", desc: "Tu caso lo maneja el abogado responsable directamente. No hay delegaciones a personal junior ni intermediarios. Relación personal, cercana y confiable en todo momento." },
              { title: "Experiencia de 30+ años", desc: "Décadas asesorando desde particulares hasta empresas de envergadura. Jurisprudencia profunda y conocimiento amplio del sistema judicial local y regional." },
              { title: "Estrategia clara y transparente", desc: "Explicamos el panorama legal en términos simples y comprensibles. Presupuestos sin sorpresas y actualización constante sobre el desarrollo de cada caso." }
            ].map((v, i) => (
              <div key={i} className="flex gap-6 pb-8 border-b last:border-0 animate-fade-in-up hover:translate-x-2 transition-transform duration-300 group" style={{ borderColor: '#D1A649', animationDelay: `${i * 0.15}s` }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#D1A649' }}>
                  0{i+1}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2" style={{ color: '#32486C' }}>{v.title}</h3>
                  <p className="text-slate-600 font-light">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS CON IMAGEN */}
      <section className="relative px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto border-b overflow-hidden" style={{ borderColor: '#D1A649' }}>
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black mb-10 sm:mb-16 animate-fade-in-up" style={{ color: '#32486C' }}>Clientes satisfechos</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* IMAGEN */}
            <div className="relative h-64 sm:h-72 md:h-full min-h-80 rounded-lg overflow-hidden shadow-2xl animate-slide-in-right order-last md:order-first" style={{ animationDelay: '0.2s' }}>
              <img src="/borsa-lawyers-team.jpg" alt="Equipo de abogados Borsa" className="hero-image w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>

            {/* TESTIMONIOS */}
            <div className="space-y-6">
              {[
                { name: "Mariana G.", role: "Empresaria", text: "Excelente asesoramiento en asunto comercial complicado. Explicación clara de cada paso. Protección legal completa y resultados superiores a lo esperado. Muy recomendable." },
                { name: "Federico L.", role: "Emprendedor", text: "Resolución rápida en conflicto laboral delicado. Trato impecable y profesional. Resultados que superaron nuestras expectativas. Nos sentimos protegidos." },
                { name: "Roberto M.", role: "Propietario", text: "Herencia compleja resuelta sin inconvenientes. Claridad y confidencialidad total en todo el proceso. Profesionales serios y comprometidos con el resultado final." },
                { name: "Lucía S.", role: "Gerenta RRHH", text: "Asesoramiento laboral en asunto delicado. Estrategia legal impecable que protegió nuestros intereses completamente. Disponibles y responsables en todo momento." }
              ].map((t, i) => (
                <div key={i} className="border p-6 animate-fade-in-up hover:shadow-lg hover:border-2 transition-all duration-300 group" style={{ borderColor: '#D1A649', animationDelay: `${i * 0.1}s` }}>
                  <p className="text-slate-700 mb-4 leading-relaxed font-light text-sm">"{t.text}"</p>
                  <p className="font-serif font-bold text-sm" style={{ color: '#32486C' }}>{t.name}</p>
                  <p className="text-xs text-slate-600">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="relative px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto border-b overflow-hidden" style={{ borderColor: '#D1A649' }}>
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black mb-10 sm:mb-16 animate-fade-in-up" style={{ color: '#32486C' }}>Nuestro proceso</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Consulta inicial", desc: "Primera reunión de evaluación sin costo. Análisis detallado de tu situación legal y opciones disponibles." },
              { num: "02", title: "Estrategia legal", desc: "Diseño de plan claro y realista. Opciones, escenarios posibles y caminos a seguir." },
              { num: "03", title: "Ejecución", desc: "Iniciamos procedimientos legales. Gestión activa y seguimiento permanente del caso." },
              { num: "04", title: "Resolución", desc: "Cierre del asunto. Mejor resultado posible conseguido y documentación finalizada." }
            ].map((step, i) => (
              <div key={i} className="border p-6 animate-fade-in-up hover:shadow-lg hover:border-2 transition-all duration-300 group" style={{ borderColor: '#D1A649', animationDelay: `${i * 0.15}s` }}>
                <p className="text-3xl font-serif font-black mb-3 group-hover:scale-110 transition-transform duration-300" style={{ color: '#D1A649' }}>{step.num}</p>
                <h3 className="font-serif font-bold mb-2" style={{ color: '#32486C' }}>{step.title}</h3>
                <p className="text-sm text-slate-600 font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 max-w-3xl mx-auto border-b overflow-hidden" style={{ borderColor: '#D1A649' }}>
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black mb-10 sm:mb-16 animate-fade-in-up" style={{ color: '#32486C' }}>Preguntas frecuentes</h2>
          <div className="space-y-3">
            {[
              { q: "¿Cuál es el costo de la consulta inicial?", a: "La primera consulta es completamente gratis. Evaluamos tu caso, explicamos opciones legales disponibles y realizamos presupuesto sin obligación de contratar nuestros servicios profesionales." },
              { q: "¿Hablo directamente con el abogado?", a: "Sí, siempre. Tu caso lo maneja directamente el abogado responsable. No hay delegaciones a personal junior ni intermediarios. Relación personal y directa garantizada en todas las etapas." },
              { q: "¿Cuánto tiempo demora un proceso?", a: "Varía según el tipo: Contratos 1-2 semanas, Familia 2-4 meses, Sucesiones 3-6 meses, Procesos penales 1-3 años. Evaluamos tiempos realistas en consulta inicial." },
              { q: "¿Ofrecen planes de pago?", a: "Sí. Adaptamos formas de pago según el caso: honorarios mensuales, por valor de asunto, o por fases. Presupuesto claro y transparente garantizado siempre." },
              { q: "¿Qué documentación necesito llevar?", a: "Eso lo determinamos en consulta. Generalmente: DNI, documentos del asunto (contratos, correspondencia, sentencias), y cualquier antecedente relevante disponible." },
              { q: "¿Cómo comunico urgencias o novedades?", a: "Tenés contacto directo por WhatsApp disponible 24/7. Respondemos con rapidez en asuntos urgentes. Mantenemos actualizado al cliente en todo momento de los avances." }
            ].map((faq, idx) => (
              <div key={idx} className="border overflow-hidden animate-fade-in-up transition-all duration-300 hover:border-2" style={{ borderColor: '#D1A649', animationDelay: `${idx * 0.08}s` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-4 sm:px-6 py-4 text-left font-serif font-bold flex justify-between items-center hover:bg-slate-50 transition"
                  style={{ color: '#32486C' }}
                >
                  {faq.q}
                  <span className={`transition-transform text-sm ${openFaq === idx ? 'rotate-180' : ''}`} style={{ color: '#D1A649' }}>▼</span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-6 py-4 text-slate-700 border-t font-light text-sm animate-fade-in-up" style={{ borderColor: '#D1A649', backgroundColor: '#f9f7f4' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto">
        <div className="border p-12 sm:p-16 text-center" style={{ borderColor: '#D1A649', backgroundColor: '#f9f7f4' }}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black mb-6" style={{ color: '#32486C' }}>
            Resolvé tu asunto legal hoy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Evaluamos tu caso sin compromiso, explicamos opciones legales disponibles y realizamos presupuesto transparente. Contactanos hoy mismo por WhatsApp para agendar tu consulta gratuita con nuestro equipo especializado.
          </p>
          <a href="https://wa.me/542236690101" className="inline-flex px-8 sm:px-10 py-3 sm:py-4 text-white font-semibold hover:opacity-90 transition rounded-sm" style={{ backgroundColor: '#32486C' }}>
            Contactar por WhatsApp <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 sm:px-6 md:px-10 py-12 max-w-7xl mx-auto border-t" style={{ borderColor: '#D1A649' }}>
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/borsa-logo.png" alt="Borsa Abogados" className="h-8" />
              <p className="font-serif font-bold" style={{ color: '#32486C' }}>BORSA ABOGADOS</p>
            </div>
            <p className="text-sm text-slate-600 font-light">Estudio jurídico especializado con 30+ años de experticia en Argentina, brindando soluciones legales integrales.</p>
          </div>
          <div>
            <p className="font-bold mb-4" style={{ color: '#32486C' }}>Horarios</p>
            <p className="text-sm text-slate-600 font-light">Lunes a viernes: 9:00 - 19:00</p>
            <p className="text-sm text-slate-600 font-light">Sábados: Consulta previa</p>
            <p className="text-sm text-slate-600 font-light mt-2">Urgencias: WhatsApp 24/7</p>
          </div>
          <div>
            <p className="font-bold mb-4" style={{ color: '#32486C' }}>Contacto</p>
            <p className="text-sm text-slate-600 font-light">WhatsApp: +54 223 669 0101</p>
            <p className="text-sm text-slate-600 font-light">Buenos Aires</p>
            <p className="text-sm text-slate-600 font-light mt-2">Argentina</p>
          </div>
        </div>
        <div className="pt-8 border-t text-center text-sm text-slate-600 font-light" style={{ borderColor: '#D1A649' }}>
          © 2026 Borsa Abogados. Todos los derechos reservados. Demo - WhatsLeadStudio
        </div>
      </footer>
    </div>
  )
}

export default BorsaAbogados
