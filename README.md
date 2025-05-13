# Conference Ticket Generator Component Library

A reusable component library for building conference ticket generation interfaces.

## Features

- Fully responsive design
- Modular component architecture
- Form validation
- Custom styling without external UI libraries
- Live ticket preview generation

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/conference-ticket-generator.git
cd conference-ticket-generator
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

## Dependencies

- React: Frontend library for building user interfaces
- PropTypes: Runtime type checking for React props
- React DOM: React package for working with the DOM

```bash
npm install react react-dom prop-types
```

## Usage

### Components

The library includes the following components:

1. **Button**: Customizable button component
2. **Input**: Text input field with validation
3. **FileUpload**: File upload component with drag and drop support
4. **Alert**: Error message component
5. **Ticket**: Conference ticket display component
6. **Header**: Application header component

### Example Usage

```jsx
import React, { useState } from "react";
import { Button, Input, FileUpload, Ticket, Header } from "./lib/components";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    githubUsername: "",
    avatar: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission logic
  };

  return (
    <div className="app">
      <Header />
      <div className="form-container">
        <Input
          label="Full Name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          required
        />
        {/* More form fields */}
        <Button onClick={handleSubmit}>Generate My Ticket</Button>
      </div>
      <Ticket
        name={formData.fullName}
        github={formData.githubUsername}
        avatar={formData.avatar}
      />
    </div>
  );
}
```

## Component Documentation

### Button

```jsx
import { Button } from "./lib/components";

<Button
  onClick={handleClick}
  type="primary" // or "secondary"
  disabled={false}
>
  Button Text
</Button>;
```

### Input

```jsx
import { Input } from "./lib/components";

<Input
  label="Input Label"
  type="text" // or "email", "password", etc.
  value={inputValue}
  onChange={handleChange}
  placeholder="Placeholder text"
  required={true}
  error="Error message" // optional
/>;
```

### FileUpload

```jsx
import { FileUpload } from "./lib/components";

<FileUpload
  label="Upload File"
  onFileSelect={handleFileSelect}
  maxSize={500000} // 500KB
  acceptedFormats={["image/jpeg", "image/png"]}
  error="Error message" // optional
/>;
```

### Alert

```jsx
import { Alert } from "./lib/components";

<Alert
  type="error" // or "warning", "info", "success"
  message="Alert message"
  visible={true}
/>;
```

### Ticket

```jsx
import { Ticket } from "./lib/components";

<Ticket
  name="John Doe"
  email="john@example.com"
  github="johndoe"
  avatar="/path/to/avatar.jpg"
/>;
```

### Header

```jsx
import { Header } from "./lib/components";

<Header logoSrc="/path/to/logo.svg" altText="Logo alt text" />;
```

## Demo Pages

The project includes two demo pages:

1. **TicketGenerator**: Main page for generating conference tickets
2. **App**: Entry point that renders the TicketGenerator

## Development

To add new components:

1. Create a new component file in `src/lib/components/`
2. Create a corresponding CSS file in `src/lib/styles/`
3. Export the component from the index.js file in the components directory
4. Use the component in your application

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Your Name - [Your GitHub](https://github.com/yourusername)
