import Image from "next/image";
import NavLink from "./NavLink";
import Bars from "../Icons/Bars";
import Bell from "../Icons/Bell";
import Chat from "../Icons/Chat";
import Help from "../Icons/Help";
import Search from "./Search";
import NavIcon from "./NavIcon";
import User from "../Icons/User";

export default function Header() {
  return (
    <div className="sticky top-0 bg-white flex items-center justify-between px-8 py-2">
      <button>
        <Image src="/logoNew.png" alt="logo" width={100} height={30} />
      </button>
      <div className="items-center hidden lg:flex">
        <NavLink>Explore</NavLink>
        <NavLink>Dashboard</NavLink>
        <NavLink>My Challenges</NavLink>
        <NavLink>My Labs</NavLink>
        <NavLink>My Projects</NavLink>
        <NavLink>Career Explorer</NavLink>
      </div>
      <div className="hidden lg:flex items-center">
        <NavIcon>
          <Bell />
        </NavIcon>
        <NavIcon>
          <Chat />
        </NavIcon>
        <NavIcon>
          <Help />
        </NavIcon>
      </div>
      <div className="hidden lg:flex items-center">
        <Search />
        <NavIcon>
          <User />
        </NavIcon>
      </div>

      <NavIcon>
        <Bars />
      </NavIcon>
    </div>
  );
}
