import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/forgot-password",
        {
          email,
        }
      );
      setMessage(response.data.message);
    } catch (err) {
      setMessage("Error sending reset email.");
    }
  };

  return (
    <>
      <section className="forgot-password-secton">
        <div className="ci-container">
          <h2>Forgot Password</h2>
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Email</button>
          </form>
          <p>{message}</p>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
