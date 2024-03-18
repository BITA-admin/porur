import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import fs from "../../assets/home_image/Full-Stack.png";
import angular from "../../assets/home_image/angular.png";
import uiux from "../../assets/home_image/logo-design.png";

const ReactJsRC = () => {
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
          <a href="/uiux" onClick={clickTop}>
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[8rem] p-4 -mb-2  flex justify-center items-center">
                <img src={uiux} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">UI UX</h4>
                <p className="mb-2 text-left text-base">
                  Design Brilliance Awaits! Craft seamless user experiences.
                  Enroll now, spark creativity, and shape the future of digital
                  interaction.
                </p>
                <div className="py-2 text-left">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-textColor1">
                    Duration: 80 Hours
                  </span>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/angularjs" onClick={clickTop}>
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[7rem] p-4 -mb-2 flex justify-center items-center">
                <img src={angular} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Angular Js
                </h4>
                <p className="mb-2 text-left text-base">
                  Angular Ascendance! Learn Angular, sculpt robust apps. Embrace
                  the future of dynamic interfaces.
                </p>
                <div className="py-2 text-left">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-textColor1">
                    Duration: 80 Hours
                  </span>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/fsd" onClick={clickTop}>
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[7rem] p-4 -mb-2  flex justify-center items-center">
                <img src={fs} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Full Stack Developer
                </h4>
                <p className="mb-2 text-left text-base">
                  Future-proof your skills! Full Stack Development awaits. Join
                  the journey of coding mastery. Unleash your potential today.
                </p>
                <div className="py-2 text-left">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-textColor1">
                    Duration: 80 Hours
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

export default ReactJsRC;
