import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ViFileInput from "../components/VIFileInput";

const EditPost = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const navigate = useNavigate(); // To navigate after updating the post

  const [postData, setPostData] = useState({
    title: "",
    image: "",
    content: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch post data for editing
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((response) => {
        setPostData(response.data); // Pre-populate form with post data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setError("Failed to load post data.");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the updated data to the backend
    axios
      .put(`http://localhost:5000/api/posts/${id}`, postData)
      .then(() => {
        alert("Post updated successfully!");
        navigate("/dashboard/update-post"); // Redirect to the posts listing page
      })
      .catch((error) => {
        console.error("Error updating post:", error);
        setError("Failed to update the post.");
      });
  };

  if (loading) {
    return <p>Loading post data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="edit-post-section">
      <div className="ci-container">
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={postData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <ViFileInput
              type="file"
              id="image"
              name="image"
              value={postData.image}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              value={postData.content}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit">Update Post</button>
        </form>
      </div>
    </section>
  );
};

export default EditPost;
