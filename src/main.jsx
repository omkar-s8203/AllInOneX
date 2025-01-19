import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './App.css'
// Import our custom CSS
import './styles.scss'

// Import all of Bootstraps JS
import * as bootstrap from 'bootstrap'
import AppRoutes from './routes'
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
    
  </StrictMode>,
)
