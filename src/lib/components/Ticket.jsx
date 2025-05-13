import React from "react";
import PropTypes from "prop-types";
import "../styles/Ticket.css";

/**
 * Ticket Component
 *
 * A component to display the generated conference ticket
 *
 * @param {Object} props - Component props
 * @param {string} props.name - Attendee's name
 * @param {string} props.github - Attendee's GitHub username
 * @param {string} props.avatarSrc - Path to attendee's avatar image
 * @param {string} props.date - Conference date
 * @param {string} props.venue - Conference venue
 * @param {string} props.className - Additional CSS classes
 */
const Ticket = ({
  name,
  github,
  avatarSrc = "/resources/images/image-avatar.jpg",
  date = "Jan 31, 2025",
  venue = "Austin, TX",
  className = "",
}) => {
  // Remove @ from GitHub username if present
  const githubUsername = github.startsWith("@") ? github : `@${github}`;

  return (
    <div className={`ticket-container ${className}`}>
      <div className="ticket-header-row">
        <div className="logo-text-container">
          <img
            src="/resources/images/logo-mark.svg"
            alt="Conference Logo"
            className="ticket-logo"
          />
          <p className="ticket-heading">Coding Conf</p>
        </div>
        <p className="date-venue-text">
          {date} / {venue}
        </p>
      </div>

      <div className="user-container">
        <img src={avatarSrc} alt={`${name}'s avatar`} className="user-image" />
        <div className="user-info-row">
          <p className="user-name">{name}</p>
          <div className="github-row">
            <img
              src="/resources/images/icon-github.svg"
              alt="GitHub icon"
              className="github-icon"
            />
            <p className="github-username">{githubUsername}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string,
  date: PropTypes.string,
  venue: PropTypes.string,
  className: PropTypes.string,
};

export default Ticket;
