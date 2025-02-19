import React from "react";
import {
  ArrowRight,
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 mb-20">
      <div className="max-w-[90%] mx-auto py-12 bg-black rounded-2xl px-12">
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-xs">
            <div className="text-white text-2xl mb-10">
              LIM<span className="text-lime-500">E</span>S
            </div>
            <p className="text-white mb-5">Subscribeto the newsletter</p>
            <div className="relative">
              <input
                className=" p-2 rounded-sm bg-gray-800 focus:outline-none text-white"
                type="text"
                placeholder="Email..."
              />
              <button className="absolute text-black  right-0 border-2 bg-white rounded-sm px-2 h-10">
                <ArrowRight />
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4 text-white">Top cities</h4>
            <a
              href="#"
              className="text-gray-400 mb-2 hover:text-white transition-colors"
            >
              New York
            </a>
            <a
              href="#"
              className="text-gray-400 mb-2 hover:text-white transition-colors"
            >
              London
            </a>
            <a
              href="#"
              className="text-gray-400 mb-2 hover:text-white transition-colors"
            >
              Berlin
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Los Angeles
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Paris
            </a>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4 text-white">Explore</h4>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Intercity rides
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Limousine service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Chauffeur service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Private car service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Aairport Transfer
            </a>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4 text-white">
              Intercity rides
            </h4>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              East Hamption - New York
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              New York - Washington
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              New York - Philadelphia
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Abu Dhabi - Dubai
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              London - Birmingham
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex justify-between items-center">
          <p className="text-center text-gray-400">© 2023 LIMOS</p>
          <ul className="flex justify-center gap-4">
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="#">Terms</a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="#">Pribacy policy</a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="#">Legal notice</a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="#">Accessibility</a>
            </li>
          </ul>
          <ul className="flex justify-between gap-4 ">
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="#">
                <Youtube />
              </a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="#">
                <Twitter />
              </a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="#">
                <Instagram />
              </a>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors">
              <a href="#">
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
