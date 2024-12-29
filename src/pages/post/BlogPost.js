import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setError("Failed to load the blog post.");
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <section className="blog-section">
      <div className="ci-container">
        <h2>Recent Blog</h2>
        <div className="blog-wrapper">
          {post.map((post) => (
            <>
              <div
                className="cart-image"
                style={{
                  backgroundImage: post.image ? `url(${post.image})` : "none",
                }}
              ></div>

              <div className="blog-meta">
                <FontAwesomeIcon icon={faCalendar} />
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
              </div>
              <h3>{post.title}</h3>
            </>
          ))}
          <div className="blog-cart">{/* <p>{post.content}</p> */}</div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
