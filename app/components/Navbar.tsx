import Link from "next/link";
import React from "react";
import { MdApps } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="py-5 px-12 flex justify-between">
      <div>
        <Link href="/" className="text-2xl font-bold">
          LIM<span className="text-lime-500">E</span>S
        </Link>
      </div>
      <ul className="flex gap-20 items-center">
        <li>
          <Link href="/" className="text-black-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/vehicles" className="text-gray-500">
            Vehicles
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-gray-500">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-500">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <select
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer transition-colors"
          defaultValue="en"
        >
          <option value="ka">GEO</option>
          <option value="en">ENG</option>
        </select>
        <MdApps className="w-8 h-8 text-gray-600 cursor-pointer hover:text-gray-800" />
      </div>
    </div>
  );
};

export default Navbar;
