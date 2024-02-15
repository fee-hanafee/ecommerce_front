import React from "react";

export default function Container({ children }) {
  const [left, right] = children;
  return (
    <div className="grid grid-cols-12 ">
      <div className=" col-span-2 border">{left}</div>
      <div className="  col-span-10">{right}</div>
    </div>
  );
}
