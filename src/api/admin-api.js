import axios from "../config/axios";

export const getOrder = () => axios.get("/admin/order");

export const getCustomer = () => axios.get("/admin/customer");

export const updateProduct = (data) => axios.patch("/admin/product", data);
export const updateImage = (data) => axios.patch("/admin/product/image", data);

export const deleteProduct = (id) => axios.delete(`/admin/product/${id}`);
export const createProduct = (data) => axios.post("/admin/product", data);
export const createImage = (data) => axios.post("/admin/image", data);

export const updateOrder = (data) => axios.patch("/admin/order", data);
export const deleteOrder = (id) => axios.delete(`/admin/order/${id}`);
