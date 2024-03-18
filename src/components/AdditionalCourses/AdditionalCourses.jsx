import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import Sales_f from "../../assets/home_image/Salesforce-logo.png";
import Ar from "../../assets/home_image/Azure-PNG.png";
import uip from "../../assets/home_image/Ui-path.png";
import data_s from "../../assets/home_image/data-science.png";
import aws from "../../assets/home_image/AWS-Logo-Transparent-PNG.png";
import vm from "../../assets/home_image/Vmware.png";
import bp from "../../assets/home_image/BluePrism.png";
import cs from "../../assets/home_image/cyber-security.png";
import ek from "../../assets/home_image/hacking.png";

const AdditionalCourses = () => {
  // const clickTop = () => {
  //   window.scroll({
  //     top: 0,
  //   });
  // };

  return (
    <>
      <h1 className="p-[1.5rem] font-semibold text-2xl text-babyPinkColor text-center md:text-left">
        Professional Certification courses
      </h1>
      <hr className="w-[100%]" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
        }}
        freeMode={true}
        breakpoints={{
          348: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          568: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper p-[1.5rem]"
      >
        <SwiperSlide>
          <a
            href="https://bitaacademy.com/course-category/aws-training/"
            // onClick={clickTop}
          >
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[8.5rem] p-4 -mb-2 flex justify-center items-center">
                <img src={aws} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  AWS Certification
                </h4>
                <p className="mb-2 text-left text-base">
                  Improve your cloud skills. Master cloud computing to unlock
                  endless possibilities.
                </p>
                <div className="py-2 text-left">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-textColor1">
                    Duration: 60 Hours
                  </span>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://bitaacademy.com/course/azure-security-training-in-chennai/"
            // onClick={clickTop}
          >
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[6rem] p-4 -mb-2 flex justify-center items-center">
                <img src={Ar} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Azure Security Certification
                </h4>
                <p className="mb-2 text-left text-base">
                  Strengthens digital landscapes. Protect data, promote
                  cybersecurity. Key to safe innovation.
                </p>
                <div className="py-2 text-left">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-textColor1">
                    Duration: 40 Hours
                  </span>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://bitaacademy.com/course/uipath-training-in-chennai/"
            // onClick={clickTop}
          >
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[6rem] p-4 -mb-2 flex justify-center items-center">
                <img src={uip} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Ui Path Certication
                </h4>
                <p className="mb-2 text-left text-base">
                  Automate brilliance. Change workflows, master RPA, and boost
                  efficiency.
                </p>
                <div className="py-2 text-left">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-textColor1">
                    Duration: 60 Hours
                  </span>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://bitaacademy.com/course/blue-prism-training-in-chennai/"
            // onClick={clickTop}
          >
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[6.3rem] p-4 -mb-2 flex justify-center items-center">
                <img src={bp} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Blue Prism Certification
                </h4>
                <p className="mb-2 text-left text-base">
                  Pioneer RPA greatness with Blue Prism. Script automation
                  miracles, prove your expertise, and innovate.
                </p>
                <div className="py-2 text-left">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-textColor1">
                    Duration: 40 Hours
                  </span>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://bitaacademy.com/course/data-science-training-in-chennai/"
            // onClick={clickTop}
          >
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[5.5rem] p-3 -mb-1 flex justify-center items-center">
                <img src={data_s} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Data Science Certification
                </h4>
                <p className="mb-2 text-left text-base">
                  Learn Data Science, analyze findings, and shape future. Verify
                  your knowledge now.
                </p>
                <div className="py-2 text-left">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-textColor1">
                    Duration: 40 Hours
                  </span>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://bitaacademy.com/course/cyber-security-training-in-chennai/"
            // onClick={clickTop}
          >
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[5rem] p-4 -mb-1 flex justify-center items-center">
                <img src={cs} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Cyber Security Certification
                </h4>
                <p className="mb-2 text-left text-base">
                  Learn cybersecurity, fight dangers. Verify your skills for
                  future security.
                </p>
                <div className="py-2 text-left">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-textColor1">
                    Duration: 40 Hours
                  </span>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://bitaacademy.com/course/ethical-hacking-training-in-chennai/"
            // onClick={clickTop}
          >
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[5rem] p-3 -mb-1 flex justify-center items-center">
                <img src={ek} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Ethical Hacker Certification
                </h4>
                <p className="mb-2 text-left text-base">
                  Protect digital ethics. Learn ethical hacking, system
                  security, and cyber-defense certification.
                </p>
                <div className="py-2 text-left">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-textColor1">
                    Duration: 40 Hours
                  </span>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://bitaacademy.com/course/salesforce-admin-certification-training/"
            // onClick={clickTop}
          >
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[6.1rem] p-4 -mb-1 flex justify-center items-center">
                <img src={Sales_f} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Salesforce Administrator Certification
                </h4>
                <p className="mb-2 text-left text-base">
                  Manage innovation and workflows. Become a Salesforce master.
                </p>
                <div className="py-2 text-left">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-textColor1">
                    Duration: 40 Hours
                  </span>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://bitaacademy.com/course/vmware-training-in-chennai/"
            // onClick={clickTop}
          >
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[5rem] p-3 -mb-1 flex justify-center items-center">
                <img src={vm} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  VMware Certification
                </h4>
                <p className="mb-2 text-left text-base">
                  Virtualize success. Virtualize and optimize infrastructure.
                  Certify your skills, advance IT.
                </p>
                <div className="py-2 text-left">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-textColor1">
                    Duration: 40 Hours
                  </span>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AdditionalCourses;
