import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const BlogListing = () => {
  const { id } = useParams();
  console.log("Fetched id from URL:", id);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Post ID is missing.");
      return;
    }
    console.log("Fetching post with id:", id);
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="blog-listing-section">
        <div className="ci-container">
          <h2>{post.title}</h2>
          {/* image */}
          <i>
            <FontAwesomeIcon icon={faCalendar} />
            <span>
              {post.created_at
                ? new Date(post.created_at).toLocaleDateString()
                : "Unknown Date"}
            </span>
          </i>
          <p>{post.content}</p>
        </div>
      </section>
    </>
  );
};

export default BlogListing;
