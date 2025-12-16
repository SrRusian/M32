import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import ContactInfo from '../components/layout/ContactInfo'
import Footer from '../components/layout/Footer'
import './ContentDetailPage.css'
import masaMadreImg from '../assets/images/masaMadre.png'
import laMesa1 from '../assets/images/laMesa1.png'
import panMuertoImg from '../assets/images/panMuerto.png'
import raviolisImg from '../assets/images/raviolisRellenos.png'

function ContentDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  // Datos de prueba - simula lo que vendría de BD
  const contentData = {
    'cuidar-masa-madre': {
      id: 1,
      slug: 'cuidar-masa-madre',
      type: 'tip',
      title: 'Cómo cuidar de tu Masa Madre',
      author: 'Por Pau',
      date: '15 de Diciembre, 2025',
      readTime: '8 min lectura',
      image: laMesa1,
      intro: 'La masa madre es un fermento natural que requiere cuidados especiales para mantenerla activa y saludable. Aquí te compartimos los mejores consejos para cuidarla.',
      sections: [
        {
          subtitle: 'Alimentación regular',
          content: 'Es fundamental alimentar tu masa madre regularmente. Si la mantienes a temperatura ambiente, aliméntala cada 12 horas. Si la guardas en el refrigerador, una vez por semana es suficiente. Usa partes iguales de masa madre, harina y agua.'
        },
        {
          subtitle: 'Temperatura ideal',
          content: 'La temperatura ambiente ideal está entre 20-25°C. A temperaturas más altas fermentará más rápido y necesitará alimentaciones más frecuentes. En climas fríos, colócala cerca de una fuente de calor suave.'
        },
        {
          subtitle: 'Señales de salud',
          content: 'Una masa madre saludable debe tener un olor agradable, ligeramente ácido. Debe duplicar su volumen después de alimentarla y tener burbujas visibles en la superficie. Si huele a acetona o moho, descártala y comienza de nuevo.'
        },
        {
          subtitle: 'Almacenamiento',
          content: 'Si no horneas con frecuencia, guárdala en el refrigerador. Antes de usarla, sácala y aliméntala 2-3 veces a temperatura ambiente para reactivarla completamente.'
        }
      ],
      tags: ['Masa Madre', 'Tips', 'Fermentación', 'Cuidados'],
      relatedContent: [
        { id: 2, title: 'Masa Madre desde cero', type: 'receta', slug: 'masa-madre-cero' },
        { id: 3, title: 'Pan de Muerto', type: 'receta', slug: 'pan-muerto' }
      ]
    },
    'masa-madre-cero': {
      id: 2,
      slug: 'masa-madre-cero',
      type: 'receta',
      title: 'Masa Madre desde cero',
      author: 'Por Pau',
      date: '10 de Diciembre, 2025',
      readTime: '15 min lectura',
      duration: '7 días',
      lessons: 3,
      image: masaMadreImg,
      intro: 'Crear tu propia masa madre desde cero es más fácil de lo que piensas. Solo necesitas harina, agua y paciencia. Este proceso toma 7 días, pero los resultados valen completamente la pena.',
      ingredients: [
        '100g de harina integral',
        '100g de harina blanca',
        '200ml de agua filtrada',
        'Un frasco de vidrio limpio'
      ],
      sections: [
        {
          number: 1,
          subtitle: 'Día 1: Inicio del fermento',
          content: 'Mezcla 50g de cada harina con 100ml de agua en el frasco. Debe quedar como una masa espesa pero manejable. Cubre con una tela transpirable (no hermeticamente) y deja reposar a temperatura ambiente (20-25°C) durante 24 horas. Es normal que no veas mucha actividad el primer día.'
        },
        {
          number: 2,
          subtitle: 'Día 2-6: Alimentación diaria',
          content: 'Cada día, descarta la mitad de la mezcla (aproximadamente 100g) y alimenta con 50g de cada harina y 100ml de agua. Mezcla bien hasta integrar completamente. Verás burbujas formándose gradualmente, el olor se volverá más ácido y agradable. La consistencia debe ser como un yogurt espeso. Alrededor del día 4-5 notarás un aumento significativo en la actividad.'
        },
        {
          number: 3,
          subtitle: 'Día 7: Masa madre activa',
          content: 'Tu masa madre debe estar completamente activa, duplicando su volumen en 4-6 horas después de alimentarla. Debes ver muchas burbujas en la superficie y al corte. El olor debe ser agradablemente ácido. Haz la prueba del flotado: coloca una cucharada en agua, si flota, está lista para hornear. Si aún no duplica su tamaño, continúa alimentando 1-2 días más.'
        }
      ],
      tips: [
        'Usa agua sin cloro - si es de grifo, déjala reposar 24h antes de usar',
        'La temperatura ideal es 24-26°C. En climas fríos, coloca cerca del horno o una fuente de calor',
        'No te preocupes por el olor fuerte inicial en los primeros 2-3 días, es completamente normal',
        'Marca el nivel inicial en el frasco con una liga para observar el crecimiento',
        'Si ves moho o huele muy mal (no solo ácido), descarta y empieza de nuevo'
      ],
      tags: ['Masa Madre', 'Receta', 'Fermentación', 'Pan'],
      relatedContent: [
        { id: 1, title: 'Cómo cuidar de tu Masa Madre', type: 'tip', slug: 'cuidar-masa-madre' }
      ]
    },
    'pan-muerto-tradicional': {
      type: 'tip',
      title: 'Pan de Muerto tradicional',
      author: 'Pau Rodriguez',
      date: '27 de Octubre 2025',
      readTime: '5 min',
      image: panMuertoImg,
      intro: 'El pan de muerto es una de las tradiciones más queridas en México durante el Día de Muertos. Aprende los secretos para lograr un pan esponjoso, aromático y con ese sabor característico que lo hace tan especial.',
      sections: [
        {
          title: 'La masa perfecta',
          content: 'La clave está en el amasado. Trabaja la masa durante al menos 20 minutos hasta que esté suave y elástica. La consistencia debe ser similar a la de un lóbulo de oreja.'
        },
        {
          title: 'El toque de azahar',
          content: 'El agua de azahar es el ingrediente secreto. Añade 2 cucharadas a tu masa para ese aroma característico. Si no tienes, puedes usar ralladura de naranja, pero el azahar marca la diferencia.'
        },
        {
          title: 'El glaseado tradicional',
          content: 'Después de hornear, barniza con mantequilla derretida y cubre generosamente con azúcar. Algunos prefieren mezclar el azúcar con un poco de ralladura de naranja para más sabor.'
        }
      ],
      tags: ['Pan de Muerto', 'Tradición', 'México', 'Día de Muertos'],
      relatedContent: [
        { id: 1, title: 'Masa Madre desde cero', type: 'receta', slug: 'masa-madre-cero' },
        { id: 2, title: 'Cómo cuidar de tu Masa Madre', type: 'tip', slug: 'cuidar-masa-madre' }
      ]
    },
    'raviolis-rellenos-caseros': {
      type: 'noticia',
      title: 'Raviolis y rellenos caseros: Nueva tendencia en cocina artesanal',
      author: 'Equipo Molino 32',
      date: '6 de Octubre 2025',
      readTime: '4 min',
      image: raviolisImg,
      intro: 'La pasta fresca está viviendo un renacimiento en las cocinas caseras. Los raviolis, con sus infinitas posibilidades de rellenos, se han convertido en el proyecto favorito de quienes buscan elevar sus habilidades culinarias.',
      sections: [
        {
          title: 'El regreso de la pasta artesanal',
          content: 'Cada vez más personas están redescubriendo el placer de hacer pasta desde cero. Los raviolis, en particular, ofrecen una experiencia creativa única donde puedes experimentar con diferentes rellenos y formas.'
        },
        {
          title: 'Combinaciones populares',
          content: 'Los rellenos tradicionales como ricotta con espinacas siguen siendo favoritos, pero las combinaciones modernas están ganando terreno: hongos con trufa, calabaza rostizada con amaranto, o incluso opciones dulces para postres.'
        },
        {
          title: 'Herramientas esenciales',
          content: 'Aunque una máquina para pasta facilita el trabajo, puedes lograr excelentes resultados con solo un rodillo y un cortador. Lo más importante es la calidad de los ingredientes y la paciencia en el proceso.'
        },
        {
          title: 'Próximos talleres',
          content: 'Debido al creciente interés, estaremos lanzando talleres especializados en pasta fresca y rellenos. Mantente atento a nuestras redes sociales para más información.'
        }
      ],
      tags: ['Pasta', 'Raviolis', 'Tendencias', 'Cocina Artesanal', 'Noticias'],
      relatedContent: [
        { id: 1, title: 'Masa Madre desde cero', type: 'receta', slug: 'masa-madre-cero' },
        { id: 2, title: 'Pan de Muerto tradicional', type: 'tip', slug: 'pan-muerto-tradicional' }
      ]
    }
  }

  const content = contentData[slug]

  if (!content) {
    return (
      <>
        <Navbar />
        <div className="content-not-found">
          <h1>Contenido no encontrado</h1>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <button onClick={() => navigate(-1)} className="back-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Regresar
      </button>
      <main className="content-detail-page">
        {/* Hero with image */}
        <section className="content-hero">
          <img src={content.image} alt={content.title} className="content-hero-image" />
          <div className="content-hero-overlay">
            <div className="content-hero-content">
              <span className="content-type-badge">{content.type}</span>
              <h1 className="content-hero-title">{content.title}</h1>
              <div className="content-meta">
                <span>{content.author}</span>
                <span>•</span>
                <span>{content.date}</span>
                <span>•</span>
                <span>{content.readTime}</span>
                {content.type === 'receta' && content.duration && (
                  <>
                    <span>•</span>
                    <span className="content-meta-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {content.duration}
                    </span>
                  </>
                )}
                {content.type === 'receta' && content.lessons && (
                  <>
                    <span>•</span>
                    <span className="content-meta-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                      </svg>
                      {content.lessons} lecciones
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content body */}
        <section className="content-body">
          <div className="content-container">
            <div className="content-main">
              <p className="content-intro">{content.intro}</p>

              {/* Ingredients (solo para recetas) */}
              {content.type === 'receta' && content.ingredients && (
                <div className="content-ingredients">
                  <h2>Ingredientes</h2>
                  <ul>
                    {content.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sections */}
              {content.sections.map((section, index) => (
                <div key={index} className="content-section">
                  {section.number && content.type === 'receta' ? (
                    <h2>
                      <span className="section-number">{section.number}</span>
                      {section.subtitle}
                    </h2>
                  ) : (
                    <h2>{section.subtitle || section.title}</h2>
                  )}
                  <p>{section.content}</p>
                </div>
              ))}

              {/* Tips (solo para recetas) */}
              {content.type === 'receta' && content.tips && (
                <div className="content-tips">
                  <h3>Consejos útiles</h3>
                  <ul>
                    {content.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="content-tags">
                {content.tags.map((tag, index) => (
                  <span key={index} className="content-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Sidebar - Related content */}
            <aside className="content-sidebar">
              <h3>Contenido relacionado</h3>
              <div className="related-content">
                {content.relatedContent.map(related => (
                  <a key={related.id} href={`/la-mesa/${related.slug}`} className="related-item">
                    <span className="related-type">{related.type}</span>
                    <p className="related-title">{related.title}</p>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <ContactInfo />
      <Footer />
    </>
  )
}

export default ContentDetailPage
