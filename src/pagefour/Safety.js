import React, { useEffect } from "react";
import {NavLink} from 'react-router-dom'
import  {FaDiscord} from 'react-icons/fa'
import { VscListFlat } from "react-icons/vsc";
import './safety.css'

export const Safety = () => {
    function myFunction() {
        var x = document.getElementById("sfttbnvlst");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    useEffect(()=>{
        document.title="Discord | Safety"
    },[])
    return(
    <div>
        <div className="sftymn">
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
                    <li><NavLink className="nvlist" to="/blog">Blog</NavLink></li>
                    <li><NavLink className="nvlist" to="/careers">Careers</NavLink></li>
                    <li><NavLink className="nvlist" to="/support">Support</NavLink></li>
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
                        <div className="sfttbdrplist" onClick={() => myFunction()}>
                            <VscListFlat className="tbdrplisticn"/>
                        </div>
                    </div>
                </div>
                <div id="sfttbnvlst">
                    <li><NavLink className="sfttbnvlist" to="/download">Download</NavLink></li>
                    <li><NavLink className="sfttbnvlist" to="/nitro">Nitro</NavLink></li>
                    <li><NavLink className="sfttbnvlist" to="/safety">Safety</NavLink></li>
                    <li><NavLink className="sfttbnvlist" to="/support">Support</NavLink></li>
                    <li><NavLink className="sfttbnvlist" to="/blog">Blog</NavLink></li>
                    <li><NavLink className="sfttbnvlist" to="/careers">Careers</NavLink></li>
                </div>
            </div>
            <div className="stfyctnt">
                <div className="sftycntnthdn">
                    <h1>DISCORD SAFETY CENTER</h1>
                    <div className="sftysbcntnt">
                        <div className="sftylftcntnt">
                            <p>Discord is a place dedicated to talking and hanging out with your friends, family and communities. Millions of diverse communities are on Discord, from small groups of old friends to huge servers where hundreds of thousands of people can connect over shared interests.</p>
                            <p>Discord isn’t a social media platform. There is no algorithm deciding what you should see, no endless scrolling, no news feed, no counting likes, no going viral. Instead, Discord is a place where everyone can be themselves and spend time with other people who share their interests and hobbies. Conversations on Discord are driven only by the people you choose and the topics you pick.</p>
                        </div>
                        <div className="sftyrcntnt">
                            <img src="sftyimg.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}