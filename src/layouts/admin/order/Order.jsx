import React from "react";
import useAdmin from "../context/AdminContext";

export default function Order() {
  const { getOrder, handleIsshow, isShow } = useAdmin();

  const classes = isShow.order ? "border-red-500" : null;

  return (
    <div className={`border-2 ${classes} rounded-md p-2`}>
      <div>
        <h1 className="font-semibold">Order</h1>
      </div>
      <div className="p-2">
        <p
          onClick={() => {
            getOrder();
            handleIsshow("order");
          }}
          role="button"
          className="hover:bg-gray-300 p-2 text-sm rounded-md"
        >
          all order
        </p>
      </div>
    </div>
  );
}
