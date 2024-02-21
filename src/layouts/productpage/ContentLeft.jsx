import React from "react";
import useAuth from "../../features/auth/hooks/use-auth";

const menulist = [
  { name: "SMARTPHONE", id: 1 },
  { name: "HEADPHONE", id: 3 },
  { name: "TABLET", id: 4 },
  { name: "SMARTWATCH", id: 2 },
  { name: "ALL", id: 5 },
];

export default function ContentLeft() {
  const { selectProductType } = useAuth();

  return (
    <div className="min-h-[500px] p-4">
      <div>
        <h1 className="font-bold pb-4 pt-8 px-2">BROWSE</h1>
        <div>
          {menulist.map((item) => {
            return (
              <div key={item.id} className="font-mono text-lg text-gray-500">
                <p
                  className="font-sx px-2 py-2"
                  role="button"
                  onClick={() => selectProductType(item.id)}
                >
                  {item.name}
                </p>
                <hr className="w-[80%] border-[1px]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
