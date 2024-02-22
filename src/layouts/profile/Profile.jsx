import React from "react";
import MyOrder from "./MyOrder";
import MyOrderList from "./MyOrderList";

export default function Profile() {
  return (
    <div className="p-2">
      <div className="grid grid-cols-12 min-h-[500px]">
        <div className="col-span-2 ">
          <MyOrder />
        </div>
        <div className="col-span-10">
          <div className="flex flex-wrap gap-4">
            <MyOrderList />
          </div>
        </div>
      </div>
    </div>
  );
}
