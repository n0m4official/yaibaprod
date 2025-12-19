"use client";

import { useState } from "react";

export default function Lightbox({ images }) {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="flex gap-4 w-full overflow-hidden">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className="cursor-pointer flex-1 overflow-hidden rounded-lg border border-white/10 hover:opacity-80 transition"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[9999] cursor-pointer"
          onClick={() => setActive(null)}
        >
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
