import React from "react";
import useAuth from "../../../features/auth/hooks/use-auth";
import { useState } from "react";
import { useEffect } from "react";
import * as userApi from "../../../api/user-api";
import CartList from "./CartList";

export default function CartItem() {
  const { cart, cancelItem, setCart } = useAuth();

  const fetchItemCart = async () => {
    try {
      const respon = await userApi.getCart();
      console.log(respon.data.item);
      setCart(respon.data.item);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchItemCart();
  }, []);

  return (
    <div className="flex flex-col gap-4 px-2 py-2 ">
      <CartList cart={cart} cancelItem={cancelItem}/>
    </div>
  );
}
