import React, { useState } from "react";
import AmontItem from "./AmontItem";

export default function CartList({ cart, cancelItem }) {
  return (
    <>
      {cart.map((item, index) => {
        if (item.status != 1) {
          return (
            <div key={index} className="bg-gray-100 rounded-lg min-w-[440] shadow-sm">
              <div className="grid grid-cols-12 gap-8 p-4">
                <div
                  className="col-auto flex justify-center items-center"
                  onClick={() => cancelItem(item.id)}
                  role="button"
                >
                  <p className="font-bold text-red-500">X</p>
                </div>
                <div className="col-span-3">
                  <img
                    src={item.product?.image?.[0]?.image}
                    className="scale-150"
                    alt={item.product.name}
                  />
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="font-semibold text-gray-600">
                    {item.product.name}
                  </div>
                </div>
                <div className="col-span-2 flex items-center text-red-500 font-bold">
                  {item.product.price}
                </div>
                <AmontItem
                  amount={item.amount}
                  price={item.product.price}
                  id={item.id}
               
                />
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
