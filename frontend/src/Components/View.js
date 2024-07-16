import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BiSolidTrashAlt } from "react-icons/bi";
import { MdEdit } from "react-icons/md";

const View = () => {
  const [apiData, setapiData] = useState([]);
  const nav = useNavigate();

  //Get:
  const getData = async () => {
    const display = await axios.get("http://localhost:4000/prep/userdisplay");
    setapiData(display.data.getUser);
  };

  useEffect(() => {
    getData();
  }, []);

  //Update:
  const updateData = ({ _id, fname, lname, email }) => {
    localStorage.setItem("id", _id);
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("email", email);
    nav("/update");
  };

  //Delete:
  const delData = async (id) => {
    const confirm = window.confirm("Are u sure want to Delete?");
    if (confirm) {
      await axios.delete(`http://localhost:4000/prep/userdelete/${id}`);
      getData();
    }
  };

  // Back:
  const back = () => {
    nav("/");
  };

  return (
    <>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th className="cellStyle">First Name</th>
            <th className="cellStyle">Last Name</th>
            <th className="cellStyle">Email ID</th>
            <th className="cellStyle">Edit</th>
            <th className="cellStyle">Delete</th>
          </tr>
        </thead>

        <tbody>
          {apiData.map((data, key) => (
            <tr key={key}>
              <td className="cellStyle">{data.fname}</td>
              <td className="cellStyle">{data.lname}</td>
              <td className="cellStyle">{data.email}</td>

              <td className="cellStyle">
                <MdEdit
                  style={{ cursor: "pointer" }}
                  onClick={() => updateData(data)}
                />
              </td>

              <td className="cellStyle">
                <BiSolidTrashAlt
                  style={{ cursor: "pointer" }}
                  onClick={() => delData(data._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={back}>Back</button>
    </>
  );
};

export default View;

// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { BiSolidTrashAlt } from "react-icons/bi";
// import { MdEdit } from "react-icons/md";

// const View = () => {

//   const [apiData, setapiData] = useState([])
//   const nav = useNavigate()

//   //Get:
//   const getData = async () => {
//     const display = await axios.get('https://655ee20d879575426b44179a.mockapi.io/Data');
//     setapiData(display.data)
//   }
//   useEffect(() => {
//     getData()
//   }, [])

//   //Update:
//   const editData = ({ id, fname, lname, email, gender }) => {
//     localStorage.setItem('id', id)
//     localStorage.setItem('fname', fname);
//     localStorage.setItem('lname', lname);
//     localStorage.setItem('email', email);
//     localStorage.setItem('gender', gender);
//     nav('/update')
//   }

//   // Delete:
//   const delData = async (id) => {
//     await axios.delete(`https://655ee20d879575426b44179a.mockapi.io/Data/${id}`);
//     getData();
//   }

//   //Navigate:
//   const back = () => {
//     nav('/')
//   }

//   return (
//     <>
//       <table style={{ width: '100%' }}>
//         <thead>
//           <tr>
//             <th className='cellStyle'>First Name</th>
//             <th className='cellStyle'>Last Name</th>
//             <th className='cellStyle'>E-Mail</th>
//             <th className='cellStyle'>Gender</th>
//             <th className='cellStyle'>Edit</th>
//             <th className='cellStyle'>Delete</th>
//           </tr>
//         </thead>

//         <tbody>
//           {apiData.map((data, key) => (
//             <tr key={key}>
//               <td className='cellStyle'>{data.fname}</td>
//               <td className='cellStyle'>{data.lname}</td>
//               <td className='cellStyle'>{data.email}</td>
//               <td className='cellStyle'>{data.gender}</td>
//               <td className='cellStyle'><MdEdit style={{ cursor: 'pointer' }} onClick={() => { editData(data) }} /> </td>
//               <td className='cellStyle'><BiSolidTrashAlt style={{ cursor: 'pointer' }} onClick={() => delData(data.id)} /> </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={back}>Back</button>
//     </>
//   )
// }

// export default View
