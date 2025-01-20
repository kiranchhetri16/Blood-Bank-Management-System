import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const BlogListing = () => {
  const { id } = useParams(); // Get the current post id from the URL
  const [posts, setPosts] = useState([]); // Ensure posts is always an array
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all posts from the API
    axios
      .get("http://localhost:5000/api/posts")
      .then((response) => {
        console.log("API Response: ", response.data); // Log the response data
        setPosts(response.data); // Set all posts (ensure it's an array)
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setError("Failed to load posts.");
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (posts.length === 0) {
    return <p>No posts available.</p>;
  }

  // Make sure posts is an array before calling .find()
  const currentPost = Array.isArray(posts)
    ? posts.find((post) => post.id === parseInt(id))
    : null;

  if (!currentPost) {
    return <p>Post not found.</p>;
  }

  // Debug the image URL
  console.log("Current Post Image URL:", currentPost.image);

  return (
    <section className="blog-listing-section">
      <div className="ci-container">
        {/* Display the current post */}
        <div className="current-post">
          <h2>{currentPost.title}</h2>
          <div
            className="post-image"
            style={{
              backgroundImage: currentPost.image
                ? `url(http://localhost:5000${currentPost.image})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <i>
            <FontAwesomeIcon icon={faCalendar} />
            <span>{new Date(currentPost.created_at).toLocaleDateString()}</span>
          </i>
          <p>{currentPost.content}</p>
        </div>

        {/* Display other posts */}
        <h2 className="related-post">Related Post</h2>
        <div className="blog-wrapper">
          {posts
            .filter((post) => post.id !== parseInt(id)) // Exclude the current post from the list
            .map((post) => (
              <div className="cart-wrapper" key={post.id}>
                <div
                  className="cart-image"
                  style={{
                    backgroundImage: post.image
                      ? `url(${
                          post.image.startsWith("http")
                            ? post.image
                            : `http://localhost:5000${post.image}`
                        })`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="image-cart"></div>
                <i className="related-icon">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                </i>
                <Link to={`/listingpage/${post.id}`}>
                  <h3>{post.title}</h3>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListing;
