import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/talleres">Talleres</Link>
        <Link to="/pau">Pau</Link>
        <Link to="/la-mesa">La Mesa 🍞</Link>
      </div>

      <div className="navbar-center">
        <Link to="/" className="logo">Molino32</Link>
      </div>

      <div className="navbar-right">
        <a href="#cart" className="icon-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </a>
        <a href="#account" className="icon-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
          </svg>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
