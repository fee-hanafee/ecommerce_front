import React from "react";

const menulist = [
  { name: "Smartphone" },
  { name: "Headphone" },
  { name: "Tablet" },
  { name: "Smartwatch" },
  { name: "All" },
];

export default function ContentLeft() {
  return (
    <div className="h-[100%] p-4">
      <div>
        <h1 className="font-bold pb-4 pt-8 px-2">BROWSE</h1>
        <div>
          {menulist.map((item) => {
            return (
              <>
                <p key={item.name} className="font-sx px-2 py-2" role="button">
                  {item.name}
                </p>
                <hr className="w-[80%] border-red-500" />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
