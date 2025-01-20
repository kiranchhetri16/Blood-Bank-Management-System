import React, { useState } from "react";
import ViInput from "../components/ViInput";
import ViSelect from "../components/ViSelect";

const AddBank = () => {
  const [formData, setFormData] = useState({
    location: "",
    email: "",
    phone: "",
    state: "",
    district: "",
    bloodbank: "",
    category: "",
    bloodtype: "",
    blood: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/addbloodbank", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Blood bank added successfully!");
        setFormData({
          location: "",
          email: "",
          phone: "",
          state: "",
          district: "",
          bloodbank: "",
          category: "",
          bloodtype: "",
          blood: "",
        });
      } else {
        alert("Failed to add blood bank.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
  const bloodGroupOptions = [
    "A+",
    "O+",
    "B+",
    "AB+",
    "A-",
    "O-",
    "B-",
    "AB-",
    "none",
  ];
  const Category = ["Gov", "Private", "Red Cross"];
  const WholeBlood = ["whlole blood", "plasma", "cell", "none"];
  return (
    <>
      <section className="add-blood-bank">
        <h2>Add Blood Bank</h2>
        <form onSubmit={handleSubmit}>
          <div className="primary-data">
            <ViInput
              type="text"
              name="bloodbank"
              title="Blood Bank"
              placeholder="Name of blood bank"
              value={formData.bloodbank}
              onChange={handleChange}
              required
            />
            <ViInput
              type="text"
              name="location"
              title="Location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <ViInput
              type="email"
              name="email"
              title="E-mail"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <ViInput
              type="number"
              name="phone"
              title="Phone Number"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <ViSelect
              name="state"
              title="State"
              label="Select State"
              value={formData.state}
              onChange={handleChange}
              options={State}
              required
            />
            <ViSelect
              name="district"
              title="District"
              label="Select District"
              value={formData.district}
              onChange={handleChange}
              options={District}
              required
            />

            <ViSelect
              name="category"
              title="Category"
              label="Select Category"
              value={formData.category}
              onChange={handleChange}
              options={Category}
              required
            />
            <ViSelect
              title="Blood Type"
              name="bloodtype"
              label="Select Blood Type"
              value={formData.bloodtype}
              onChange={handleChange}
              options={bloodGroupOptions}
              required
            />
            <ViSelect
              title="Whole Blood"
              name="blood"
              value={formData.blood}
              onChange={handleChange}
              label="Whole Blood"
              options={WholeBlood}
              required
            />
          </div>
          <button type="submit">Add Blood Bank</button>
        </form>
      </section>
    </>
  );
};

export default AddBank;
