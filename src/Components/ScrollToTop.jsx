import React from "react";

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // smooth animation
    });
  };

  return (
    <button 
      onClick={handleClick} 
      className="btn btn-primary scroll-top-btn"
    >
      ↑ Top
    </button>
  );
};

export default ScrollToTop;
