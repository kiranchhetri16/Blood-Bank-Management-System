import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ViInput from "../components/ViInput";

const AddPost = () => {
  const [title, setTitle] = useState(""); // State for the post title
  const [content, setContent] = useState(""); // State for the post content
  const navigate = useNavigate(); // Hook for navigation

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const newPost = { title, content }; // Prepare the new post data

    console.log("Submitting form...", newPost); // Debugging

    axios
      .post("http://localhost:5000/api/posts", newPost) // Send POST request to API
      .then((response) => {
        console.log("Post added successfully:", response.data); // Debugging
        navigate("/"); // Navigate to the home/listing page
      })
      .catch((error) => {
        console.error("Error adding post:", error); // Debugging
      });
  };

  return (
    <section className="add-blog-post">
      <div className="ci-container">
        <h2>Add Blog Post</h2>
        <form className="post-wrapper" onSubmit={handleSubmit}>
          {/* Title Input */}
          <ViInput
            type="text"
            title="Title"
            name="title"
            value={title}
            handleChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
          />

          {/* Content Input */}
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
          {/* Submit Button */}
          <button type="submit">Add Post</button>
        </form>
      </div>
    </section>
  );
};

export default AddPost;
