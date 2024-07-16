import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const nav = useNavigate();

  //Post:
  const addData = async () => {
    await axios.post("http://localhost:4000/prep/userdetails", {
      fname,
      lname,
      email,
    });
    nav("/view");
  };

  return (
    <>
      <form>
        <h1>Add User</h1>

        <div>
          <lable>First Name:</lable>
          <input
            type="text"
            placeholder="Enter the First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <br />
        <div>
          <lable>Last Name:</lable>
          <input
            type="text"
            placeholder="Enter the Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <br />
        <div>
          <lable>Email ID:</lable>
          <input
            type="email"
            placeholder="Enter the Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button type="button" onClick={addData}>
          Add
        </button>
      </form>
    </>
  );
};

export default Add;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Add = () => {

//   const [fname, setFname] = useState('')
//   const [lname, setLname] = useState('')
//   const [email, setEmail] = useState('')
//   const [gender, setGender] = useState('')

//   const nav = useNavigate();

//   //Post:
//   const send = async () => {
//     await axios.post('https://655ee20d879575426b44179a.mockapi.io/Data', {
//       fname,
//       lname,
//       email,
//       gender
//     })
//     nav('/view')
//   }

//   return (
//     <>
//       <form style={{ textAlign: 'center' }}>
//         <h1>Add User</h1>
//         <div>
//           <label>First Name: </label>
//           <input
//             type='text'
//             placeholder='Enter First-Name'
//             value={fname}
//             onChange={e => setFname(e.target.value)}
//           />
//         </div>
//         <br />

//         <div>
//           <label>Last Name: </label>
//           <input
//             type='text'
//             placeholder='Enter Last-Name'
//             value={lname}
//             onChange={e => setLname(e.target.value)}
//           />
//         </div>
//         <br />

//         <div>
//           <label>Email-ID: </label>
//           <input
//             type='email'
//             placeholder='Enter Email-ID'
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </div>
//         <br />

//         <div>
//           <label>Gender: </label>
//           <select
//             value={gender}
//             onChange={e => setGender(e.target.value)}
//           >
//             <option>Select</option>
//             <option value='Male'>Male</option>
//             <option value='Female'>Female</option>
//             <option value='Other'>Other</option>
//           </select>
//         </div>
//         <br />

//         <button type='button' onClick={send}>Add</button>
//       </form>
//     </>
//   );
// };

// export default Add;
