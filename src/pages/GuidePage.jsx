import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { preGuideArray } from '../components/GuideArray'
import { useSearchParams } from "react-router-dom"
import RedBorderGif from '../img/Gif/Red-Border.gif'
import RedBorderGif1 from '../img/Gif/Red-Border-1.gif'
import CataclysmRunner from '../img/Gif/Cataclysm-Runner.gif'
import CataclysmOther from '../img/Gif/Cataclysm-Psion-Tormentor.gif'
import IntroImg from '../img/LightNode.png'

export function GuidePage() {
    // Navigation Array
    const [navArray, setNavArray] = useState();
    // Get the array with all the guide info
    const [queryParameters] = useSearchParams()
    const urlGuideId = queryParameters.get('name')

    preGuideArray.map((data) => (
        console.log(data.guidePage.navigation)
    ))

  return (
    <div id="intro" className="guide-page">
        <div className="guide-page-container">
            <div className="navigation-placeholder"/>
            <div className="navigation">
                <h3>THE NAVIGATOR</h3>
                <hr className="largeLine" />
                <hr className="smallLine" />
                { preGuideArray.map((data, i) => (
                    data.guideId == urlGuideId ?
                    data.guidePage.navigation.map((data, i) => (
                        <><a href={data.href} className={data.class}>{data.text}</a><br/></>
                    )) : null
                ))}
                {/* <a href="#intro" className="nav-large">INTRO</a>
                <a href="#intro" className="nav-small">Red Border #1</a>
                <a href="#cataclysm" className="nav-large">CATACLYSM</a>
                <a href="#cataclysm" className="nav-small">Secret Chest #1</a>
                <a href="#scission" className="nav-large">SCISSION</a>
                <a href="#jumpingpuzzle" className="nav-large">JUMPING PUZZLE</a>
                <a href="#jumpingpuzzle" className="nav-small">Red Border #2</a>
                <a href="#jumpingpuzzle" className="nav-small">Secret Chest #2</a>
                <a href="#macrocosm" className="nav-large">MACROCOSM</a>
                <a href="#macrocosm" className="nav-small">Red Border #3</a>
                <a href="#nezarec" className="nav-large">NEZAREC</a> */}
            </div>
            <div className="information">
                <section>
                    <div className="wrapper">
                        <h3 className="medium-header">INTRO <span>/</span>/ ROOT OF NIGHTMARES</h3>
                        <hr className="largeLine" />
                        <hr className="smallLine" />
                        <div className="info">
                            <h3>GENERAL INFO</h3>
                            <hr className="smallLine" />
                            <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                        </div>
                        <div className="style-noheader-inverted">
                            <div className="img">
                                <img src={IntroImg} />
                            </div>
                            <div className="text">
                                <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                            </div>
                        </div>
                        <div className="style-header">
                            <div className="text">
                                <h3>RED BORDER</h3>
                                <hr className="smallLine" />
                                <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                            </div>
                            <div className="img">
                                <img src={RedBorderGif} />
                            </div>
                        </div>
                        <div id="redborder1" className="style-header-inverted">
                            <div className="img">
                                <img src={RedBorderGif1} />
                            </div>
                            <div className="text">
                                <h3>RED BORDER <span>/</span>/ 1</h3>
                                <hr className="smallLine" />
                                <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                            </div>
                        </div>
                    </div>
                    <div id="cataclysm" className="fake-block"/>
                </section>
                <section>
                    <div className="wrapper">
                        <h3 className="medium-header">CATACLYSM</h3>
                        <hr className="largeLine" />
                        <hr className="smallLine" />
                        <div className="info">
                            <h3>GENERAL INFO</h3>
                            <hr className="smallLine" />
                            <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                        </div>
                        <div className="style-header">
                            <div className="text">
                                <h3>RUNNER</h3>
                                <hr className="smallLine" />
                                <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                            </div>
                            <div className="img">
                                <img src={CataclysmRunner} />
                            </div>
                        </div>
                        <div className="style-header-inverted">
                            <div className="img">
                                <img src={CataclysmOther} />
                            </div>
                            <div className="text">
                                <h3>PSIONS <span>/</span>/ TORMENTOR</h3>
                                <hr className="smallLine" />
                                <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                            </div>
                        </div>
                        <div id="secretchest1" className="style-header">
                            <div className="text">
                                <h3>SECRET CHEST <span>/</span>/ 1</h3>
                                <hr className="smallLine" />
                                <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                            </div>
                            <div className="img">
                                <img src={IntroImg} />
                            </div>
                        </div>
                    </div>
                    <div id="scission" className="fake-block"/>
                </section>
                <section>
                    <div className="wrapper">
                        <h3 className="medium-header">SCISSION</h3>
                        <hr className="largeLine" />
                        <hr className="smallLine" />
                        <div className="info">
                            <h3>GENERAL INFO</h3>
                            <hr className="smallLine" />
                            <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                        </div>
                    </div>
                    <div id="jumpingpuzzle" className="fake-block"/>
                </section>
                <section>
                    <div className="wrapper">
                        <h3 className="medium-header">JUMPING PUZZLE</h3>
                        <hr className="largeLine" />
                        <hr className="smallLine" />
                        <div className="info">
                            <h3>GENERAL INFO</h3>
                            <hr className="smallLine" />
                            <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                        </div>
                    </div>
                    <div id="macrocosm" className="fake-block"/>
                </section>
                <section>
                    <div className="wrapper">
                        <h3 className="medium-header">MACROCOSM</h3>
                        <hr className="largeLine" />
                        <hr className="smallLine" />
                        <div className="info">
                            <h3>GENERAL INFO</h3>
                            <hr className="smallLine" />
                            <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                        </div>
                    </div>
                    <div id="nezarec" className="fake-block"/>
                </section>
                <section>
                    <div className="wrapper">
                        <h3 className="medium-header">NEZAREC</h3>
                        <hr className="largeLine" />
                        <hr className="smallLine" />
                        <div className="info">
                            <h3>GENERAL INFO</h3>
                            <hr className="smallLine" />
                            <p>As one of the easier Raids in Destiny 2, Root of Nightmares tends to be more relaxing than other Raids. The large amount of viable movement techniques makes this a super enjoyable experience for players willing to learn more advanced movement tech.</p>
                        </div>
                    </div>
                    <div className="fake-block"/>
                </section>
            </div>
        </div>
    </div>
  )
}
