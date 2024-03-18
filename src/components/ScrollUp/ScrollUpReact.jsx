import React from "react";
import { HiChevronUp } from "react-icons/hi";

const ScrollUpReact = () => {
  const handleClick = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button href="/" className="scrollup" onClick={handleClick}>
        <HiChevronUp className="scrollup__icon" />
      </button>
    </>
  );
};

export default ScrollUpReact;
