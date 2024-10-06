import { useState } from "react";
import Link from "next/link";
import MenuBarsIcon from "./icons/menubars";
import { SOCIAL_LINKS, DONATION_LINKS } from "../lib/consts";
import Image from "next/image";

interface SideMenuProps {
  selectedPage: number;
  className?: string;
  style?: React.CSSProperties;
}

const SideMenu = (props: SideMenuProps) => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => setMenuState((prev) => !prev);

  return (
    <div
      style={{
        position: menuState ? "fixed" : "absolute",
        zIndex: 10,
        width: "100%",
        height: "100%",
        background: menuState ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0)",
        transition: "all 0.25s",
      }}
    >
      <div className="menuButton">
        <button onClick={toggleMenu}>
          {menuState ? (
            <div className="absolute h-[10vh] w-[10vh]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70px"
                height="70px"
                viewBox="0 0 50 50"
                className="absolute left-[3vh] top-[1.5vh]"
              >
                <path
                  fill="white"
                  d="M11 0.7H13V23.3H11z"
                  transform="rotate(-45.001 12 12)"
                ></path>
                <path
                  fill="white"
                  d="M0.7 11H23.3V13H0.7z"
                  transform="rotate(-45.001 12 12)"
                ></path>
              </svg>
            </div>
          ) : (
            <MenuBarsIcon />
          )}
        </button>
      </div>

      <nav className={menuState ? "menu-open" : "menu-closed"}>
        {menuState && (
          <div className="flex h-[90vh] w-full items-center justify-center text-center text-[5vh]">
            <ul className="menu-list">
              <li>
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className={`menu-item ${
                    props.selectedPage == 1 ? "text-white" : "text-gray-500"
                  }`}
                >
                  ABOUT
                </Link>
              </li>
              <li className="menu-item p-3">
                <Link
                  href="/team"
                  onClick={toggleMenu}
                  className={`menu-item ${
                    props.selectedPage == 2 ? "text-white" : "text-gray-500"
                  }`}
                >
                  TEAM
                </Link>
              </li>
              <li className="menu-item p-3">
                <Link
                  href="/media"
                  onClick={toggleMenu}
                  className={`menu-item ${
                    props.selectedPage == 3 ? "text-white" : "text-gray-500"
                  }`}
                >
                  MEDIA
                </Link>
              </li>
              <li className="menu-item p-3">
                <Link
                  href="/cars"
                  onClick={toggleMenu}
                  className={`menu-item ${
                    props.selectedPage == 4 ? "text-white" : "text-gray-500"
                  }`}
                >
                  CARS
                </Link>
              </li>
              <li className="menu-item p-3">
                <Link
                  href="/sponsors"
                  onClick={toggleMenu}
                  className={`menu-item ${
                    props.selectedPage == 5 ? "text-white" : "text-gray-500"
                  }`}
                >
                  SPONSORS
                </Link>
              </li>
              <li className="menu-item p-3">
                <Link
                  href={DONATION_LINKS.gofundme}
                  target="_blank"
                  onClick={toggleMenu}
                  className={`menu-item ${
                    props.selectedPage == 6 ? "text-white" : "text-gray-500"
                  }`}
                >
                  DONATE
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default SideMenu;
