import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { preGuideArray } from '../components/GuideArray'
import { useSearchParams } from "react-router-dom"
import GuideSection from '../components/GuideSection'
import RedBorderGif from '../img/Gif/Red-Border.gif'
import RedBorderGif1 from '../img/Gif/Red-Border-1.gif'
import CataclysmRunner from '../img/Gif/Cataclysm-Runner.gif'
import CataclysmOther from '../img/Gif/Cataclysm-Psion-Tormentor.gif'
import IntroImg from '../img/LightNode.png'
import TestImg from '../img/background.png'
import CataclysmMap from '../img/CataclysmMap.jpeg'

import parse from 'html-react-parser'

export function GuidePage() {
    // Image Popups
    const [popUp, setPopUp] = useState();
    const [imgUrl, setImgUrl] = useState('');
    // Navigation Array
    const [navArray, setNavArray] = useState();
    // Get the array with all the guide info
    const [queryParameters] = useSearchParams()
    const urlGuideId = queryParameters.get('name')

    const imagePopUp = (name) => {
        setImgUrl(name)

        console.log(imgUrl)
        setPopUp(!popUp)
    }

    preGuideArray.map((data) => (
        console.log(data.guidePage)
    ))

  return (
    <>
    { preGuideArray.map((data, i) => (
        data.guideId === urlGuideId ?
        <div key={i} id="intro" className="guide-page">
            <div className={`modal ${popUp == undefined ? null : popUp ? 'active' : 'inactive'}`} onClick={()=>{setPopUp(!popUp)}}>
                <img src={imgUrl} alt="Popup image, can be different" />
            </div>
            <div className="guide-page-container">
                <div className="navigation-placeholder"/>
                <div className="navigation">
                    <h3>THE NAVIGATOR</h3>
                    <hr className="largeLine" />
                    <hr className="smallLine" />
                    { data.guidePage.navigation.map((data, i) => (
                        <div key={i}><a href={data.href} className={data.class}>{data.text}</a><br/></div>
                    ))}
                </div>
                <div className="information">
                    { data.guidePage.section.map((data, i) => (
                        <GuideSection key={i} data={data} imagePopUp={imagePopUp}/>
                    ))}
                </div>
            </div>
        </div> : null
    ))}
    </>
  )
}
