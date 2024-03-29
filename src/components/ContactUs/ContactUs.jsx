import React, { useRef, useState } from "react";
import emailJs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  IoCall,
  IoMail,
  IoLocationSharp,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

import { message } from "antd";

const ContactUs = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailJs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((res) => {
        message.success("Email sent successfully", res);
        clearFormFields();
        setTimeout(() => {
          message.destroy();
        }, 3000);
      })
      .catch((err) => {
        message.error("Try again...!!!", err);
        setTimeout(() => {
          message.destroy();
        }, 3000);
      });
  };

  const clearFormFields = () => {
    setFormData({
      user_name: "",
      user_phone: "",
      user_email: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Course/ContactUs</title>
          <link rel="icon" type="image/svg+xml" href="/vite.png" />
          <link rel="canonical" href="https://traininginporur.in/#Contactus" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
        <Header />
        <Navbar />

        <section className="bg-textColor flex flex-col justify-center items-center p-[1.5rem] pb-10">
          <div className="text-babyPinkColor font-semibold text-3xl">
            <h1>Contact Us</h1>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 p-8 sm:p-12">
            <div>
              <div className="flex flex-col space-y-8 justify-between items-center">
                <div className="text-blueColor text-2xl font-semibold">
                  <p className="text-2xl font-semibold ">
                    Tell us a little about{" "}
                    <span className="text-babyPinkColor">yourself</span>
                  </p>
                  <p>
                    and we’ll be in{" "}
                    <span className="text-babyPinkColor">touch right</span>{" "}
                    <br /> <span className="text-babyPinkColor">away</span>
                  </p>
                </div>
              </div>
              <div className="text-blueColor pt-10 flex flex-col space-y-6  md:items-start text-xl">
                <div className="flex space-x-2">
                  <IoCall className="text-babyPinkColor" />
                  <span>+91 99403 24626</span>
                </div>
                <div className="flex space-x-2">
                  <IoMail className="text-babyPinkColor" />
                  <span>info@bitaacademy.com</span>
                </div>
                <div className="flex space-x-2">
                  <IoLocationSharp className="text-babyPinkColor" />
                  <span>Ramapuram, Chennai - 600089</span>
                </div>
              </div>
              <div className="text-blueColor pt-10 flex justify-center md:justify-start space-x-4 text-2xl">
                <a href="https://www.instagram.com/bitahelpdesk/">
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
            <div className="p-8 text-gray-600">
              <form
                ref={form}
                onSubmit={(e) => sendEmail(e)}
                className="flex flex-col space-y-4"
              >
                <div>
                  <label htmlFor="user_name" className="text-blueColor text-sm">
                    Little about you{" "}
                    <span className="text-babyPinkColor">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleInputChange}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-babyPinkColor"
                  />
                </div>
                <div className="flex flex-col gap-5 md:flex-row">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      name="user_phone"
                      pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                      value={formData.user_phone}
                      title="Please enter a valid phone number"
                      onChange={handleInputChange}
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-babyPinkColor"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-babyPinkColor"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Message Here..."
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-babyPinkColor"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block self-center md:self-end bg-babyPinkColor text-textColor font-semibold rounded-full px-6 py-2 uppercase text-sm"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.6360252251063!2d80.18322717547134!3d13.030528741090466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d454408c93%3A0xf439976d9ab8a2f2!2sBITA%20IT%20Academy!5e0!3m2!1sen!2sin!4v1694772895127!5m2!1sen!2sin"
              className="w-[20rem] h-[20rem] md:w-[60rem] md:h-[20rem]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
