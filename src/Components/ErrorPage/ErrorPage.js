import React from 'react';

function ErrorComponent({ message }) {
  return (
    <div className="error-container">
      <p>{message || "An unexpected error has occurred."}</p>
    </div>
  );
}

export default ErrorComponent;

