import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
// import ol from "../../assets/home_image/oracle.png";
// import sql from "../../assets/home_image/SQL.png";
import playwright from "../../assets/home_image/playwright-logo.png";
import st from "../../assets/home_image/securitytesting.png";

const RestApiRc = () => {
  const clickTop = () => {
    window.scroll({
      top: 0,
    });
  };

  return (
    <>
      <h1 className="p-[1.5rem] font-semibold text-2xl text-babyPinkColor text-center md:text-left">
        Related Courses
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
          <a href="/playwright " onClick={clickTop}>
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[8rem] pb-4 -mb-1 flex justify-center items-center">
                <img src={playwright} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Playwright{" "}
                </h4>
                <p className="mb-2 text-left text-base">
                  Script digital wonders! Master Playwright automation for
                  flawless web apps. Enroll now, script success seamlessly.
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
          <a href="/securitytesting" onClick={clickTop}>
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[7rem] pb-2 -mb-1 flex justify-center items-center">
                <img src={st} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Security Testing
                </h4>
                <p className="mb-2 text-left text-base">
                  Safeguard digital landscapes! Master security testing
                  essentials. Be the guardian of cyber resilience. Enroll and
                  defend today.
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

export default RestApiRc;
