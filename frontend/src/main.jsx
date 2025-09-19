import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginProvider from './context/Logincontext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <LoginProvider>
      <App />
    </LoginProvider>
    </BrowserRouter>
  </StrictMode>,
)
