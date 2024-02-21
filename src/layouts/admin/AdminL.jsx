import React from "react";
import Order from "./order/Order";
import Customer from "./customoer/Customer";
import Product from "./product/Product";

export default function AdminL() {
  return (
    <div className="col-span-2 min-h-[500px] bg-gray-200">
      <div className="flex flex-col gap-4 p-2">
        <Order />
        <Product />
        <Customer />
      </div>
    </div>
  );
}
