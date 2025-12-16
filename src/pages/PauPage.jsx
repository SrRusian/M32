import './PauPage.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import TextCarousel from '../components/common/TextCarousel'
import sobreMiImg from '../assets/images/sobreMi.png'

function PauPage() {
  return (
    <>
      <Navbar />
      <TextCarousel />
      <main className="pau-page">
        <div className="pau-container">
          <h1 className="pau-title">Hola, soy Paulina</h1>

          <div className="pau-image-container">
            <img src={sobreMiImg} alt="Paulina" className="pau-image" />
          </div>

          <section className="pau-content">
            <div className="pau-section">
              <h2 className="pau-subheader">First subheader</h2>
              <p className="pau-text">
                The first paragraph of an article is often an introduction to the text. Sometimes it's called the "lead," and sometimes that word is spelled "lede." When you're writing an article—whether it's for a blog or a review site or somewhere else—it's always a good idea to begin with something interesting to hook a reader. If it's a piece of thought leadership, maybe you want to start with a little anecdote, or a familiar problem. If you're putting together something for businesses, you might start off with a relevant piece of data.
              </p>
            </div>

            <div className="pau-section">
              <h2 className="pau-subheader">Another subheader to break up text</h2>
              <p className="pau-text">
                The second paragraph of an article is sometimes called the "nut graph," which is short for "nutshell paragraph." That's because this is usually where the article gets to the heart of the matter—the main point. After the first section, the reader is ready to hear what's truly at stake in this piece of writing. They're invested. They're paying attention. If your piece is long enough to have long, multi-paragraph sections, then you'll want to use this strategy throughout to make sure you're holding reader attention in a consistent way.
              </p>
            </div>

            <div className="pau-quote">
              <p className="pau-quote-text">"El secreto está en disfrutar el proceso, no solo el resultado."</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PauPage
