import React from "react";
import useAuth from "../../features/auth/hooks/use-auth";
import { useState, useRef } from "react";

import useRL from "./context/ContextRL";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

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
  const [image, setImage] = useState(null);
  const [loading, setloading] = useState(false);

  const fileInputEl = useRef(null);

  const handleSubmit = async (e) => {
    try {
      setloading(true);
      e.preventDefault();
      await submitOrder(image);
      await reLoad();
      toast.success("upload slip success");
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <form
        onSubmit={handleSubmit}
        className="px-4 rounded-lg mx-2 py-2 border"
      >
        <div>
          <h1 className="text-2xl font-mono shadow-sm text-gray-600 px-3 border rounded-md ">
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
          <div className="p-2 flex  flex-col gap-2">
            <input
              type="file"
              className="hidden"
              ref={fileInputEl}
              onChange={(e) => {
                if (e.target.files[0]) setImage(e.target.files[0]);
              }}
            />
            <p className="border px-2 py-2 bg-gray-300 font-mono rounded-md text-center ">
              Bank Kasikorn : 234 2342 999
            </p>
            <div className="text-end">
              <button
                onClick={(e) => fileInputEl.current.click()}
                type="button"
                className="bg-gray-300 text-black rounded-md hover:bg-green-600 hover:text-white px-1.5 py-1 text-xs"
              >
                Upload slip
              </button>
            </div>
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
    </>
  );
}
