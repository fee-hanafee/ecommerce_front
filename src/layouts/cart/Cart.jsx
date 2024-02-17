import React from "react";
import CartL from "./CartL";
import CartR from "./CartR";

export default function Cart() {

  return (
    <div className="pt-[100px] ">
      <div className="  w-[80%] mx-auto">
        <div className="h-16 flex justify-center items-center">
          <h1 className="font-bold text-red-500 text-2xl">Shopping Cart</h1>
        </div>
        <div className="grid grid-cols-12 ">
          <div className="border col-span-7">
            <CartL />
          </div>
          <div className="col-span-5">
            <CartR />
          </div>
        </div>
      </div>
    </div>
  );
}
