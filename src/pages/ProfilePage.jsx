import React from "react";
import Profile from "../layouts/profile/Profile";
import { ProfileContextProvider } from "../layouts/profile/context/ProfileContext";

export default function ProfilePage() {
  return (
    <div className="pt-[100px]">
      <ProfileContextProvider>
        <Profile />
      </ProfileContextProvider>
    </div>
  );
}
