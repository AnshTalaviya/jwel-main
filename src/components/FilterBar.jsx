import React from "react";

const FilterBar = ({ onAvailabilityChange, onPriceChange }) => {
  return (
    <div className="flex justify-center flex-col sm:flex-row gap-4 p-4 bg-rose-100/30 backdrop-blur-md border border-white/30 rounded-lg shadow-lg mx-4 mt-4">
      <select
        onChange={(e) => onAvailabilityChange(e.target.value)}
        className="bg-white/60 border border-rose-300 rounded px-4 py-2 text-gray-700 w-full sm:w-auto"
      >
        <option value="">Availability</option>
        <option value="In Stock">In Stock</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>

      <select
        onChange={(e) => onPriceChange(e.target.value)}
        className="bg-white/60 border border-rose-300 rounded px-4 py-2 text-gray-700 w-full sm:w-auto"
      >
        <option value="">Price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      {/* Add More Filters here if needed */}
    </div>
  );
};

export default FilterBar;
