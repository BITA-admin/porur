import React from "react";
import st from "../../assets/home_image/securitytesting.png";
import api from "../../assets/home_image/Rest-API.png";
import ba from "../../assets/home_image/bba.png";
import fs from "../../assets/home_image/Full-Stack.png";
import uiux from "../../assets/home_image/logo-design.png";
import reactjs from "../../assets/home_image/Reactjs.png";
import angular from "../../assets/home_image/angular.png";
import srn from "../../assets/home_image/service-now.png";

const TopItCoures = () => {
  const clickTop = () => {
    window.scroll({
      top: 0,
    });
  };

  return (
    <>
      <section className="m-auto pb-10">
        <div className=" text-babyPinkColor font-[600] flex flex-col justify-center items-center p-[1.5rem]">
          <h1 className="text-3xl pb-3 text-center">IT Professional Courses</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
          <a href="/uiux" onClick={clickTop}>
            <div className="flex flex-col justify-center items-center">
              <img src={uiux} alt="JAVA" className="w-28 pb-1" />
              <h3 className="text-babyPinkColor">UI/UX</h3>
              <h3>Design</h3>
            </div>
          </a>
          <a href="/reactJS" onClick={clickTop}>
            <div className="flex flex-col justify-center items-center">
              <img src={reactjs} alt="Web Design" className="w-28" />
              <h3 className="text-babyPinkColor">React JS</h3>
              <h3>Certification</h3>
            </div>
          </a>
          <a href="/angularJs" onClick={clickTop}>
            <div className="flex flex-col justify-center items-center">
              <img src={angular} alt="Python" className="w-28" />
              <h3 className="text-babyPinkColor">Angular JS</h3>
              <h3>Certification</h3>
            </div>
          </a>
          <a href="/fsd" onClick={clickTop}>
            <div className="flex flex-col justify-center items-center">
              <img src={fs} alt="SQL" />
              <h3 className="text-babyPinkColor">Full Stack Developer</h3>
              <h3>Certification</h3>
            </div>
          </a>
          <a href="/restapi" onClick={clickTop}>
            <div className="flex flex-col justify-center items-center">
              <img src={api} alt="Data Structure" className="w-[9.5rem] pb-1" />
              <h3 className="text-babyPinkColor">REST API</h3>
              <h3>Certification</h3>
            </div>
          </a>
          <a href="/securitytesting" onClick={clickTop}>
            <div className="flex flex-col justify-center items-center">
              <img src={st} alt="C/C++" className="w-[8rem] pb-2" />
              <h3 className="text-babyPinkColor"> Security Testing</h3>
              <h3>Certification</h3>
            </div>
          </a>

          <a href="/businessanalyst" onClick={clickTop}>
            <div className="flex flex-col justify-center items-center">
              <img src={ba} alt="Data Science" className="w-[7.5rem]" />
              <h3 className="text-babyPinkColor"> Buisness Analyst</h3>
              <h3>Certification</h3>
            </div>
          </a>

          <a href="/servicenow" onClick={clickTop}>
            <div className="flex flex-col justify-center items-center">
              <img src={srn} alt="Full Stack" className="w-[8rem] pb-2" />
              <h3 className="text-babyPinkColor">ServiceNow</h3>
              <h3>Certification</h3>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default TopItCoures;
