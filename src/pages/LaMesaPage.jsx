import './LaMesaPage.css'
import Navbar from '../components/layout/Navbar'
import TextCarousel from '../components/common/TextCarousel'
import ContentCard from '../components/common/ContentCard'
import ContactInfo from '../components/layout/ContactInfo'
import Footer from '../components/layout/Footer'
import laMesa from '../assets/images/laMesa1.png'
import masaMadreImg from '../assets/images/masaMadre.png'
import panMuertoImg from '../assets/images/panMuerto.png'
import raviolisImg from '../assets/images/raviolisRellenos.png'

function LaMesaPage() {
  // Artículo destacado (más reciente)
  const featuredPost = {
    id: 1,
    image: laMesa,
    title: 'Cómo cuidar de tu Masa Madre',
    author: 'Por Pau',
    category: 'Tips',
    tag: 'Nuevo'
  }

  // Otros artículos gratuitos
  const contents = [
    {
      id: 2,
      image: masaMadreImg,
      title: 'Masa Madre desde cero',
      description: 'Aprende a crear, alimentar y hornear con tu propio fermento natural',
      category: 'Receta',
      duration: '5h',
      lessons: 6,
      students: 30
    },
    {
      id: 3,
      image: panMuertoImg,
      title: 'Pan de Muerto tradicional',
      description: 'Aprende a preparar pan de muerto esponjoso y aromático, paso a paso, con técnicas fáciles.',
      category: 'Tip',
      date: '27 de Octubre 2025 | 8:00 am'
    },
    {
      id: 4,
      image: raviolisImg,
      title: 'Raviolis y rellenos caseros',
      description: 'Técnicas para hacer raviolis y salsas deliciosas.',
      category: 'Noticia',
      date: '6 de Octubre 2025 | 8:00 am'
    }
  ]

  return (
    <>
      <Navbar />
      <main className="lamesa-page">
        {/* Hero Section */}
        <section className="lamesa-page-hero">
          <div className="lamesa-page-hero-content">
            <h1 className="lamesa-page-title">La Mesa 🍞</h1>
            <p className="lamesa-page-subtitle">
              Tips, recetas y novedades para para que siempre tengas algo
              delicioso en tu mesa.
            </p>
          </div>
        </section>

        {/* Text Carousel */}
        <TextCarousel />

        {/* Featured Post */}
        <section className="lamesa-page-featured">
          <div className="lamesa-page-container">
            <a 
              href="/blog/como-cuidar-tu-masa-madre"
              className="featured-card"
            >
              <div className="featured-card-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="featured-card-badges">
                  <span className="featured-badge-type">{featuredPost.type}</span>
                  <span className="featured-badge-new">{featuredPost.tag}</span>
                </div>
              </div>
              <div className="featured-card-content">
                <h2 className="featured-card-title">{featuredPost.title}</h2>
                <p className="featured-card-author">{featuredPost.author}</p>
              </div>
            </a>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="lamesa-page-grid">
          <div className="lamesa-page-container">
            <div className="posts-grid">
              {contents.map(content => (
                <ContentCard key={content.id} content={content} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <ContactInfo />
      <Footer />
    </>
  )
}

export default LaMesaPage
