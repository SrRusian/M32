import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import logoImg from '../../assets/logo/Brand-logo-03.png'
import './Navbar.css'

function Navbar() {
  const { toggleCart, itemCount } = useCart()

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/talleres">Talleres</NavLink>
        <NavLink to="/pau">Pau</NavLink>
        <NavLink to="/la-mesa">La Mesa 🍞</NavLink>
      </div>

      <div className="navbar-center">
        <Link to="/" className="logo">
          <img src={logoImg} alt="Molino32" className="logo-image" />
        </Link>
      </div>

      <div className="navbar-right">
        <button onClick={toggleCart} className="icon-link cart-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>
        <NavLink to="/cuenta" className="icon-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
          </svg>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
