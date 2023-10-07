import React from 'react'
import { Link } from "react-router-dom"
import { preGuideArray } from '../components/GuideArray'

export function GuidePage() {
  return (
    <div id="intro" className="guide-page">
        <div className="guide-page-container">
            <div className="navigation-placeholder"/>
            <div className="navigation">
                <h3>NAVIGATION</h3>
                <hr className="largeLine" />
                <hr className="smallLine" />
                <a href="#intro" className="nav-large">INTRO</a><br/>
                <a href="#intro" className="nav-small">Red Border #1</a>
                <a href="#intro" className="nav-large">CATACLYSM</a>
                <a href="#intro" className="nav-small">Secret Chest #1</a>
                <a href="#intro" className="nav-large">SCISSION</a>
                <a href="#intro" className="nav-large">JUMPING PUZZLE</a>
                <a href="#intro" className="nav-small">Red Border #2</a>
                <a href="#intro" className="nav-small">Secret Chest #2</a>
                <a href="#intro" className="nav-large">MACROCOSM</a>
                <a href="#intro" className="nav-small">Red Border #3</a>
                <a href="#intro" className="nav-large">NEZAREC</a>
            </div>
            <div className="information">
                <section>
                    <h3 className="medium-header">INTRO - ROOT OF NIGHTMARES</h3>
                    <hr className="largeLine" />
                    <hr className="smallLine" />
                    <div className="info">
                        <h3>GENERAL INFO</h3>
                        <hr className="smallLine" />
                        <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}
