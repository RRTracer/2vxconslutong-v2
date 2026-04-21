import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 36 }}>404 — Page not found</h1>
        <p style={{ color: "var(--muted)" }}>
          The page you're looking for doesn't exist.
        </p>
        <a className="cta" href="/">
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
