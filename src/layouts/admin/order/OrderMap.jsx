import React, { useState } from "react";
import useAdmin from "../context/AdminContext";

export default function OrderMap({ el }) {
  const [isShow, setIsShow] = useState(false);
  const { order, comfirmOrder, rejectOrder, deliver, loading } = useAdmin();

  return (
    <div className="border bg-gray-100 rounded-lg p-4">
      <div className="flex  flex-col gap-4">
        <div>
          <div>
            <h1 className="font-bold">Order No.{el.id}</h1>
          </div>
          <div className="text-lg   font-mono">
            <p>User ID : {el.userId}</p>
            <p>Address : {el.adress}</p>
            <p>Total price : {el.totalPrice} THB</p>
            <p>Payment : {el.payment ? "จ่ายแล้ว" : "ยังไม่จ่าย"}</p>
            <p>Shipping : {el.shipping ? "ถึงแล้ว" : "ยังไม่ถึง"}</p>
            <p
              className="text-red-500 p-2 text-"
              role="button"
              onClick={() => setIsShow(!isShow)}
            >
              Slip
            </p>
            {isShow && <img src={el.image} />}
          </div>
          <div>
            {el?.orderItem.map((item) => {
              return (
                <div key={item.id} className="flex gap-4 text-lg   font-mono">
                  <p>Product id : {item.productId}</p>
                  <p>Amount : {item.amount}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-end justify-between border border-red-500 rounded-md">
          <div className=" p-2">
            <p className="font-semibold text-red-500">Payment</p>
            <div className="flex gap-2  justify-between">
              <button
                className="bg-blue-500 px-1.5 py-1.5 rounded-md text-white text-xs font-semibold hover:bg-blue-600"
                onClick={() => comfirmOrder(el.id)}
              >
                Confirm
              </button>
              <button
                className="bg-red-500 px-1.5 py-1.5 rounded-md text-white text-xs font-semibold hover:bg-red-600"
                onClick={() => rejectOrder(el.id)}
              >
                Reject
              </button>
            </div>
          </div>
          <div className=" p-2">
            <p className="font-semibold text-green-600">Deliver</p>
            <button
              className="bg-green-500 px-1.5 py-1.5 rounded-md text-white text-xs font-semibold hover:bg-green-600"
              onClick={() => deliver(el.id)}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
