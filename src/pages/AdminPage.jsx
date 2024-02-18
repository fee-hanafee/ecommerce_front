import React from "react";
import Container from "../layouts/admin/Container";
import { AdminContextProvider } from "../layouts/admin/context/AdminContext";

export default function AdminPage() {
  return (
    <AdminContextProvider>
      <div className={` pt-[100px] `}>
        <Container />
      </div>
    </AdminContextProvider>
  );
}
