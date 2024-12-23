import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import VirinchiLogo from "../../Assest/image/virinchi-logo.png";
// import backgroundImage from "../../Assest/image/bloodimg.jpg";

import { useState } from "react";
const Header = () => {
  const [dropdownvisible, setDropdownvisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownvisible(!dropdownvisible);
  };
  // const sectionStyle = {
  //   backgroundImage: `url(${backgroundImage})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   height: "668px",
  //   marginTop: 0,
  // };
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
                <Link className="contact-btn">
                  Contact
                  <FontAwesomeIcon className="rightarrow" icon={faArrowRight} />
                </Link>
              </div>
            </nav>
          </div>
        </div>
        {/* <section className="main-header">
          <div style={sectionStyle}>
            <div className="transparent">
              <div className="ci-container">
                <div className="header-title">
                  <h2>Eliminate blood scarcity in Nepal</h2>
                  <p>
                    Donating your time to make an impact, your blood to save
                    lives or your money to create a holistic blood management
                    cycle.
                  </p>
                  <div className="btn-wrapper">
                    <div className="donate-blood-btn">Donate Blood</div>
                    <div className="request-blood-btn">Request Blood</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </header>
    </>
  );
};

export default Header;
