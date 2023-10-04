import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Builds } from '../pages/Builds'
import { Warlock } from '../pages/Warlock'
import { Titan } from '../pages/Titan'
import { BuildGuide } from '../pages/BuildGuide'


export default function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/Project-AG/" element={<Home />}/>
      <Route path="/Project-AG/builds" element={<Builds />}/>
      <Route path="/Project-AG/warlock" element={<Warlock />}/>
      <Route path="/Project-AG/titan" element={<Titan />}/>
      <Route path="/Project-AG/build-guide" element={<BuildGuide />}/>
    </Routes>
  )
}
