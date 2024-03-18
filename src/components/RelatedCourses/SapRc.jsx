import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import java from "../../assets/home_image/Java.png";
import srn from "../../assets/home_image/service-now.png";
import ba from "../../assets/home_image/bba.png";
import dr from "../../assets/home_image/docker.png";

const DockerRc = () => {
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
          <a href="/#businessanalyst" onClick={clickTop}>
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[8.3rem] p-3 -mb-2  flex justify-center items-center">
                <img src={ba} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Best Business Analyst
                </h4>
                <p className="mb-2 text-left text-base">
                  Navigate business realms! Master analytics, shape strategies.
                  Enroll now, become the catalyst for business success.
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
          <a href="/#Docker" onClick={clickTop}>
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[7.5rem] p-4 -mb-2 flex justify-center items-center">
                <img src={dr} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Docker
                </h4>
                <p className="mb-2 text-left text-base">
                  Containerize brilliance! Unlock Docker mastery. Enroll now,
                  revolutionize deployment and scale applications seamlessly.
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
          <a href="/#Servicenow" onClick={clickTop}>
            <div className="hover:rounded-md hover:shadow-md">
              <div className="w-[8rem] p-4 -mb-2  flex justify-center items-center">
                <img src={srn} alt="image" />
              </div>
              <div className="p-4">
                <h4 className="text-xl text-left mb-2 text-blueColor">
                  Servicenow
                </h4>
                <p className="mb-2 text-left text-base">
                  Revolutionize workflows! Embrace ServiceNow expertise. Enroll
                  now, script the future of seamless business operations.
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

export default DockerRc;
