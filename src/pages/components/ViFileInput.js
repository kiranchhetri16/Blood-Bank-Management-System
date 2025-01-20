import React, { useState } from "react";

const ViFileInput = ({ label, name, handleChange }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // File validation
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      const maxSize = 2 * 1024 * 1024; // 2 MB

      if (!allowedTypes.includes(file.type)) {
        setError("Only JPEG and PNG files are allowed.");
        setImage(null);
        return;
      }

      if (file.size > maxSize) {
        setError("File size must be less than 2MB.");
        setImage(null);
        return;
      }

      // Reset error and set preview image
      setError("");
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);

      // Pass the event to parent component
      if (handleChange) {
        handleChange(event);
      }
    } else {
      setImage(null);
      setError("No file selected.");
    }
  };

  return (
    <div className="file-upload-container">
      <div className="message">
        <label htmlFor={name}>{label}</label>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/*"
          onChange={handleFileChange} // Calls the local handler first
        />
      </div>

      {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

      {/* <div
        className="image-preview"
        id="image-preview"
        style={{ marginTop: "10px" }}
      >
        {image ? (
          <img
            src={image}
            alt="Preview"
            style={{
              height: "100px",
              width: "100px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              objectFit: "cover",
            }}
          />
        ) : (
          <p style={{ fontSize: "14px", color: "#777" }}>No image selected</p>
        )}
      </div> */}
    </div>
  );
};

export default ViFileInput;

