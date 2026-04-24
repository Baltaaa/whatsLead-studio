import { useState } from "react"
import { Send, Clock, Shield, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import LeadModal from "../components/LeadModal"

export const Whatsapp = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
        <path fill="#1BA85E" d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
    </svg>
)

function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <section id="contacto" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10">
                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6 sm:p-10 md:p-14 relative overflow-hidden"
                    >

                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 blur-3xl rounded-full"></div>

                        <div className="relative z-10">

                            {/* Header */}
                            <div className="grid md:grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-start mb-8 sm:mb-10 md:mb-12">

                                {/* Left - Title */}
                                <div>
                                    <p className="uppercase tracking-[0.28em] text-xs text-zinc-500 mb-2 sm:mb-4">
                                        Tu éxito nos importa
                                    </p>

                                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white mb-4 sm:mb-6">
                                        Empezamos hoy, <b className="font-extrabold">vendemos mañana. </b>
                                    </h3>

                                    <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed">
                                        Tu landing lista en 48-72 horas. Optimizada, fast y diseñada para convertir. Sin promesas vacías, con resultados.
                                    </p>
                                </div>

                                {/* Right - Benefits */}
                                <div className="space-y-3 sm:space-y-4 mt-6 md:mt-0">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/10 bg-white/5"
                                    >
                                        <Clock size={20} className="text-zinc-300 flex-shrink-0 mt-0.5 sm:mt-1" />
                                        <div>
                                            <p className="font-bold text-white text-sm sm:text-base">48-72 Horas</p>
                                            <p className="text-xs sm:text-sm text-zinc-400">Tu landing lista para vender</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/10 bg-white/5"
                                    >
                                        <Shield size={20} className="text-zinc-300 flex-shrink-0 mt-0.5 sm:mt-1" />
                                        <div>
                                            <p className="font-bold text-white text-sm sm:text-base">Garantía 30 Días</p>
                                            <p className="text-xs sm:text-sm text-zinc-400">Si no convierte, ajustamos gratis</p>
                                        </div>
                                    </motion.div>
                                </div>

                            </div>

                            {/* CTA Buttons */}
                            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/10">

                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full flex items-center justify-center gap-2 sm:gap-3 rounded-lg sm:rounded-2xl bg-white text-black px-4 sm:px-6 py-3 sm:py-5 font-semibold text-sm sm:text-base hover:shadow-lg transition"
                                >
                                    Solicitar mi landing
                                    <ArrowRight size={18} />
                                </motion.button>

                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                    href="https://wa.me/542236690101"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 sm:gap-3 rounded-lg sm:rounded-2xl border border-white/20 bg-white/5 px-4 sm:px-6 py-3 sm:py-5 font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white/40 transition"
                                >
                                    WhatsApp
                                    <Whatsapp className='size-5' />
                                </motion.a>

                            </div>

                            {/* Trust Line */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-zinc-500"
                            >
                                Confiamos en nuestra calidad. Garantía total o devolvemos tu dinero.
                            </motion.p>

                        </div>

                    </motion.div>

                </div>
            </section>

            <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default Contact
