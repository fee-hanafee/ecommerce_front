import React, { useContext, createContext } from "react";
import { useState } from "react";
import useAuth from "../../../features/auth/hooks/use-auth";
import { useEffect } from "react";

const ContextRL = createContext();

export function ContextRLProvider({ children }) {
    const {cart,fetchItemCart} = useAuth()
    const [totalPrice, setTotalPrice] = useState(0)

    
    const updatePrice = () => {
        fetchItemCart()
        const total = cart.reduce((acc,el)=> {
            acc += +el.product.price * el.amount
            return acc
        },0)

        setTotalPrice(total)
        
    }



  return <ContextRL.Provider value={{updatePrice,totalPrice}} >{children}</ContextRL.Provider>;
}

export default function useRL() {
  return useContext(ContextRL);
}
