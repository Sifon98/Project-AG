import React, { useState } from 'react'
import '../scss/guides.scss'
import { Link } from "react-router-dom"

export function Guides() {
  // Used to change the dropdown menus
  const [menuOpen1, setMenuOpen1] = useState();
  // Used to sort builds
  const [selectActivity, setSelectActivity] = useState('ANY ACTIVITY');

  // Change the button text, set the sorting tag and close menu
  const handleMenu1 = (e) => {
    document.getElementById('sortingBtn1').innerHTML=(e.currentTarget.id);
    setMenuOpen1(!menuOpen1);
    setSelectActivity(e.currentTarget.id);
  }
  // Close all menus
  const closeAll = () => {
    setMenuOpen1(false);
  }

  return (
    <>
    <div className="intro-guides"/>
    <div className={`hider ${menuOpen1 ? 'active' : 'inactive'}`} onClick={()=>{closeAll()}}></div>
    <div className="sorting-container">
      <h2 className="medium-header">SORTING:</h2>
      <div className="menu-container">
        <div className={`menu-selector ${menuOpen1 ? 'box-shadow' : '' }`} onClick={()=>{setMenuOpen1(!menuOpen1)}}>
          <div id="sortingBtn1">ACTIVITIES</div>
        </div>
        <div id="ANY ACTIVITY" className={`dropdown-menu ${menuOpen1 == undefined ? '' : menuOpen1 ? 'active' : 'inactive'}`}>
          <ul>
            <li id="ANY ACTIVITY" onClick={handleMenu1}>ANY ACTIVITY</li>
            <li id="RAIDS" onClick={handleMenu1}>RAIDS</li>
            <li id="DUNGEONS" onClick={handleMenu1}>DUNGEONS</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="guide-width">
      <div className="guide-container">
        {selectActivity == "ANY ACTIVITY" ?
          <div className="guide-card-img">
            <div className="layer">
              <div className="guide-card">
                <h3 className="medium-header">ROOT OF NIGHTMARES</h3>
                <hr className="largeLine" />
                <hr className="smallLine" />
                <h3 className="under-header">All encounters • Challenges • Red border • Secret chests</h3>
                <p>As one of the <strong>easier</strong> Raids in Destiny 2, <strong>Root of Nightmares </strong>
                  tends to be more relaxing than other Raids. The large
                  amount of <strong>viable movement techniques</strong> makes this a
                  super enjoyable experience for players willing to learn
                  more advanced movement tech. </p>
                <Link to="#" className="button">READ MORE</Link>
              </div>
            </div>
          </div>
         : selectActivity == "RAIDS" ? 
         <div>Hello World</div>
         : null}
      </div>
    </div>
    </>
  )
}
