import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
const AboutUser = () => {
  const [user, setUser] = useState({
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
  });

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (isLogin !== "1") {
      window.location.href = "/login";
    }

    // Retrieve user data from localStorage
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (email && name) {
      setUser({ name, email });
    }
  }, []);
  return (
    <>
      <section className="about-user">
        <div className="ci-container">
          <h2>About User</h2>
          <div className="user-cart">
            <div className="user-profile">
              <FontAwesomeIcon icon={faCircleUser} className="pro" />
            </div>
            <h3>{user.name || "Name"}</h3>
            <p>{user.email || "E-mail"}</p>
            <div className="preview-btn">Preview</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUser;
