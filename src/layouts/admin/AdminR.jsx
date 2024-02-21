import React from "react";
import useAdmin from "./context/AdminContext";
import OrderList from "./order/OrderList";
import ProductList from "./product/ProductList";
import CustomerList from "./customoer/CustomerList";
import AddProduct from "./product/AddProduct";

export default function AdminR() {
  const { isShow } = useAdmin();
  return (
    <div className=" col-span-10">
      <div className=" p-3">
        {isShow.order && <OrderList />}
        {isShow.product && <ProductList />}
        {isShow.customer && <CustomerList />}
        {isShow.addProduct && <AddProduct />}
      </div>
    </div>
  );
}
