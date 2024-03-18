import React from "react";
import "./ScrollUp.css";
import { HiChevronUp } from "react-icons/hi";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollup = document.querySelector(".scrollup");
    if (this.scrollY >= 360) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
  });
  return (
    <>
      <a href="/" className="scrollup">
        <HiChevronUp className="scrollup__icon" />
      </a>
    </>
  );
};

export default ScrollUp;
