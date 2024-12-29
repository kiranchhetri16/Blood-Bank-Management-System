import React, { useState } from "react";
import VITextInput from "../components/VITextInput";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    bloodtype: "",
    location: "",
    profile: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <section className="kyc-verification">
        <h2>Want to be a part of BBMS</h2>
        <form action="#" method="post">
          <div className="form-container">
            <div className="primary-data">
              <VITextInput
                type="text"
                title="Name"
                name="first-name"
                handleChange={handleChange}
                value={formData.name}
                placeholder="Enter your Name"
              />
              
              <div className="input-label">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  name="last-name"
                  placeholder="Enter Last Name"
                  required
                />
              </div>
              <div className="input-label">
                <label htmlFor="e-mail">E-mail</label>
                <input
                  type="email"
                  name="e-mail"
                  placeholder="Enter your e-mail"
                  required
                />
              </div>
              <div className="input-label">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  type="number"
                  name="phone-number"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
            </div>
            <div className="secondary-data">
              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  className="short-note"
                  placeholder="Leave a short message"
                  required
                ></textarea>
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Volunteer;
