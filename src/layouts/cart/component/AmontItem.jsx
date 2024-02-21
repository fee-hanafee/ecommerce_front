import React from "react";
import { useState } from "react";
import useAuth from "../../../features/auth/hooks/use-auth";
import * as userApi from "../../../api/user-api";
import useRL from "../context/ContextRL";
import { useEffect } from "react";

export default function AmontItem({ amount, price, id }) {
  const { cart, cancelItem } = useAuth();
  const { updatePrice, totalPrice } = useRL();
  const [count, setCount] = useState(amount);

  const updateItemCart = async (productId, item) => {
    try {
      if (item == "increase") {
        await userApi.updateItemCart({ id: productId, amount: count + 1 });
      } else if (count != 0) {
        await userApi.updateItemCart({ id: productId, amount: count - 1 });
        if (count == 1) {
          await await cancelItem(productId);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    updatePrice();
  }, []);

  return (
    <>
      <div className="col-span-2 flex items-center">
        <div className="flex gap-2 ">
          <div
            className="border px-2 bg-gray-400 rounded-md text-white hover:bg-blue-500"
            onClick={async () => {
              setCount((cur) => cur + 1);
              await updateItemCart(id, "increase");
              updatePrice();
            }}
            role="button"
          >
            +
          </div>
          <div>{count}</div>
          <div
            className="border px-2  bg-gray-400 rounded-md text-white hover:bg-red-500"
            onClick={async () => {
              if (count != 0) {
                setCount((cur) => cur - 1);
                await updateItemCart(id);
                updatePrice();
              }
            }}
            role="button"
          >
            -
          </div>
        </div>
      </div>
      <div className="col-span-2 flex items-center px-2 text-red-500 font-bold  ">{price * count}</div>
    </>
  );
}
