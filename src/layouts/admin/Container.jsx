import React from "react";
import AdminL from "./AdminL";
import AdminR from "./AdminR";

export default function Container() {
  return (
    <div className="h-[calc(100vh-140px)]">
      <div className="grid grid-cols-12 h-full">
        <AdminL />
        <AdminR />
      </div>
    </div>
  );
}
