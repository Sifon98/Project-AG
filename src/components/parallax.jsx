import React from 'react'
import { MouseParallax } from "react-just-parallax";
import '../scss/parallax.scss'

export default function Parallax() {
  return (
    <>
      <MouseParallax strength={0.02} isAbsolutelyPositioned={true} zIndex={-20} className={'.test'}>
        <div className="stars"></div>
      </MouseParallax>
      <MouseParallax strength={0.04} isAbsolutelyPositioned={true} zIndex={-20}>
        <div className="stars2"></div>
      </MouseParallax>
      <MouseParallax strength={0.06} isAbsolutelyPositioned={true} zIndex={-20}>
        <div className="stars3"></div>
      </MouseParallax>
    </>
  )
}