import React from "react";
import useAuth from "../../../features/auth/hooks/use-auth";

export default function Product() {
    const {product} = useAuth()

    
   
  return (
    <div className="bg-blue-100 p-2">
      <div>
        <h1 className="font-semibold">Product</h1>
      </div>
      <div className="p-2" >
        <p onClick={()=> console.log(product)}>all product</p>
        <p>add new product</p>
        <p>edit product</p>
        <p>delete product</p>
      </div>
    </div>
  );
}
