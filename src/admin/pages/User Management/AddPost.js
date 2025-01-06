import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ViInput from "../components/ViInput";
import VIFileInput from "../components/VIFileInput";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // Updated to store the file object
  const navigate = useNavigate();

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData instance
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image); // Append the file
    }

    console.log("Submitting form...", formData);

    axios
      .post("http://localhost:5000/api/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Post added successfully:", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
  };

  return (
    <section className="add-blog-post">
      <div className="ci-container">
        <h2>Add Blog Post</h2>
        <form
          className="post-wrapper"
          onSubmit={handleSubmit}
          encType="multipart/form-data" // Corrected encType
        >
          {/* File Input */}
          <VIFileInput
            label="Feature Image"
            name="image"
            handleChange={(e) => setImage(e.target.files[0])} // Updated to handle file object
          />
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
