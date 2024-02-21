import React from "react";
import CartItem from "./component/CartItem";

export default function CartL() {
  return (
    <div className="p-2 min-h-[500px]  ">
      <div className="flex justify-between p-2">
        <div>
          <p className="text-gray-600 font-bold">Product</p>
        </div>
        <div className="flex gap-8 text-gray-600 font-bold">
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
      </div>
      <hr className="w-[97%] mx-auto border" />
      <CartItem />
    </div>
  );
}
