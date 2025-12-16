import './SobreMi.css'
import sobreMiImage from '../../assets/images/sobreMi.png'

function SobreMi() {
  return (
    <section className="sobremi-section">
      <div className="sobremi-content">
        <div className="sobremi-left">
          <div className="sobremi-left-overlay">
            <h2 className="sobremi-left-title">Sobre mí</h2>
          </div>
          <img src={sobreMiImage} alt="Sobre mí" className="sobremi-left-image" />
        </div>

        <div className="sobremi-right">
          <h2 className="sobremi-title">Soy Pau!</h2>
          <p className="sobremi-text">
            ...panadera y amante de la creatividad en la cocina. Creo que el
            pan es mucho más que harina y levadura: es paciencia, imaginación
            y compartir. En mis cursos encontrarás claridad, recetas probadas
            y la libertad de poner tu toque personal.
          </p>
          <button className="sobremi-button">Conóceme</button>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
