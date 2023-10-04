import React from 'react'
import parse from 'html-react-parser';
import elementArc from '../img/elementArc.png'
import elementVoid from '../img/elementVoid.png'
import elementSolar from '../img/elementSolar.png'

export default function HoverBox({image, i, title, energy, text, superImg}) {
  return (
    <>
    {i > 0 ? <hr /> : null}
    <div className="hover-container">
        <img className={superImg ? `super-img` : ''} src={image}/>
        <div className="hover-box">
            <div className="hover-box-header">
                <h3>{title}</h3>
            </div>
            <p>{energy == undefined ? null : energy == "arc" ? <img src={elementArc} alt="" className="element-img" /> : energy == "void" ? <img src={elementVoid} alt="" className="element-img" /> : energy == "solar" ? <img src={elementSolar} alt="" className="element-img" /> : null}{parse(text)}</p>
        </div>
    </div>
    </>
  )
}
