import './LaMesa.css'
import masaMadreImg from '../assets/images/masaMadre.png'
import panAvenaImg from '../assets/images/panAvena.png'

function LaMesa() {
  const posts = [
    {
      id: 1,
      image: masaMadreImg,
      title: 'Cómo cuidar tu masa madre',
      author: 'Por Pau'
    },
    {
      id: 2,
      image: panAvenaImg,
      title: 'Receta fácil: Pan rápido de Avena',
      author: 'Por Pau'
    }
  ]

  return (
    <section className="lamesa-section">
      <div className="lamesa-content">
        <div className="lamesa-left">
          <h2 className="lamesa-title">La Mesa 🍞</h2>
          <p className="lamesa-description">
            Tips, recetas y novedades para para que siempre tengas algo
            delicioso en tu mesa.
          </p>
          <p className="lamesa-author">— por Pau y colaboradores</p>
        </div>

        <div className="lamesa-right">
          {posts.map(post => (
            <div key={post.id} className="lamesa-card">
              <div className="lamesa-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="lamesa-card-content">
                <h3 className="lamesa-card-title">{post.title}</h3>
                <p className="lamesa-card-author">{post.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LaMesa
