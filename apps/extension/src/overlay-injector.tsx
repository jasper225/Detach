import React from "react";
import ReactDOM from "react-dom/client";
import ScrollOverlay from "./overlay/overlay";

// Create container
const container = document.createElement("div");
container.id = "detach-overlay-root";
document.body.appendChild(container);

// Create root and render
const root = ReactDOM.createRoot(container);
root.render(<ScrollOverlay />);
