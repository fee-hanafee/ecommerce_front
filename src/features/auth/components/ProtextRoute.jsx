import React from "react";
import useAuth from "../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function ProtextRoute({ children }) {
  const { authUser } = useAuth();
  return authUser?.role === "ADMIN" ? children : <Navigate to="/" />;
}
