"use client";

import { useEffect, useState } from "react";

const sales = [
  {
    text: "20ft Standard Container sold to Orlando, FL",
    time: "2 minutes ago",
  },
  {
    text: "40ft High Cube delivered to Dallas, TX",
    time: "8 minutes ago",
  },
  {
    text: "Reefer Container purchased in Houston, TX",
    time: "15 minutes ago",
  },
  {
    text: "20ft Standard Container delivered to Miami, FL",
    time: "22 minutes ago",
  },
  {
    text: "40ft Standard Container sold to Atlanta, GA",
    time: "31 minutes ago",
  },
  {
    text: "40ft High Cube purchased in Chicago, IL",
    time: "45 minutes ago",
  },
  {
    text: "20ft Container delivered to Phoenix, AZ",
    time: "1 hour ago",
  },
  {
    text: "Reefer Container sold to Los Angeles, CA",
    time: "2 hours ago",
  },
];

export default function RecentSales() {
  const [currentSale, setCurrentSale] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSale((prev) => (prev + 1) % sales.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
   <div
  key={currentSale}
  style={{
    background: "#ecfdf5",
    border: "1px solid #bbf7d0",
    borderRadius: "12px",
    padding: "16px",
    margin: "40px 0",
    fontWeight: "bold",
    color: "#166534",
    transition: "all 0.5s ease",
    animation: "fadeSlide 0.5s ease",
  }}
>
      <div>
        <div>🟢 {sales[currentSale].text}</div>

        <div
          style={{
            marginTop: "6px",
            fontSize: "14px",
            color: "#4b5563",
            fontWeight: "normal",
          }}
        >
          {sales[currentSale].time}
        </div>
      </div>
    </div>
  );
}