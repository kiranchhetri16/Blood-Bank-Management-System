import React from "react";

const ViInput = ({
  type,
  title,
  name,
  handleInputChange,
  value,
  errMessage,
  ...props
}) => {
  return (
    <div className="input-label">
      <label>{title}</label>
      <input
        type={type}
        onChange={props.handleChange}
        name={name}
        value={props.value}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default ViInput;
