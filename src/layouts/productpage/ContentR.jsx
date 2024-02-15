import React from "react";
import useAuth from "../../features/auth/hooks/use-auth";
export default function () {
  const { product } = useAuth();

  return (
    <div className="">
      <div className="flex flex-wrap gap-4 p-4 justify-center mx-auto">
        {product.map((item) => {
        
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center bg-gray-100 rounded-lg w-[320px] px-4 py-4"
              role="button"
            >
              <div>
                <img src={item?.image?.[0].image} />
              </div>
              <div className="font-bold text-2xl text-gray-600 py-2">
                {item.name}
              </div>
              <div className="font-semibold text-2xl text-red-500 py-2">
                {item.price}
              </div>
              <div className="flex flex-row gap-2">
                <button className="text-sx border bg-red-600 text-white px-2 py-2 rounded-lg">
                  BUY NOW
                </button>
                <button className="text-sx border bg-red-600 text-white px-2 py-2 rounded-lg">
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
