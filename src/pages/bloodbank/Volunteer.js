import React, { useState } from "react";
import VITextInput from "../components/VITextInput";
import axios from "axios";
import Header from "../theme/header";
import Footer from "../theme/footer";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null); // To track the submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/volunteer",
        formData
      );
      setSubmissionStatus("success"); // Update status to success on successful submission
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        message: "",
      }); // Clear form data
    } catch (error) {
      console.error(error);
      setSubmissionStatus("error"); // Update status to error in case of failure
    }
  };

  return (
    <>
      <section className="kyc-verification">
        <div className="ci-container">
          <h2>Be a part of BBMS</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="primary-data">
                <VITextInput
                  type="text"
                  title="First Name"
                  name="first_name"
                  handleChange={handleChange}
                  value={formData.first_name}
                  placeholder="Enter your First Name"
                />

                <div className="input-label">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Enter Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-label">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-label">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="Enter Phone Number"
                    value={formData.phone_number}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button type="submit">Submit</button>
            </div>
          </form>

          {/* Display thank you message after form submission */}
          {submissionStatus === "success" && (
            <div className="thank-you-message">
              <h3>Thank you for submitting the form!</h3>
              <p>
                We will let you know if you are selected or not through email.
              </p>
            </div>
          )}

          {/* Display error message if submission failed */}
          {submissionStatus === "error" && (
            <div className="error-message">
              <h3>Oops!</h3>
              <p>
                There was an error submitting your form. Please try again later.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Volunteer;
