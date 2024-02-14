import React from "react";

export default function UnderMain({ img }) {
  return (
    <div className="">
      <div className="overflow-hidden  z-10">
        <img
          src={img}
          className="hover:scale-125  transition duration-500 cursor-pointer "
        />
      </div>
    </div>
  );
}
