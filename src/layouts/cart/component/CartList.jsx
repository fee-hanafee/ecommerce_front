import React, { useState } from "react";

export default function CartList({ cart ,cancelItem}) {
  return (
    <>
      {cart.map((item, index) => (
        <div key={index} className="bg-gray-200 rounded-lg">
          <div className="grid grid-cols-12 gap-8 p-4">
            <div className="col-span-1 flex items-center">
              <div className="h-4 w-4 p-3  bg-red-500 flex items-center justify-center">
                <button onClick={()=>cancelItem(item.id)}>X</button>
              </div>
            </div>
            <div className="col-span-3">
              <img
                src={item.product.image[0].image} // Add appropriate source here
                className="scale-150"
                alt={item.product.name} // Add alt attribute for accessibility
              />
            </div>
            <div className="col-span-2 flex items-center">
              <div className="">{item.product.name}</div>
            </div>
            <div className="col-span-2 flex items-center">
              {item.product.price}
            </div>
            <div className="col-span-2 flex items-center">
              <div className="flex gap-2 bg-gray-200">
                {/* You might want to move the count state into each item */}
                <div
                  className="border px-2 border-red-600"
                  onClick={
                    () => {} /* Add logic to update individual item count */
                  }
                  role="button"
                >
                  +
                </div>
                <div>{item.amount}</div>
                <div
                  className="border px-2 border-red-600"
                  onClick={
                    () => {} /* Add logic to update individual item count */
                  }
                  role="button"
                >
                  -
                </div>
              </div>
            </div>
            <div className="col-span-2 flex items-center">
              {/* Calculate and display totalPrice */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
