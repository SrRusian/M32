import './Hero.css'

function Hero() {
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
