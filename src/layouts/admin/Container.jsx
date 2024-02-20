import React from "react";
import AdminL from "./AdminL";
import AdminR from "./AdminR";

export default function Container() {
  return (
    <div className="">
      <div className="grid grid-cols-12 h-full">
        <AdminL />
        <AdminR />
      </div>
    </div>
  );
}
