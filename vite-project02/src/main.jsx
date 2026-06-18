import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseStateHooks from './ReactHooks.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <  UseStateHooks />
  </StrictMode>,
)
