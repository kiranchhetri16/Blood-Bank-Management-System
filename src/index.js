// import React, { useEffect, useState } from "react";

// function App() {
//   // Step 1: Create a state variable to hold the data
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Step 2: Fetch data from the API
//     fetch("http://localhost:5000/data")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json(); // Parse the JSON data
//       })
//       .then((data) => {
//         // Step 3: Update the state with the fetched data
//         setData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // Empty dependency array means this useEffect runs once after the initial render

//   return (
//     <div className="App">
//       <h1>Data from MySQL Database</h1>
//       <ul>
//         {data.length > 0 ? (
//           data.map((item, index) => (
//             <li key={index}>
//               ID: {item.id}, Name: {item.name}, Password: {item.password}
//             </li>
//           ))
//         ) : (
//           <p>No data available</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
