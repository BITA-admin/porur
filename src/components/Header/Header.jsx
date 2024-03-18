import React from "react";
import logo from "../../assets/home_image/bita-logo.png";

const Header = () => {
  return (
    <>
      <section className="m-auto bg-darkBlueColor">
        <div className="headerPage flex flex-col md:flex-row  justify-between items-center p-[1rem]">
          <div className="logo">
            <a href="/#">
              <img className="w-28 md:w-32" src={logo} alt="BITA_LOGO" />
            </a>
          </div>
          <div className="flex headerLeftContent text-textColor md:text-[12px] flex-col justify-center pt-2  text-[9.5px]  md:flex">
            <h2>
              info@bitaacademy.com | Classroom - 95660 04626 | Online - 99403
              24626
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
