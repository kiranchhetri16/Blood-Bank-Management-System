import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserManagement = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [deletingUserId, setDeletingUserId] = useState(null); // Track the userId being deleted

  const tableHeaders = ["SN", "User Name", "E-mail", "Address", "Action"];

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/data?page=${page}&limit=5`
      );
      setData(response.data);
      console.log(response.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const [users, setUsers] = useState([]); // Assuming you have a list of users
  const [error, setError] = useState(null); // For handling error messages

  const handleDeleteClick = async (userId) => {
    // Log the userId for debugging
    console.log("User ID to delete:", userId);

    // Ask for user confirmation
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmed) {
      return; // Exit if the user cancels the action
    }

    try {
      // Call the delete API
      const response = await axios.delete(
        `http://localhost:5000/data/delete/${userId}`
      );
      console.log("User deleted successfully:", response.data);

      // Update the state (assuming setUsers is defined and holds your list of users)
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      // Log the error and handle it in the UI
      console.error("Error deleting user:", error);
      setError("Failed to delete the user. Please try again.");
    }
  };

  return (
    <>
      <section className="listing-user">
        <div className="user-list">
          <table>
            <thead>
              <tr>
                {tableHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>

                  <td>{item.address}</td>
                  <td>
                    <div className="action-btn">
                      <Link
                        to={`/dashboard/user-management/edit/${item.id}`}
                        className="edit-btn"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDeleteClick(item.id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="pagination"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <button
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
              style={{
                padding: "5px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Previous
            </button>
            <span>
              Page {page} {totalPages}
            </span>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage(page + 1)}
              style={{ padding: "5px", cursor: "pointer" }}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserManagement;
