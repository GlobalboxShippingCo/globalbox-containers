"use client";

type ToastProps = {
  message: string;
};

export default function Toast({ message }: ToastProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        background: "#16a34a",
        color: "white",
        padding: "15px 22px",
        borderRadius: "10px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        fontWeight: "bold",
        zIndex: 9999,
      }}
    >
      ✅ {message}
    </div>
  );
}