import './BlogPost.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="blog-post">
        <article className="blog-article">
          <header className="blog-header">
            <time className="blog-date">20 Noviembre, 2025</time>
            <h1 className="blog-title">Cómo cuidar tu masa madre</h1>
            <p className="blog-author">Pau Pérez</p>
          </header>

          <img 
            src="/src/assets/images/laMesa1.png" 
            alt="Masa Madre" 
            className="blog-featured-image"
          />

          <div className="blog-content">
            <section className="blog-section">
              <h2>Mantenla viva y burbujeante</h2>
              <p>
                La masa madre tiene fama de ser caprichosa, pero en realidad solo necesita un poco de rutina. Funciona como una mascota microscópica: la alimentas, la observas y, a cambio, te da panes que huelen a gloria. Aloha es su nombre, y para que firmaste un contrato de por vida.
              </p>
              <p>
                La clave es entender que la masa madre es un microecosistema: levaduras y bacterias que viven de harina y agua. Cuando la "refrescas", estás renovando su comida y equilibrando su fuerza. Nada místico, pura biología sabrosa.
              </p>
            </section>

            <section className="blog-section">
              <h2>Pasos esenciales para mantenerla en forma</h2>
              <ol className="blog-list">
                <li>
                  <strong>Alimentación regular</strong>
                  <p>Dale una mezcla de harina y agua en proporciones iguales. Si usas 50 g de masa madre, aliméntala con 50 g de harina y 50 g de agua. Es como recargarle las pilas.</p>
                </li>
                <li>
                  <strong>Rutina según tu ritmo de vida</strong>
                  <p>Si horneas seguido, mantenla a temperatura ambiente y aliméntala a diario. Si prefieres un ritmo más zen, déjala en la nevera y dale de comer una vez a la semana.</p>
                </li>
                <li>
                  <strong>El frasco adecuado</strong>
                  <p>Usa un envase de vidrio con espacio de sobra. La masa madre es discreta, pero crece como si estuviera entrenando para un maratón.</p>
                </li>
                <li>
                  <strong>Temperatura amigable</strong>
                  <p>Entre 21 °C y 25 °C vive su mejor vida. En frío no se vuelve perezosa, en calor se acelera. Un poco como todos.</p>
                </li>
                <li>
                  <strong>Observa su comportamiento</strong>
                  <p>Burbujas activas, aroma ácido y un volumen que sube y baja son signos de buena salud. Si notas colores extraños, moho o un olor que te haga dudar de tus decisiones... es momento de empezar nueva.</p>
                </li>
                <li>
                  <strong>No te asustes del "líquido" en la superficie</strong>
                  <p>A veces aparece un líquido grisáceo llamado hooch. Significa que tiene hambre, no que te odia. Solo remueve y alimenta.</p>
                </li>
                <li>
                  <strong>Dale nombre (opcional pero divertido)</strong>
                  <p>No mejora su rendimiento, pero te hace sentir parte de un club secreto de panaderos sentimentales.</p>
                </li>
              </ol>
            </section>

            <section className="blog-conclusion">
              <p>
                Cuidar una masa madre es, en el fondo, un pequeño acto de paciencia que termina recompensándote con panes increíblemente aromáticos y con personalidad. Quienes la mantienen dicen que hornear deja de ser solo cocina y se vuelve un ritual amable. Y sí, también te da excusa para presumir hogazas como si fueran trofeos.
              </p>
            </section>

            <blockquote className="blog-quote">
              <p>"La masa madre no se cuida con prisa, sino con paciencia... igual que el pan que sueñas hornear."</p>
              <footer>
                <img src="/src/assets/images/sobreMi.png" alt="Pau Pérez" className="quote-avatar" />
                <div>
                  <strong>Pau Pérez</strong>
                  <span>Molino32</span>
                </div>
              </footer>
            </blockquote>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default BlogPost
