import React from "react";
import { IoStarSharp } from "react-icons/io5";

export default function StarRating({
  rating,
  starSize,
}: {
  rating: number;
  starSize: number;
}) {
  return (
    <div className="flex gap-1 text-star">
      {Array.from({ length: rating }).map((_, idx) => (
        <IoStarSharp key={idx} />
      ))}
      <span
        className="overflow-hidden"
        style={{ width: (rating % 1) * starSize }}
      >
        <IoStarSharp />
      </span>
    </div>
  );
}
