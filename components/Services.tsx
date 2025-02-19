import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="max-w-[90%] mx-auto py-12">
      <div className="flex items-center justify-center gap-20 mt-20 mb-20">
        <h2 className="text-7xl font-bold text-black">Services</h2>
        <p className="text-gray-600 max-w-md">
          We invite you to try our services, and we personally <br /> guarantee
          that you will be completely satisfied.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 justify-end">
        <div className="flex gap-6 bg-gray-100 p-6 rounded-2xl w-fit justify-self-end">
          <div className="w-[300px] relative h-[200px]">
            <Image
              src="/images/card-img1.jpg"
              alt="Airport Transfer"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-[250px] flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Airport transfer</h3>
            <p className="text-gray-600 mb-4">
              With additional wait time and flight <br />
              tracking in case of delays, our <br />
              service is optimized to make every <br />
              airport transfer a breeze.
            </p>
            <button className="mt-auto bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors w-fit">
              Read More
            </button>
          </div>
        </div>

        <div className="flex gap-6 bg-gray-100 p-6 rounded-2xl w-fit">
          <div className="w-[300px] relative h-[200px]">
            <Image
              src="/images/card-img.jpg"
              alt="Wedding Service"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-[250px] flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Intercity trips</h3>
            <p className="text-gray-600 mb-4">
              Your stressfree solution for <br />
              traveling between cities with <br />
              chauffeurs all over the world.
            </p>
            <button className="mt-auto bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors w-fit">
              Read More
            </button>
          </div>
        </div>

        <div className="flex gap-6 bg-gray-100 p-6 rounded-2xl w-fit justify-self-end">
          <div className="w-[300px] relative h-[200px]">
            <Image
              src="/images/card-img2.jpg"
              alt="Business Travel"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-[250px] flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Wedding events</h3>
            <p className="text-gray-600 mb-4">
              Our friendly, and attentive service <br />
              combined with through attention <br />
              to detail ensure you can truly relax <br />
              and enjoy your special day.
            </p>
            <button className="mt-auto bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors w-fit">
              Read More
            </button>
          </div>
        </div>

        <div className="flex gap-6 bg-gray-100 p-6 rounded-2xl w-fit">
          <div className="w-[300px] relative h-[200px]">
            <Image
              src="/images/card-img3.jpg"
              alt="Special Events"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-[250px] flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Business Meeting</h3>
            <p className="text-gray-600 mb-4">
              Focus on your meeting with your <br />
              partners, forget about the road <br />
              and the car, which will distract your <br />
              thoughts.
            </p>
            <button className="mt-auto bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors w-fit">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
