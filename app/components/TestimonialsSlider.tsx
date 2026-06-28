"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Michael T.",
    location: "Orlando, FL",
    text: "Excellent service! Our container arrived on time and in excellent condition. Highly recommended.",
  },
  {
    name: "Sarah L.",
    location: "Jacksonville, FL",
    text: "The ordering process was simple and delivery was exactly on schedule.",
  },
  {
    name: "David R.",
    location: "Miami, FL",
    text: "Professional team and great prices. I'll definitely buy again.",
  },
  {
    name: "Emily S.",
    location: "Tampa, FL",
    text: "Fantastic customer support and a very smooth purchasing experience.",
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="service-card">
      <div
        style={{
          fontSize: "24px",
          color: "#fbbf24",
          marginBottom: "12px",
        }}
      >
        ⭐⭐⭐⭐⭐
      </div>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.7",
          minHeight: "80px",
        }}
      >
        "{reviews[current].text}"
      </p>

      <h4 style={{ marginTop: "20px" }}>
        - {reviews[current].name}, {reviews[current].location}
      </h4>
    </div>
  );
}