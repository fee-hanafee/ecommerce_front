import React from "react";
import useAdmin from "../context/AdminContext";

export default function CustomerList() {
  const { customer } = useAdmin();

  return (
    <div className="flex flex-wrap gap-4">
      {customer?.map((el) => {
        return (
          <div key={el.id} className="bg-gray-200 p-3 rounded-lg">
            <div>
              <h1 className="font-bold">User id : {el.id}</h1>
            </div>
            <div className="text-lg   font-mono">
              <p>Email : {el.email}</p>
              <p>Mobile : {el?.mobile}</p>
              <p>Role : {el.role}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
