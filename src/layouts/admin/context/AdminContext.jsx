import { useState, createContext, useContext } from "react";

import * as adminApi from "../../../api/admin-api";
import * as publicApi from "../../../api/product-api";

const AdminContext = createContext();

export function AdminContextProvider({ children }) {
  const [order, setOrder] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [isShow, setIsShow] = useState({
    order: "",
    product: "",
    customer: "",
  });
 

  
  const getOrder = async () => {
    const item = await adminApi.getOrder();
    setOrder(item.data.order);
   
  };

  const getCustomer = async () => {
    const user = await adminApi.getCustomer();

    setCustomer(user.data.customer);
  };

  const handleIsshow = (name) => {
    if(name == 'order') {
        setIsShow( {order: "open",
        product: "",
        customoer: "",})
    } else if(name =='product') {
        setIsShow( {order: "",
        product: "open",
        customoer: "",})
    } else {
        setIsShow( {order: "",
        product: "",
        customer: "open",})
    }
  }

  return (
    <AdminContext.Provider value={{ getOrder, customer, getCustomer,isShow,handleIsshow,order }}>
      {children}
    </AdminContext.Provider>
  );
}

export default function useAdmin() {
  return useContext(AdminContext);
}
