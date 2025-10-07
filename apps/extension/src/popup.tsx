import React from "react";
import ReactDOM from "react-dom/client";

var browserApi = typeof browser !== "undefined" ? browser : chrome;

function Popup() {
  const handlePing = () => {
    browserApi.runtime.sendMessage({ type: "PING" }, (res: any) => {
      console.log("Popup got response:", res);
    });
  };

  return (
    <div style={{ padding: "1rem", width: 250, textAlign: "center" }}>
      <h3>Detach</h3>
      <p>Take a breath. You're doing great.</p>
      <button onClick={handlePing}>Ping Background</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Popup />);
