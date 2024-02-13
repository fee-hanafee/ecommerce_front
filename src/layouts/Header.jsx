import Navbar from "./Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import { NAV_BAR_HEIGHT } from "../constans/taiwindConstant";

export default function Header() {
  return (
    <div className="relative">
      <div className={`w-full fixed  h-[${NAV_BAR_HEIGHT}]`}>
        <Navbar className="text-white " role="button" />

        <div className={`bg-red-600 h-9 `}>
          <div className=" flex gap-2 px-2 py-1.5">
            <FacebookIcon className="text-white " role="button" />
            <InstagramIcon className="text-white " role="button" />
            <GoogleIcon className="text-white " role="button"/>
          </div>
        </div>
      </div>
    </div>
  );
}
