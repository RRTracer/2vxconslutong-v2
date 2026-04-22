import React from "react";

/* Set VITE_DEV_BANNER=true in .env (or in Netlify env vars) to show the banner.
   Remove the variable (or set it to anything else) to hide it. */
const SHOW = import.meta.env.VITE_DEV_BANNER === "true";

const DevBanner = () => {
  if (!SHOW) return null;
  return (
    <div
      role="banner"
      style={{
        background: "#dc2626",
        color: "#fff",
        textAlign: "center",
        padding: "0.45rem 1rem",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.03em",
      }}
    >
      Site en cours de développement — version de prévisualisation
    </div>
  );
};

export default DevBanner;
