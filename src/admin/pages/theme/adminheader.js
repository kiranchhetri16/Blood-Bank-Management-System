import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion, faBell } from "@fortawesome/free-regular-svg-icons";
import AdminLogo from "../../../Assest/image/new-admin-logo.png";
import { useNavigate } from "react-router-dom"; // Import this for navigation

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication-related data
    localStorage.removeItem("authToken"); // Adjust the key based on your app
    sessionStorage.clear();

    // Navigate to the login page
    navigate("/login");
  };

  return (
    <>
      <section className="admin-header">
        <div className="ci-contianer">
          <nav>
            <div className="logo">
              <img src={AdminLogo} alt="Admin Logo" />
            </div>
            <div className="menu-item">
              <div className="search-btn">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="search-icon"
                />
                <input type="text" name="search" placeholder="Search" />
              </div>{" "}
              <span style={{ height: "20px", color: "#737373" }}>|</span>
              <div className="icons">
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="help-icon"
                />
                <FontAwesomeIcon icon={faBell} className="help-icon" />
              </div>{" "}
              <span style={{ height: "20px", color: "#737373" }}>|</span>
              <div className="logout">
                <button
                  onClick={handleLogout}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#737373",
                    cursor: "pointer",
                    fontSize: "16px",
                    backgroundColor: "#f8ddb8",
                    font: "16px",
                    padding: "6px 8px",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default AdminHeader;
