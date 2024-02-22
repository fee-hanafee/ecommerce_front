import React from "react";
import useAuth from "../../features/auth/hooks/use-auth";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function () {
  const { buyNow, selectProduct } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex flex-wrap gap-4 p-4 justify-center mx-auto">
        {selectProduct.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center bg-gray-100 rounded-lg w-[320px] px-4 py-4 shadow-[0_0_8px_rgb(0,0,0,0.25)]"
            >
              <div>
                <img src={item?.image?.[0]?.image} />
              </div>
              <hr className=" border border-red-500 w-full" />
              <div className="font-bold text-2xl text-gray-600 py-2">
                {item.name}
              </div>
              <div className="font-semibold text-2xl text-red-500 py-2">
                {item.price} THB
              </div>
              <div className="font-semibold text-2xl text-gray-500 py-2">
               Color {item.color}
              </div>
              <div className="flex flex-row gap-2">
                <button
                  className="text-sx border bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded-lg"
                  onClick={async () => {
                    await buyNow(item);
                    navigate("/cart");
                  }}
                >
                  BUY NOW
                </button>

                <button
                  className="text-sx border bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded-lg"
                  onClick={() => {
                    buyNow(item);
                    toast.success("Add to cart");
                  }}
                >
                  ADD CART
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
