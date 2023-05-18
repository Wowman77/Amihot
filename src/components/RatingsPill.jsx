import React, { useState } from "react";

const RatingsPill = () => {
  // let sex = male;

  const [selectedValue, setSelectedValue] = useState("");

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="rounded-full bg-white border py-3 px-4 flex justify-between">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
        <label key={number} className="flex items-center">
          <input
            type="radio"
            value={number}
            checked={selectedValue === number.toString()}
            onChange={handleInputChange}
            className="hidden"
          />
          {/* Make it to where if the sex of the person that you're rating influences
           the color of the background of the button when selected. If male, blue. If 
           female, pink */}
          <span
            className={`rounded-full font-medium text-[20px] h-[32px] w-[32px] justify-center items-center flex cursor-pointer hover:border transition-all ${
              selectedValue === number.toString() ? "bg-pink text-white" : ""
            }`}
          >
            {number}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RatingsPill;

// ${selectedValue === number.toString() ? "bg-black text-white" : ""}`
