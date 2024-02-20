import React from "react";
import useAuth from "../../../features/auth/hooks/use-auth";
import useAdmin from "../context/AdminContext";

export default function Product() {
    const {product} = useAuth()
    const {handleIsshow} = useAdmin()

    
   
  return (
    <div className="bg-blue-100 p-2">
      <div>
        <h1 className="font-semibold">Product</h1>
      </div>
      <div className="p-2" >
        <p onClick={()=> handleIsshow('product')}>all product</p>
        <p>add new product</p>
     
      </div>
    </div>
  );
}
