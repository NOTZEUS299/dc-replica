import React, { useEffect } from "react";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import "./profile.css";
import { useParams, useHistory } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, Suspense } from "react";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={0.35}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

export const Profile = () => {
  const usersData = JSON.parse(localStorage.getItem("Users"));

  // console.log(usersData);

  const { id } = useParams();

  // console.log(id);

  const uSer = usersData.filter((x) => {
    return x.SrId == id;
  });

  const history = useHistory();

  const [show, setShow] = useState(false);
  const [showProf, setShowProf] = useState(false);
  const [profcntnt, setprofcntnt] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [showCnfirmBox, setShowCnfirmBox] = useState(false);
  const [editName, setEditName] = useState();
  const [editGender, setEditGender] = useState();
  const [editDOB, setEditDOB] = useState();
  const [editEmail, setEditEmail] = useState();
  const [editReason, setEditReason] = useState();
  const [previousPass, setPreviousPass] = useState();
  const [previousId, setPreviousId] = useState();

  const showProfOnclick = () => {
    setShowProf(true);
    setShow(false);
  };

  const closeProfile = () => {
    setprofcntnt(!profcntnt);
    setShowEdit(!showEdit);
    setShowProf(false);
  };

  const switchEdit = (Name, Gender, Dateob, Email, Pass, Reason, Id) => {
    console.log("Gender", Gender);
    setprofcntnt(!profcntnt);
    setShowEdit(!showEdit);
    setEditName(Name);
    setEditGender(Gender);
    setEditDOB(Dateob);
    setEditEmail(Email);
    setPreviousPass(Pass);
    setEditReason(Reason);
    setPreviousId(Id);
  };

  const handleOnSubmit = (e) => {
    let editedData = {
      Name: editName,
      Gender: editGender,
      DOB: editDOB,
      Email: editEmail,
      Password: previousPass,
      Reason: editReason,
      SrId: previousId,
    };

    let updateData = usersData.filter((x) => {
      return x.SrId !== previousId;
    });
    let newData = [...updateData, editedData];

    localStorage.setItem("Users", JSON.stringify(newData));

    window.location.reload(true);
  };

  const clearFields = () => {
    setprofcntnt(!profcntnt);
    setShowEdit(!showEdit);
  };

  const showDelete = () => {
    setShowCnfirmBox(!showCnfirmBox);
    setShow(!show);
  };

  const delteAccount = (srno) => {
    let deletAccount = usersData.filter((x) => {
      return x.SrId !== srno;
    });
    localStorage.setItem("Users", JSON.stringify(deletAccount));
    history.push("");
  };

  useEffect(() => {
    document.title = "Discord | Profile";
  }, []);

  return (
    <div className="cardpgone">
      <div className="displaybckgrnd">
        <div className="topdisplay">
          <div className="topleft">
            <div className="innerdivone" id="innercrdone"></div>
            <div className="innerdivone" id="innercrdtwo"></div>
            <div className="innerdivone" id="innercrdthree"></div>
            <div className="innerdivone" id="innercrdfour"></div>
            <div className="innerdivone" id="innercrdfive"></div>
            <div className="innerdivone" id="innercrdsix"></div>
            <div className="innerdivone" id="innercrdseven"></div>
          </div>
          <div className="topright">
            <div className="innerdivone" id="innercrdrghtone"></div>
            <div className="innerdivone" id="innercrdrghttwo"></div>
            <div className="innerdivone" id="innercrdrghtthree"></div>
            <div className="innerdivone" id="innercrdrghtfour"></div>
            <div className="innerdivone" id="innercrdrghtfive"></div>
            <div className="innerdivone" id="innercrdrghtsix"></div>
            <div className="innerdivone" id="innercrdrghtseven"></div>
          </div>
          <div className="bottom">
            <div className="bttminnerdivone">
              <div className="btnininnerdiv">
                <div className="mddleinnerdivfrbtm"></div>
              </div>
            </div>
          </div>
          <div className="prfenvibg">
            <Canvas className="cmpntnt">
              <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <pointLight
                  color="white"
                  intensity={2}
                  position={[10, 10, 10]}
                />
                <spotLight
                  intensity={50}
                  angle={1}
                  penumbra={10}
                  position={[300, 400, 500]}
                  castShadow
                />
                <Model />
                <OrbitControls
                  enablePan={true}
                  enableRotate={true}
                  enableZoom={false}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
      {uSer.map((x, i) => {
        return (
          <div className="prfllgmn" key={i}>
            <div className="headprf">
              <h1>DISCORD</h1>
              <h2>{x.Name}</h2>
              <h4>SETTINGS</h4>
              <h3 onClick={() => setShow(!show)}>
                {show ? (
                  <IoSettingsOutline
                    style={{ cursor: "pointer" }}
                    className="animationsttngactive"
                  />
                ) : (
                  <IoSettingsOutline className="animationsttng" />
                )}
              </h3>
              {show && (
                <div className="settngoptn">
                  <li id="lstone">Link</li>
                  <li id="lsttwo">Link</li>
                  <li id="lstthree">Link</li>
                  <li id="lstfour">Link</li>
                  <li id="lstfive">Link</li>
                  <li id="lstsix" onClick={() => showProfOnclick()}>
                    Your Profile
                  </li>
                  <li
                    id="lstseven"
                    onClick={() => {
                      localStorage.removeItem("User");
                      history.push("/login");
                    }}
                  >
                    Log-Out
                  </li>
                  <li id="lsteight" onClick={() => showDelete()}>
                    Delete
                  </li>
                </div>
              )}
            </div>
            {showCnfirmBox && (
              <div className="dltcnfirmbx">
                <h1>Delete Account?</h1>
                <div className="bttnsgnup">
                  <button className="cnclbtnsgn" onClick={() => showDelete()}>
                    Cancel
                  </button>
                  <button
                    className="dltbtnsgn"
                    onClick={() => delteAccount(x?.SrId)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
            {showProf && (
              <div className="usrprfl">
                <div className="usrprflimg">
                  <img src="prfletwo.jpg" alt="" />
                </div>
                <div className="edtclsbtnprf">
                  <span className="edtbtnprfl">
                    <MdModeEditOutline
                      onClick={() =>
                        switchEdit(
                          x.Name,
                          x.Gender,
                          x.DOB,
                          x.Email,
                          x.Password,
                          x.Reason,
                          x.SrId
                        )
                      }
                    />
                  </span>
                  <span className="clsbtnprfl">
                    <IoClose onClick={() => closeProfile()} />
                  </span>
                </div>
                <div className="userdetailss">
                  {profcntnt && (
                    <>
                      <h1>PROFILE</h1>
                      <p>Name : {x.Name}</p>
                      <p>Gender : {x.Gender}</p>
                      <p>Email : {x.Email}</p>
                      <p>Date Of Birth : {x.Dateob}</p>
                      <p>Reason : {x.Reason}</p>
                    </>
                  )}
                  {showEdit && (
                    <>
                      <h1>PROFILE</h1>
                      <p>
                        Name :{" "}
                        <input
                          type="text"
                          placeholder={x.Name}
                          id="fieldone"
                          onChange={(e) => setEditName(e.target.value)}
                          value={editName}
                        />
                      </p>
                      <p
                        onChange={(e) => {
                          setEditGender(e.target.value);
                        }}
                        value={editGender}
                      >
                        Gender :{" "}
                        <input
                          type="radio"
                          name="gender"
                          id="Male"
                          value={"MALE"}
                          checked={editGender == "MALE"}
                        />
                        <label className="rdiobtn" htmlFor="Male">
                          MALE
                        </label>
                        <input
                          type="radio"
                          name="gender"
                          id="Female"
                          value={"FEMALE"}
                          style={{ marginLeft: "5px" }}
                          checked={editGender == "FEMALE"}
                        />
                        <label className="rdiobtn" htmlFor="Female">
                          FEMALE
                        </label>
                        <input
                          type="radio"
                          name="gender"
                          id="Others"
                          value={"OTHERS"}
                          style={{ marginLeft: "5px" }}
                          checked={editGender == "OTHERS"}
                        />
                        <label className="rdiobtn" htmlFor="Others">
                          OTHERS
                        </label>
                      </p>
                      <p>
                        Email :{" "}
                        <input
                          type="text"
                          placeholder={x.Email}
                          id="fieldone"
                          onChange={(e) => setEditEmail(e.target.value)}
                          value={editEmail}
                        />
                      </p>
                      <p>
                        Date Of Birth :{" "}
                        <input
                          type="date"
                          id="fieldone"
                          onChange={(e) => setEditDOB(e.target.value)}
                          value={editDOB}
                          style={{ paddingRight: "20px" }}
                        />
                      </p>
                      <p>
                        Reason :{" "}
                        <select
                          id="reason"
                          onChange={(e) => setEditReason(e.target.value)}
                          value={editReason}
                        >
                          <option value={"Reasons"}>{x.Reason}</option>
                          <option value={"Gaming"}>Gaming</option>
                          <option value={"Streaming"}>Streaming</option>
                          <option value={"Moderator"}>Moderator</option>
                          <option value={"Member"}>Member</option>
                          <option value={"Devloper"}>Devloper</option>
                          <option value={"Time Pass"}>Time Pass</option>
                        </select>
                      </p>
                      <p id="bttns">
                        <button
                          className="bbtn"
                          onClick={() => handleOnSubmit()}
                        >
                          Submit
                        </button>
                        <button className="bbtn" onClick={() => clearFields()}>
                          Cancel
                        </button>
                      </p>
                    </>
                  )}
                </div>
                <div className="frgtpss">
                  <p>Forget Password..?</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
