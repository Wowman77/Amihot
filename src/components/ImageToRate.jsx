import React from "react";
import RatingsPill from "./RatingsPill";
import Toggle from "./Toggle";
import LargeButton from "./LargeButton";

const ImageToRate = ({ ratings, img }) => {
  return (
    <>
      <div
        className={`h-[600px] border bg-slate-100 w-full rounded-t-lg rounded-b-[35px] flex flex-col justify-between p-2 bg-[url('${img}')] bg-cover`}
      >
        <div>
          <span className="text-xs bg-white rounded-md px-1 py-1">
            {/* Accounts for edge case when someone has been rated only once */}
            {ratings} {ratings == 1 ? "rating" : "ratings"}
          </span>
        </div>
        <RatingsPill />
      </div>
    </>
  );
};

export default ImageToRate;
