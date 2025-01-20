import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faArrowRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

const UpdatePost = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [posts, setPosts] = useState([]); // Store all posts
  const [post, setPost] = useState(null); // Store a single post
  const [error, setError] = useState(null);

  // Fetch posts or a single post based on the presence of `id`
  useEffect(() => {
    const endpoint = id
      ? `http://localhost:5000/api/posts/${id}` // Single post
      : `http://localhost:5000/api/posts`; // All posts

    axios
      .get(endpoint)
      .then((response) => {
        id ? setPost(response.data) : setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post(s):", error);
        setError("Failed to load the blog post(s).");
      });
  }, [id]);

  // Delete a post
  const handleDelete = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`http://localhost:5000/api/posts/${postId}`)
        .then(() => {
          alert("Post deleted successfully!");
          // Update the post list by filtering out the deleted post
          setPosts((prevPosts) =>
            prevPosts.filter((post) => post.id !== postId)
          );
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
          alert("Failed to delete the post.");
        });
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (id && !post) {
    return <p>Loading...</p>;
  }

  if (!id && posts.length === 0) {
    return <p>Loading posts...</p>;
  }

  if (id) {
    // Display a single post if `id` is provided
    return (
      <section className="blog-section">
        <div className="ci-container">
          <h2>{post.title}</h2>
          <div
            className="post-image"
            style={{
              backgroundImage: post.image ? `url(${post.image})` : "none",
            }}
          ></div>
          <i>
            <FontAwesomeIcon icon={faCalendar} />
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </i>
          <p>{post.content}</p>
        </div>
      </section>
    );
  }

  // Display all posts in a table if no `id` is provided
  return (
    <section className="blog-section">
      <table className="blog-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>
                {post.image ? (
                  <img
                    src={`http://localhost:5000${post.image}`}
                    alt={post.title}
                    style={{ width: "100px", height: "auto" }}
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td>{new Date(post.created_at).toLocaleDateString()}</td>
              <td>
                <div className="action-wrapper">
                  <Link
                    to={`/dashboard/update-post/edit-post/${post.id}`}
                    className="edit-btn"
                  >
                    Edit
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(post.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UpdatePost;
