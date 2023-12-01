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
export default function Header(props: { selectedPage: number, className: string, style: React.CSSProperties }) {
    return (
        <nav className={props.className} style={props.style}>
            <div className='flex items-center mt-3 mb-3'>
              <Link href='/'>
                <button className={`relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-md font-light rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink ${props.selectedPage == 1 ? 'text-white' : 'text-gray-400'}`}>
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
                    ABOUT
                  </span>
                </button>
              </Link>
              <Link href='/team'>
                <button className={`relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-md font-light rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink ${props.selectedPage == 2 ? 'text-white' : 'text-gray-400'}`}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
                        TEAM
                    </span>
                </button>
              </Link>
              <Link href='/cars'>
                <button className={`relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-md font-light rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink ${props.selectedPage == 3 ? 'text-white' : 'text-gray-400'}`}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
                    CARS
                    </span>
                </button>
              </Link>
              <Link href='/'>
                <Image src='/logo/mechanic-logo.png' alt='Logo' height={24} width={230} className='h-24 ml-4 mr-4' />
              </Link>
              <Link href='/sponsors'>
                <button className={`relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-md font-light rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink ${props.selectedPage == 4 ? 'text-white' : 'text-gray-400'}`}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
                    SPONSORS
                    </span>
                </button>
              </Link>
              <Link href='/news'>
                <button className={`relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-md font-light rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink ${props.selectedPage == 5 ? 'text-white' : 'text-gray-400'}`}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
                    NEWS
                    </span>
                </button>
              </Link>
              <Link href='/contact'>
                <button className={`relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-md font-light rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink ${props.selectedPage == 6 ? 'text-white' : 'text-gray-400'}`}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
                    CONTACT
                    </span>
                </button>
              </Link>
            </div>
        </nav>
    );
  }
