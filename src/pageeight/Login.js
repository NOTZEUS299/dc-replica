import "./login.css";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("Users")));
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(null);

  // setLoggedIn(false);

  const singleUserData = userData?.filter((x) => {
    return x?.Email === email;
  });

  const enteredEmail = singleUserData?.map((x) => {
    return x?.Email;
  });

  const enteredPassword = singleUserData?.map((x) => {
    return x?.Password;
  });

  function matchDetails() {
    let enteredDetails = true;

    if (!email && !password) {
      alert("Enter the details first");
      return (enteredDetails = false);
    }
    if (!email) {
      alert("Enter Your Email");
      return (enteredDetails = false);
    }
    if (!password) {
      alert("Enter Your Password");
      return (enteredDetails = false);
    }
    if (enteredEmail?.includes(email)) {
    } else {
      alert("Incorrect Email");
      return (enteredDetails = false);
    }

    if (enteredPassword?.includes(password)) {
    } else {
      alert("incorrect password");
      return (enteredDetails = false);
    }

    return enteredDetails;
  }

  const handleOnLogin = (e) => {
    localStorage.setItem("User", JSON.stringify({Email: email, Password: password}));
    if (matchDetails()) {
      const detail = userData?.filter((x) => {
        return x?.Email === email;
      });
      history.push({
        pathname: `/user-profile/${detail[0]?.SrId}`,
      });
    }
  };
  const clearDataOnClick = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  useEffect(() => {
    localStorage.removeItem("User");
  }, []);

  return (
    <div className="lgnpgbgimg">
      <div className="lgnpgbx">
        <div className="lgnbx">
          <div className="hdfrlgn">
            <h1>Login</h1>
            <p>Enter the community...</p>
          </div>
          <div className="emlfrlgn">
            <label htmlFor="email">Enter your E-mail : </label>
            <br />
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="cautionns"></div>
          </div>
          <div className="pssfrlgn">
            <label htmlFor="pass">Enter your password : </label>
            <br />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="cautionns"></div>
          </div>
          <div className="bttnsfrlgn">
            <div className="lgnsbmitbtn">
              <button onClick={() => handleOnLogin()}>Login</button>
            </div>
            <div className="lgnclrbtn">
              <button onClick={() => clearDataOnClick()}>Clear</button>
            </div>
          </div>
          <div className="sgupinlgn">
            <p>
              Don't Have Account?{" "}
              <Link to="/sign-up" id="sgnin">
                Sign Up
              </Link>{" "}
              |...
            </p>
          </div>
        </div>
        <div className="sideimg">
          <img src="dcqrcode.png" alt="" />
        </div>
      </div>
    </div>
  );
};
