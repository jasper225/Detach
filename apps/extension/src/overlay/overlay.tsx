import React, { useState } from "react";
import "./overlay.css";

function ScrollOverlay() {
  const [visible, setVisible] = useState(false);

  const handleDismiss = () => {
    setVisible(false);
  };
  const handleShowOverlay = () => {
    setVisible(true);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleShowOverlay();
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="detach-overlay">
      <div className="detach-overlay-card">
        <p>You've been scrolling for a while. Take a break?</p>
        <button
          className="detach-btn detach-btn-primary"
          onClick={handleDismiss}
        >
          Take A Break
        </button>
        <button
          className="detach-btn detach-btn-secondary"
          onClick={handleDismiss}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
export default ScrollOverlay;
