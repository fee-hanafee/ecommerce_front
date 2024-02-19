import React from "react";
import { useState } from "react";
import useAuth from "../../../features/auth/hooks/use-auth";
import * as userApi from "../../../api/user-api";
import useRL from "../context/ContextRL";
import { useEffect } from "react";

export default function AmontItem({ amount, price, id }) {
  const { cancelItem} = useAuth();
  const { updatePrice } = useRL();
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

  useEffect(()=> {
    updatePrice()
  },[])

  return (
    <>
      <div className="col-span-2 flex items-center">
        <div className="flex gap-2 bg-gray-200">
          <div
            className="border px-2 border-red-600"
            onClick={() => {
              setCount((cur) => cur + 1);
              updateItemCart(id, "increase");
              updatePrice();
            }}
            role="button"
          >
            +
          </div>
          <div>{count}</div>
          <div
            className="border px-2 border-red-600"
            onClick={() => {
              if (count != 0) {
                setCount((cur) => cur - 1);
                updateItemCart(id);
                updatePrice();
              }
            }}
            role="button"
          >
            -
          </div>
        </div>
      </div>
      <div className="col-span-2 flex items-center px-2">{price * count}</div>
    </>
  );
}
