import React, { useState, useEffect } from "react";
import axios from "axios";

const UserManagement = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const tableHeaders = [
    "SN",
    "User Name",
    "E-mail",
    "Password",
    "Address",
    "Action",
  ];

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/data?page=${page}&limit=5`
      );
      setData(response.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <section className="listing-user">
        <div className="ci-container">
          <div className="user-list">
            <h2>User Management</h2>
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
                    <td>{item.password}</td>
                    <td>{item.address}</td>
                    <td>
                      <button className="action-btn edit-btn">Edit</button>
                      <button className="action-btn delete-btn">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
                Previous
              </button>
              <span>
                Page {page} of {totalPages}
              </span>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserManagement;
