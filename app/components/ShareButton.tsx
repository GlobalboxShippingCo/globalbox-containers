"use client";

import { useState } from "react";
import Toast from "./Toast";

export default function ShareButton() {
  const [showToast, setShowToast] = useState(false);

  const sharePage = async () => {
    await navigator.clipboard.writeText(window.location.href);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>
      <button
        onClick={sharePage}
        className="primary-button"
        style={{
          marginLeft: "15px",
          background: "#2563eb",
        }}
      >
        📤 Share Container
      </button>

      {showToast && (
        <Toast message="Container link copied successfully!" />
      )}
    </>
  );
}