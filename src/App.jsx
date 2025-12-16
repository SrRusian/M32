import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LaMesaPage from './pages/LaMesaPage'
import BlogPost from './pages/BlogPost'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/la-mesa" element={<LaMesaPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
