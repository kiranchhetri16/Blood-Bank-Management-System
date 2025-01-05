import React, { useState, useEffect } from "react";
import axios from "axios";

const DonorManagement = () => {
  const [donors, setDonors] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const TableHeader = [
    "SN",
    "Profile",
    "Name",
    "Age",
    "E-mail",
    "Phone No",
    "Blood Type",
    "Location",
  ];

  useEffect(() => {
    fetchDonors(page);
  }, [page]);

  const fetchDonors = async (currentPage) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/availabledonors?page=${currentPage}&limit=5`
      );

      if (response.status === 200) {
        setDonors(response.data.donors); // Backend should return 'donors' and 'totalPages'
        setTotalPages(response.data.totalPages);
      } else {
        console.error("Failed to fetch donors");
      }
    } catch (error) {
      console.error("Error fetching donors:", error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <section className="available-donor-section">
      <div className="ci-container">
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
              {donors.length > 0 ? (
                donors.map((donor, index) => (
                  <tr key={donor.id}>
                    <td>{(page - 1) * 5 + index + 1}</td>
                    <td>
                      <img
                        src={`http://localhost:5000${donor.profile}`}
                        alt={donor.name || "Donor Profile"}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </td>
                    <td>{donor.name}</td>
                    <td>{donor.age}</td>
                    <td>{donor.email}</td>
                    <td>{donor.phone}</td>
                    <td>{donor.bloodtype}</td>
                    <td>{donor.location}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>No donors found</td>
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
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page >= totalPages}
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorManagement;
