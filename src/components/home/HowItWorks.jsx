import React from "react";

const HowItWorks = () => {
  return (
    <div className="w-full px-5 py-[50px] md:py-[80px] lg:py-[100px]">
      <div className="w-full text-center">
        <p className="text-2xl md:text-5xl font-bold">
          Rent a Car in Malta <br />
          <span className="text-2xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#FBBB04] via-[#FBBB04] to-[#daa003] inline-block text-transparent bg-clip-text">
            and Enjoy
          </span>
        </p>
        <p className="w-2/3 mx-auto mt-3">
          We understands that your time is valuable. We offer a hassle-free car
          rental experience that will allow you to focus on your trip to Malta.
          Book today and start planning your adventure.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto mt-10">
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="works-card h-[400px] p-5 bg-gradient-to-l from-[#FBBB04] to-[#daa003] text-white shadow-lg">
            <h1 className="text-4xl font-semibold">01</h1>
            <div className="w-12 h-2 bg-white"></div>
            <p className="text-2xl lg:text-4xl mt-8 mb-3">
              Choose a<br />{" "}
              <span className="text-2xl lg:text-4xl font-bold">Car</span>
            </p>
            <img src="/images/works1.png" alt="" />
          </div>
          <div className="group overflow-hidden h-[337px] relative">
            <img
              src="https://queencarentalmalta.com/static/media/cards.4c9cb3cde8a29d5eb364.png"
              alt=""
              className="w-full h-full group-hover:scale-110 transition-all duration-300"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
          </div>
          <div className="works-card h-[400px] p-5 bg-gradient-to-l from-[#FBBB04] to-[#daa003] text-white shadow-lg">
            <h1 className="text-4xl font-semibold">03</h1>
            <div className="w-12 h-2 bg-white"></div>
            <p className="text-2xl lg:text-4xl mt-8 mb-3">
              Pick up the
              <br />{" "}
              <span className="text-2xl lg:text-4xl font-bold">Vehicle</span>
            </p>
            <img src="/images/works3.png" alt="" />
          </div>
          <div className="group overflow-hidden h-[337px] relative">
            <img
              src="https://queencarentalmalta.com/static/media/Group.048cd21ce2ad4552bee1.png"
              alt=""
              className="w-full h-full group-hover:scale-110 transition-all duration-300"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
          </div>
        </div>
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="group overflow-hidden h-[337px] relative">
            <img
              src="https://queencarentalmalta.com/static/media/cards.4c9cb3cde8a29d5eb364.png"
              alt=""
              className="w-full h-full group-hover:scale-110 transition-all duration-300"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
          </div>
          <div className="works-card h-[400px] p-5 bg-gradient-to-l from-[#FBBB04] to-[#daa003] text-white shadow-lg">
            <h1 className="text-4xl font-semibold">02</h1>
            <div className="w-12 h-2 bg-white"></div>
            <p className="text-2xl lg:text-4xl mt-8 mb-3">
              Pay
              <br />{" "}
              <span className="text-2xl lg:text-4xl font-bold">Online</span>
            </p>
            <img src="/images/works1.png" alt="" />
          </div>
          <div className="group overflow-hidden h-[337px] relative">
            <img
              src="https://queencarentalmalta.com/static/media/Group.048cd21ce2ad4552bee1.png"
              alt=""
              className="w-full h-full group-hover:scale-110 transition-all duration-300"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
          </div>
          <div className="works-card h-[400px] p-5 bg-gradient-to-l from-[#FBBB04] to-[#daa003] text-white shadow-lg">
            <h1 className="text-4xl font-semibold">04</h1>
            <div className="w-12 h-2 bg-white"></div>
            <p className="text-2xl lg:text-4xl mt-8 mb-3">
              Discover
              <br />{" "}
              <span className="text-2xl lg:text-4xl font-bold">Malta</span>
            </p>
            <img src="/images/works3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
