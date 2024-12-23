import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion, faBell } from "@fortawesome/free-regular-svg-icons";
const AdminHeader = () => {
  return (
    <>
      <section className="admin-header">
        <div className="ci-contianer">
          <nav>
            <div className="logo"></div>
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
              <div className="profile">
                <p>KC</p>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default AdminHeader;
