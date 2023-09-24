import React from 'react';

function ErrorComponent({ message }) {
  return (
    <div className="error-container" data-testid="error-component">
      <p>{message || "An unexpected error has occurred."}</p>
    </div>
  );
}

export default ErrorComponent;
