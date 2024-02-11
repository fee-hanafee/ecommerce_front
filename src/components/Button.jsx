import React from "react";

export default function Button({ children, bg, color, width }) {
  const classess = `${
    bg ? "bg-" + bg + "-500" + " hover:bg-" + bg + "-600" : ""
  } ${color ? " text-white" : ""}
  ${width ? " w-full" : ""}`;

  return (
    <>
      <button className={`${classess} rounded-md px-3 py-1.5`}>
        {children}
      </button>
    </>
  );
}
