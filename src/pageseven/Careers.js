import React, { useEffect } from "react";
import {NavLink} from 'react-router-dom'
import  {FaDiscord} from 'react-icons/fa'
import './careers.css'

export const  Careers = () => {
    useEffect(()=>{
        document.title="Discord | Careers"
    },[])
    return(
    <div>
        <div className="crrhdr">
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
            <div className="crrcntntbtm">
                <div className="ntcfcrr">
                    <h4><NavLink className="nvntcfcrr" to="/discord-recruitment-scams" target="_blank">Notice on Recruitment Scams</NavLink></h4>
                </div>
                <h1>WORK AT DISCORD</h1>
                <p>Discord is home to passionate people who value our mission—giving you the power to create belonging in your life.</p>
            </div>
        </div>
    </div>
    )
}