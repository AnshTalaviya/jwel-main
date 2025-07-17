import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaRegCopy,
  FaTimes,
} from "react-icons/fa";

const ShareDialog = ({ show, onClose, productUrl, title }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(productUrl);
    alert("Link copied to clipboard!");
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl shadow-xl w-80 relative text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <FaTimes size={18} />
        </button>
        <h2 className="text-lg font-semibold mb-4">Share This Product</h2>
        <div className="flex justify-center gap-5 text-2xl">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${productUrl}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:scale-110 transition-transform"
          >
            <FaFacebookF />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${productUrl}&text=${title}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:scale-110 transition-transform"
          >
            <FaTwitter />
          </a>
          <a
            href={`https://wa.me/?text=${title}%20${productUrl}`}
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:scale-110 transition-transform"
          >
            <FaWhatsapp />
          </a>
          <button
            onClick={copyToClipboard}
            className="text-gray-700 hover:scale-110 transition-transform"
          >
            <FaRegCopy />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareDialog;
