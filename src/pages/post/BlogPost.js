import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endpoint = id
      ? `http://localhost:5000/api/posts/${id}` // Single post
      : `http://localhost:5000/api/posts`; // All posts

    axios
      .get(endpoint)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setError("Failed to load the blog post(s).");
      });
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  if (id) {
    // Display a single post if `id` is provided
    return (
      <section className="blog-section">
        <div className="ci-container">
          <h2>{post.title}</h2>
          <div
            className="cart-image"
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

  // Display all posts if no `id` is provided
  return (
    <section className="blog-section">
      <div className="ci-container">
        <h2>Recent Blog</h2>
        <div className="blog-wrapper">
          {post.map((post) => (
            <div className="cart-wrapper" key={post.id}>
              <div
                className="cart-image"
                style={{
                  backgroundImage: post.image
                    ? `url(http://localhost:5000${post.image})`
                    : "none",
                  backgroundSize: "cover",
                }}
              ></div>
              <i>
                <FontAwesomeIcon icon={faCalendar} />
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
              </i>
              <Link to={`/listingpage/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
            </div>
          ))}
        </div>
        <div className="read-more">
          Read More <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
