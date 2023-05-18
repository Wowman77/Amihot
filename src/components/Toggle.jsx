import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      className={`flex items-center justify-start w-14 p-1 rounded-full ${
        isOn ? "bg-lightblue" : "bg-lightpink"
      }`}
      onClick={handleToggle}
    >
      <span
        className={`p-3 rounded-full ${
          isOn ? "bg-blue" : "bg-pink"
        } transition-transform duration-300 transform ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
};

export default Toggle;
