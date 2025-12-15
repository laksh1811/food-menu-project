import React from "react";

function Hero() {
  return (
    <section className=" bg-[#233000] px-10 py-10 text-white h-450">
      <section className="relative top-19  px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side text */}
        <div>
          <h2 className="text-7xl font-semibold leading-tight z-10 ">
            Healthy Eating <br />
            is important <br />
            part of lifestyle
          </h2>
          <p className="text-gray-300 w-100 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            congue arcu
          </p>

          <img src="/image/image (7).png" className=" h-100 z-10 pt-10" />
        </div>
        <div>
          <img src="../image/hero1.png" className=" h-140 w-120" />
        </div>
        <img
          src="../image/image (8).png"
          className=" ml-75 -mt-80 h-50 w-350 p-9 "
        />
      </section>
      <div className="flex flex-row">
        <img src="../image/image (9).png" className="w-140 h-160 ml-20 mt-20" />

        <img
          src="../image/image (10).png"
          className="w-100 h-160 ml-90 mt-20"
        />
      </div>
    </section>
  );
}

export default Hero;
