import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import LongTermForm from "../components/LongTermForm/LongTermForm";

const LongTerm = () => {
  return (
    <>
      <PageHeader
        title={"Long-Term Form"}
        subtitle={"BOOK THE BEST CAR AT THE LOWEST PRICE"}
        banner={"/images/longterm-bg.png"}
      />
      <div className="py-[50px] md:py-[80px] lg:py-[100px]">
        <LongTermForm />
      </div>
      <div className="max-w-screen-xl mx-auto pb-[50px] md:pb-[80px] lg:pb-[100px]">
        <div className="w-full flex flex-col md:flex-row md:items-center gap-12">
          <div className="w-full md:w-1/3">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src="/images/traveling3.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <div data-aos="fade-up" data-aos-duration="1000" className="w-full">
              <p className="text-2xl md:text-5xl font-bold">
                Tailored LongTerm
              </p>
              <p className="text-2xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#FBBB04] via-[#FBBB04] to-[#daa003] inline-block text-transparent bg-clip-text">
                Rental Plans
              </p>
              <p className="mt-5 text-2xl">
                Our monthly rental plans offer significant savings compared to
                short-term rentals, allowing you to stretch your travel budget
                further. Tailored to suit your individual needs and travel
                plans, our long-term rental options provide the flexibility and
                convenience you need to explore at your own pace, without the
                hassles of daily rental transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center px-5 py-[80px] md:py-[100px]"
        style={{ backgroundImage: `url('/images/group-count.jpg')` }}
      >
        <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-center gap-8">
          <div
            data-aos="flip-up"
            data-aos-delay="500"
            className="flex items-center gap-5"
          >
            <div>
              <img src="/images/count1.png" alt="count1" />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white">10K+</h2>
              <p className="text-white text-xl font-semibold">
                Number of Satisfied Customers
              </p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-delay="600"
            className="flex items-center gap-5"
          >
            <div>
              <img src="/images/count2.png" alt="count2" />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white">50+</h2>
              <p className="text-white text-xl font-semibold">
                Number of Vehicles
              </p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-delay="700"
            className="flex items-center gap-5"
          >
            <div>
              <img src="/images/count3.png" alt="count3" />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white">10 Years</h2>
              <p className="text-white text-xl font-semibold">
                Years of Service
              </p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-delay="800"
            className="flex items-center gap-5"
          >
            <div>
              <img src="/images/count4.png" alt="count4" />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white">500+</h2>
              <p className="text-white text-xl font-semibold">
                Number of Coffees Offered to <br /> Our Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LongTerm;
