import React from "react";
import useAdmin from "../context/AdminContext";

export default function OrderList() {
  const { order } = useAdmin();

  return (
    <div className="">
      <div className="flex flex-wrap gap-4">
        {order?.map((el) => {
          return (
            <div key={el.id} className="border bg-gray-100 rounded-lg p-4">
              <div>
                <h1 className="font-bold">Order No.{el.id}</h1>
              </div>
              <div className="text-lg   font-mono">
                <p>Address : {el.adress}</p>
                <p>Total price : {el.totalPrice} THB</p>
              </div>
              <div>
                {el?.orderItem.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex gap-4 text-lg   font-mono"
                    >
                      <p>Product id : {item.productId}</p>
                      <p>Amount : {item.amount}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
