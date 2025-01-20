import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import AdminHeader from "../theme/adminheader";

const EventListing = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch event details from the API
    axios
      .get(`http://localhost:5000/api/getevent/${id}`)
      .then((response) => {
        setEvent(response.data); // Set the event details
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
        setError("Failed to load event details.");
      });
  }, [id]);

  console.log("Fetching event with ID:", id);
  console.log("Event Image URL:", event?.image); // Check the image URL

  // Handle error and loading states
  if (error) {
    return <p>{error}</p>;
  }

  if (!event) {
    return <p>Loading...</p>;
  }

  // Construct the image URL with fallback if event.image is missing or invalid
  const imageUrl = event.image
    ? `url(http://localhost:5000${event.image})`
    : "url(default-image.jpg)"; // Fallback image if not found

  return (
    <>
    
      <section className="event-details-section">
        <div className="ci-container">
          <h2>{event.title}</h2>
          <div className="event-wrapper">
            <div
              className="event-image"
              style={{
                backgroundImage: imageUrl,
                backgroundSize: "cover",
                backgroundPosition: "center", // Optional: Adjust the image position if needed
                height: "300px", // Optional: Set the height of the background image container
              }}
            ></div>
            <div className="event-content">
              <p>
                Date:
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </p>

              <p>In collaboration with: {event.collaboration}</p>
              <p>{event.content}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventListing;
