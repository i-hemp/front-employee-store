// import React, { useEffect, useState } from 'react';

// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:8082/hey')
//       .then(response => response.text())
//       .then(data => setMessage(data))
//       .catch(error => console.error('Error fetching from Spring Boot:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Message from Spring Boot:</h1>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { LoginSignup } from "./Components/loginSignup/LoginSignup";

function App() {
  return <LoginSignup />;
}

export default App;
