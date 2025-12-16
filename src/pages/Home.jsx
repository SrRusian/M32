import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import TextCarousel from '../components/common/TextCarousel'
import Talleres from '../components/home/Talleres'
import AprendeSinMiedo from '../components/home/AprendeSinMiedo'
import SobreMi from '../components/home/SobreMi'
import LaMesa from '../components/home/LaMesa'
import CTA from '../components/home/CTA'
import Footer from '../components/layout/Footer'

function Home() {
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

export default Home
