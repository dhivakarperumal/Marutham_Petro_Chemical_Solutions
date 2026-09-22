import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Componets/Home/Home.jsx'
import About from './Componets/About/About.jsx'
import Contact from './Componets/Contact/Contact.jsx'
import Products from './Componets/Products/Products.jsx'
import BrandDetails from './Componets/Brands/BrandDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="brands/:brandSlug" element={<BrandDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
