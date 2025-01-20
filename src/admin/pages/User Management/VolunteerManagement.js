import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "../theme/adminheader";

const VolunteerManagement = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const TableHeader = [
    "SN",
    "First Name",
    "Last Name",
    "E-mail",
    "Phone No",
    "Message",
    "Status",
    "Actions",
  ];

  useEffect(() => {
    fetchVolunteers(page);
  }, [page]);

  const fetchVolunteers = async (currentPage) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/availablevolunteer?page=${currentPage}&limit=5`
      );

      if (response.status === 200) {
        setVolunteers(response.data.volunteers || []);
        setTotalPages(response.data.totalPages || 1);
      } else {
        console.error("Failed to fetch volunteers:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching volunteers:", error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/volunteer/status/`,
        { id, status }
      );

      if (response.status === 200) {
        alert(`Volunteer ${status} successfully.`);
        fetchVolunteers(page); // Refetch data after status update
      } else {
        console.error("Failed to update status:", response.data);
        alert("Failed to update status.");
      }
    } catch (error) {
      console.error(
        "Error updating status:",
        error.response ? error.response.data : error.message
      );
      alert("There was an error updating the volunteer status.");
    }
  };

  return (
    <>
      <section className="available-donor-section">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {TableHeader.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {volunteers.length > 0 ? (
                volunteers.map((volunteer, index) => (
                  <tr key={volunteer.id}>
                    <td>{(page - 1) * 5 + index + 1}</td>
                    <td>{volunteer.first_name}</td>
                    <td>{volunteer.last_name}</td>
                    <td>{volunteer.email}</td>
                    <td>{volunteer.phone_number}</td>
                    <td>{volunteer.message}</td>
                    <td>{volunteer.status}</td>
                    <td>
                      <div className="action-wrapper">
                        <button
                          onClick={() =>
                            handleStatusChange(volunteer.id, "Accepted")
                          }
                          className="accept-btn"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(volunteer.id, "Rejected")
                          }
                          className="reject-btn"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>No Volunteers</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="pagination">
            <button
              disabled={page <= 1}
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
            <span>Page {page}</span>
            <button
              disabled={page >= totalPages}
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteerManagement;
