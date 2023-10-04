import React, { useEffect, useState, useRef } from 'react'
import '../scss/home.scss'
import { Link } from "react-router-dom"
import raidImg from "../img/background.png"

export function Home() {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false);

  // A callback function that sets the state to true or false depending on if element is visible
  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  // Options for the observer
  const options = {
    threshold: 0.6
  }

  // Create/remove the observer
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
    
  }, [containerRef, options]);

  return (
    <>
      <div className="landing">
        <div className="text-box">
          <h2>ASCENDANT GUARDIAN</h2>
          <hr className="large-line"/>
          <hr/>
          {/* <h2>Builds and Guides for Destiny 2</h2> */}
          <a href="#builds">
            {/* <div className="hr-left" /> */}
            <div className="arrow"></div>
            {/* <div className="hr-right" /> */}
          </a>
        </div>
      </div>
      <div className="container" id="builds">
        <section ref={containerRef} className="build-section">
          <div className="cards">
            <div className={`card ${isVisible ? 'transform' : ''}`} />
            <div className={`card ${isVisible ? 'transform' : ''}`} />
            <div className={`card ${isVisible ? 'transform' : ''}`} />
            <div className={`card ${isVisible ? 'transform' : ''}`} />
          </div>
          <div className="info">
            <div className="text-container">
              <h2>BUILDS</h2>
              <hr />
              <p>Here you can find builds for <strong>Hunters, Warlocks</strong> and <strong>Titans</strong>.<br/><br/>
                You will learn what <strong>abilites</strong> to use, which the best <strong>exotics</strong>, <strong>weapons</strong> and <strong>mods</strong> are for your chosen build.
                After that you will recieve <strong>detailed instructions</strong> with tips for <strong>endgame</strong> and alternative variants for the builds.
              </p>
              <Link to="/builds" className="button">READ MORE</Link>
            </div>
          </div>
        </section>
        <section className="guide-section">
          <div className="info">
            <div className="text-container">
              <h2>GUIDES</h2>
              <hr />
              <p>UNDER CONSTRUCTION</p>
              <Link to="#" className="button">READ MORE</Link>
            </div>
          </div>
          <div className="raid-showcase">
            <img src={raidImg} alt="" />
          </div>
        </section>
      </div>
    </>
  )
}