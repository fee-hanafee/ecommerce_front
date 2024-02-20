import React from "react";
import useAdmin from "../context/AdminContext";

export default function Order() {
  const { getOrder, handleIsshow } = useAdmin();
  return (
    <div className="bg-red-100 p-2">
      <div>
        <h1 className="font-semibold">Order</h1>
      </div>
      <div className="p-2">
        <p
          onClick={() => {
            getOrder();
            handleIsshow("order");
          }}
        >
          all order
        </p>
   
      </div>
    </div>
  );
}
