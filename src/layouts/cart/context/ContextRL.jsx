import React, { useContext, createContext } from "react";
import { useState } from "react";
import useAuth from "../../../features/auth/hooks/use-auth";
import { useEffect } from "react";

const ContextRL = createContext();

export function ContextRLProvider({ children }) {
  const { cart, fetchItemCart } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);

  const [loading, setLoading] = useState(false);

  const updatePrice = () => {
    fetchItemCart();
  };

  useEffect(() => {
    const total = cart.reduce((acc, el) => {
      acc += +el.product.price * el.amount;
      return acc;
    }, 0);

    setTotalPrice(total);
  }, [cart]);

  const reLoad = async () => {
    try {
      setLoading(true);

      await fetchItemCart();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContextRL.Provider value={{ totalPrice, updatePrice, loading, reLoad }}>
      {children}
    </ContextRL.Provider>
  );
}

export default function useRL() {
  return useContext(ContextRL);
}
