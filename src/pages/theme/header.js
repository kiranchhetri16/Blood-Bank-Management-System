import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import VirinchiLogo from "../../Assest/image/virinchi-logo.png";
// import backgroundImage from "../../Assest/image/bloodimg.jpg";

import { useState } from "react";
const Header = () => {
  const [dropdownvisible, setDropdownvisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownvisible(!dropdownvisible);
  };
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleProfileDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    if (localStorage.getItem("isLogin")) {
      localStorage.removeItem("isLogin");
      alert("Logging out...");
    }
  };
  return (
    <>
      <header>
        <div className="header">
          <div className="ci-container">
            <nav className="nav-wrapper">
              <div className="logo-wrapper">
                <div className="logo">
                  <img src={VirinchiLogo} alt="" />
                </div>
                <ul>
                  <li>
                    <Link>Why We</Link>
                  </li>
                  <li>
                    <Link>Our Work</Link>
                  </li>
                  <li>
                    <Link>About Us</Link>
                  </li>
                  <li
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                    style={{ position: "relative" }}
                  >
                    <Link>Get Involved</Link>
                    {dropdownvisible && (
                      <ul
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          backgroundColor: "#eb2b2b",
                          listStyle: "none",
                          padding: "10px",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          textDecoration: "none",
                          width: "120px",
                          // marginTop: "16px",
                          transition: "0.3s",
                        }}
                      >
                        <li>
                          <Link to="/get-involved/volunteers">Volunteers</Link>
                        </li>
                        <li>
                          <Link to="/get-involved/search-for">Search For</Link>
                        </li>
                        <li>
                          <Link to="/get-involved/donate-blood">
                            Donate Blood
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link>Resources</Link>
                  </li>
                </ul>
              </div>
              <div className="btn-wrapper">
                <Link className="signin-btn" to="/login">
                  Sign In
                </Link>
                <div className="profile">
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    onClick={toggleProfileDropdown}
                  />
                  {dropdownVisible && (
                    <ul
                      style={{
                        position: "absolute",
                        top: "50px",
                        right: "40px",
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        listStyle: "none",
                        padding: "10px",
                        width: "100px",
                        zIndex: 1000,
                      }}
                    >
                      <Link to="/aboutuser">
                        {" "}
                        <li
                          style={{
                            padding: "8px 12px",
                            fontSize: "16px",
                            color: "#000",
                            cursor: "pointer",
                            textAlign: "center",
                          }}
                          onClick={() => alert("User Profile")}
                        >
                          User
                        </li>
                      </Link>
                      <Link to="/login">
                        {" "}
                        <li
                          style={{
                            padding: "8px 12px",
                            color: "#000",
                            fontSize: "16px",
                            cursor: "pointer",
                            borderTop: "1px solid #ccc",
                            textAlign: "center",
                          }}
                          onClick={handleLogout}
                        >
                          Logout
                        </li>
                      </Link>
                    </ul>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
