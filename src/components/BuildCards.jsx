import React from 'react'
import { Link } from "react-router-dom"
import HunterImg from '../img/HunterLogo.png'
import WarlockImg from '../img/WarlockLogo.png'
import TitanImg from '../img/TitanLogo.png'
import CrucibleImg from '../img/CrucibleLogo.png'

// Displays all the build cards that the sorting function decided to show
export default function BuildCards({buildTitle, tags, classImg, superImg, aspectImg1, aspectImg2, exoticImg}) {
  return (
    <Link to={{pathname: `/build-guide`, search: `name=${buildTitle}`}} id={classImg} className="build">
        <div className="build-info">
            <div className="img-container">
                { tags[0] == "HUNTER" ? <img src={ HunterImg } /> : 
                  tags[0] == "WARLOCK" ? <img src={ WarlockImg } /> : 
                  tags[0] == "TITAN" ? <img src={ TitanImg } /> : null }
                  <hr/>
                <img className="large-img" src={superImg}/>
                  <hr/>
                <img src={aspectImg1}/>
                <img src={aspectImg2}/>
                <img src={exoticImg}/>
                { tags[2] == "PVP" ? <img src={ CrucibleImg } />: null }
            </div>
        </div>
    </Link>
  )
}