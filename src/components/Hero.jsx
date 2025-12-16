import { useEffect } from 'react'
import './Hero.css'

function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const heroBackground = document.querySelector('.hero-background')
      const heroContent = document.querySelector('.hero-content')
      
      if (heroBackground && heroContent) {
        // Efecto muy sutil de parallax - elementos suben al hacer scroll
        heroBackground.style.transform = `translateY(${-scrolled * 0.1}px)`
        heroContent.style.transform = `translateY(${-scrolled * 0.1}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero">
      <div className="hero-background">
        {/* La imagen se coloca como background en CSS */}
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Hornear<br />es crear.
        </h1>
        <p className="hero-subtitle">
          Talleres de pan, pastas y recetas caseras paso a paso.
        </p>
        <button className="hero-button">Ver Talleres</button>
      </div>
    </section>
  )
}

export default Hero
