import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* For GitHub Pages, safe to remove after */}
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Project-AG/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
