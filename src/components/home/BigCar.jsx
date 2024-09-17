import React from "react";

const BigCar = () => {
  return (
    <>
      <div className="relative md:pb-[150px]">
        <div className="w-full text-center">
          <p className="text-2xl md:text-5xl font-bold">Our Doors Are Always</p>
          <p className="text-2xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#9D0208] via-[#9D0208] to-[#550204] inline-block text-transparent bg-clip-text">
            Open To Welcome You
          </p>
        </div>
        <div className="absolute top-[80px] md:top-[120px] left-1/2 transform -translate-x-1/2 w-full">
          <div className="max-w-screen-xl mx-auto">
            <div className="w-full p-5 md:p-10 py-6 md:py-12">
              <img src="/images/bigcar.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-red-700 h-[80vh] md:h-[70vh] w-full mt-28 md:mt-52">
        <div className="max-w-screen-xl mx-auto px-5 h-full flex items-end justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-12 md:pb-28">
            <div className="bg-white flex items-center p-5 rounded-md custom-shadow">
              <img src="/images/support1.png" alt="" />
              <p className="text-xl text-red-700 font-bold">
                Multilingual Support
              </p>
            </div>
            <div className="bg-white flex items-center p-5 rounded-md custom-shadow gap-5">
              <img src="/images/support2.png" alt="" />
              <p className="text-xl text-red-700 font-bold">Diverse fleet</p>
            </div>
            <div className="bg-white flex items-center p-5 rounded-md custom-shadow">
              <img src="/images/support3.png" alt="" />
              <p className="text-xl text-red-700 font-bold">
                24/7 customer service
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCar;
