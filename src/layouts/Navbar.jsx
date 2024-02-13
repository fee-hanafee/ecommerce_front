import React from "react";
import ContentRight from "./ContentRight";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-gray-800 flex justify-between">
      <div className="">
        <h1
          className="text-white text-4xl hover:text-red-500 transition-all"
          role="button"
        >
          Logo
        </h1>
      </div>
      <div className="flex gap-12">
        <div>
          <Link to="">
            <h1
              className="text-2xl text-white hover:text-red-500"
              role="button"
            >
              HOME
            </h1>
          </Link>
        </div>
        <div>
          <Link to="shop">
            <h1
              className="text-2xl  text-white hover:text-red-500"
              role="button"
            >
              STORE
            </h1>
          </Link>
        </div>
      </div>
      <ContentRight />
    </div>
  );
}
