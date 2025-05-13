import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

/**
 * Button Component
 *
 * A reusable button component with different variants
 *
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant ('primary', 'secondary')
 * @param {string} props.size - Button size ('sm', 'md', 'lg')
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {function} props.onClick - Click handler function
 * @param {string} props.type - Button type ('button', 'submit', 'reset')
 * @param {ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 */
const Button = ({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  children,
  className = "",
}) => {
  // Build class name based on variant and size
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`.trim();

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
