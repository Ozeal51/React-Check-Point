import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap stylesheet for React-Bootstrap components.
import 'bootstrap/dist/css/bootstrap.min.css'

// Global app styles.
import './index.css'

// Root application component.
import App from './App.jsx'

// Mount the React app to the #root element in index.html.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
