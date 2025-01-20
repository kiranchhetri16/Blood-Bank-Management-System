import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EventBlog = () => {
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

  if (error) {
    return <p>{error}</p>;
  }

  if (events.length === 0) {
    return <p>No events available.</p>;
  }

  return (
    <section className="event-blog-section">
      <div className="ci-container">
        <h2>Upcoming Events</h2>
        <div className="event-wrapper">
          {events.map((event) => (
            <div className="event-cart" key={event.id}>
              <div className="image-wrapper">
                <img
                  src={`http://localhost:5000${event.image}`}
                  alt={event.title}
                />
              </div>
              <div className="event-details">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                  <p>{new Date(event.date).toISOString().split("T")[0]}</p>
                </i>
                <h3>{event.title}</h3>
                <p>In collaboration with: {event.collaboration}</p>
                <p>Venue: {event.venue}</p>
              </div>

              <Link to={`/event-listing/${event.id}`} className="read-more">
                <span>View Details</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventBlog;
