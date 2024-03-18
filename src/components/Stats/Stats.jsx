import React from "react";

const Stats = () => {
  return (
    <>
      <section className=" w-[85%] bg-textColor rounded m-auto shadow ">
        <div className="flex flex-col items-baseline md:flex-row md:justify-between rounded p-[1.5rem]">
          <div className="flex gap-2">
            <div className="w-9 h-9 rounded bg-blueColor"></div>
            <div className="gap-8">
              <h3 className="text-babyPinkColor font-[600]">100+ </h3>
              <h6 className="text-[11.5px]">Trainers</h6>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-9 h-9 rounded bg-babyPinkColor flex"></div>
            <div>
              <h3 className="text-babyPinkColor font-[600]">5000+ </h3>
              <h6 className="text-[11.5px]">Alumini's</h6>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-9 h-9 rounded bg-darkBlueColor"></div>
            <div>
              <h3 className="text-babyPinkColor font-[600]">150+ </h3>
              <h6 className="text-[11.5px]">Corporate Clients</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
