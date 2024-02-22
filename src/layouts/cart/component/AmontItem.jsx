import React from "react";
import { useState } from "react";
import useAuth from "../../../features/auth/hooks/use-auth";
import * as userApi from "../../../api/user-api";
import useRL from "../context/ContextRL";
import { useEffect } from "react";
import Spinner from "../../../components/Spinner";

export default function AmontItem({ amount, price, id }) {
  const { cart, cancelItem } = useAuth();
  const { updatePrice, totalPrice } = useRL();
  const [count, setCount] = useState(amount);
  const [loading, setLoading] = useState(false);

  const updateItemCart = async (productId, item) => {
    try {
      if (item == "increase") {
        await userApi.updateItemCart({ id: productId, amount: count + 1 });
      } else if (item == "decrease") {
        await userApi.updateItemCart({ id: productId, amount: count - 1 });

        if (count == 1 || amount == 1 || count == 0 || amount == 0) {
          await cancelItem(productId);
        }
      }
      await fetchItemCart();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   updatePrice();
  // }, []);

  return (
    <>
      {loading && <Spinner />}
      <div className="col-span-2 flex items-center">
        <div className="flex gap-2 ">
          <div
            className="border px-2 bg-gray-400 rounded-md text-white hover:bg-blue-500"
            onClick={async () => {
              await updateItemCart(id, "increase");
              setCount((cur) => cur + 1);

              await updatePrice();
            }}
            role="button"
          >
            +
          </div>
          <div>{amount}</div>
          <div
            className="border px-2  bg-gray-400 rounded-md text-white hover:bg-red-500"
            onClick={async () => {
              if (count != 0 || amount != 0) {
                await updateItemCart(id, "decrease");
                setCount((cur) => cur - 1);

                await updatePrice();
              }
            }}
            role="button"
          >
            -
          </div>
        </div>
      </div>
      <div className="col-span-2 flex items-center px-2 text-red-500 font-bold  ">
        {price * amount}
      </div>
    </>
  );
}
