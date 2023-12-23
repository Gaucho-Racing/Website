import Link from "next/link";
import InstagramIcon from "./icons/instagram";
import LinkedinIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import { SOCIAL_LINKS } from "../utils/consts";
import Image from "next/image";
import AutodeskLogo from "./logos/sponsors/autodesk";

/**
 * Header component for the website.
 *
 * @param {object} props - The properties passed to the component.
 * @param {number} props.selectedPage - The currently selected header page to highlight (0 for none).
 * @param {string} props.className - The CSS class for the component.
 * @param {React.CSSProperties} props.style - The CSS styles for the component.
 *
 * @returns {JSX.Element} The Header component.
 */
export default function Header(props: {
  selectedPage: number;
  className: string;
}) {
  return (
    <nav className={`${props.className} fixed top-0 z-10 w-full bg-black`}>
      <div className="m-3 flex items-center justify-between ">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/logo/gr-logo-blank.png"
              alt="Logo"
              height={56}
              width={56}
              className="ml-4 mr-4"
            />
            <h1 className="text-4xl font-medium text-white">Gaucho Racing</h1>
          </div>
        </Link>
        <div>
          <Link href="/">
            <button
              className={`text-md group relative mb-2 me-2 mt-2 inline-flex items-center justify-center overflow-hidden rounded-lg from-gr-purple to-gr-pink p-0.5 font-light hover:bg-gradient-to-br ${
                props.selectedPage == 1 ? "text-white" : "text-gray-400"
              }`}
            >
              <span className="relative rounded-md bg-black px-5 py-2.5 transition-all duration-75 ease-in">
                HOME
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
                ABOUT
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
      </div>
    </nav>
  );
}
