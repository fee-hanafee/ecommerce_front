import axios from "../config/axios";

export const getOrder = () => axios.get("/admin/order");

export const getCustomer = () => axios.get("/admin/customer");

export const updateProduct = (data) => axios.patch('/admin/product',data)
export const updateImage = (data) => axios.patch('/admin/product/image',data)