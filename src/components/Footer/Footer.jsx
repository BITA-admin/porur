import React from "react";
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import logo from "../../assets/home_image/bita-logo.png";

const Footer = () => {
  return (
    <>
      <section className="bg-darkBlueColor text-textColor pt-5">
        <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center p-[1.5rem] gap-5">
          <div className="logo">
            <a href="https://traininginporur.in">
              <img className="w-32" src={logo} alt="BITA_LOGO" />
            </a>
          </div>
          <div>
            <p className="text-center text-[14px] ">
              Ramapuram <br />
              No: 5/48, Valluvar Salai, Ramapuram, Chennai - 600089.
              <br /> Phone: +91 9566004626
            </p>
          </div>
          <div>
            <p className="text-center text-[14px] ">
              Madipakkam <br />
              No: 1/37, Bharathiyar Street , Moovarasampet, Chennai - 600091.
              <br />
              Phone: +91 9940324626
            </p>
          </div>
          <div className="text-babyPinkColor flex space-x-4 text-2xl">
            <a
              href="https://www.instagram.com/bitahelpdesk/"
              rel="noopener norefler"
            >
              <IoLogoInstagram />
            </a>
            <a href="https://www.linkedin.com/company/bita-it-training-academy/">
              <IoLogoLinkedin />
            </a>
            <a href="https://twitter.com/Bitaaacademy">
              <IoLogoTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UC01fbEKhsxSRx-Sycvc4HWw">
              <IoLogoYoutube />
            </a>
            <a href="https://www.facebook.com/BitaAcademy/">
              <IoLogoFacebook />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <hr className="w-[90%]" />
          <p className="text-[12.75px] text-center p-2">
            Copyrights © 2023 Bit Park Private Limited · Privacy Policy · All
            Rights Reserved · Made in BIT Park Pvt Ltd
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
