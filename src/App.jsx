import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import ScrollToTop from './components/common/ScrollToTop'
import CartSidebar from './components/layout/CartSidebar'
import Home from './pages/Home'
import TalleresPage from './pages/TalleresPage'
import LaMesaPage from './pages/LaMesaPage'
import PauPage from './pages/PauPage'
import BlogPost from './pages/BlogPost'
import AuthPage from './pages/AuthPage'
import './App.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <CartSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talleres" element={<TalleresPage />} />
          <Route path="/pau" element={<PauPage />} />
          <Route path="/la-mesa" element={<LaMesaPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/cuenta" element={<AuthPage />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
