import { Link } from 'react-router-dom'
import './CTA.css'

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">
          Amasemos juntos creatividad, técnica y sabor.<br />
          ¡Únete al próximo taller!
        </h2>
        <Link to="/talleres" className="cta-button">Próximos Cursos</Link>
      </div>
    </section>
  )
}

export default CTA
