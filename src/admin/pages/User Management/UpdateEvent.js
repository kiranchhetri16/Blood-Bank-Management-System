import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdateEvent = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]); // Initialize as an empty array
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch events from the API
    axios
      .get("http://localhost:5000/api/getevent")
      .then((response) => {
        setEvents(response.data); // Set the events array
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setError("Failed to load events.");
      });
  }, []);

  const handleDelete = (eventId) => {
    axios
      .delete(`http://localhost:5000/api/deleteevent/${eventId}`)
      .then((response) => {
        alert("Event deleted successfully!");
        // Remove the deleted event from the state
        setEvents(events.filter((event) => event.id !== eventId));
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
        setError("Failed to delete event.");
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (events.length === 0) {
    return <p>No events available.</p>;
  }

  return (
    <section className="event-table-section">
      <div className="ci-container">
        <table className="event-table">
          <thead>
            <tr>
              <th>Event Title</th>
              <th>Collaboration</th>
              <th>Venue</th>
              <th>Date</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>{event.collaboration}</td>
                <td>{event.venue}</td>
                <td>{new Date(event.date).toISOString().split("T")[0]}</td>
                <td>
                  <div className="action-wrapper">
                    <Link
                      to={`/dashboard/editevent/${event.id}`}
                      className="edit-btn"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(event.id)}
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
      </div>
    </section>
  );
};

export default UpdateEvent;
