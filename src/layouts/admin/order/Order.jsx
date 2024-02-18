import React from "react";
import useAdmin from "../context/AdminContext";



export default function Order() {

    const {getOrder} = useAdmin()
  return (
    <div className="bg-red-100 p-2">
      <div>
        <h1 className="font-semibold">Order</h1>
      </div>
      <div className="p-2">
        <p onClick={getOrder}>all order</p>
        <p>edit order</p>
        <p>delete order </p>
      </div>
    </div>
  );
}
