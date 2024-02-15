import axios from "../config/axios";

export const fetchProduct = () => axios.get("/public/product");
