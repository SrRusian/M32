import './AprendeSinMiedo.css'

function AprendeSinMiedo() {
  return (
    <section className="aprende-section">
      <div className="aprende-content">
        <div className="aprende-left">
          <h2 className="aprende-title">Aprende sin miedo</h2>
          <p className="aprende-text">
            Mis talleres son para todos: desde quien nunca ha amasado,
            hasta quien quiere perfeccionar su técnica. Son espacios prácticos,
            claros y muy creativos. La idea es que disfrutes, aprendas y te
            lleves un pan delicioso... ¡hecho por ti!
          </p>
          <button className="aprende-button">Explora los talleres</button>
        </div>

        <div className="aprende-right">
          <h2 className="aprende-right-title">Talleres</h2>
          {/* Imagen de fondo en CSS */}
        </div>
      </div>
    </section>
  )
}

export default AprendeSinMiedo
