import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  // const [gender, setGender] = useState("");

  const nav = useNavigate();

  //Update:
  // const updateData = async () => {
  //   await axios.put(`http://localhost:4000/prep/userupdate/${id}`, {
  //     id,
  //     fname,
  //     lname,
  //     email,
  //     // gender,
  //   });
  //   nav("/view");
  // };

  // useEffect(() => {
  //   setId(localStorage.getItem("id"));
  //   setFname(localStorage.getItem("fname"));
  //   setLname(localStorage.getItem("lname"));
  //   setEmail(localStorage.getItem("email"));
  //   // setGender(localStorage.getItem("gender"));
  // }, []);

  //Update:
  const editeData = async () => {
    await axios.put(`http://localhost:4000/prep/userupdate/${id}`, {
      id,
      fname,
      lname,
      email,
    });
    nav("/view");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFname(localStorage.getItem("fname"));
    setLname(localStorage.getItem("lname"));
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <>
      <form style={{ textAlign: "center" }}>
        <h1>Update User</h1>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            placeholder="Enter First-Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            placeholder="Enter Last-Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label>Email-ID: </label>
          <input
            type="email"
            placeholder="Enter Email-ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />

        {/* <div>
          <label>Gender: </label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option>Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <br /> */}

        <button type="button" onClick={editeData}>
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
