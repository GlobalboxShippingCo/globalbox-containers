"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function ContainerGallery({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div style={{ marginTop: "40px" }}>
      {/* Main Image */}
      <Image
        src={selectedImage}
        alt="Container"
        width={900}
        height={500}
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
          borderRadius: "12px",
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
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            alt="Container Thumbnail"
            width={120}
            height={90}
            onClick={() => setSelectedImage(image)}
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              objectFit: "cover",
              border:
                selectedImage === image
                  ? "3px solid #16a34a"
                  : "2px solid #ddd",
            }}
          />
        ))}
      </div>
    </div>
  );
}