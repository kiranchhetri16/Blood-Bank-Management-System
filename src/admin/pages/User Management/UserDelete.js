import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UserDelete = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const deleteUser = async () => {
      try {
        const response = await axios.delete(
          `http://localhost:5000/data/${userId}`
        );
        console.log(response.data);
        setLoading(false);
        navigate("/");
      } catch (error) {
        console.error("Error deleting user:", error);
        setLoading(false);
        setError("Failed to delete user");
      }
    };

    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser();
    } else {
      setLoading(false);
      navigate("/");
    }
  }, [userId, navigate]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}{" "}
    </div>
  );
};

export default UserDelete;
