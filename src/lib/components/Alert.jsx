import React from "react";
import PropTypes from "prop-types";
import "../styles/Alert.css";

/**
 * Alert Component
 *
 * A reusable alert/message component for displaying errors, warnings, etc.
 *
 * @param {Object} props - Component props
 * @param {string} props.type - Alert type ('error', 'warning', 'info', 'success')
 * @param {string} props.message - Alert message text
 * @param {boolean} props.visible - Whether alert is visible
 * @param {string} props.className - Additional CSS classes
 */
const Alert = ({ type = "error", message, visible = true, className = "" }) => {
  if (!visible || !message) return null;

  return <p className={`alert-text alert-${type} ${className}`}>{message}</p>;
};

Alert.propTypes = {
  type: PropTypes.oneOf(["error", "warning", "info", "success"]),
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  className: PropTypes.string,
};

export default Alert;
