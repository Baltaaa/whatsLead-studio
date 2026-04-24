import { useEffect, useRef, useState } from 'react'

export const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          const startTime = Date.now()
          
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(progress * end))
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          
          animate()
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('[data-count-up]')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [end, duration])

  return count
}
