import { useState, createContext, useContext } from "react";

import * as adminApi from "../../../api/admin-api";
import * as publicApi from "../../../api/product-api";
import { toast } from "react-toastify";

const AdminContext = createContext();

export function AdminContextProvider({ children }) {
  const [order, setOrder] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState({
    order: "",
    product: "",
    customer: "",
    addProduct: "",
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
    if (name == "order") {
      setIsShow({ order: "open", product: "", customoer: "", addProduct: "" });
    } else if (name == "product") {
      setIsShow({ order: "", product: "open", customoer: "", addProduct: "" });
    } else if (name == "customer") {
      setIsShow({ order: "", product: "", customer: "open", addProduct: "" });
    } else if (name == "addProduct") {
      setIsShow({ order: "", product: "", customer: "", addProduct: "open" });
    }
  };

  const comfirmOrder = async (id) => {
    try {
      setLoading(true);
      const data = {};
      data.id = id;
      data.payment = true;
      await adminApi.updateOrder(data);
      toast.success("CONFIRM PAYMENT");
      getOrder();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const rejectOrder = async (id) => {
    try {
      setLoading(true);
      await adminApi.deleteOrder(id);
      getOrder();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deliver = async (id) => {
    try {
      setLoading(true);
      const data = {};
      data.id = id;
      data.shipping = true;
      await adminApi.updateOrder(data);
      toast.success("CONFIRM ORDER");
      getOrder();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        getOrder,
        customer,
        getCustomer,
        isShow,
        handleIsshow,
        order,
        comfirmOrder,
        rejectOrder,
        deliver,
        loading,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default function useAdmin() {
  return useContext(AdminContext);
}
