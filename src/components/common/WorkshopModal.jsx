import { useCart } from '../../context/CartContext'
import './WorkshopModal.css'

function WorkshopModal({ workshop, onClose }) {
  const { addToCart } = useCart()

  if (!workshop) return null

  const handleAddToCart = () => {
    addToCart(workshop)
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="modal-body">
          <div className="modal-image-section">
            <img src={workshop.image} alt={workshop.title} className="modal-image" />
            {workshop.tag && (
              <span className="modal-tag">{workshop.tag}</span>
            )}
          </div>

          <div className="modal-info-section">
            <div className="modal-badges">
              <span className={`modal-badge modal-badge-${workshop.type?.toLowerCase()}`}>
                {workshop.type}
              </span>
              {workshop.category && (
                <span className="modal-badge modal-badge-category">
                  {workshop.category}
                </span>
              )}
            </div>

            <h2 className="modal-title">{workshop.title}</h2>
            
            {workshop.description && (
              <p className="modal-description">{workshop.description}</p>
            )}

            {workshop.rating && (
              <div className="modal-rating">
                <div className="modal-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={i < Math.floor(workshop.rating) ? "#d4a574" : "none"}
                      stroke="#d4a574"
                      strokeWidth="2"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="modal-rating-text">{workshop.rating} / 5.0</span>
              </div>
            )}

            <div className="modal-details">
              {workshop.duration && (
                <div className="modal-detail-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>{workshop.duration}</span>
                </div>
              )}
              {workshop.lessons && (
                <div className="modal-detail-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  <span>{workshop.lessons} lecciones</span>
                </div>
              )}
              {workshop.students && (
                <div className="modal-detail-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span>{workshop.students} estudiantes</span>
                </div>
              )}
              {workshop.date && (
                <div className="modal-detail-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>{workshop.date}</span>
                </div>
              )}
            </div>

            {workshop.price && (
              <div className="modal-price-section">
                <span className="modal-price">${workshop.price.toLocaleString()}</span>
                <span className="modal-price-label">MXN</span>
              </div>
            )}

            <button className="modal-add-to-cart" onClick={handleAddToCart}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkshopModal
