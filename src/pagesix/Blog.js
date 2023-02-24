import React, { useEffect } from "react";
import {BiChevronDown} from 'react-icons/bi'
import {NavLink} from 'react-router-dom'
import './blog.css'

export const Blog =()=>{
    useEffect(()=>{
        document.title="Discord | Blog"
    },[])
    return(
        <div>
            <div className="blgcntntmn">
                <div className="blghdr">
                    <div className="blglg">
                        <img src="discordblog.svg" alt="" />
                    </div>
                    <div className="blgnvlst">
                        <li><NavLink className="blglst" to="#">COLLECTIONS<BiChevronDown/></NavLink></li>
                        <li><NavLink className="blglst" to="#">FEATURED</NavLink></li>
                        <li><NavLink className="blglst" to="/">DISCORD.COM</NavLink></li>
                    </div>
                </div>
                <div className="blgimgcntnt">
                    <img src="cntntimg.png" alt="" /> 
                </div>
            </div>
            <div id="blgcntntone">
                <h4>PRODUCT & FEATURES</h4>
                <h1>
                    AN UPDATE ON TOOLS FOR BUILDING AND SUSTAINING COMMUNITIES ON DISCORD
                </h1>
            </div>
        </div>
    )
}