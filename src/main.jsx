import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToolDataProvider } from './context/ToolDataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToolDataProvider>
      <App />
    </ToolDataProvider>
  </StrictMode>,
)
