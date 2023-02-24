import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { TbTrashX } from 'react-icons/tb'

export const LocalData = () => {

  const userData = JSON.parse(localStorage.getItem("Users"));

  const [removeProfile, setRemoveProfile] = useState(userData);

  console.log(removeProfile);

  const removeUser = (person) => {
    const remove = removeProfile.filter((x) => {
      return x.Name !== person;
    });
    setRemoveProfile(remove);
    window.location.reload(true);
  };

  const removeAll = () => {
    setRemoveProfile([]);
    window.location.reload(true);
  };

  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(removeProfile));
  }, [removeProfile]);

  useEffect(()=>{
    document.title = "Local-Storage | state"
  },[])

  return (
    <div>
      <table style={{ width: "100%", border: "1px solid black", borderCollapse: "collapse" }}>
        <thead style={{ color: "white", background: "darkgrey" }}>
          <tr style={{ border: "1px solid black" }}>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Gender</th>
            <th style={{ border: "1px solid black" }}>Dob</th>
            <th style={{ border: "1px solid black" }}>Email</th>
            <th style={{ border: "1px solid black" }}>Reason</th>
            <th style={{ border: "1px solid black" }}>Sr.no</th>
            <th></th>
          </tr>
        </thead>
        {
          userData.map((x,i) => {
            let name = x.Name;
            let datefb = x.DOB;
            let gndr = x.Gender;
            let mail = x.Email;
            let rsn = x.Reason;
            let id = x.SrId;
            return (
              <tbody style={{ background: "lightgrey", color: "black" }} key={i}>
                <tr>
                  <td style={{ border: "1px solid black" }}>{name}</td>
                  <td style={{ border: "1px solid black" }}>{datefb}</td>
                  <td style={{ border: "1px solid black" }}>{gndr}</td>
                  <td style={{ border: "1px solid black" }}>{mail}</td>
                  <td style={{ border: "1px solid black" }}>{rsn}</td>
                  <td style={{ border: "1px solid black" }}>{id}</td>
                  <td style={{ border: "1px solid black", textAlign: "center", color: "red" }} onClick={() => removeUser(name)}><TbTrashX /></td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
      <button onClick={removeAll}>Clear All</button>
    </div>
  )
}
