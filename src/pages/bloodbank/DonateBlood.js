import React, { useState } from "react";
import VITextInput from "../components/VITextInput";
import ViSelectInput from "../components/ViSelectInput";
import ViFileInput from "../components/ViFileInput";
import Header from "../theme/header";
import Footer from "../theme/footer";

const DonateBlood = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    bloodtype: "",
    location: "",
    profile: null, // File field
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Handles both file and text inputs
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.profile) {
      alert("Please upload a profile picture.");
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:5000/availabledonors", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        console.log(data);
      } else {
        alert(`Failed to submit form: ${data.message || "Unknown error"}`);
        console.error(data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const bloodGroupOptions = ["A+", "O+", "B+", "AB+", "A-", "O-", "B-", "AB-"];

  return (
    <>
      <section className="donor-section">
        <h2>Donate Blood and Save the Life of Others</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-container">
            <div className="primary-data">
              <VITextInput
                type="text"
                title="Name"
                name="name"
                handleChange={handleChange}
                value={formData.name}
                placeholder="Enter your Name"
              />
              <VITextInput
                type="number"
                title="Age"
                name="age"
                handleChange={handleChange}
                value={formData.age}
                placeholder="Enter your Age"
              />
              <VITextInput
                type="email"
                title="E-mail"
                name="email"
                handleChange={handleChange}
                value={formData.email}
                placeholder="Enter your E-mail"
              />
              <VITextInput
                type="number"
                title="Phone Number"
                name="phone"
                handleChange={handleChange}
                value={formData.phone}
                placeholder="Enter your Phone Number"
              />
              <ViSelectInput
                title="Blood Group"
                name="bloodtype"
                value={formData.bloodtype}
                handleChange={handleChange}
                options={bloodGroupOptions}
              />
              <VITextInput
                type="text"
                title="Location"
                name="location"
                value={formData.location}
                handleChange={handleChange}
                placeholder="Enter your Location"
              />
              <ViFileInput
                label="Profile Picture"
                name="profile"
                handleChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default DonateBlood;
