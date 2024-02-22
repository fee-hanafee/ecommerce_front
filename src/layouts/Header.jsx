import Navbar from "./Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import { NAV_BAR_HEIGHT } from "../constans/taiwindConstant";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <div className="relative z-40">
      <div className={`w-full fixed  h-[${NAV_BAR_HEIGHT}]`}>
        <Navbar className="text-white " role="button" />

        <div className="bg-red-600 h-9">
          <div className="flex items-center justify-between p-1  mx-auto">
            <div className="flex gap-8  px-8">
              <Link
                to="/"
                className={`${
                  location.pathname == "/" ? "text-black" : ""
                } font-medium hover:text-black transition-all text-white`}
              >
                {" "}
                HOME
              </Link>
              <Link
                to="/shop"
                className={`${
                  location.pathname == "/shop" ? "text-black" : ""
                } font-medium hover:text-black transition-all text-white`}
              >
                {" "}
                SHOP
              </Link>
            </div>
            <div className="flex gap-2 px-8">
              <FacebookIcon className="text-white " role="button" />
              <InstagramIcon className="text-white " role="button" />
              <GoogleIcon className="text-white " role="button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
