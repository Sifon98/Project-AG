import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* For GitHub Pages, safe to remove after */}
    <HashRouter basename={import.meta.env.DEV ? '/' : '/Project-AG/'}>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
