import React from "react";
import useAuth from "../../features/auth/hooks/use-auth";
import { useState } from "react";
import { useEffect } from "react";
import useRL from "./context/ContextRL";
import { useNavigate } from "react-router-dom";

function List({ children }) {
  return (
    <>
      <div className="flex justify-between px-3 py-3">{children}</div>
      <hr className="w-full border" />
    </>
  );
}

export default function CartR() {
  const { submitOrder, handleaddress, address } = useAuth();
  const { totalPrice, updatePrice } = useRL();
  const [error, setError] = useState("");



  useEffect(() => {
    updatePrice();
  }, []);

  return (
    <form onSubmit={submitOrder} className="px-4 rounded-lg mx-2 py-2 border">
      <div>
        <h1 className="text-2xl font-semibold text-gray-500 px-3">
          Cart Total
        </h1>
        <hr className="border-2" />
        <List>
          {" "}
          <h5>Subtotal</h5>
          <h5>{totalPrice}</h5>
        </List>
        <List>
          <h5>Shpping</h5>
          <h5>Free Shpping</h5>
        </List>
        <List>
          <h5>Total</h5>
          <h5>{totalPrice}</h5>
        </List>
        <div>
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
        </div>
      </div>
    </form>
  );
}
