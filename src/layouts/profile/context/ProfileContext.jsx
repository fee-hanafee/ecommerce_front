import { createContext, useContext, useState } from "react";

import * as userApi from "../../../api/user-api";
import { toast } from "react-toastify";

const ProfileContext = createContext();

export function ProfileContextProvider({ children }) {
  const [myOrder, setMyOrder] = useState();
  const [loading, setLoading] =useState(false)

  const getMyOrder = async () => {
    try {
      const order = await userApi.getOrder();
      setMyOrder(order.data.order);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatusShipping = async (id) => {
    try {
        setLoading(true)
      const data = {};
      data.shipping = true;
      data.id = id;
      const updateOrder = await userApi.updateOrder(data);
      await getMyOrder()
      toast.success("THANK !");
    } catch (err) {
      console.log(err);
    } finally {
        setLoading(false)
    }
  };
  return (
    <ProfileContext.Provider
      value={{ getMyOrder, myOrder, updateStatusShipping,loading }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default function useProfile() {
  return useContext(ProfileContext);
}
