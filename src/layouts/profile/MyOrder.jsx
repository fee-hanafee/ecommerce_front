import React from "react";
import useAuth from "../../features/auth/hooks/use-auth";
import * as userApi from "../../api/user-api";
import useProfile from "./context/ProfileContext";
export default function MyOrder() {
  const { authUser } = useAuth();
  const { getMyOrder } = useProfile();

  return (
    <div>
      <div className="p-2 border">
        <h1 className="font-semibold text-2xl">Order</h1>
        <p className="text-2xl font-mono" role="button" onClick={getMyOrder}>
          My Order
        </p>
      </div>
    </div>
  );
}
