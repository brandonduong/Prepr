import Image from "next/image";
import NavLink from "./NavLink";
import Bars from "../Icons/Bars";
import Bell from "../Icons/Bell";
import Chat from "../Icons/Chat";
import Help from "../Icons/Help";
import Search from "./Search";
import NavIcon from "./NavIcon";
import User from "../Icons/User";
import Moon from "../Icons/Moon";

export default function Header({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (dark: boolean) => void;
}) {
  return (
    <div className="sticky top-0 bg-white dark:bg-gray-900 flex items-center justify-between px-8 py-2">
      <div className="flex">
        <button>
          <Image src="/logoNew.png" alt="logo" width={100} height={30} />
        </button>
        <div className="ml-2 items-center hidden lg:flex">
          <NavLink>Explore</NavLink>
          <NavLink>Dashboard</NavLink>
          <NavLink>My Challenges</NavLink>
          <NavLink>My Labs</NavLink>
          <NavLink>My Projects</NavLink>
          <NavLink>Career Explorer</NavLink>
        </div>
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
        <Search />
        <NavIcon>
          <User />
        </NavIcon>

        <NavIcon onClick={() => setDark(!dark)}>
          <Moon />
        </NavIcon>
        <NavIcon>
          <Bars />
        </NavIcon>
      </div>
    </div>
  );
}
