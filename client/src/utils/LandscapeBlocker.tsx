import React from "react";

interface LandscapeBlockerProps {
  isLandscape: boolean;
}

export default function LandscapeBlocker({
  isLandscape,
}: LandscapeBlockerProps) {
  if (!isLandscape) return null;

  const blockerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgb(0, 0, 0)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    fontSize: "1.5rem",
    textAlign: "center",
  };

  return (
    <div style={blockerStyle}>
      <p>
        Please rotate your device back to portrait mode for the best experience.
      </p>
    </div>
  );
}
