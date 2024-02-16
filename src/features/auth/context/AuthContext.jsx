import { createContext, useState } from "react";

import { getToken, storeToken, claerToken } from "../../../utils/local-store";
import * as authApi from "../../../api/auth-api";
import * as productApi from "../../../api/product-api";
import * as userApi from "../../../api/user-api";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);
  const [product, setProduct] = useState([]);
  const [selectProduct, setSelectProduct] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    productApi
      .fetchProduct()
      .then((item) => {
        setProduct(item.data.product);
        setSelectProduct(item.data.product);
      })
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

    setAuthUser(respon.data.user);
    storeToken(respon.data.accessToken);
  };

  const logout = async () => {
    setAuthUser(null);
    claerToken();
    toast.error("Logout");
  };

  const selectProductType = (type) => {
    if (type != 5) {
      setSelectProduct(product.filter((el) => el.typeId == type));
    } else {
      setSelectProduct([...product]);
    }
  };

  const buyNow = async (item) => {
    try {
      await userApi.createItemOnCart({ productId: item.id });
      toast.success("add to cart");
    } catch (err) {
      toast.error("idk");
    }
  };

  const cancelItem = async (id) => {
    try {
      setCart(cart.filter((el) => el.id != id));
      console.log(id);
      await userApi.deleteItemCart(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        initialLoad,
        register,
        login,
        logout,
        authUser,
        product,
        selectProduct,
        selectProductType,
        buyNow,
        cart,
        cancelItem,

        setCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
