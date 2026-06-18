import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Colorchanger from './ColorChanger.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Colorchanger />
  </StrictMode>,
)
