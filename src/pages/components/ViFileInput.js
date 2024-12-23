import React, { useState } from "react";

const ViFileInput = ({ label }) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div className="file-upload-container">
      <div className="message">
        <label htmlFor="image-upload">{label}</label>
        <input
          type="file"
          id="image-upload"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      <div className="image-preview" id="image-preview">
        {image ? (
          <img
            src={image}
            alt="Image Preview"
            style={{ height: "100px", width: "100px" }}
          />
        ) : (
          <p>No image selected</p>
        )}
      </div>
    </div>
  );
};

export default ViFileInput;
