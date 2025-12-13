import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TextCarousel from './components/TextCarousel'
import Talleres from './components/Talleres'
import AprendeSinMiedo from './components/AprendeSinMiedo'
import SobreMi from './components/SobreMi'
import LaMesa from './components/LaMesa'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TextCarousel />
      <Talleres />
      <AprendeSinMiedo />
      <SobreMi />
      <LaMesa />
      <CTA />
      <Footer />
    </>
  )
}

export default App
