"use client";

type LightboxProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.92)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "25px",
          fontSize: "35px",
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        ✕
      </button>

      {/* Previous */}
      <button
        onClick={onPrevious}
        style={{
          position: "absolute",
          left: "30px",
          fontSize: "45px",
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        ‹
      </button>

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="Container"
        style={{
          maxWidth: "90%",
          maxHeight: "85%",
          borderRadius: "12px",
        }}
      />

      {/* Next */}
      <button
        onClick={onNext}
        style={{
          position: "absolute",
          right: "30px",
          fontSize: "45px",
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
}