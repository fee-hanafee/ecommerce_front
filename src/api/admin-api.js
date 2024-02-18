import axios from "../config/axios";

export const getOrder = () => axios.get("/admin/order");

export const getCustomer = () => axios.get("/admin/customer");
