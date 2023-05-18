import React, { useEffect } from "react";

const links = [
  { id: 1, name: "Privacy" },
  { id: 2, name: "Amihot guidelines" },
];

// Import javascript from Google's test ad placement
// https://developers.google.com/publisher-tag/samples/display-test-ad#javascript

const Ad = () => {
  return (
    <div className="w-4/12 hidden lg:flex text-lightgray text-sm flex-col gap-y-2">
      {/* The actual ad */}
      <div className="w-full h-[300px] bg-slate-100 rounded-xl border p-2">
        Advertisement
      </div>
      <span>
        <a href="#" className="hover:text-black transition-all">
          About
        </a>{" "}
        •{" "}
        <a href="#" className="hover:text-black transition-all">
          Privacy Guidelines
        </a>{" "}
        •{" "}
        <a href="#" className="hover:text-black transition-all">
          Advertise here
        </a>
      </span>
      <p>© Amihot 2023</p>
    </div>
  );
};

export default Ad;
