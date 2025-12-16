import { useState } from 'react'
import './TalleresPage.css'
import Navbar from '../components/layout/Navbar'
import TextCarousel from '../components/common/TextCarousel'
import WorkshopCard from '../components/common/WorkshopCard'
import WorkshopModal from '../components/common/WorkshopModal'
import ContactInfo from '../components/layout/ContactInfo'
import Footer from '../components/layout/Footer'
import masaMadreImg from '../assets/images/masaMadre.png'
import panMuertoImg from '../assets/images/panMuerto.png'
import raviolisImg from '../assets/images/raviolisRellenos.png'
import talleresSectionImg from '../assets/images/talleresSection.png'

function TalleresPage() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null)

  // Taller destacado
  const featuredWorkshop = {
    id: 1,
    image: masaMadreImg,
    title: 'Masa Madre desde cero',
    description: 'Aprende a crear, alimentar y hornear con tu propio fermento natural',
    type: 'Online',
    rating: 4.5,
    duration: '5h',
    lessons: 6,
    students: 30,
    price: 899,
    tag: 'Nuevo'
  }

  // Otros talleres
  const workshops = [
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
      price: 899
    },
    {
      id: 2,
      image: panMuertoImg,
      title: 'Pan de Muerto',
      description: 'Aprende a preparar pan de muerto esponjoso y aromático, paso a paso, con técnicas fáciles.',
      type: 'Presencial',
      rating: 4.5,
      date: '27 de Octubre 2025 | 8:00 am',
      price: 1299
    },
    {
      id: 3,
      image: raviolisImg,
      title: 'Raviolis y rellenos caseros',
      description: 'Técnicas para hacer raviolis y salsas deliciosas.',
      type: 'Presencial',
      rating: 4.5,
      date: '6 de Octubre 2025 | 8:00 am',
      price: 1499
    }
  ]

  return (
    <>
      <Navbar />
      <main className="talleres-page">
        {/* Hero Section */}
        <section className="talleres-page-hero">
          <div className="talleres-page-hero-background"></div>
          <div className="talleres-page-hero-content">
            <h1 className="talleres-page-title">Talleres</h1>
          </div>
        </section>

        {/* Text Carousel */}
        <TextCarousel />

        {/* Featured Workshop */}
        <section className="talleres-page-featured">
          <div className="talleres-page-container">
            <div 
              onClick={() => setSelectedWorkshop(featuredWorkshop)}
              className="featured-workshop-card"
            >
              <div className="featured-workshop-image">
                <img src={featuredWorkshop.image} alt={featuredWorkshop.title} />
                <div className="featured-workshop-badges">
                  <span className="featured-workshop-type">{featuredWorkshop.type}</span>
                  <div className="featured-workshop-badges-right">
                    <span className="featured-workshop-rating">★ {featuredWorkshop.rating}</span>
                    {featuredWorkshop.tag && <span className="featured-workshop-tag">{featuredWorkshop.tag}</span>}
                  </div>
                </div>
              </div>
              <div className="featured-workshop-content">
                <h2 className="featured-workshop-title">{featuredWorkshop.title}</h2>
                <p className="featured-workshop-description">{featuredWorkshop.description}</p>
                <div className="featured-workshop-info">
                  <span className="featured-info-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {featuredWorkshop.duration}
                  </span>
                  <span className="featured-info-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                    {featuredWorkshop.lessons}
                  </span>
                  <span className="featured-info-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    {featuredWorkshop.students}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workshops Grid */}
        <section className="talleres-page-grid">
          <div className="talleres-page-container">
            <h2 className="talleres-page-section-title">Más talleres</h2>
            <div className="workshops-grid">
              {workshops.map(workshop => (
                <WorkshopCard 
                  key={workshop.id} 
                  workshop={workshop}
                  onCardClick={setSelectedWorkshop}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Cocina con nosotros */}
        <section className="talleres-page-cta">
          <div className="talleres-cta-content">
            <div className="talleres-cta-left">
              <h2 className="talleres-cta-title">Cocina con<br />nosotros</h2>
            </div>
            <div className="talleres-cta-right">
              <div className="talleres-cta-text">
                <p>Talleres online y presenciales, donde todo está listo para que cocines: insumos incluidos, paso a paso y para todos los niveles.</p>
              </div>
              <div className="talleres-cta-image">
                <img src={talleresSectionImg} alt="Cocina con nosotros" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactInfo />
      <Footer />

      {selectedWorkshop && (
        <WorkshopModal 
          workshop={selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
        />
      )}
    </>
  )
}

export default TalleresPage
