import React, { useEffect } from "react";
import {NavLink} from 'react-router-dom'
import  {FaDiscord} from 'react-icons/fa'
import {VscListFlat} from 'react-icons/vsc'
import  {GrTurbolinux} from 'react-icons/gr'
import './nitro.css'

export const Nitro = () => {
    function myFunction() {
        var x = document.getElementById("tbnvlst");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    useEffect(()=>{
        document.title="Discord | Nitro"
    },[])
    return(
    <div>
        <div className="ntrmn">
            <div className="ntrnvbr">
                <div>
                    <NavLink className="hdhone" to="/*">
                        <div className="mnlg">
                            <div id="lgone"><FaDiscord /></div>
                            <div id="headone"><h1>Discord</h1></div>
                        </div>
                    </NavLink>
                </div>
                <div className="nvlst">
                    <li><NavLink className="nvlist" to="/download">Download</NavLink></li>
                    <li><NavLink className="nvlist" to="/nitro">Nitro</NavLink></li>
                    <li><NavLink className="nvlist" to="/safety">Safety</NavLink></li>
                    <li><NavLink className="nvlist" to="/blog">Blog</NavLink></li>
                    <li><NavLink className="nvlist" to="/careers">Careers</NavLink></li>
                    <li><NavLink className="nvlist" to="/support">Support</NavLink></li>
                </div>
                <div className="lgn">
                    <button type="button"><NavLink className="lgnbtn" to="/login">Login</NavLink></button>
                </div>
                <div className="tbhdwtlstdc">
                    <div className="tbhddc">
                        <div>
                            <NavLink className="tbhdhone" to="/*">
                                <div className="tbmnlg">
                                    <div id="tblgone"><FaDiscord /></div>
                                    <div id="tbheadone"><h1>Discord</h1></div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="ltsee">        
                            <div className="tbltlgnbtn">
                                <NavLink className="tblgnbtn" to="/login">Login</NavLink>
                            </div>
                            <div className="tbdrplist" onClick={() => myFunction()}>
                                <VscListFlat className="tbdrplisticn"/>
                            </div>
                        </div>
                    </div>
                    <div id="tbnvlst">
                        <li><NavLink className="tbnvlist" to="/download">Download</NavLink></li>
                        <li><NavLink className="tbnvlist" to="/nitro">Nitro</NavLink></li>
                        <li><NavLink className="tbnvlist" to="/safety">Safety</NavLink></li>
                        <li><NavLink className="tbnvlist" to="/support">Support</NavLink></li>
                        <li><NavLink className="tbnvlist" to="/blog">Blog</NavLink></li>
                        <li><NavLink className="tbnvlist" to="/careers">Careers</NavLink></li>
                    </div>
                </div>
                    </div>
                    <div className="bgvideo">
                        <video autoPlay loop muted>
                            <source src="video.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            <div className="ntrcntntlft">
                <div className="nimnlgtr">
                    <div id="nilgonetr"><FaDiscord /></div>
                    <div id="niheadonetr"><h1>Discord</h1></div>
                </div>
            </div>
            <div id="nitro">
                <h1>NITRO<GrTurbolinux/></h1>
            </div>
            <div className="ntcntntbtmro">
                <p>Get an enhanced Discord experience for one low monthly cost. Upgrade your emoji, enjoy bigger file uploads, stand out in your favorite Discords, and more.</p>
            </div>
            <div id="ntprcbtnro">
                <div className="prcbtnyr">
                    <div id="outerlayer">$99.99 per year</div>
                    <div id="inerlayer">16% off</div>
                </div>
                <div className="prcbtnmn">
                    $9.99 per month
                </div>
            </div>
    </div>
    )
}