import { createContext, useState } from "react";

import { getToken, storeToken, claerToken } from "../../../utils/local-store";
import * as authApi from "../../../api/auth-api";
import * as productApi from "../../../api/product-api";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);
  const [product, setProduct] = useState([]);


  useEffect(() => {
    productApi
      .fetchProduct()
      .then((item) => setProduct(item.data.product))
      .catch((err) => console.log(err));

    if (getToken()) {
      authApi
        .fetchMe()
        .then((res) => setAuthUser(res.data.user))
        .catch((err) => toast.error(err.response?.data.message))
        .finally(() => setInitialLoad(false));
    } else {
      setInitialLoad(false);
    }
  }, []);

  const register = async (user) => {
    const respon = await authApi.register(user);

    setAuthUser(respon.data.newUser);
    storeToken(respon.data.accessToken);
  };

  const login = async (user) => {
    const respon = await authApi.login(user);
    console.log(respon.data);
    setAuthUser(respon.data.user);
    storeToken(respon.data.accessToken);
  };

  const logout = async () => {
    setAuthUser(null);
    claerToken();
    toast.error("Logout");
  };

  return (
    <AuthContext.Provider
      value={{ initialLoad, register, login, logout, authUser,product }}
    >
      {children}
    </AuthContext.Provider>
  );
}
