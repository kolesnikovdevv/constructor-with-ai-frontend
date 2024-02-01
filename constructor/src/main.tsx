import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import './styles/reset.css'
import './styles/index.css'
import { ErrorPage } from './pages/error-page.tsx'
import { Constructor } from './pages/constructor-page.tsx'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/constructor" element={<Constructor />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
