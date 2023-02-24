import React, { useEffect, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { NavLink, useHistory } from "react-router-dom";
// import { LocalData } from './LocalData'
import "./signup.css";

const previousData = () => {
  let pData = localStorage.getItem("Users");

  if (pData) {
    return JSON.parse(pData);
  } else {
    return [];
  }
};
export const Signup = () => {
  const [profile, setProfile] = useState(previousData);

  const history = useHistory();

  const [fullname, setFullname] = useState();
  const [fieldone, setFieldone] = useState("namefield");
  const [gender, setGender] = useState();
  const [fieldtwo, setFieldtwo] = useState("genderfield");
  const [dob, setDob] = useState();
  const [fieldthree, setFieldthree] = useState("dobfield");
  const [email, setEmail] = useState();
  const [fieldfour, setFieldfour] = useState("emailfield");
  const [reemail, setReEmail] = useState();
  const [fieldfive, setFieldfive] = useState("reemailfield");
  const [password, setPassword] = useState("");
  const [fieldseven, setFieldseven] = useState("passwordfield");
  const [repassword, setRePassword] = useState("");
  const [fieldeight, setFieldeight] = useState("repasswordfield");
  const [reason, setReason] = useState();
  const [fieldsix, setFieldsix] = useState("reasonfield");

  const clearOnClick = () => {
    setFullname("");
    setGender("");
    setDob("");
    setEmail("");
    setReEmail("");
    setPassword("");
    setRePassword("");
    setReason("");
  };

  function urFormIsValid() {
    const mailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let formIsValid = true;

    if (!fullname && !gender && !dob && !email && !reemail && !reason) {
      console.error("Required Data Has Not Been Submitted...");
      setFieldone("namefielderror");
      setFieldtwo("genderfielderror");
      setFieldthree("dobfielderror");
      setFieldfour("emailfielderror");
      setFieldfive("reemailfielderror");
      setFieldsix("reasonfielderror");
      setFieldseven("passwordfielderror");
      setFieldeight("repasswordfielderror");
      return (formIsValid = false);
    } else {
      setFieldone("namefield");
      setFieldtwo("genderfield");
      setFieldthree("dobfield");
      setFieldfour("emailfield");
      setFieldfive("reemailfield");
      setFieldsix("reasonfield");
      setFieldseven("passwordfield");
      setFieldeight("repasswordfield");
    }
    if (!fullname) {
      setFieldone("namefielderror");
      return (formIsValid = false);
    }

    setFieldone("namefield");

    if (!gender) {
      setFieldtwo("genderfielderror");
      return (formIsValid = false);
    }

    setFieldtwo("genderfield");

    if (!dob) {
      setFieldthree("dobfielderror");
      return (formIsValid = false);
    }
    setFieldthree("dobfield");

    if (!email) {
      setFieldfour("emailfielderror");
      return (formIsValid = false);
    }

    setFieldfour("emailfield");

    if (!email.match(mailPattern)) {
      setFieldfour("emailfielderror");
      return (formIsValid = false);
    }

    setFieldfour("emailfield");

    if (!reemail) {
      setFieldfive("reemailfielderror");
      return (formIsValid = false);
    }

    setFieldfive("reemailfield");

    if (!reemail.match(mailPattern)) {
      setFieldfive("reemailfielderror");
      return (formIsValid = false);
    }

    setFieldfive("reemailfield");

    if (email === reemail) {
      setFieldfour("emailfield");
      setFieldfive("reemailfield");
    } else {
      setFieldfour("emailfielderror");
      setFieldfive("reemailfielderror");
      return (formIsValid = false);
    }

    if (!password) {
      setFieldseven("passwordfielderror");
      return (formIsValid = false);
    }

    setFieldseven("passwordfield");

    if (!repassword) {
      setFieldeight("repasswordfielderror");
      return (formIsValid = false);
    }

    setFieldeight("repasswordfield");

    if (password === repassword) {
      setFieldseven("passwordfield");
      setFieldeight("repasswordfield");
    } else {
      setFieldseven("passwordfielderror");
      setFieldeight("repasswordfielderror");
      return (formIsValid = false);
    }

    if (!reason) {
      setFieldsix("reasonfielderror");
    }

    setFieldsix("reasonfield");
    console.warn("Your Has Been Submitted...");
    return formIsValid;
  }

  const handleOnSubmit = (e) => {
    if (urFormIsValid()) {
      let user = {
        Name: fullname,
        Gender: gender,
        DOB: dob,
        Email: email,
        Password: password,
        Reason: reason,
        SrId: Math.floor(100000 + Math.random() * 900000),
      };
      //react tostify////

      setProfile([...profile, user]);

      console.log(profile);
      setFullname("");
      setGender("");
      setDob("");
      setEmail("");
      setReEmail("");
      setPassword("");
      setRePassword("");
      setReason("");
      window.location.reload(true);
      window.location.replace("http://localhost:3000/login");
    } else {
      console.error("FIll Up Form Correctly...");
    }
  };

  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    document.title = "Sign-Up";
  }, []);

  return (
    <div>
      <div className="bgsgnupimg">
        <div className="sgncntnter">
          <div className="sgnsubcntnter">
            <div className="sgninhd">
              <h1>Sign Up </h1>
              <p>And Discover A Brand New Platform...</p>
            </div>
            <div className="sgncntntflxng">
              <div className="sgncntntflxnglft">
                <div className="innerdivsgnup">
                  <div className={fieldone}>
                    <label htmlFor="fname">Enter your Name :</label>
                    <br />
                    <input
                      type="text"
                      onChange={(e) => setFullname(e.target.value)}
                      value={fullname}
                    />
                  </div>
                  <div
                    className={fieldtwo}
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                  >
                    <span>Gender : </span>
                    <br />
                    <input
                      type="radio"
                      value={"MALE"}
                      id="male"
                      name="gender"
                    />
                    <label htmlFor="male">MALE</label>
                    <input
                      type="radio"
                      value={"FEMALE"}
                      id="female"
                      name="gender"
                    />
                    <label htmlFor="female">FEMALE</label>
                    <input
                      type="radio"
                      value={"OTHERS"}
                      id="others"
                      name="gender"
                    />
                    <label htmlFor="others">OTHERS</label>
                  </div>
                  <div className={fieldthree}>
                    <label htmlFor="dob">Enter your date of birth :</label>
                    <input
                      type="date"
                      name="dob"
                      onChange={(e) => setDob(e.target.value)}
                      value={dob}
                    />
                  </div>
                </div>
              </div>
              <div className="sgncntntflxnglftmdl">
                <div className="innerdivsgnup">
                  <div className={fieldfour}>
                    <label htmlFor="email">Enter your E-mail :</label>
                    <br />
                    <input
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <br />
                  </div>
                  <div className={fieldfive}>
                    <label htmlFor="reemail">Re-Enter your E-mail :</label>
                    <input
                      type="text"
                      onChange={(e) => setReEmail(e.target.value)}
                      value={reemail}
                    />
                  </div>
                </div>
              </div>
              <div className="imgssignup">
                <div className="innerdivsgnup">
                  <div className={fieldseven}>
                    <label htmlFor="password">Set a password :</label>
                    <br />
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <br />
                  </div>
                  <div className={fieldeight}>
                    <label htmlFor="repassword">Confirm Password :</label>
                    <br />
                    <input
                      type="password"
                      onChange={(e) => setRePassword(e.target.value)}
                      value={repassword}
                    />
                    <br />
                  </div>
                  <div className={fieldsix}>
                    <label htmlFor="reason">
                      Why you are here{" "}
                      <p style={{ display: "inline", fontSize: "10px" }}>
                        (optional)
                      </p>{" "}
                      :
                    </label>
                    <select
                      name="reason"
                      id="reason"
                      onChange={(e) => setReason(e.target.value)}
                      value={reason}
                    >
                      <option value={"Reasons"}>Reasons</option>
                      <option value={"Gaming"}>Gaming</option>
                      <option value={"Streaming"}>Streaming</option>
                      <option value={"Moderator"}>Moderator</option>
                      <option value={"Member"}>Member</option>
                      <option value={"Devloper"}>Devloper</option>
                      <option value={"Time Pass"}>Time Pass</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="clrsbmitbtnsignup">
                <div className="sbmtclrsgnupbtn">
                  <button onClick={() => handleOnSubmit()}>Submit</button>
                </div>
                <div className="clrbtnsgnup">
                  <button onClick={() => clearOnClick()}>Clear</button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
