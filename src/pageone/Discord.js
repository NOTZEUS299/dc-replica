import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { VscListFlat } from "react-icons/vsc";
import { MdOutlineFileDownload } from "react-icons/md";
import "./discord.css";

export const Discord = () => {
  function myFunction() {
    var x = document.getElementById("tbnvlst");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  useEffect(() => {
    document.title = "Discord";
  }, []);
  return (
    <div>
      <div className="prtone">
        <div className="nvbr">
          <div>
            <NavLink className="hdhone" to="/">
              <div className="mnlg">
                <div id="lgone">
                  <FaDiscord />
                </div>
                <div id="headone">
                  <h1>Discord</h1>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="nvlst">
            <li>
              <NavLink className="nvlist" to="/download">
                Download
              </NavLink>
            </li>
            <li>
              <NavLink className="nvlist" to="/nitro">
                Nitro
              </NavLink>
            </li>
            <li>
              <NavLink className="nvlist" to="/safety">
                Safety
              </NavLink>
            </li>
            <li>
              <NavLink className="nvlist" to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className="nvlist" to="/careers">
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink className="nvlist" to="/support" target="_blank">
                Support
              </NavLink>
            </li>
          </div>
          <div className="lgn">
            <button type="button">
              <NavLink className="lgnbtn" to="/login">
                Login
              </NavLink>
            </button>
          </div>
        </div>
        <div className="tbhdwtlstdc">
          <div className="tbhddc">
            <div>
              <NavLink className="tbhdhone" to="/*">
                <div className="tbmnlg">
                  <div id="tblgone">
                    <FaDiscord />
                  </div>
                  <div id="tbheadone">
                    <h1>Discord</h1>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="ltsee">
              <div className="tbltlgnbtn">
                <NavLink className="tblgnbtn" to="/login">
                  Login
                </NavLink>
              </div>
              <div className="tbdrplist" onClick={() => myFunction()}>
                <VscListFlat className="tbdrplisticn" />
              </div>
            </div>
          </div>
          <div id="tbnvlst">
            <li>
              <NavLink className="tbnvlist" to="/download">
                Download
              </NavLink>
            </li>
            <li>
              <NavLink className="tbnvlist" to="/nitro">
                Nitro
              </NavLink>
            </li>
            <li>
              <NavLink className="tbnvlist" to="/safety">
                Safety
              </NavLink>
            </li>
            <li>
              <NavLink className="tbnvlist" to="/support">
                Support
              </NavLink>
            </li>
            <li>
              <NavLink className="tbnvlist" to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className="tbnvlist" to="/careers">
                Careers
              </NavLink>
            </li>
          </div>
        </div>
        <div className="cntntone">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className="dbbtns">
            <button className="dwnldbtn" type="button">
              <MdOutlineFileDownload className="dwnldicn" />
              Download For Windows
            </button>
            <button className="brwsrbtn" type="button">
              Open Discord in your browser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
