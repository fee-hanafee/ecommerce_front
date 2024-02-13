import axios from "../config/axios";

export const register = (userObj) => axios.post("/auth/register", userObj);
export const login = (credential) => axios.post("/auth/login", credential);
export const fetchMe = () => axios.get("/auth/me");
