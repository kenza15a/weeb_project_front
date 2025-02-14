import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 100) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 100) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
      <button
        onClick={scrollToTop}
        className={`p-3 bg-purple-600  text-white rounded-full shadow-lg transition-all hover:bg-purple-700 ${
          showScroll ? "opacity-40" : "opacity-0"
        }`}
      >
        <FaArrowUp size={20} />
      </button>
      <button
        onClick={scrollToBottom}
        className="p-3 bg-purple-600 text-white rounded-full shadow-lg transition-all hover:bg-purple-700"
      >
        <FaArrowDown size={20} />
      </button>
    </div>
  );
};

export default ScrollButtons;
