import React from "react";
import ContentRight from "./ContentRight";


export default function Navbar() {
  return (
    <div className="navbar bg-gray-800 flex justify-between">
      <div className="">
        <h1
          className="text-white text-4xl hover:text-red-500 transition-all px-6 hover:px-40 duration-700"
          role="button"
        >
          LOGO
        </h1>
      </div>
      <ContentRight />
    </div>
  );
}
