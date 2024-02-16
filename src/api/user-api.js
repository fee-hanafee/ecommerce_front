import axios from "../config/axios";

export const createItemOnCart = (productId) =>
  axios.post("/user/cart", productId);

export const getCart = () => axios.get("/user/cart");

export const deleteItemCart = (id) => axios.delete(`/user/cart/${id}`);
