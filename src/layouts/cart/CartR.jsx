import React from "react";
import useAuth from "../../features/auth/hooks/use-auth";
import { useState } from "react";
import { useEffect } from "react";
import useRL from "./context/ContextRL";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function List({ children }) {
  return (
    <>
      <div className="flex justify-between px-3 py-3 text-lg   font-mono">
        {children}
      </div>
    
    </>
  );
}

export default function CartR() {
  const { submitOrder, handleaddress, address, cart } = useAuth();
  const { totalPrice, reLoad } = useRL();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitOrder();
    await reLoad();
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 rounded-lg mx-2 py-2 border">
      <div>
        <h1 className="text-2xl font-mono shadow-sm text-gray-600 px-3 border rounded-md " >
          Cart Total
        </h1>
      
        <List>
          {" "}
          <h5>Subtotal</h5>
          <h5>{totalPrice} THB</h5>
        </List>
        <List>
          <h5>Shpping</h5>
          <h5>Free Shpping</h5>
        </List>
        <List>
          <h5>Total</h5>
          <h5>{totalPrice} THB</h5>
        </List>
        <div className="border rounded-lg p-2 font-mono text-green-700 mt-2">
          <textarea
            className="resize-none no-underline outline-none "
            rows={5}
            cols={40}
            placeholder="Your Address"
            value={address}
            onChange={(e) => {
              handleaddress(e.target.value);
              setError("");
            }}
          />
          {error && (
            <span className="text-red-500 font-sx">address is require</span>
          )}
        </div>
        <div>
          {cart.length > 0 ? (
            <button
              className="border mt-2 mb-2 p-2 font-semibold rounded-md bg-gray-200 text-gray-500 hover:bg-blue-500 hover:text-white transition"
              onClick={() => {
                if (!address || address.trim() == "") {
                  setError("error");
                }
              }}
            >
              Submit
            </button>
          ) : (
            <button
              className="border mt-2 mb-2 p-2 font-semibold rounded-md bg-gray-200 text-gray-500 transition"
              disabled
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
