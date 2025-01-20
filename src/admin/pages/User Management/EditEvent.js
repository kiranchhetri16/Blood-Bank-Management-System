import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ViFileInput from "../components/VIFileInput";

const EditEvent = () => {
  const { id } = useParams(); // To get the event id from the URL
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: "",
    collaboration: "",
    venue: "",
    date: "",
    image: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch the event data for editing
    axios
      .get(`http://localhost:5000/api/getevent/${id}`)
      .then((response) => {
        setEventData(response.data); // Pre-populate the form with event data
      })
      .catch((error) => {
        console.error("Error fetching event:", error);
        setError("Failed to load event data.");
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the updated event data to the backend
    axios
      .put(`http://localhost:5000/api/updateevent/${id}`, eventData)
      .then((response) => {
        alert("Event updated successfully!");
        navigate("/dashboard"); // Redirect after successful update
      })
      .catch((error) => {
        console.error("Error updating event:", error);
        setError("Failed to update event.");
      });
  };

  if (error) {
    return <p>{error}</p>;
  }
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="edit-event-section">
      <div className="ci-container">
        <h2>Edit Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Event Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="collaboration">Collaboration</label>
            <input
              type="text"
              id="collaboration"
              name="collaboration"
              value={eventData.collaboration}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="venue">Venue</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={eventData.venue}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              min={today} // Set the minimum date to today
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <ViFileInput
              type="file"
              id="image"
              name="image"
              value={eventData.image}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update Event</button>
        </form>
      </div>
    </section>
  );
};

export default EditEvent;
