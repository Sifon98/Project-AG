import React, { useState, useEffect } from 'react'
import { Link, useLocation} from 'react-router-dom'
import logo from '../img/logo.png'
import '../scss/main.scss'

const activeNav = (setUseCheck) => {
    // Communicate that this particular button has been pressed
    setUseCheck(true);
}

export default function header() {
  const location = useLocation();
  //true = give active css --- false = give inactive css
  const [isActive1, setIsActive1] = useState('');
  const [isActive2, setIsActive2] = useState('');
  const [isActive3, setIsActive3] = useState('');
  const [isActive4, setIsActive4] = useState('');

  // Check if the user has pressed a button or not
  const [useCheck1, setUseCheck1] = useState('');
  const [useCheck2, setUseCheck2] = useState('');
  const [useCheck3, setUseCheck3] = useState('');
  const [useCheck4, setUseCheck4] = useState('');

  // Change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
        setColor(true);
    } else {
        setColor(false);
    }
  }
  window.addEventListener('scroll', changeColor);

  // Double check that everything is correct (makes everything work when users uses back function in browser)
  useEffect(() => {
    if (location.pathname == "/"){
        setIsActive1(true);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        activeNav(setUseCheck1)
    }else if (location.pathname == '/builds'){
        setIsActive1(false);
        setIsActive2(true);
        setIsActive3(false);
        setIsActive4(false);
        activeNav(setUseCheck2)
    }else if (location.pathname == '/warlock'){
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(true);
        setIsActive4(false);
        activeNav(setUseCheck3)
    }else if (location.pathname == '/titan'){
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(true);
        activeNav(setUseCheck4)
    }
  },[location]);

  return (
    <div className={color ? "navbar navbar-dark" : "navbar"}>
        <div className="logo">
            <h1 className="first">DESTINY</h1>
            <img src={logo} alt="Destiny logo" />
            <h1>[TAG]</h1>
        </div>
        <ul>
            <li>
                <Link className={isActive1 ? 'addcolor' : ''} to="/" onClick={() => activeNav(setUseCheck1)}>Home</Link>
                <div className={useCheck1 == true ? isActive1 ? 'addline' : 'removeline' : ''}></div>
            </li>
            <li>
                <Link className={isActive2 ? 'addcolor' : ''} to="/builds" onClick={() => activeNav(setUseCheck2)}>Builds</Link>
                <div className={useCheck2 == true ? isActive2 ? 'addline' : 'removeline' : ''}></div>
            </li>
            <li>
                <Link className={isActive3 ? 'addcolor' : ''} to="/warlock" onClick={() => activeNav(setUseCheck3)}>Warlock</Link>
                <div className={useCheck3 == true ? isActive3 ? 'addline' : 'removeline' : ''}></div>
            </li>
            <li>
                <Link className={isActive4 ? 'addcolor' : ''} to="/titan" onClick={() => activeNav(setUseCheck4)}>Titan</Link>
                <div className={useCheck4 == true ? isActive4 ? 'addline' : 'removeline' : ''}></div>
            </li>
        </ul>
    </div>
  )
}