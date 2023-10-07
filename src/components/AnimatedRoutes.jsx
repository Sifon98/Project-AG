import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Builds } from '../pages/Builds'
import { Guides } from '../pages/Guides'
import { Titan } from '../pages/Titan'
import { BuildGuide } from '../pages/BuildGuide'


export default function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />}/>
      <Route path="/builds" element={<Builds />}/>
      <Route path="/guides" element={<Guides />}/>
      <Route path="/titan" element={<Titan />}/>
      <Route path="/build-guide" element={<BuildGuide />}/>
    </Routes>
  )
}
