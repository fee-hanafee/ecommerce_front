import React from "react";
import useAuth from "../../features/auth/hooks/use-auth";
import styled from "@emotion/styled";




export default function FeatureProduct() {
  const { product } = useAuth();


  return (
    <div className="h-[100%] bg-gray-700 flex flex-col">
      <div className="h-14 text-white text-2xl text-center font-bold">
        PRODUCTS
      </div>
      <div>
        <div className="flex overflow-auto p-2  gap-8" >
          {product?.map((item) => {
            return (
              <div onClick={()=>console.log(item)}
                key={item.id}
                className="h-[100%] shadow  bg-gray-600 rounded-md"
               
              >
                <div className="w-56 bg-white">
                  <img src={`${item?.image?.[0]?.image}`} />
                </div>
                <div>
                  <div className="px-4 py-2">
                    <h1 className="text-2xl text-white">{item.name}</h1>
                    <h5 className="text-white font-semibold">{item.price} ฿</h5>
                  </div>
                  <div className="flex justify-center items-center py-2">
                    <button className="text-white  px-6 py-1.5 rounded-full font-bold bg-red-500 hover:scale-110">BUY</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
