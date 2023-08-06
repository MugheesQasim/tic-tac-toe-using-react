import React from 'react';
import "../style/ResetButton.css"

const ResetButton = () => {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <button className="button" onClick={handleReset}>Reset All Components</button>
  );
};

export default ResetButton;
