import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const getBasename = () => {
  if (typeof window === 'undefined') return '/'
  return window.location.pathname.startsWith('/admin') ? '/admin' : '/'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
