import { useState, useEffect } from 'react'
import { X, Mail, User, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'

function LeadModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Por favor completa los campos requeridos')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'baltasarbruschetti@yahoo.com.ar',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'No proporcionado',
          message: formData.message,
          client_email: formData.email
        }
      )

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setTimeout(() => {
        setSubmitted(false)
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Error:', error)
      setError('Error al enviar. Intenta de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop blureado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-zinc-900 border border-white/10 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">

              {/* Header */}
              <div className="bg-gradient-to-r from-zinc-900 to-black p-6 flex items-center justify-between border-b border-white/10">
                <div>
                  <h2 className="text-2xl font-bold">Solicitar propuesta</h2>
                  <p className="text-zinc-400 text-sm mt-1">Cuéntanos sobre tu proyecto</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">¡Propuesta recibida!</h3>
                    <p className="text-zinc-400">Te contactaremos pronto con una propuesta personalizada.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Nombre */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre completo</label>
                      <div className="relative">
                        <User size={18} className="absolute left-3 top-3.5 text-zinc-500" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          required
                          className="w-full bg-zinc-800 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-3 top-3.5 text-zinc-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                          className="w-full bg-zinc-800 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition"
                        />
                      </div>
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Teléfono</label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-3 top-3.5 text-zinc-500" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+54 9 XXXX XXXX"
                          className="w-full bg-zinc-800 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition"
                        />
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Cuéntanos sobre tu proyecto</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="¿Qué tipo de página necesitas?"
                        required
                        rows={4}
                        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition resize-none"
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
                        {error}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:scale-[1.02] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Mail size={18} />
                          Solicitar propuesta
                        </>
                      )}
                    </button>

                  </form>
                )}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default LeadModal
