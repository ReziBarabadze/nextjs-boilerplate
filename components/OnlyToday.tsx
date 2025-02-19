import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";

const OnlyToday = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="flex flex-col items-center gap-6 mt-20 mb-20">
        <h2 className="text-7xl font-bold text-black">Only today $75/day</h2>
        <p className="text-gray-600 text-center max-w-xl">
          Take advantage of our special offers and save money <br />
          on your next luxury car rental
        </p>
      </div>
      <div className="flex justify-center bg-gray-300 rounded-[20px] py-6">
        <div className="flex gap-20 items-start">
          <div className="max-w-xl pt-6">
            <h3 className="text-4xl font-bold mb-6">Cadillac Escalade</h3>
            <div className="flex gap-20">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-black" size={24} />
                    <span className="text-gray-600 text-sm">
                      For Upon 8 Passengers
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-black" size={24} />
                    <span className="text-gray-600 text-sm">
                      ncreadible Sound System
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-black" size={24} />
                    <span className="text-gray-600 text-sm">
                      Fiber Optic Lights
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-black" size={24} />
                    <span className="text-gray-600 text-sm">
                      Bar Area With Fridge
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-black" size={24} />
                    <span className="text-gray-600 text-sm">
                      All Inclusive Insurance
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-black" size={24} />
                    <span className="text-gray-600 text-sm">
                      Free Cancellation
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-black" size={24} />
                    <span className="text-gray-600 text-sm">Endless Miles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-black" size={24} />
                    <span className="text-gray-600 text-sm">
                      No Hidden Charges
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <button className="mt-8 bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition-colors">
              Reserve Now
            </button>
          </div>

          <div className="relative w-[700px] h-[300px]">
            <Image
              src="/images/car1.jpg"
              alt="Cadillac Escalade"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlyToday;
