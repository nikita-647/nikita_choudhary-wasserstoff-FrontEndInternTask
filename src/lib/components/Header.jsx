import React from "react";
import PropTypes from "prop-types";
import "../styles/Header.css";

/**
 * Header Component
 *
 * A reusable header component for the application
 *
 * @param {Object} props - Component props
 * @param {string} props.logoSrc - Path to logo image
 * @param {string} props.altText - Alt text for logo image
 * @param {string} props.className - Additional CSS classes
 */
const Header = ({
  logoSrc = "/resources/images/logo-full.svg",
  altText = "Conference Logo",
  className = "",
}) => {
  return (
    <div className={`header ${className}`}>
      <img src={logoSrc} alt={altText} className="logo-image" />
    </div>
  );
};

Header.propTypes = {
  logoSrc: PropTypes.string,
  altText: PropTypes.string,
  className: PropTypes.string,
};

export default Header;
