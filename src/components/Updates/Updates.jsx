import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Updates = () => {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Course/ContactUs</title>
          <link rel="icon" type="image/svg+xml" href="/vite.png" />
          <link rel="canonical" href="https://traininginporur.in/#Updates" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
        <Header />
        <Navbar />
        <section className="h-[654px] p-[1.5rem] flex justify-center items-center text-center">
          <div className="text-3xl font-semibold text-babyPinkColor">
            Updates
            <br />
            <span className="text-xl font-semibold text-blueColor">
              Coming Soon...
            </span>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Updates;
