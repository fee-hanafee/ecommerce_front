import React from "react";
import useAdmin from "../context/AdminContext";

export default function Customer() {
  const { getCustomer, handleIsshow,isShow} = useAdmin();
  const classes = isShow.customer ? "border-red-500" : null;

  return (
    <div  className={`border-2 ${classes} rounded-md p-2`}>
      <div>
        <h1 className="font-semibold">Customer</h1>
      </div>
      <div className="p-2">
        <p
          onClick={() => {
            getCustomer();
            handleIsshow("customer");
          }}
          role="button"
          className="hover:bg-gray-300 p-2 text-sm rounded-md"
        >
          All Customer
        </p>
      </div>
    </div>
  );
}
