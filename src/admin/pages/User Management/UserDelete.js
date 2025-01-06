import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UserDelete = () => {
  const { userId } = useParams(); // Get the userId from URL
  const navigate = useNavigate(); // Hook for navigation
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(null); // State for error message

  useEffect(() => {
    // Display loading message while waiting for the response
    setLoading(true);

    // Function to delete user
    const deleteUser = async () => {
      try {
        const response = await axios.delete(
          `http://localhost:5000/data/${userId}`
        );
        console.log(response.data); // Log the response for debugging
        setLoading(false); // Hide the loading message after the API call finishes
        navigate("/"); // Redirect back to the user management page after successful deletion
      } catch (error) {
        console.error("Error deleting user:", error);
        setLoading(false);
        setError("Failed to delete user"); // Set an error message if something goes wrong
      }
    };

    // Confirm before making the delete request
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser();
    } else {
      setLoading(false); // Hide the loading message if the user cancels
      navigate("/"); // Redirect to home if the user cancels
    }
  }, [userId, navigate]); // Dependency array with userId to trigger on page load

  return (
    <div>
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>{error}</p>}{" "}
      {/* Show error message if something went wrong */}
    </div>
  );
};

export default UserDelete;
