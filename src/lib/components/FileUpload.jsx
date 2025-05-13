import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";
import "../styles/FileUpload.css";

/**
 * FileUpload Component
 *
 * A reusable file upload component with drag and drop support
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Upload label text
 * @param {function} props.onFileSelect - File select handler function
 * @param {number} props.maxSize - Maximum file size in bytes
 * @param {Array} props.acceptedFormats - Array of accepted file formats
 * @param {string} props.error - Error message to display
 * @param {string} props.infoText - Informational text to display
 * @param {string} props.className - Additional CSS classes
 */
const FileUpload = ({
  label = "Upload File",
  onFileSelect,
  maxSize = 500000, // 500KB default
  acceptedFormats = ["image/jpeg", "image/png"],
  error = "",
  infoText = "Upload your photo (JPG or PNG, max size: 500KB).",
  className = "",
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [errorMsg, setErrorMsg] = useState(error);
  const fileInputRef = useRef(null);

  // Handle file validation and selection
  const handleFileValidation = (file) => {
    // Check file type
    if (!acceptedFormats.includes(file.type)) {
      setErrorMsg("Invalid file type. Please upload a supported format.");
      return false;
    }

    // Check file size
    if (file.size > maxSize) {
      setErrorMsg("File too large. Please upload a photo under 500KB");
      return false;
    }

    // Clear any previous errors
    setErrorMsg("");
    return true;
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (handleFileValidation(file)) {
      onFileSelect(file);
    }
  };

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (handleFileValidation(file)) {
        onFileSelect(file);
      }
    }
  };

  // Handle click on the upload area
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={`upload-container ${className}`}>
      <p className="input-label">{label}</p>

      <div
        className={`upload-input-field ${isDragging ? "dragging" : ""}`}
        onClick={handleUploadClick}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <img src="/resources/images/icon-upload.svg" alt="Upload icon" />
        <p className="upload-instruction-text">
          Drag and drop or click to upload
        </p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={acceptedFormats.join(",")}
          className="file-input"
        />
      </div>

      <div className="image-size-instruction-div">
        <img src="/resources/images/icon-info.svg" alt="Info icon" />
        <p className="image-size-text">{infoText}</p>
      </div>

      {errorMsg && <Alert type="error" message={errorMsg} />}
    </div>
  );
};

FileUpload.propTypes = {
  label: PropTypes.string,
  onFileSelect: PropTypes.func.isRequired,
  maxSize: PropTypes.number,
  acceptedFormats: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.string,
  infoText: PropTypes.string,
  className: PropTypes.string,
};

export default FileUpload;
