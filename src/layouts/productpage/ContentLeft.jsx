import React from "react";
import useAuth from "../../features/auth/hooks/use-auth";

const menulist = [
  { name: "Smartphone", id: 1 },
  { name: "Headphone", id: 3 },
  { name: "Tablet", id: 2 },
  { name: "Smartwatch", id: 4 },
  { name: "All", id: 5 },
];

export default function ContentLeft() {
  const {selectProductType} = useAuth()

  return (
    <div className="h-[100%] p-4">
      <div>
        <h1 className="font-bold pb-4 pt-8 px-2">BROWSE</h1>
        <div>
          {menulist.map((item) => {
            return (
              <div key={item.id}>
                <p  className="font-sx px-2 py-2" role="button"  onClick={()=>(selectProductType(item.id))}>
                  {item.name}
                </p>
                <hr className="w-[80%] border-red-500" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
