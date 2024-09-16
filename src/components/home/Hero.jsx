import React from "react";

const Hero = () => {
  return (
    <div className="relative px-5 py-2 bg-[url('/images/hero-bg.png')] bg-no-repeat bg-cover bg-bottom  h-[40vh] md:h-[80vh]">
      <img
        className="absolute bottom-[31%] right-[19%]"
        src="/images/underline.png"
        alt=""
      />
      <div className="max-w-screen-xl mx-auto h-full flex justify-center items-center">
        <div className="w-full text-center">
          <p className="text-white uppercase text-md md:text-[26px] mb-5 md:mb-10">
            Rent the best car at lowest price
          </p>
          <h1 className="text-4xl md:text-[120px] font-bold text-white py-2">
            Queen Car Rental
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
