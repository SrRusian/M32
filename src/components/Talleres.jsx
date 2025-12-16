import './Talleres.css'
import masaMadreImg from '../assets/images/masaMadre.png'
import panMuertoImg from '../assets/images/panMuerto.png'
import raviolisImg from '../assets/images/raviolisRellenos.png'

function Talleres() {
  const talleres = [
    {
      id: 1,
      image: masaMadreImg,
      title: 'Masa Madre desde cero',
      description: 'Aprende a crear, alimentar y hornear con tu propio fermento natural',
      type: 'Online',
      rating: 4.5,
      duration: '5h',
      lessons: 6,
      students: 30,
      isPresencial: false
    },
    {
      id: 2,
      image: panMuertoImg,
      title: 'Pan de Muerto',
      description: 'Aprende a preparar pan de muerto esponjoso y aromático, paso a paso, con técnicas fáciles.',
      type: 'Presencial',
      rating: 4.5,
      date: '27 de Octubre 2025 | 8:00 am',
      isPresencial: true
    },
    {
      id: 3,
      image: raviolisImg,
      title: 'Raviolis y rellenos caseros',
      description: 'Técnicas para hacer raviolis y salsas deliciosas.',
      type: 'Presencial',
      rating: 4.5,
      date: '6 de Octubre 2025 | 8:00 am',
      isPresencial: true
    }
  ]

  return (
    <section className="talleres-section">
      <div className="talleres-container">
        <h2 className="talleres-title">Próximos talleres</h2>

        <div className="talleres-grid">
          {talleres.map(taller => (
            <div key={taller.id} className="taller-card">
              <div className="taller-image-container">
                <img src={taller.image} alt={taller.title} className="taller-image" />
                <div className="taller-badges">
                  <span className="taller-type">{taller.type}</span>
                  <div className="taller-badges-right">
                    <span className="taller-rating">
                      ★ {taller.rating}
                    </span>
                    <button className="taller-favorite">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="taller-content">
                <h3 className="taller-card-title">{taller.title}</h3>
                <p className="taller-description">{taller.description}</p>

                <div className="taller-footer">
                  {taller.isPresencial ? (
                    <div className="taller-date-info">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      <span className="taller-date">{taller.date}</span>
                    </div>
                  ) : (
                    <div className="taller-info">
                      <span className="info-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {taller.duration}
                      </span>
                      <span className="info-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                        {taller.lessons}
                      </span>
                      <span className="info-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        {taller.students}
                      </span>
                    </div>
                  )}
                  <button className="taller-button">Ver</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Talleres
