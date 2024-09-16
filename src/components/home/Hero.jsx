import React from "react";

const Hero = () => {
  return (
    <div className="relative px-8 py-2 bg-[url('/images/hero-bg.png')] bg-no-repeat bg-cover bg-bottom h-[40vh] md:h-[80vh] overflow-hidden">
      <img
        className="absolute bottom-[35%] right-[5%] md:bottom-[31%] md:right-[19%] w-1/2 md:w-auto"
        src="/images/underline.png"
        alt=""
      />
      <div className="max-w-screen-xl mx-auto h-full flex justify-center items-center">
        <div className="w-full text-center">
          <p className="text-white uppercase text-sm md:text-[26px] mb-0 md:mb-10">
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
