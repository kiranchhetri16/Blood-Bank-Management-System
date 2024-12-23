import React, { useState, useEffect } from "react";
import axios from "axios";

const DonorManagement = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const TableHeader = [
    "SN",
    "Profile",
    "Name",
    "Age",
    "E-mail",
    "Phone-no",
    "Blood Type",
    "Location",
  ];

  useEffect(() => {
    fetchDonor(page);
  }, [page]);

  const fetchDonor = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/availabledonor?page=${page}&limit=5`
      );
      setData(response.data); // Ensure 'donors' is the correct key from the backend response
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching donors:", error);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
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
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <td>{(page - 1) * 5 + index + 1}</td>
                    <td>
                      <div className="cell-contain">
                        <img
                          src={`http://localhost:5000/uploads/${item.profile}`}
                          alt={item.name || "Donor Profile"}
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.bloodtype}</td>
                    <td>{item.location}</td>
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

export default DonorManagement;
