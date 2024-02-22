import React from "react";
import useAdmin from "../context/AdminContext";
import Spinner from "../../../components/Spinner";
import { useState } from "react";
import OrderMap from "./OrderMap";

export default function OrderList() {
  const { order, comfirmOrder, rejectOrder, deliver, loading } = useAdmin();

  return (
    <div className="">
      {loading && <Spinner />}
      <div className="flex flex-wrap gap-4">
        {order?.map((el) => {
          return <OrderMap key={el.id} el={el} />;
        })}
      </div>
    </div>
  );
}
