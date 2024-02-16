import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useState } from "react";

import RegisterForm from "../features/auth/components/RegisterForm";
import LoginForm from "../features/auth/components/LoginForm";
import useAuth from "../features/auth/hooks/use-auth";
import { Link } from "react-router-dom";

export default function ContentRight() {
  const { authUser, logout} = useAuth();
  const [open, setOpen] = useState({ register: false, login: false });
  const bg =
    authUser?.role == "USER"
      ? "bg-green-500"
      : authUser?.role == "ADMIN"
      ? "bg-blue-500"
      : "";
  return (
    <div className="flex-none gap-8 px-8">
      <Link to="/cart">
      <ShoppingCartIcon role="button" className="text-red-500" />
      </Link>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="text-white">
          <PersonIcon className={`${bg} mb-0.5  `} />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto"
        >
          <li>
            {authUser?.role == "USER" ? (
              <>
                <Link to="me">
                  <h4>Profile</h4>
                </Link>
              </>
            ) : authUser?.role == "ADMIN" ? (
              <>
                <Link to="admin">
                  <h4>Admin</h4>
                </Link>
                <Link to="me">
                  <h4>Profile</h4>
                </Link>
              </>
            ) : (
              <h4
                onClick={() => setOpen((cur) => ({ ...cur, register: true }))}
              >
                Register
              </h4>
            )}
          </li>
          <li>
            {authUser ? (
              <h4 onClick={logout} role="button">
                Logout
              </h4>
            ) : (
              <h4 onClick={() => setOpen((cur) => ({ ...cur, login: true }))}>
                Login
              </h4>
            )}
          </li>
        </ul>
      </div>

      {open.register && (
        <RegisterForm
          onClose={() => setOpen((cur) => ({ ...cur, register: false }))}
        />
      )}

      {open.login && (
        <LoginForm
          onClose={() => setOpen((cur) => ({ ...cur, login: false }))}
        />
      )}
    </div>
  );
}
