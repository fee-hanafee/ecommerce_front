import React from "react";
import useAuth from "../../../features/auth/hooks/use-auth";
import { useEffect } from "react";
import CartList from "./CartList";

export default function CartItem() {
  const { cart, cancelItem, fetchItemCart } = useAuth();

  useEffect(() => {
    fetchItemCart();
  }, []);

 

  return (
    <div className="flex flex-col gap-4 px-2 py-2 ">
      <CartList cart={cart} cancelItem={cancelItem} />
    </div>
  );
}
