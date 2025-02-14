import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../Assest/image/new-logo.png";

import { useState, useEffect } from "react";

const Header = () => {
  const [dropdownvisible, setDropdownvisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDropdown = () => setDropdownvisible(!dropdownvisible);
  const toggleProfileDropdown = () => setDropdownVisible(!dropdownVisible);
  const handleShowNavbar = () => setShowNavbar(!showNavbar);

  // Check login state on component mount
  useEffect(() => {
    const loginState = localStorage.getItem("isLogin");
    setIsLoggedIn(!!loginState); // Convert the string value to a boolean
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    setIsLoggedIn(false);
    alert("You have logged out.");
  };

  const handleLogin = () => {
    localStorage.setItem("isLogin", "true");
    setIsLoggedIn(true);
    alert("You have logged in.");
  };

  return (
    <>
      <header>
        <div className="header">
          <div className="ci-container">
            <nav className="nav-wrapper">
              <div className="logo-wrapper">
                <Link to={"/"} className="logo">
                  <img src={Logo} alt="Logo" />
                </Link>
                <ul className={showNavbar ? "active" : ""}>
                  <li>
                    <Link to="#">Why We</Link>
                  </li>
                  <li>
                    <Link to="#">Our Work</Link>
                  </li>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                    style={{ position: "relative" }}
                  >
                    <Link to="#">Get Involved</Link>
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
                          transition: "0.3s",
                        }}
                      >
                        <li>
                          <Link to="/volunteer">Volunteers</Link>
                        </li>
                        <li>
                          <Link to="/manageblood">Search For</Link>
                        </li>
                        <li>
                          <Link to="/donor">Donate Blood</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link to="#">Resources</Link>
                  </li>
                  <li>
                    <Link to="/post">Blogs</Link>
                  </li>
                </ul>
              </div>
              <div className="btn-wrapper">
                {/* Sign In button is hidden when the user is logged in */}
                {!isLoggedIn && (
                  <Link
                    className="signin-btn"
                    to="/login"
                    onClick={handleLogin}
                  >
                    Sign In
                  </Link>
                )}

                {/* Profile Icon is always visible when logged in */}
                {isLoggedIn && (
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
                      </ul>
                    )}
                  </div>
                )}
              </div>
              <div className="toggle-btn" onClick={handleShowNavbar}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
