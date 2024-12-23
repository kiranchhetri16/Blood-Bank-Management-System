import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="data-visualize">
      <h1>Data from Database</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th> 
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {" "}
              {/* Assuming each item has a unique 'id' */}
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.password}</td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchData;
