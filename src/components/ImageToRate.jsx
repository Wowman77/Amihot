import React from "react";
import Tag from "./Tag";
import RatingsPill from "./RatingsPill";
import Toggle from "./Toggle";
import LargeButton from "./LargeButton";

let rating = 47;

const ImageToRate = () => {
  return (
    <>
      <div className="h-[600px] border bg-slate-100 w-full rounded-t-lg rounded-b-[35px] flex flex-col justify-between p-2 bg-[url('https://tinyurl.com/32kv5jj9')] bg-cover">
        <div>
          <Tag ratings={rating} />
        </div>
        <RatingsPill />
      </div>
    </>
  );
};

export default ImageToRate;
