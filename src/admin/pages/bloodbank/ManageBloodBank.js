import React, { useState } from "react";
import axios from "axios";

const ManageBloodBank = () => {
  const [bloodBanks, setBloodBanks] = useState([]); // Stores fetched results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // State for search fields
  const [searchFields, setSearchFields] = useState({
    state: "",
    district: "",
    bloodtype: "",
    blood: "",
  });

  // Handle search field changes
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setSearchFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle search submission
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(""); // Reset error state

    try {
      // Construct query parameters from search fields
      const queryParams = new URLSearchParams(
        Object.fromEntries(
          Object.entries(searchFields).filter(
            ([_, value]) => value.trim() !== ""
          )
        )
      ).toString();

      const response = await axios.get(
        `http://localhost:5000/api/bloodbanks?${queryParams}`
      );

      if (response.data.length === 0) {
        setError("No matching blood banks found.");
      } else {
        setBloodBanks(response.data); // Update results only if matches are found
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch blood banks.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="manage-bloodbank">
      <div className="container">
        <h1>Blood Banks</h1>
        <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            name="state"
            placeholder="Search by State"
            value={searchFields.state}
            onChange={handleFieldChange}
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            name="district"
            placeholder="Search by District"
            value={searchFields.district}
            onChange={handleFieldChange}
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            name="bloodtype"
            placeholder="Search by Blood Type"
            value={searchFields.bloodtype}
            onChange={handleFieldChange}
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            name="blood"
            placeholder="Search by Blood"
            value={searchFields.blood}
            onChange={handleFieldChange}
            style={{ marginRight: "10px" }}
          />
          <button type="submit">Search</button>
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Blood Bank</th>
                <th>Category</th>
                <th>Availability</th>
                <th>Updated Date</th>
              </tr>
            </thead>
            <tbody>
              {bloodBanks.map((bank) => (
                <tr key={bank.id}>
                  <td>{bank.id}</td>
                  <td>
                    {bank.bloodbank}
                    <div className="details">
                      {bank.state}, {bank.district}, {bank.location}, email:{" "}
                      {bank.email}, phone: {bank.phone}
                    </div>
                  </td>
                  <td>{bank.category}</td>
                  <td>
                    {bank.bloodtype}
                    <div>{bank.blood}</div>
                  </td>
                  <td>{new Date(bank.created_date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default ManageBloodBank;
