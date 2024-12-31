import React from "react";

const ViSelect = ({
  title,
  name,
  value,
  handleInputChange,
  options,
  label,
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
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ViSelect;
