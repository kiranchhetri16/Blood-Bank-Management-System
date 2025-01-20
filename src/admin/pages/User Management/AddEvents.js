import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ViInput from "../components/ViInput";
import VIFileInput from "../components/VIFileInput";

const AddEvents = () => {
  const [title, setTitle] = useState("");
  const [collaboration, setCollaboration] = useState("");
  const [venue, setVenue] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("collaboration", collaboration);
    formData.append("content", content);
    formData.append("date", date);
    formData.append("venue", venue);
    if (image) {
      formData.append("image", image);
    }

    axios
      .post("http://localhost:5000/api/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Event added successfully:", response.data);
        navigate("/dashboard"); // Navigate to the desired route after success
      })
      .catch((error) => {
        console.error("Error adding event:", error);
      });
  };

  // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className="add-event-wrapper">
        <h2>Add Event</h2>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="event-wrapper"
        >
          <ViInput
            type="text"
            title="Title"
            name="title"
            value={title}
            handleChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
          />

          <VIFileInput
            label="Feature Image"
            name="image"
            accept="image/*"
            handleChange={(e) => {
              console.log("Selected file:", e.target.files[0]);
              setImage(e.target.files[0]);
            }}
          />

          <ViInput
            type="text"
            title="Collaboration"
            name="collaboration"
            value={collaboration}
            handleChange={(e) => setCollaboration(e.target.value)}
            placeholder="Enter the Collaboration Team"
          />
          <ViInput
            type="text"
            title="Venue"
            name="venue"
            value={venue}
            handleChange={(e) => setVenue(e.target.value)}
            placeholder="Enter the Venue"
          />

          <div className="input-label">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="10"
              required
              placeholder="Enter the content"
            ></textarea>
          </div>

          <div className="input-label-date">
            <label htmlFor="date">Select Date</label>
            <input
              id="date"
              type="date"
              name="date"
              value={date}
              min={today} // Set the minimum date to today
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <button type="submit">Add Event</button>
        </form>
      </section>
    </>
  );
};

export default AddEvents;
