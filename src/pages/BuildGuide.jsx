import React from 'react'
import { useSearchParams } from "react-router-dom"
import '../scss/builds.scss'
import arcHunter from '../img/Gif/arc-hunter.gif'
import HoverBox from '../components/HoverBox'
import { preBuildArray } from '../components/BuildArray'
import parse from 'html-react-parser'
import SvgPage from '../components/Svg'

export function BuildGuide() {
  // Get the array with all the build info
  const [queryParameters] = useSearchParams()
  const urlBuildTitle = queryParameters.get('name')

  return (
    <>
    { preBuildArray == '' ? null :
    preBuildArray.map((data, i) => (
        data.buildTitle === urlBuildTitle ?
        <div key={i} className="build-guide-container">
            <div className="build-general">
                <section id={data.classImg} className="background-img">
                    <div className="above-layer">
                        <div className="shared-container">
                            <h3>{ data.buildGuide.title }</h3>
                            <hr className="largeLine" />
                            <hr className="smallLine" />
                            <div className="info-container">
                                <div className="row">
                                    <div className="item">
                                        <h3>SUPER</h3>
                                        <hr className="smallLine" />
                                        <HoverBox image={data.buildGuide.superGuide.superImg} title={data.buildGuide.superGuide.superTitle} text={data.buildGuide.superGuide.superText} superImg={true}/>
                                    </div>
                                    <div className="item">
                                        <h3>ABILITIES</h3>
                                        <hr className="smallLine" />
                                        <div className="item-row">
                                        {data.buildGuide.abilitiesGuide.map((boxInfo, i) => (
                                            <HoverBox key={i} image={boxInfo.abilityImg} title={boxInfo.abilityTitle} text={boxInfo.abilityText} />
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="item">
                                        <h3>ASPECTS</h3>
                                        <hr className="smallLine" />
                                        <div className="item-row">
                                            {data.buildGuide.aspectsGuide.map((boxInfo, i) => (
                                                <HoverBox key={i} image={boxInfo.aspectImg} title={boxInfo.aspectTitle} text={boxInfo.aspectText} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <h3>FRAGMENTS</h3>
                                        <hr className="smallLine" />
                                        <div className="item-row">
                                            {data.buildGuide.fragmentsGuide.map((boxInfo, i) => (
                                                <HoverBox key={i} image={boxInfo.fragmentImg} title={boxInfo.fragmentTitle} text={boxInfo.fragmentText} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="item">
                                        <h3>BUILD SUMMARY</h3>
                                        <hr className="smallLine" />
                                        <p>{parse(data.buildGuide.buildSummary)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="equipment-container">
                    <div className="shared-container equipment">
                        <h3>EQUIPMENT</h3>
                        <hr className="largeLine" />
                        <hr className="smallLine" />
                        <div className="info-container">
                        <div className="row">
                            <div className="item">
                                <h3>WEAPONS</h3>
                                <hr className="smallLine" />
                                <div className="item-row">
                                    {data.buildGuide.weapons.map((weaponInfo, i) => (
                                        <div key={i} className="multiple-items">
                                            {weaponInfo.map((weaponInfo, i) => (
                                                <HoverBox key={i} i={i} image={weaponInfo.weaponImg} title={weaponInfo.weaponTitle} energy={weaponInfo.energy} text={weaponInfo.weaponText} />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="item text-item">
                                <h3>FURTHER INFO</h3>
                                <hr className="smallLine" />
                                <p>{parse(data.buildGuide.weaponInfo)}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <h3>EXOTIC</h3>
                                <hr className="smallLine" />
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.exotic.exoticRow.map((boxInfo, i) => (
                                            <HoverBox key={i} i={i} image={boxInfo.exoticImg} title={boxInfo.exoticTitle} text={boxInfo.exoticText} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="item text-item">
                                <h3>FURTHER INFO</h3>
                                <hr className="smallLine" />
                                <p>{parse(data.buildGuide.exotic.info)}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <h3>ARMOR</h3>
                                <hr className="smallLine" />
                            </div>
                        </div>
                        <div className="row mod-row">
                            <div className="item">
                                <h4>HEAD</h4>
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.armor.head.map((boxInfo, i) => (
                                            <HoverBox key={i} image={boxInfo.modImg} title={boxInfo.modTitle} text={boxInfo.modText} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h4>ARMS</h4>
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.armor.arms.map((boxInfo, i) => (
                                            <HoverBox key={i} image={boxInfo.modImg} title={boxInfo.modTitle} text={boxInfo.modText} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mod-row">
                            <div className="item">
                                <h4>CHEST <i>(Your choice)</i></h4>
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.armor.chest.map((boxInfo, i) => (
                                            <HoverBox key={i} image={boxInfo.modImg} title={boxInfo.modTitle} text={boxInfo.modText} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h4>LEGS</h4>
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.armor.legs.map((boxInfo, i) => (
                                            <HoverBox key={i} image={boxInfo.modImg} title={boxInfo.modTitle} text={boxInfo.modText} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mod-row">
                            <div className="item">
                                <h4>CLASS ITEM</h4>
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.armor.class.map((boxInfo, i) => (
                                            <HoverBox key={i} image={boxInfo.modImg} title={boxInfo.modTitle} text={boxInfo.modText} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h4>STATS</h4>
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.armorStats.map((svg, i) => (
                                            <SvgPage key={i} i={i} pickSvg={svg} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>
                </section>
            </div>
            <div className="build-guide">
                {/* <img src={logoHunter} alt="" className="logo-bg" /> */}
                <section>
                    <h3>GAMEPLAY AND TIPS</h3>
                    <hr className="largeLine" />
                    <hr className="smallLine" />
                    <div className="guide-container">
                        <div className="row">
                            <div className="item start-item">
                                <h3>GENERAL</h3>
                                <hr className="smallLine" />
                                <p>{parse(data.buildGuide.gameplay.general)}</p>
                            </div>
                            <div className="item">
                                <h3>EXOTIC</h3>
                                <hr className="smallLine" />
                                <p>{parse(data.buildGuide.gameplay.exotic)}</p>
                            </div>
                            <div className="item last-text">
                                <h3>ENDGAME</h3>
                                <hr className="smallLine" />
                                <p>{parse(data.buildGuide.gameplay.endgame)}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item start-item">
                                { data.buildGuide.gameplay.gif == "arcHunter" ? <img src={arcHunter}/> : null }
                            </div>
                            <div className="item">
                                <h3>GAMEPLAY LOOP</h3>
                                <hr className="smallLine" />
                                <ul>
                                    {data.buildGuide.gameplay.loop.map((boxInfo, i) => (
                                        <li key={i}>{parse(boxInfo)}</li>
                                    ))}
                                    <p>{parse(data.buildGuide.gameplay.loopEnd)}</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div> : null)
        )}
    </>
  )
}
