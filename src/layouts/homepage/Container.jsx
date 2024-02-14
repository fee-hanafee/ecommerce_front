import React from "react";
import mainpic from "../../assets/main-slide.jpg";
import watch from "../../assets/pic-apple-watch.jpg";
import smartphone from "../../assets/pic-iphone12.jpg";
import headphone from "../../assets/pic-headphone.jpg";
import UnderMain from "./component/UnderMain";
import Footer from "../Footer";

export default function Container() {
  return (
    <div>
      <div className="w-full">
        <img src={mainpic} className="w-full" />
      </div>
      <div className="flex flex-row    bg-gray-200 items-center  justify-center ">
        <UnderMain img={smartphone} />
        <UnderMain img={watch} />
        <UnderMain img={headphone} />
      </div>
      <div className="h-96 bg-white">
        <div className="flex flex-col justify-center items-center gap-8 mt-20">
          <div className="">
            <h1 className="text-4xl font-bold text-gray-600">Welcome to</h1>
          </div>
          <div className="">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-700 via-red-500   to-indigo-400 inline-block text-transparent bg-clip-text">
              WEBSMART GADGETS
            </h1>
          </div>
          <div className="w-[75%] text-center font-semibold">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis aliquid cupiditate id ipsa, eaque voluptate laudantium
              dolores? Id aperiam vitae minus. Quam inventore expedita
              blanditiis ducimus ipsam error, maiores est!
            </p>
          </div>
        </div>
      </div>
      <div>Hero</div>
      <Footer/>
    </div>
  );
}
