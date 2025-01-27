import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AboutUser = () => {
  const [user, setUser] = useState({
    id: localStorage.getItem("id"),
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    location: localStorage.getItem("location"),
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (isLogin !== "1") {
      window.location.href = "/login";
    }

    const id = localStorage.getItem("id");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const location = localStorage.getItem("location");

    if (id && name && email && location) {
      setUser({ id, name, email, location });
    } else {
      console.error("User data or ID is missing in localStorage");
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSave = async () => {
    if (password && password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    const payload = {
      id: user.id,
      name: editedUser.name,
      email: editedUser.email,
      location: editedUser.location,
      password: password || null,
    };

    console.log("Payload being sent:", payload);

    try {
      const response = await fetch("http://localhost:5000/api/update-user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Handle plain text error
        throw new Error(errorText);
      }

      const result = await response.json(); // Parse successful JSON response
      console.log("Backend response:", result);

      // Update local storage and state
      localStorage.setItem("name", editedUser.name);
      localStorage.setItem("email", editedUser.email);
      localStorage.setItem("location", editedUser.location);

      setUser(editedUser);
      setPassword("");
      setConfirmPassword("");
      setPasswordError("");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error.message || error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser(user);
    setPassword("");
    setConfirmPassword("");
    setPasswordError("");
  };

  return (
    <>
      <section className="about-user">
        <div className="ci-container">
          <h2>About User</h2>
          <div className="user-cart">
            <div className="user-profile">
              <FontAwesomeIcon icon={faCircleUser} className="pro" />
            </div>
            {isEditing ? (
              <>
                <div className="user-list-wrapper">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="user-list-wrapper">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="user-list-wrapper">
                  <label>Address:</label>
                  <input
                    type="text"
                    name="location"
                    value={editedUser.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="user-list-wrapper">
                  <label>New Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="user-list-wrapper">
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                {passwordError && <p className="error">{passwordError}</p>}
                <div className="action-btn-wrapper">
                  <button className="save-btn" onClick={handleSave}>
                    Save
                  </button>
                  <button className="cancel-btn" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="user-list-wrapper">
                  <div className="user-list-label">Name:</div>
                  <div className="user-list-info">{user.name || "Name"}</div>
                </div>
                <div className="user-list-wrapper">
                  <div className="user-list-label">Email:</div>
                  <div className="user-list-info">{user.email || "E-mail"}</div>
                </div>
                <div className="user-list-wrapper">
                  <div className="user-list-label">Address:</div>
                  <div className="user-list-info">
                    {user.location || "Location"}
                  </div>
                </div>
                {/* <button className="edit-btn" onClick={handleEdit}>
                  Edit
                </button> */}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUser;
