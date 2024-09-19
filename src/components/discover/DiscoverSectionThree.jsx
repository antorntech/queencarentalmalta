import React from "react";

const DiscoverSectionThree = () => {
  return (
    <div className="w-full px-5 md:px-0 bg-[#F4EFEF] py-[50px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full flex flex-col md:flex-row md:items-center gap-12">
          <div className="w-full md:w-1/2  relative">
            <img
              src="/images/traveling1.png"
              alt=""
              className="w-full object-contain"
            />
            <button className="absolute -bottom-12 -left-12 flex items-center gap-1 bg-white px-12 py-5 rounded-md">
              <img src="/images/rent-car-icon.png" alt="" className="size-20" />
              <span className="text-2xl font-semibold"> Rent A Car</span>
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div data-aos="fade-up" data-aos-duration="1000" className="w-full">
              <p className="text-2xl md:text-5xl font-bold">
                Island Enchanting
              </p>
              <p className="text-2xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#FBBB04] via-[#FBBB04] to-[#daa003] inline-block text-transparent bg-clip-text">
                Charms
              </p>
              <p className="mt-5 text-2xl">
                Our diverse range of vehicles, from compact city cars to
                spacious minivans, caters to individual preferences and group
                sizes, ensuring that your Malta adventure is tailored to your
                unique requirements. Whether you're seeking the vibrant energy
                of Valletta or the tranquil charm of Gozo, our vehicles will
                provide the perfect mode of transport to explore Malta's diverse
                landscapes and rich heritage.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-center gap-12 mt-12 md:mt-24 lg:mt-32">
          <div className="w-full md:w-1/2">
            <div data-aos="fade-up" data-aos-duration="1000" className="w-full">
              <p className="text-2xl md:text-5xl font-bold">Embark on Your</p>
              <p className="text-2xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#FBBB04] via-[#FBBB04] to-[#daa003] inline-block text-transparent bg-clip-text">
                Malta Adventure
              </p>
              <p className="mt-5 text-2xl">
                Don't let car rental hinder your Maltese adventure. With Queen
                Car Rental as your guide, you can focus on creating
                unforgettable memories while exploring this captivating island.
                Book your rental today and let us be your partner in unlocking
                the wonders of Malta.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2  relative">
            <img
              src="/images/traveling2.png"
              alt=""
              className="w-full object-contain"
            />
            <button className="absolute -bottom-12 -left-12 flex items-center gap-5 bg-white px-12 py-5 rounded-md">
              <img src="/images/fly-icon.png" alt="" className="size-20" />
              <span className="text-2xl font-semibold"> Visit Automate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSectionThree;
