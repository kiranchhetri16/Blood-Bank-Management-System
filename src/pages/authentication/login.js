import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "1") {
      navigate("/login");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });
      const data = await response.json();
      if (data.success) {
        setMessage("Login successful!");
        localStorage.setItem("isLogin", "1");
        localStorage.setItem("name", name);
        localStorage.setItem("email", data.email);

        const storedUser = localStorage.getItem("user");
        console.log("Stored User:", storedUser); // Log the user data
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        navigate("/");
      } else {
        setMessage("Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("Error during login");
    }
  };

  return (
    <form className="form-test" onSubmit={handleLogin}>
      <h1>Login</h1>
      <div className="formgroup">
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter username"
        />
      </div>
      <div className="formgroup">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
      </div>
      <button type="submit">Login</button>

      <p>
        Don't have an account?<Link to={"/signup"}> Register</Link>
      </p>

      {message && <p>{message}</p>}
    </form>
  );
};

export default Login;
