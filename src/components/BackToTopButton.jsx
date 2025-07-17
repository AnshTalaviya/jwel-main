// components/BackToTopButton.jsx
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-black text-white hover:bg-gray-800 transition duration-300 shadow-lg"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
};

export default BackToTopButton;
