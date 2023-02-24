import React from "react";
import { useEffect } from "react";
import { FaDiscord } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import './support.css'

export const Support = () => {
    useEffect(() => {
        document.title = "Support"
      }, [])
    return(
        <div>
            <div className="sppnvrt">
                <li>   
                    <div className="spplgrt">
                        <div id="spplgonert"><FaDiscord /></div>
                        <div id="sppheadonert"><h1>Discord</h1></div>
                    </div>
                </li>
                <li className="spprtnvlst">Feedback</li>
                <li className="spprtnvlst">English (US)<FiChevronDown/></li>
                <li className="spprtnvlst">Submit a request</li>
                <li className="spprtnvlst">Sign in</li>
            </div>
            <div className="hlpcntr">
                <div className="srchcntnt">
                    <div className="spprtsrchhd">
                        Help Center
                    </div>
                    <div className="spprtsrchbr">
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
            </div>
            <div className="hlpngblsht">
                <h1>Need help? We've got your back.</h1>
                <p>
                From account settings to permissions, find help for everything Discord
                If you're new to Discord and looking for tips, check out our <NavLink className="ntnghr" to="/">Beginner's Guide</NavLink>
                </p>
            </div>
        </div>
    )
}