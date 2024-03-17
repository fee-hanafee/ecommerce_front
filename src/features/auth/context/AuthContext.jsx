import { createContext, useState } from "react";

import { getToken, storeToken, claerToken } from "../../../utils/local-store";
import * as authApi from "../../../api/auth-api";
import * as productApi from "../../../api/product-api";
import * as userApi from "../../../api/user-api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { regis } from "../../../redux/slice/registerSlice";
import { useSelector } from "react-redux";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);
  const [product, setProduct] = useState([]);
  const [selectProduct, setSelectProduct] = useState([]);
  const [address, setAddress] = useState("");
  const [cart, setCart] = useState([]);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.R1);
  const getProduct = () => {
    productApi
      .fetchProduct()
      .then((item) => {
        setProduct(item.data.product);
        setSelectProduct(item.data.product);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
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
    // const respon = await authApi.register(user);

    // setAuthUser(respon.data.newUser);
    // storeToken(respon.data.accessToken);
    dispatch(regis(user));
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
      await fetchItemCart();
    } catch (err) {
      toast.error("idk");
    }
  };

  const cancelItem = async (id) => {
    try {
      setCart(cart.filter((el) => el.id != id));

      await userApi.deleteItemCart(id);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchItemCart = async () => {
    try {
      const respon = await userApi.getCart();

      setCart(respon.data.item);
    } catch (err) {
      console.log(err);
    }
  };

  const handleaddress = (input) => {
    setAddress(input);
  };

  const submitOrder = async (image) => {
    try {
      if (address || address.trim() != "") {
        if (cart.length == 0) {
          return toast.error("add item");
        }
        const formData = new FormData();

        formData.append("image", image);
        formData.append("adress", address);
        await userApi.createOrder(formData);
        toast.success("order on the buss");
        setAddress("");
      }
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
        fetchItemCart,
        setCart,
        submitOrder,
        handleaddress,
        address,
        getProduct,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
