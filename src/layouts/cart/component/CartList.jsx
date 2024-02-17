import React, { useState } from "react";
import AmontItem from "./AmontItem";

export default function CartList({ cart, cancelItem }) {
  return (
    <>
      {cart.map((item, index) => {
        if (item.status != 1) {
          return (
            <div key={index} className="bg-gray-200 rounded-lg">
              <div className="grid grid-cols-12 gap-8 p-4">
                <div className="col-span-1 flex items-center">
                  <div className="h-4 w-4 p-3  bg-red-500 flex items-center justify-center">
                    <button onClick={() => cancelItem(item.id)}>X</button>
                  </div>
                </div>
                <div className="col-span-3">
                  <img
                    src={item.product.image[0].image}
                    className="scale-150"
                    alt={item.product.name}
                  />
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="">{item.product.name}</div>
                </div>
                <div className="col-span-2 flex items-center">
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
