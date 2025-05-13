import React from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";
import "../styles/Input.css";

/**
 * Input Component
 *
 * A reusable text input component with label and validation
 *
 * @param {Object} props - Component props
 * @param {string} props.id - Input ID
 * @param {string} props.label - Input label text
 * @param {string} props.type - Input type (text, email, etc.)
 * @param {string} props.value - Input value
 * @param {function} props.onChange - Change handler function
 * @param {string} props.placeholder - Input placeholder text
 * @param {boolean} props.required - Whether input is required
 * @param {string} props.error - Error message to display
 * @param {string} props.className - Additional CSS classes
 */
const Input = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
  className = "",
}) => {
  // Generate an ID if none is provided
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

  // Determine if input has error
  const hasError = error.length > 0;

  return (
    <div className={`input-container ${className}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`text-input ${hasError ? "input-error" : ""}`}
      />

      {hasError && <Alert type="error" message={error} />}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
