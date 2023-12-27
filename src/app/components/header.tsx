import Link from "next/link";
import InstagramIcon from "./icons/instagram";
import LinkedinIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import { SOCIAL_LINKS } from "../utils/consts";
import Image from "next/image";
import AutodeskLogo from "./logos/sponsors/autodesk";

interface HeaderProps {
  selectedPage: number;
  className?: string;
  style?: React.CSSProperties;
}

const Header = (props: HeaderProps) => {
  return (
    <nav
      className={`fixed top-0 flex h-32 w-full items-center justify-center bg-black ${props.className}`}
      style={props.style}
    >
      <div className="mb-3 mt-3 flex items-center">
        <Link href="/">
          <button
            className={`text-md group relative mb-2 me-2 mt-2 inline-flex items-center justify-center overflow-hidden rounded-lg from-gr-purple to-gr-pink p-0.5 font-light hover:bg-gradient-to-br ${
              props.selectedPage == 1 ? "text-white" : "text-gray-400"
            }`}
          >
            <span className="relative rounded-md bg-black px-5 py-2.5 transition-all duration-75 ease-in">
              ABOUT
            </span>
          </button>
        </Link>
        <Link href="/team">
          <button
            className={`text-md group relative mb-2 me-2 mt-2 inline-flex items-center justify-center overflow-hidden rounded-lg from-gr-purple to-gr-pink p-0.5 font-light hover:bg-gradient-to-br ${
              props.selectedPage == 2 ? "text-white" : "text-gray-400"
            }`}
          >
            <span className="relative rounded-md bg-black px-5 py-2.5 transition-all duration-75 ease-in">
              TEAM
            </span>
          </button>
        </Link>
        <Link href="/cars">
          <button
            className={`text-md group relative mb-2 me-2 mt-2 inline-flex items-center justify-center overflow-hidden rounded-lg from-gr-purple to-gr-pink p-0.5 font-light hover:bg-gradient-to-br ${
              props.selectedPage == 3 ? "text-white" : "text-gray-400"
            }`}
          >
            <span className="relative rounded-md bg-black px-5 py-2.5 transition-all duration-75 ease-in">
              CARS
            </span>
          </button>
        </Link>
        <Link href="/">
          <Image
            src="/logo/mechanic-logo.png"
            alt="Logo"
            height={24}
            width={230}
            className="ml-4 mr-4 h-24"
          />
        </Link>
        <Link href="/sponsors">
          <button
            className={`text-md group relative mb-2 me-2 mt-2 inline-flex items-center justify-center overflow-hidden rounded-lg from-gr-purple to-gr-pink p-0.5 font-light hover:bg-gradient-to-br ${
              props.selectedPage == 4 ? "text-white" : "text-gray-400"
            }`}
          >
            <span className="relative rounded-md bg-black px-5 py-2.5 transition-all duration-75 ease-in">
              SPONSORS
            </span>
          </button>
        </Link>
        <Link href="/news">
          <button
            className={`text-md group relative mb-2 me-2 mt-2 inline-flex items-center justify-center overflow-hidden rounded-lg from-gr-purple to-gr-pink p-0.5 font-light hover:bg-gradient-to-br ${
              props.selectedPage == 5 ? "text-white" : "text-gray-400"
            }`}
          >
            <span className="relative rounded-md bg-black px-5 py-2.5 transition-all duration-75 ease-in">
              NEWS
            </span>
          </button>
        </Link>
        <Link href="/contact">
          <button
            className={`text-md group relative mb-2 me-2 mt-2 inline-flex items-center justify-center overflow-hidden rounded-lg from-gr-purple to-gr-pink p-0.5 font-light hover:bg-gradient-to-br ${
              props.selectedPage == 6 ? "text-white" : "text-gray-400"
            }`}
          >
            <span className="relative rounded-md bg-black px-5 py-2.5 transition-all duration-75 ease-in">
              CONTACT
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
