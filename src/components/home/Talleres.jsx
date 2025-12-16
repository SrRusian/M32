import { useState } from 'react'
import './Talleres.css'
import WorkshopCard from '../common/WorkshopCard'
import WorkshopModal from '../common/WorkshopModal'
import masaMadreImg from '../../assets/images/masaMadre.png'
import panMuertoImg from '../../assets/images/panMuerto.png'
import raviolisImg from '../../assets/images/raviolisRellenos.png'

function Talleres() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null)

  const talleres = [
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
      price: 899,
      isOnline: true
    },
    {
      id: 2,
      image: panMuertoImg,
      title: 'Pan de Muerto',
      description: 'Aprende a preparar pan de muerto esponjoso y aromático, paso a paso, con técnicas fáciles.',
      type: 'Presencial',
      rating: 4.5,
      date: '27 de Octubre 2025 | 8:00 am',
      price: 1299,
      isOnline: false
    },
    {
      id: 3,
      image: raviolisImg,
      title: 'Raviolis y rellenos caseros',
      description: 'Técnicas para hacer raviolis y salsas deliciosas.',
      type: 'Presencial',
      rating: 4.5,
      date: '6 de Octubre 2025 | 8:00 am',
      price: 1499,
      isOnline: false
    }
  ]

  return (
    <>
      <section className="talleres-section">
        <div className="talleres-container">
          <h2 className="talleres-title">Próximos talleres</h2>

          <div className="talleres-grid">
            {talleres.map(taller => (
              <WorkshopCard 
                key={taller.id} 
                workshop={taller}
                onCardClick={setSelectedWorkshop}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedWorkshop && (
        <WorkshopModal 
          workshop={selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
        />
      )}
    </>
  )
}

export default Talleres
