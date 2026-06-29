"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

type Props = {
  images: string[];
};

export default function ContainerGallery({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div style={{ marginTop: "40px" }}>
      {/* Main Image */}
      <Image
        src={images[currentIndex]}
        alt="Container"
        width={900}
        height={500}
        onClick={() => setShowLightbox(true)}
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
          borderRadius: "12px",
          cursor: "zoom-in",
        }}
      />

      {/* Thumbnails */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt="Container Thumbnail"
            width={120}
            height={90}
            onClick={() => setCurrentIndex(index)}
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              objectFit: "cover",
              border:
                currentIndex === index
                  ? "3px solid #16a34a"
                  : "2px solid #ddd",
            }}
          />
        ))}
      </div>

      {showLightbox && (
        <Lightbox
          images={images}
          currentIndex={currentIndex}
          onClose={() => setShowLightbox(false)}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  );
}