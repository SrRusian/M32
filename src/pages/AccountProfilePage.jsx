import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AccountProfilePage.css'
import Navbar from '../components/layout/Navbar'
import ContactInfo from '../components/layout/ContactInfo'
import Footer from '../components/layout/Footer'
import masaMadreImg from '../assets/images/masaMadre.png'
import panMuertoImg from '../assets/images/panMuerto.png'

function AccountProfilePage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('courses')
  const [formData, setFormData] = useState({
    fullName: 'María González',
    email: 'maria.gonzalez@email.com',
    phone: '+52 312 123 4567',
    address: 'Calle Principal 123',
    city: 'Colima',
    state: 'Colima',
    postalCode: '28000',
    birthdate: '1990-05-15'
  })

  // Mock data - cursos comprados
  const purchasedCourses = [
    {
      id: 1,
      title: 'Masa Madre desde cero',
      type: 'Online',
      image: masaMadreImg,
      purchaseDate: '15 de Diciembre, 2025',
      progress: 60,
      totalLessons: 6,
      completedLessons: 4
    },
    {
      id: 2,
      title: 'Pan de Muerto',
      type: 'Presencial',
      image: panMuertoImg,
      purchaseDate: '10 de Noviembre, 2025',
      progress: 100,
      totalLessons: 4,
      completedLessons: 4,
      completed: true
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSaveSettings = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar en el backend
    alert('Configuración guardada exitosamente')
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
      <main className="account-profile-page">
        {/* Header */}
        <section className="account-header">
          <div className="account-header-content">
            <div className="account-avatar">
              <span>{formData.fullName.charAt(0)}</span>
            </div>
            <div className="account-header-info">
              <h1>¡Hola, {formData.fullName.split(' ')[0]}! 👋</h1>
              <p>Bienvenido a tu espacio personal en Molino 32</p>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="account-tabs-section">
          <div className="account-tabs-container">
            <div className="account-tabs">
                <button 
                className={`account-tab ${activeTab === 'courses' ? 'active' : ''}`}
                onClick={() => setActiveTab('courses')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                Mis Cursos
              </button>
              <button 
                className={`account-tab ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m-9-9h6m6 0h6"/>
                </svg>
                Ajustes
              </button>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <section className="account-content">
          <div className="account-content-container">
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="settings-content">
                <h2 className="section-title">Configuración de cuenta</h2>
                <p className="section-description">Administra tu información personal y preferencias</p>

                <form onSubmit={handleSaveSettings} className="settings-form">
                  <div className="form-section">
                    <h3 className="form-section-title">Información Personal</h3>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="fullName">Nombre Completo *</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="birthdate">Fecha de Nacimiento</label>
                        <input
                          type="date"
                          id="birthdate"
                          name="birthdate"
                          value={formData.birthdate}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 className="form-section-title">Información de Contacto</h3>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Correo Electrónico *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Teléfono Celular *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 className="form-section-title">Dirección</h3>
                    
                    <div className="form-group">
                      <label htmlFor="address">Calle y Número</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="city">Ciudad</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="state">Estado</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="postalCode">Código Postal</label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="save-button">
                      Guardar Cambios
                    </button>
                    <button type="button" className="cancel-button" onClick={() => window.location.reload()}>
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div className="courses-content">
                <h2 className="section-title">Mis Cursos</h2>
                <p className="section-description">Accede a todos los cursos y talleres que has adquirido</p>

                <div className="courses-grid">
                  {purchasedCourses.map(course => (
                    <div key={course.id} className="course-item">
                      <div className="course-image">
                        <img src={course.image} alt={course.title} />
                        {course.completed && (
                          <div className="course-completed-badge">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </div>
                        )}
                        <span className="course-type-badge">{course.type}</span>
                      </div>
                      
                      <div className="course-info">
                        <h3>{course.title}</h3>
                        <p className="course-purchase-date">Comprado el {course.purchaseDate}</p>
                        
                        <div className="course-progress">
                          <div className="progress-header">
                            <span className="progress-label">Progreso</span>
                            <span className="progress-percentage">{course.progress}%</span>
                          </div>
                          <div className="progress-bar">
                            <div 
                              className="progress-fill" 
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                          <p className="progress-lessons">
                            {course.completedLessons} de {course.totalLessons} lecciones completadas
                          </p>
                        </div>

                        <button className="course-access-button">
                          {course.completed ? 'Revisar Curso' : 'Continuar Curso'}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {purchasedCourses.length === 0 && (
                  <div className="empty-courses">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                    <h3>Aún no has comprado ningún curso</h3>
                    <p>Explora nuestros talleres y comienza tu viaje de aprendizaje</p>
                    <a href="/talleres" className="explore-button">Explorar Talleres</a>
                  </div>
                )}
              </div>
            )}

          </div>
        </section>
      </main>
      <ContactInfo />
      <Footer />
    </>
  )
}

export default AccountProfilePage
