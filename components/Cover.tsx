import React from "react";
import Image from "next/image";
const Cover = () => {
  return (
    <div className="px-12 relative">
      <div className="w-full h-screen relative">
        <Image
          src="/images/car.jpg"
          alt="Background"
          fill
          className="object-cover rounded-[20px]"
        />
        <div className="absolute inset-0 rounded-[20px]">
          <div className="p-12">
            <h1 className="text-[80px] font-bold text-black text-center">
              Luxury Limo Hire
            </h1>
            <p className="text-xl text-gray-800 text-center mt-6 mb-8">
              We offer proffesional car rental & limousine services <br /> in
              our range of high-end vehicles
            </p>
            <div className="text-center">
              <button className="bg-black text-white px-8 py-3 rounded-lg text-xl hover:bg-gray-800 transition-colors">
                Open Fleet
              </button>
            </div>
          </div>

          <div className="absolute bottom-12 right-12 bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Pick up Address"
                className="px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-100 placeholder-gray-700"
              />
              <input
                type="text"
                placeholder="Drop off Adress"
                className="px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-100 placeholder-gray-700"
              />
              <input
                type="text"
                placeholder="One Way"
                className="px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-100"
              />
              <input
                type="date"
                placeholder="Pick-up Date"
                className="px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-100 placeholder-gray-500"
              />
              <input
                type="time"
                placeholder="Pick up Time"
                className="px-4 py-2 border border-gray-300 rounded-md outline-none bg-gray-100 placeholder-gray-500"
              />

              <div className="flex justify-start">
                <button className="bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors w-1/2">
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
