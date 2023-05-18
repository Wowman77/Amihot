import React from "react";

const Tag = (props) => {
  return (
    <span className="text-xs bg-white rounded-md px-1 py-1">
      {props.ratings} ratings
    </span>
  );
};

export default Tag;
