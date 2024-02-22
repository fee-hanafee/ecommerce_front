import React from "react";
import useAuth from "../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function ProtextUser({children}) {
  const { authUser } = useAuth();

  return authUser ? children : <Navigate to="/" />;
}
