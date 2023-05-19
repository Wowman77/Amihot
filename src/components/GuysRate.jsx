import React from "react";

const GuysRate = ({ avg = 0.0 }) => {
  return (
    <div>
      <p className="text-blue text-[12px]">Guys rate you</p>
      <div className="text-blue text-center text-2xl leading-6">{avg}/10</div>
    </div>
  );
};

export default GuysRate;
