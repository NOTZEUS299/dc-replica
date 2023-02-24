import React, { useEffect } from 'react'
import './job.css'
import { NavLink } from 'react-router-dom'
import { FaDiscord } from 'react-icons/fa'

export const Job = () => {
  useEffect(()=>{
    document.title="Discord | Scams"
  },[])
  return (
    <div>
        <div className="jobprtone">
            <div className="jbnvbr">
                <div>
                    <NavLink className="jbhdhone" to="/*">
                        <div className="jbmnlg">
                        <div id="jblgone"><FaDiscord /></div>
                        <div id="jbheadone"><h1>Discord</h1></div>
                        </div>
                    </NavLink>
                </div>
                <div className="jbnvlst">
                    <li><NavLink className="jbnvlist" to="/download">Download</NavLink></li>
                    <li><NavLink className="jbnvlist" to="/nitro">Nitro</NavLink></li>
                    <li><NavLink className="jbnvlist" to="/safety">Safety</NavLink></li>
                    <li><NavLink className="jbnvlist" to="/blog">Blog</NavLink></li>
                    <li><NavLink className="jbnvlist" to="/careers">Careers</NavLink></li>
                    <li><NavLink className="jbnvlist" to="/support">Support</NavLink></li>
                </div>
                <div className="jblgn">
                    <button type="button"><NavLink className="jblgnbtn" to="/login">Login</NavLink></button>
                </div>
            </div>
        </div>
        <div className='jbcntntbgclr'>
        <div className='jbcntnt'>
          <div className='jbfcntntone'>
            <h1>Discord Recruitment Scams</h1>
            <p>We’ve been made aware of multiple recruitment scams where external individuals or companies are representing Discord and offering fictitious job opportunities. In most cases, this fraud is happening via legitimate platforms (including LinkedIn and Skype), with the goal of posing as Discord in order to obtain personal information or money. </p>
            <p>Please know that all communications from Discord will come from discord.com or discordapp.com email addresses or via our platform from a Discord account with a staff badge. We do not conduct interviews via Skype, nor is our only communication during the interview process via chat. </p>
            <p>We recommend that you do not respond to unsolicited offers of employment from people claiming to work for, or be affiliated with, Discord. If you believe you have received a fraudulent communication, please let us know at recruiting@discordapp.com. If you believe that you are a victim of financial fraud related to recruitment scam, please contact your bank and file a report with your local police to notify them of fraudulent payment activity.</p>
          </div>
        </div>
        </div>
    </div>
  )
}