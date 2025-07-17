// ChatBubble.jsx
import React, { useEffect, useState } from 'react';
import ChatPopup from './ChatPopup'; // New popup component

const ChatBubble = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const footer = document.getElementById('footer');

    const handleScroll = () => {
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight;
      setIsVisible(isInView);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-white p-4 rounded-full shadow-md cursor-pointer transition-all duration-500 ease-in-out transform ${
          isVisible ? 'opacity-100 scale-100 animate-bounce' : 'opacity-0 scale-90 pointer-events-none'
        }`}
        onClick={() => setShowPopup(true)}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5X3fy2scVIASQgDFqe8ubFSin78nEID2PR4TOm0LnqFqus2YXf2f3QuVfiKSJdGtMaE&usqp=CAU"
          alt="Chat"
          className="w-6 h-6"
        />
        <span className="text-black font-medium">Hi</span>
      </div>

      {showPopup && <ChatPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default ChatBubble;
