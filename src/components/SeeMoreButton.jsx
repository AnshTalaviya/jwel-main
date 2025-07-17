import React from 'react';

const SeeMoreButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300"
    >
      SEE MORE
    </button>
  );
};

export default SeeMoreButton;
