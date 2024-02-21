import React from "react";
import useAuth from "../../../features/auth/hooks/use-auth";
import useAdmin from "../context/AdminContext";

export default function Product() {
  const { handleIsshow, isShow } = useAdmin();
  const classes = isShow.product || isShow.addProduct ? "border-red-500" : null;
  return (
    <div className={`border-2 ${classes} rounded-md p-2`}>
      <div>
        <h1 className="font-semibold">Product</h1>
      </div>
      <div className="p-2">
        <p
          className="hover:bg-gray-300 p-2 text-sm rounded-md"
          onClick={() => handleIsshow("product")}
          role="button"
        >
          all product
        </p>
        <p
          className="hover:bg-gray-300 p-2 text-sm rounded-md"
          onClick={() => handleIsshow("addProduct")}
          role="button"
        >
          add new product
        </p>
      </div>
    </div>
  );
}
