// components/SendButton.jsx

import React from "react";

const SendButton = ({ onClick, label = "Send" }) => {
  return (
  
    <button
      type="submit"
      onClick={onClick}
      className="bg-black text-white px-8 py-3 rounded-2xl shadow-md hover:bg-gray-800  transition"
    >
      {label}
    </button>
  );
};

export default SendButton;
