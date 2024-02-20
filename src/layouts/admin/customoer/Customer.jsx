import React from "react";
import useAdmin from "../context/AdminContext";

export default function Customer() {
  const { getCustomer, handleIsshow } = useAdmin();
  return (
    <div className="bg-green-100 p-2">
      <div>
        <h1 className="font-semibold">Customer</h1>
      </div>
      <div className="p-2">
        <p
          onClick={() => {
            getCustomer();
            handleIsshow("customer");
          }}
        >
          All Customer
        </p>
      </div>
    </div>
  );
}
