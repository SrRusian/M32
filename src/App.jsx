import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import TalleresPage from './pages/TalleresPage'
import LaMesaPage from './pages/LaMesaPage'
import PauPage from './pages/PauPage'
import BlogPost from './pages/BlogPost'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talleres" element={<TalleresPage />} />
        <Route path="/pau" element={<PauPage />} />
        <Route path="/la-mesa" element={<LaMesaPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
