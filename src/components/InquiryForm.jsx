import React from "react";

const InquiryForm = ({ product, onClose }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    const message = `Hello, I am interested in:
*${product.title}* (ID: ${product.id})
Image: ${product.imageFront}
My name is ${name}.`;

    const whatsappUrl = `https://wa.me/918140240253?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    onClose(); // Close the form
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Product Image */}
        <div className="flex flex-col items-center mb-4">
          {product?.imageFront && (
            <img
              src={product.imageFront}
              alt={product.title}
              className="w-32 h-32 object-cover rounded mb-2 border"
            />
          )}
          <h2 className="text-lg font-semibold text-center">{product.title}</h2>
        </div>

        {/* Inquiry Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Send to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
