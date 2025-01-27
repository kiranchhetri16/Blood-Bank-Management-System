import React, { useState } from "react";
import axios from "axios";
import Header from "../../../pages/theme/header";
import Footer from "../../../pages/theme/footer";
import ViSelect from "../components/ViSelect";

const ManageBloodBank = () => {
  const [bloodBanks, setBloodBanks] = useState([]);
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [bloodBankSearchFields, setBloodBankSearchFields] = useState({
    state: "",
    district: "",
    bloodtype: "",
    blood: "",
  });

  const [bloodSortConfig, setBloodSortConfig] = useState({
    key: "bloodtype",
    direction: "asc",
  });
  const [donorSortConfig, setDonorSortConfig] = useState({
    key: "bloodtype",
    direction: "asc",
  });

  const [donorLocation, setDonorLocation] = useState("");

  // Common handlers
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setBloodBankSearchFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDonorLocationChange = (e) => {
    setDonorLocation(e.target.value);
  };

  // Blood Bank Search
  const handleBloodBankSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const queryParams = new URLSearchParams(
        Object.fromEntries(
          Object.entries(bloodBankSearchFields).filter(
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
        setBloodBanks(response.data);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch blood banks.");
    } finally {
      setLoading(false);
    }
  };

  // Donor Search
  const handleDonorSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const queryParams = new URLSearchParams({
        location: donorLocation.trim(),
      }).toString();

      const response = await axios.get(
        `http://localhost:5000/availabledonors/search?${queryParams}`
      );

      if (Array.isArray(response.data.donors)) {
        if (response.data.donors.length === 0) {
          setError("No matching donors found.");
        } else {
          setDonors(response.data.donors);
        }
      } else {
        console.error("Unexpected data format for donors:", response.data);
        setDonors([]);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch donors.");
    } finally {
      setLoading(false);
    }
  };

  // Sorting Handlers
  const handleBloodSort = () => {
    setBloodBanks((prevBloodBanks) =>
      [...prevBloodBanks].sort((a, b) => {
        if (a[bloodSortConfig.key] < b[bloodSortConfig.key]) {
          return bloodSortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[bloodSortConfig.key] > b[bloodSortConfig.key]) {
          return bloodSortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      })
    );
  };

  const handleBloodSortConfigChange = (e) => {
    const { name, value } = e.target;
    setBloodSortConfig((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDonorSort = () => {
    setDonors((prevDonors) =>
      [...prevDonors].sort((a, b) => {
        if (a[donorSortConfig.key] < b[donorSortConfig.key]) {
          return donorSortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[donorSortConfig.key] > b[donorSortConfig.key]) {
          return donorSortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      })
    );
  };

  const handleDonorSortConfigChange = (e) => {
    const { name, value } = e.target;
    setDonorSortConfig((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const State = [
    "Bagmati",
    "Gandaki",
    "Karnali",
    "Koshi",
    "Lumbini",
    "Sudurpashchim",
    "Madhesh",
  ];
  const District = ["Kathmandu", "Lalitpur", "Bhaktpur"];
  const bloodGroupOptions = ["A+", "O+", "B+", "AB+", "A-", "O-", "B-", "AB-"];
  const WholeBlood = ["whole blood", "plasma", "cell"];

  return (
    <section className="manage-bloodbank">
      <div className="ci-container">
        <h2>Blood Stock Management</h2>

        {/* Blood Bank Search */}
        <form onSubmit={handleBloodBankSearch}>
          <h3>Search Blood Banks</h3>
          <div className="primary-form">
            <ViSelect
              name="state"
              label="Select State"
              value={bloodBankSearchFields.state}
              onChange={handleFieldChange}
              options={State}
            />
            <ViSelect
              name="district"
              label="Select District"
              value={bloodBankSearchFields.district}
              onChange={handleFieldChange}
              options={District}
            />
            <ViSelect
              name="bloodtype"
              label="Select Blood Type"
              value={bloodBankSearchFields.bloodtype}
              onChange={handleFieldChange}
              options={bloodGroupOptions}
            />
            <ViSelect
              name="blood"
              label="Select Blood"
              value={bloodBankSearchFields.blood}
              onChange={handleFieldChange}
              options={WholeBlood}
            />
          </div>
          <button type="submit">Search Blood Banks</button>
        </form>

        {/* Blood Bank Sorting */}
        <div style={{ marginTop: "20px" }} className="sort">
          <div>
            <label>
              Sort by:{" "}
              <select
                name="key"
                value={bloodSortConfig.key}
                onChange={handleBloodSortConfigChange}
              >
                <option value="bloodbank">Blood Bank</option>
                <option value="bloodtype">Blood Type</option>
                <option value="category">Category</option>
              </select>
            </label>
            <label style={{ marginLeft: "10px" }}>
              Order:{" "}
              <select
                name="direction"
                value={bloodSortConfig.direction}
                onChange={handleBloodSortConfigChange}
              >
                <option value="a+">A+</option>
                <option value="o+">O+</option>
                <option value="b+">B+</option>
                <option value="ab+">AB+</option>
                <option value="A-">A-</option>
                <option value="o-">O-</option>
                <option value="b-">B-</option>
                <option value="ab-">AB-</option>
              </select>
            </label>
            <button
              onClick={handleBloodSort}
              style={{ marginLeft: "10px" }}
              className="sort-btn"
            >
              Apply Sort
            </button>
          </div>
        </div>

        {/* Blood Bank Table */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <h3>Blood Banks</h3>
            <table border="1">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Blood Bank</th>
                  <th>Category</th>
                  <th>Availability</th>
                  <th>Updated Date</th>
                  <th>Map</th>
                </tr>
              </thead>
              <tbody>
                {bloodBanks.map((bank, index) => (
                  <tr key={bank.id}>
                    <td>{index + 1}</td>
                    <td>{bank.bloodbank}</td>
                    <td>{bank.category}</td>
                    <td>{bank.bloodtype}</td>
                    <td>{new Date(bank.created_date).toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() =>
                          window.open(
                            `https://www.google.com/maps?q=${encodeURIComponent(
                              bank.location
                            )}`,
                            "_blank"
                          )
                        }
                      >
                        View on Map
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Donor Search */}
        <form onSubmit={handleDonorSearch} className="donor-form">
          <h3>Search Donors by Location</h3>
          <div className="primary-form">
            <input
              type="text"
              name="location"
              placeholder="Search by Location"
              value={donorLocation}
              onChange={handleDonorLocationChange}
            />
          </div>
          <button type="submit">Search Donors</button>
        </form>

        {/* Donor Sorting */}
        <div style={{ marginTop: "20px" }} className="sort">
          <div>
            <label>
              Sort by:{" "}
              <select
                name="key"
                value={bloodSortConfig.key}
                onChange={handleBloodSortConfigChange}
              >
                <option value="bloodbank">Blood Bank</option>
                <option value="bloodtype">Blood Type</option>
                <option value="category">Category</option>
              </select>
            </label>
            <label style={{ marginLeft: "10px" }}>
              Order:{" "}
              <select
                name="direction"
                value={bloodSortConfig.direction}
                onChange={handleBloodSortConfigChange}
              >
                <option value="a+">A+</option>
                <option value="o+">O+</option>
                <option value="b+">B+</option>
                <option value="ab+">AB+</option>
                <option value="A-">A-</option>
                <option value="o-">O-</option>
                <option value="b-">B-</option>
                <option value="ab-">AB-</option>
              </select>
            </label>
            <button
              onClick={handleBloodSort}
              style={{ marginLeft: "10px" }}
              className="sort-btn"
            >
              Apply Sort
            </button>
          </div>
        </div>

        {/* Donor Table */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <h3>Available Donors</h3>
            <table border="1" className="donor-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Blood Type</th>
                  <th>Location</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {donors.map((donor, index) => (
                  <tr key={donor.id}>
                    <td>{index + 1}</td>
                    <td>{donor.name}</td>
                    <td>{donor.age}</td>
                    <td>{donor.bloodtype}</td>
                    <td>{donor.location}</td>
                    <td>{donor.phone}</td>
                    <td>{donor.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default ManageBloodBank;
