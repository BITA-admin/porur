import React from "react";
import AutomationTesting from "../CourseTabs/AutomationTesting";
import Others from "../CourseTabs/Others";
import WebDevelopment from "../CourseTabs/WebDevelopment";
import course_img from "../../assets/home_image/3.png";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Courses = () => {
  return (
    <>
      <div>
        <Helmet>
          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/vite.png" />
          {/* <link rel="canonical" href="https://traininginporur.in/#Courses" /> */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>courses</title>
        </Helmet>
        <Header />
        <Navbar />
        <section className="bg-darkBlueColor m-auto p-[1.5rem]">
          <div className="items-center justify-center">
            <div className="flex flex-col md:flex-row md:-mb-6 justify-between items-center">
              <div className="flex flex-col gap-5 md:pl-5 pl-0 pt-3">
                <p className="text-white text-m  md:text-2xl md:text-left font-semibold text-center">
                  "Motivating Individuals, Building Hope for the Future.
                  <br />
                  Behold the Professional Course Collection by BITA."
                </p>
                <h1 className="text-babyPinkColor sm:text-m md:text-2xl md:text-left font-semibold text-center">
                  100+ Courses
                </h1>
              </div>
              <div>
                <h1 className=" text-white text-3xl font-bold text-center">
                  Courses
                </h1>
                <img src={course_img} alt="course img" className="h-72" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-textColor p-[1.5rem]">
            <div>
              <p className="text-textColor2 text-m font-normal leading-7 text-center md:text-left">
                We Offer you a solid learning platform that enables you to
                choose the right one from the variety of courses we have on
                Mobile Development, Web Development, Software Development,
                Software Testing, Data Analytics, Amazon Web Services and also
                on the latest trending technologies like IOT.
              </p>
              <p className="text-textColor2 text-m font-normal leading-7 pt-2 text-center md:text-left">
                Our Corporate Trainers has more than 12+ years of experience and
                their unique training approach helps you gain good knowledge and
                help you achieve certification in the course that you enroll
                for.
              </p>
            </div>

            <div className="p-[1.5rem]">
              <div>
                <h1 className="text-babyPinkColor text-xl font-semibold pb-2">
                  Web Development (4)
                </h1>
                <hr className="w-90% border border-blueColor opacity-20" />
              </div>
              <WebDevelopment />
            </div>
            <div className="p-[1.5rem]">
              <div>
                <h1 className="text-babyPinkColor text-xl font-semibold pb-2">
                  Automation Testing (3)
                </h1>
                <hr className="w-90% border border-blueColor opacity-20" />
              </div>
              <AutomationTesting />
            </div>
            <div className="p-[1.5rem]">
              <div>
                <h1 className="text-babyPinkColor text-xl font-semibold pb-2">
                  others (4)
                </h1>
                <hr className="w-90% border border-blueColor opacity-20" />
              </div>
              <Others />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Courses;
