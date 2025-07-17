// ChatPopup.jsx
import React, { useState } from 'react';
import { X } from "lucide-react";

const ChatPopup = ({ onClose }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const whatsappUrl = `https://wa.me/918140240253?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-24 left-6 z-50 w-80 bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="bg-black text-white p-4 flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">Hi there</p>
          <p className="text-sm">We are here Happy to help</p>
        </div>
        <button onClick={onClose}>
          <X className="text-white w-5 h-5" />
        </button>
      </div>

      <div className="p-4">
        {/* <div className="flex items-center gap-2 mb-4">
          <img
            src="https://img.icons8.com/ios/50/user-male-circle.png"
            alt="Pratik"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">ABC</p>
            <p className="text-sm text-gray-500">Owner</p>
          </div>
        </div>
        <p className="bg-gray-100 p-2 rounded-md mb-4 text-sm">Hello! I'm ABC from the Owner.</p> */}
        <textarea
          className="w-full border p-2 rounded-md text-sm mb-2"
          rows="2"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-black transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPopup;
