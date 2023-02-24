import React, { useEffect } from "react";
import {NavLink} from 'react-router-dom'
import  {FaDiscord} from 'react-icons/fa'
import { MdOutlineFileDownload } from "react-icons/md"
import { VscListFlat } from "react-icons/vsc";
import './download.css'

export const Download = () => {
    useEffect(()=>{
        document.title="Discord | Download"
    },[])
    function myFunction() {
        var x = document.getElementById("dwntbnvlst");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    return(
    <div>
        <div className="pgonecone">
            <div className="nvbr">
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
                    <li><NavLink className="nvlist" to="/support">Support</NavLink></li>
                    <li><NavLink className="nvlist" to="/blog">Blog</NavLink></li>
                    <li><NavLink className="nvlist" to="/careers">Careers</NavLink></li>
                </div>
                <div className="lgn">
                    <button type="button"><NavLink className="lgnbtn" to="/login">Login</NavLink></button>
                </div>
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
                <div id="dwntbnvlst">
                    <li><NavLink className="dwntbnvlist" to="/download">Download</NavLink></li>
                    <li><NavLink className="dwntbnvlist" to="/nitro">Nitro</NavLink></li>
                    <li><NavLink className="dwntbnvlist" to="/safety">Safety</NavLink></li>
                    <li><NavLink className="dwntbnvlist" to="/blog">Blog</NavLink></li>
                    <li><NavLink className="dwntbnvlist" to="/careers">Careers</NavLink></li>
                    <li><NavLink className="dwntbnvlist" to="/support">Support</NavLink></li>
                </div>
            </div>
            <div className="dwnldcntntone">
                <div className="dwnldcntntlftone">
                    <h1>GET DISCORD FOR ANY DEVICE</h1>
                    <p>An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.</p>
                    <button className="dwnlddwnldbtn" type="button">
                        <MdOutlineFileDownload className="dwnldicn"/>Download for Windows
                    </button>
                    <span>Windows 7 or higher</span>
                </div>
                <div className="dwnldimgone">
                    <img src="imageone.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
    )
}