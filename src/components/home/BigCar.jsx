import React from "react";

const BigCar = () => {
  return (
    <>
      <div className="relative pb-0 md:pb-[120px]">
        {/* Headline Section */}
        <div className="w-full text-center">
          <p className="text-2xl md:text-5xl font-bold">Our Doors Are Always</p>
          <p className="text-2xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#9D0208] via-[#9D0208] to-[#550204] inline-block text-transparent bg-clip-text">
            Open To Welcome You
          </p>
        </div>

        {/* Image Section with Responsive Absolute Positioning */}
        <div className="absolute top-[80px] md:top-[100px] lg:top-[125px] left-1/2 transform -translate-x-1/2 w-full">
          <div className="max-w-screen-xl mx-auto">
            <div className="w-full p-5 md:p-10 py-6 md:py-12">
              <img
                src="/images/bigcar.png"
                alt="Car Image"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-red-700 mt-28 md:mt-52 h-[80vh] md:h-[70vh] pt-0 lg:pt-[100px] w-full text-center">
        <div className="max-w-screen-xl mx-auto px-5 h-full flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Feature Card 1 */}
            <div className="bg-white flex items-center px-5 py-10 rounded-md custom-shadow">
              <img
                src="/images/support1.png"
                alt="Support Image"
                className="mr-4 hover:bg-gray-300 transition-all duration-300 rounded-md"
              />
              <p className="text-xl text-red-700 font-bold">
                Multilingual Support
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white flex items-center px-5 py-10 rounded-md custom-shadow">
              <img
                src="/images/support2.png"
                alt="Fleet Image"
                className="mr-4 hover:bg-gray-300 transition-all duration-300 rounded-md"
              />
              <p className="text-xl text-red-700 font-bold">Diverse fleet</p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white flex items-center px-5 py-10 rounded-md custom-shadow">
              <img
                src="/images/support3.png"
                alt="Customer Service Image"
                className="mr-4 hover:bg-gray-300 transition-all duration-300 rounded-md"
              />
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
