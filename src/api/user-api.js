import axios from "../config/axios";

export const createItemOnCart = (productId) =>
  axios.post("/user/cart", productId);

export const getCart = () => axios.get("/user/cart");

export const deleteItemCart = (id) => axios.delete(`/user/cart/${id}`);

export const updateItemCart = (data) => axios.patch("/user/cart", data);

export const createOrder = (data) => axios.post("/user/order", data);

export const getOrder = () => axios.get("/user/order");

export const updateOrder = (data) => axios.patch("/user/order", data);
