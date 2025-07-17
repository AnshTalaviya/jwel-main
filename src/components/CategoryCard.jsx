import React from "react";

const CategoryCard = ({ image, title, category }) => {
  return (
    <div className="relative group w-full sm:w-1/4 h-[400px] overflow-hidden">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Text Content */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white space-y-2 z-10">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm uppercase tracking-wide">{category}</p>
        <button className="mt-2 px-4 py-1 text-sm border border-white hover:bg-white hover:text-black transition duration-300 hidden group-hover:inline-block">
          See More Products
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
