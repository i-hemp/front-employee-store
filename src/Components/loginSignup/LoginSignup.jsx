import React, { useState } from "react";
import "./LoginSignup.css";
import userIcon from "../../Assets/person.png";
// import passwordIcon from "../../Assets/password.png";
import emailIcon from "../../Assets/email.png";
import addressIcon from "../../Assets/map-pin (3).png";
export const LoginSignup = () => {
  const [action, setAction] = useState("Submit");
  const [employeeName,setEmployeeName] = useState("");
  const [employeeSalary,setEmployeeSalary] = useState("");
  const [employeeAddress,setEmployeeAddress] = useState("");
  // const [password, setPassword] = useState("");
  const [played, setPlayed] = useState(0);

  const handleSubmit = async () => {
    // const s = await fetch('d',{bo})
    try {
      const response = await fetch("http://localhost:8082/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeName: "testUser",
          employeeSalary: "123456",
          employeeAddress: "adrs",
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.text(); // use text() instead of json() if server returns plain text
      console.log("Server response:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  //   const handleSubmit = async () => {
  //   const userData = {
  //     username,
  //     email,
  //     address,
  //     password,
  //   };

  //   try {
  //     const response = await fetch('http://localhost:8082/post', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(userData),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     // If your backend returns plain text:
  //     const data = await response.text();
  //     console.log('Server response:', data);
  //     setAction('Success');
  //   } catch (err) {
  //     console.error('Error submitting form:', err);
  //     setAction('Failed');
  //   }
  // };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{played === 0 ? action : played}</div>

        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={userIcon} alt="text" />
          <input
            type="text"
            value={employeeName}
            onChange={(e) => {
              setEmployeeName(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <p className="map" >$</p> 
          <input
            type="number"
            value={employeeSalary}
            onChange={(e) => {
              setEmployeeSalary(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <img className="map" src={addressIcon} alt="text" />
          <input
            type="text"
            value={employeeAddress}
            onChange={(e) => {
              setEmployeeAddress(e.target.value);
            }}
          />
        </div>
        {/* <div className="input">
          <img src={passwordIcon} alt="text" />
          <input type="password" />
        </div>*/}
      </div>

      <div className="submit-container">
        <div
          className="submit"
          onClick={() => {
            setAction("Played");
            handleSubmit();
            setPlayed(played + 1);
          }}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

// import React from "react";
// import "./LoginSignup.css";
// import userIcon from "../../Assets/person.png";
// import passwordIcon from "../../Assets/password.png";
// import emailIcon from "../../Assets/email.png";
// export const LoginSignup = () => {
//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">Sign Up</div>

//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         <div className="input">
//           <img src={userIcon} alt="text" />
//           <input type="text" />
//         </div>
//         <div className="input">
//           <img src={emailIcon} alt="text" />
//           <input type="email" />
//         </div>
//         <div className="input">
//           <img src={passwordIcon} alt="text" />
//           <input type="password" />
//         </div>
//       </div>
//       <div className="forget-password">
//         Lost password? <span>Click here!</span>
//       </div>
//       <div className="submit-container">
//         <div className="submit">Sign up</div>
//         <div className="submit">Login</div>
//       </div>
//     </div>
//   );
// };
