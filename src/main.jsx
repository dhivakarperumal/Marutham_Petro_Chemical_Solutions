import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'
import Home from './Componets/Home/Home.jsx'
import About from './Componets/About/About.jsx'
import Contact from './Componets/Contact/Contact.jsx'
import Products from './Componets/Products/Products.jsx'
import Gallery from './Componets/Gallery/Gallery.jsx'
import BrandDetails from './Componets/Brands/BrandDetails.jsx'

function AppRoot() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 40,
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="products" element={<Products />} />
          <Route path="brands/:brandSlug" element={<BrandDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
)
