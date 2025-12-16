import './ContactInfo.css'

function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="contact-content">
        <div className="contact-left">
          <h2 className="contact-logo">Molino 32</h2>
        </div>

        <div className="contact-center">
          <div className="contact-item">
            <p className="contact-label">Email:</p>
            <a href="mailto:hola@molino32.com" className="contact-link">
              hola@molino32.com
            </a>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-item">
            <p className="contact-text">COLIMA, MX</p>
          </div>
          <div className="contact-item">
            <p className="contact-text">Calle 32 en algún lugar</p>
            <p className="contact-text">(312) 1234567</p>
          </div>
          <div className="contact-item">
            <p className="contact-copyright">Molino32s©</p>
            <p className="contact-copyright">2025 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
