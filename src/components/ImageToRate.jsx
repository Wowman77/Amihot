import React from "react";
import Tag from "./Tag";
import RatingsPill from "./RatingsPill";

let rating = 47;

const ImageToRate = () => {
  return (
    <div className="h-[600px] border bg-slate-100 w-full md:w-8/12 lg:w-5/12 rounded-t-lg rounded-b-[35px] flex flex-col justify-between p-2">
      <div>
        <Tag ratings={rating} />
      </div>
      <RatingsPill />
    </div>
  );
};

export default ImageToRate;
