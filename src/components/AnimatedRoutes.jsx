import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Builds } from '../pages/Builds'
import { Guides } from '../pages/Guides'
import { Titan } from '../pages/Titan'
import { BuildGuide } from '../pages/BuildGuide'
import { GuidePage } from '../pages/GuidePage'
import { Page404 } from '../pages/404'


export default function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />}/>
      <Route path="/builds" element={<Builds />}/>
      <Route path="/guides" element={<Guides />}/>
      <Route path="/titan" element={<Titan />}/>
      <Route path="/build-guide" element={<BuildGuide />}/>
      <Route path="/guide-page" element={<GuidePage />}/>
      <Route path="*" element={<Page404 />}/>
    </Routes>
  )
}
