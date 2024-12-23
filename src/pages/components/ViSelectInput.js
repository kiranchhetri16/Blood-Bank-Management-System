import React from "react";

const ViSelectInput = ({
  title,
  name,
  value,
  handleInputChange,
  options,
  ...props
}) => {
  return (
    <div className="input-label">
      <label>{title}</label>
      <select
        name={name}
        onChange={props.handleChange}
        value={props.value}
        {...props}
        required
      >
        <option value="">Select your blood type</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ViSelectInput;
