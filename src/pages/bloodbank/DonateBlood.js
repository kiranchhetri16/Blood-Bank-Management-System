import React, { useState } from "react";
import VITextInput from "../components/VITextInput";
import ViSelectInput from "../components/ViSelectInput";
import ViFileInput from "../components/ViFileInput";

const DonateBlood = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    bloodtype: "",
    location: "",
    profile: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);

    const formDataCopy = { ...formData };
    formDataCopy.date = new Date().toISOString(); // Add current date

    try {
      const response = await fetch("http://localhost:5000/availabledonors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataCopy),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        console.log(data);
      } else {
        alert("Failed to submit form");
        console.error(data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form");
    }
  };

  const bloodGroupOptions = ["A+", "O+", "B+", "AB+", "A-", "O-", "B-", "AB-"];
  return (
    <div>
      <section className="donor-section">
        <h2>Donate Blood and Save the Life of Others</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="primary-data">
              {/* Name */}
              <VITextInput
                type="text"
                title="Name"
                name="name"
                handleChange={handleChange}
                value={formData.name}
                placeholder="Enter you Name"
              />
              {/* Age */}
              <VITextInput
                type="number"
                title="Age"
                name="age"
                handleChange={handleChange}
                value={formData.age}
                placeholder="Enter you Age"
              />

              {/* Email */}
              <VITextInput
                type="email"
                title="E-mail"
                name="email"
                handleChange={handleChange}
                value={formData.email}
                placeholder="Enter you e-mail"
              />
              {/* Phone Number */}
              <VITextInput
                type="number"
                title="Phone Number"
                name="phone"
                handleChange={handleChange}
                value={formData.phone}
                placeholder="Enter you e-mail"
              />
              {/* Blood Group */}
              <ViSelectInput
                title="Blood Group"
                name="bloodtype"
                value={formData.bloodtype}
                handleChange={handleChange}
                options={bloodGroupOptions}
              />
              {/* Location */}
              <VITextInput
                type="text"
                title="Location"
                name="location"
                value={formData.location}
                handleChange={handleChange}
              />

              {/* Upload Picture */}
              <ViFileInput label="File Upload" />
            </div>

            {/* Submit Button */}
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default DonateBlood;
