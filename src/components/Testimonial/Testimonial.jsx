import "./Testimonial.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";

export const Testimonial = () => {
  return (
    <>
      <section className="bg-textColor m-auto pb-7" id="Testimonials">
        <div className="flex flex-col p-[1.5rem] ">
          <h1 className="flex justify-center pb-3 text-babyPinkColor text-3xl font-[600]">
            Testimonials
          </h1>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper p-[1.5rem] h-80  shadow-blueColor rounded-lg shadow-md"
          >
            <SwiperSlide className="flex flex-col pb-5 items-center justify-center ">
              <div className="flex flex-col gap-5 justify-center items-center text-center">
                <BsFillChatSquareQuoteFill className="w-[5rem] h-[5rem] text-blueColor" />
                <p>
                  Awesome training trainers are really helpful they are always
                  open for any feedback and ready to solve any doubts and
                  questions . Felt so much confident after taking training form
                  BITA (Azure Data Factory) . I would highly recommend everyone
                  to join and see the difference.
                </p>
                <p className="font-semibold">- Kanishk Malik</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col pb-5 items-center justify-center ">
              <div className="flex flex-col gap-5 justify-center items-center text-center">
                <BsFillChatSquareQuoteFill className="w-[5rem] h-[5rem] text-blueColor" />
                <p>
                  It's really a Great learning experience in this institute. I
                  was trained in REST API to do Automation framework which was
                  taken by Satish (mentor) with hands-on samples and it helped
                  to implement framework at work and also made my work easy.
                </p>
                <p className="font-semibold">- Arun Chinnasamy</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col pb-5 items-center justify-center ">
              <div className="flex flex-col gap-5 justify-center items-center text-center">
                <BsFillChatSquareQuoteFill className="w-[5rem] h-[5rem] text-blueColor" />
                <p>
                  I have joined for Angular course at BITA. It was wonderful
                  learning experience for me. The instructors were friendly and
                  having more knowledge in their field. Best place to study and
                  learn. Thanks to Arun & Karim.
                </p>
                <p className="font-semibold">- Jaganraj Devaraj</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
