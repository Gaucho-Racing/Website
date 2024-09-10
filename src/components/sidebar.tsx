import { useState } from "react";
import Link from "next/link";
import MenuBarsIcon from "./icons/menubars";
import { SOCIAL_LINKS, DONATION_LINKS } from "../lib/consts";
import Image from "next/image";

interface SideMenuProps {
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
            <div
              style={{ position: "absolute", width: "10vh", height: "10vh" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70px"
                height="70px"
                viewBox="0 0 50 50"
                style={{ position: "absolute", top: "1.5vh", left: "3vh" }}
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: "5vh",
              height: "90vh",
              width: "100%",
            }}
          >
            <ul className="menu-list">
              <li className="menu-item" style={{ padding: "1.5vh" }}>
                <Link href="/" onClick={toggleMenu}>
                  ABOUT
                </Link>
              </li>
              <li className="menu-item" style={{ padding: "1.5vh" }}>
                <Link href="/team" onClick={toggleMenu}>
                  TEAM
                </Link>
              </li>
              <li className="menu-item" style={{ padding: "1.5vh" }}>
                <Link href="/media" onClick={toggleMenu}>
                  MEDIA
                </Link>
              </li>
              <li className="menu-item" style={{ padding: "1.5vh" }}>
                <Link href="/cars" onClick={toggleMenu}>
                  CARS
                </Link>
              </li>
              <li className="menu-item" style={{ padding: "1.5vh" }}>
                <Link href="/sponsors" onClick={toggleMenu}>
                  SPONSORS
                </Link>
              </li>
              <li className="menu-item" style={{ padding: "1.5vh" }}>
                <Link
                  href={DONATION_LINKS.gofundme}
                  target="_blank"
                  onClick={toggleMenu}
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
