import React from "react";

export default function Button({
  children,
  bg = "bg-blue-500 hover:bg-blue-600",
  type,
}) {
  const finalClass = bg == "green" ? "bg-green-500 hover:bg-green-600" : bg;
  return (
    <button
      className={` ${finalClass} rounded-md px-3 py-1.5  w-full text-white`}
      type={type}
    >
      {children}
    </button>
  );
}
