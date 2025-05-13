import React, { useState } from "react";
import { Header, FileUpload, Input, Button, Ticket } from "../lib/components";
import "./styles.css";

/**
 * TicketGenerator Component
 *
 * The main component for generating conference tickets
 */
const TicketGenerator = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    githubUsername: "",
    avatar: null,
  });

  // State for form validation
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    githubUsername: "",
    avatar: "",
  });

  // State for ticket generation
  const [ticketGenerated, setTicketGenerated] = useState(false);

  // Handle input changes
  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });

    // Clear error when user types
    setFormErrors({
      ...formErrors,
      [field]: "",
    });
  };

  // Handle file upload
  const handleFileSelect = (file) => {
    // Create Object URL for preview
    const avatarUrl = URL.createObjectURL(file);

    setFormData({
      ...formData,
      avatar: avatarUrl,
    });

    setFormErrors({
      ...formErrors,
      avatar: "",
    });
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
      isValid = false;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate GitHub username
    if (!formData.githubUsername.trim()) {
      newErrors.githubUsername = "Please enter your GitHub username.";
      isValid = false;
    }

    // Update error state
    setFormErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleGenerateTicket = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Generate ticket
      setTicketGenerated(true);
    }
  };

  return (
    <div className="ticket-generator">
      <Header />

      <div className="main-container">
        {!ticketGenerated ? (
          <>
            <h1 className="heading-text">
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <p className="subheading-text">
              Secure your spot at next year's biggest coding conference.
            </p>

            <form className="form-container">
              <FileUpload
                label="Upload Avatar"
                onFileSelect={handleFileSelect}
                error={formErrors.avatar}
              />

              <Input
                label="Full Name"
                value={formData.fullName}
                onChange={(e) => handleInputChange(e, "fullName")}
                error={formErrors.fullName}
                required
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange(e, "email")}
                error={formErrors.email}
                required
              />

              <Input
                label="GitHub Username"
                placeholder="@yourusername"
                value={formData.githubUsername}
                onChange={(e) => handleInputChange(e, "githubUsername")}
                error={formErrors.githubUsername}
                required
              />

              <Button
                onClick={handleGenerateTicket}
                variant="primary"
                size="lg"
                className="generate-button"
              >
                Generate My Ticket
              </Button>
            </form>
          </>
        ) : (
          <div className="output-container">
            <h1 className="heading-text dynamic-heading-text">
              Congrats,{" "}
              <span className="name-highlight">{formData.fullName}</span>! Your
              ticket is ready.
            </h1>
            <p className="subheading-text dynamic-subheading-text">
              We've emailed your ticket to
              <span className="email-highlight"> {formData.email} </span>
              and will send updates in the run up to the event.
            </p>

            <Ticket
              name={formData.fullName}
              github={formData.githubUsername}
              avatarSrc={
                formData.avatar || "/resources/images/image-avatar.jpg"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketGenerator;
