import React from "react";
import CartItem from "./component/CartItem";
import useAuth from "../../features/auth/hooks/use-auth";

export default function CartL() {
  
  return (
    <div className="p-2 h-[500px] overflow-scroll ">
       
      <div className="flex justify-between">
        <div>
          <p>Product</p>
        </div>
        <div className="flex gap-8">
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
      </div>
      <hr className="w-full border-2 " />
      <CartItem />
      <hr className="w-full border-2" />
    </div>
  );
}
