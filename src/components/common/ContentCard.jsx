import './ContentCard.css'

function ContentCard({ content }) {
  return (
    <div className="content-card">
      <div className="content-card-image-container">
        <img src={content.image} alt={content.title} className="content-card-image" />
        <div className="content-card-badges">
          <div className="content-badges-left">
            {content.category && <span className="content-badge-category">{content.category}</span>}
          </div>
          <div className="content-badges-right">
            <button className="content-favorite">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="content-card-content">
        <h3 className="content-card-title">{content.title}</h3>
        <p className="content-card-description">{content.description}</p>

        <div className="content-card-footer">
          {content.date ? (
            <div className="content-date-info">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span className="content-date">{content.date}</span>
            </div>
          ) : (
            <div className="content-info">
              {content.duration && (
                <span className="content-info-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {content.duration}
                </span>
              )}
              {content.lessons && (
                <span className="content-info-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                  {content.lessons}
                </span>
              )}
              {content.students && (
                <span className="content-info-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  {content.students}
                </span>
              )}
            </div>
          )}
          <button className="content-button">Ver</button>
        </div>
      </div>
    </div>
  )
}

export default ContentCard
