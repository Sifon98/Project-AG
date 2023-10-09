import React from 'react'
import parse from 'html-react-parser'
// Import gifs and images
import RedBorderGif from '../img/Gif/Red-Border.gif'
import RedBorderGif1 from '../img/Gif/Red-Border-1.gif'
import CataclysmRunner from '../img/Gif/Cataclysm-Runner.gif'
import CataclysmOther from '../img/Gif/Cataclysm-Psion-Tormentor.gif'
import IntroImg from '../img/LightNode.png'
import TestImg from '../img/background.png'
import CataclysmMap from '../img/CataclysmMap.jpeg'

export default function GuideSection({data, imagePopUp}) {
  return (
    <section>
        <div className="wrapper">
            <h3 className="medium-header">{parse(data.title)}</h3>
            <hr className="largeLine" />
            <hr className="smallLine" />
            <div className="info">
                <h3>GENERAL INFO</h3>
                <hr className="smallLine" />
                <p>{parse(data.text)}</p>
            </div>
            { data.underSection == undefined ? null : data.underSection.map((data, i) => (
                data.style == "style-noheader" ?
                    <div key={i} id={`${data.id == undefined ? null : data.id}`} className={data.style}>
                        <div className="text">
                            {console.log(data)}
                            <p>{parse(data.text)}</p>
                        </div>
                        <div className="img">
                            {data.module ? 
                                data.image == "CataclysmMap" ? <img src={CataclysmMap} className="clickable" onClick={()=>{imagePopUp(CataclysmMap)}} /> 
                                : null 
                            : data.image == "LightNode" ? <img src={IntroImg}/> : null}
                            {data.href == undefined ? null : <p>Credit: <a href={data.href} target="_blank">{data.name}</a></p>}
                        </div>
                    </div> :
                data.style == "style-header" ?
                    <div id={`${data.id == undefined ? null : data.id}`} className={data.style}>
                        <div className="text">
                            <h3>{parse(data.title)}</h3>
                            <hr className="smallLine" />
                            <p>{parse(data.text)}</p>
                        </div>
                        <div className="img">
                            {data.image == "RootRedBorder" ? <img src={RedBorderGif} /> 
                            : data.image == "CataclysmRunner" ? <img src={CataclysmRunner} /> 
                            : data.image == "TestImg" ? <img src={TestImg} /> : null }
                        </div>
                    </div> :
                data.style == "style-header-inverted" ?
                    <div id={`${data.id == undefined ? null : data.id}`} className={data.style}>
                        <div className="img">
                            {data.image == "RootRedBorder1" ? <img src={RedBorderGif1} /> 
                            : data.image == "CataclysmOther" ? <img src={CataclysmOther} /> : null }
                        </div>
                        <div className="text">
                            <h3>{parse(data.title)}</h3>
                            <hr className="smallLine" />
                            <p>{parse(data.text)}</p>
                        </div>
                    </div> :
                data.style == "style-text" ?
                    <div id={`${data.id == undefined ? null : data.id}`} className={data.style}>
                        <h3>{parse(data.title)}</h3>
                        <hr className="smallLine" />
                        <p>{parse(data.text)}</p>
                    </div>
                : null
            ))}
        </div>
        <div id={`${data.fakeId == undefined ? null : data.fakeId}`} className="fake-block"/>
    </section>
  )
}
