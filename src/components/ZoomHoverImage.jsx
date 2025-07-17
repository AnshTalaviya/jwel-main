import React, { useState, useRef } from "react";

const ZoomHoverImage = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div
      className="relative w-full h-auto overflow-hidden rounded-xl shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      ref={imageRef}
    >
      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover block"
      />

      {/* Zoom Box */}
      {hovered && (
        <div
          className="absolute w-32 h-32 border-2 border-gray-300 rounded shadow-lg overflow-hidden z-10 pointer-events-none"
          style={{
            top: `${position.y - 64}px`,
            left: `${position.x - 64}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: "600%",
            backgroundPosition: `${(position.x / imageRef.current.offsetWidth) * 100}% ${(position.y / imageRef.current.offsetHeight) * 100}%`,
          }}
        />
      )}
    </div>
  );
};

export default ZoomHoverImage;
