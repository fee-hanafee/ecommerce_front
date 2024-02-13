import React from "react";

export default function Modal({ title, children, onClose, width }) {
  return (
    <>
      <div className="fixed bg-white inset-0 opacity-60"></div>
      <div className="fixed inset-0">
        <div className="flex items-center justify-center min-h-full py-8 ">
          <div
            className="bg-white  rounded-lg shadow-[0_0_15px_rgb(0,0,0,0.2)] max-h-[calc(100vh-4rem)] flex flex-col"
            style={{ width: `${width}rem` }}
          >
            <div className="border-b flex  justify-between p-4">
              <button className="font-bold invisible">&#10005;</button>
              <h5 className="text-3xl font-semibold">{title}</h5>
              <button className="font-semibold text-rose-400 hover:text-red-600" onClick={onClose}>
                close 
              </button>
            </div>
            <div className="overflow-auto p-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
