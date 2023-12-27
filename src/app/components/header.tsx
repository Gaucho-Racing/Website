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
		// console.log(props.selectedPage)
    return (
        <nav className={props.className} style={props.style}>
            <div className='mx-4 w-full flex justify-between items-center mt-3 mb-3'>
							<div className="flex flex-row">
								<div>
								<Link href='/'>
									<Image src='/logo/mechanic-logo.png' alt='Logo' height={24} width={230} className='h-24 ml-4 mr-4' />
								</Link>
								</div>
								<div className="place-self-center">
									<h1 className="font-bold text-4xl">GAUCHO RACING</h1>	
								</div>
							</div>
							<div>
              <Link href='/'>
								{/*<button className={`relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-3xl font-bold rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink ${props.selectedPage == 1 ? 'text-white' : 'text-gray-400'}`}>
								*/}
                <button className={`relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-3xl font-bold rounded-lg group ${props.selectedPage == 1 ? 'text-gr-dark-purple' : 'text-black'}`}>
                  <span className="relative px-5 py-2.5 transition ease-in-out duration-300">
                    HOME
										<span className={`block h-1 ${props.selectedPage == 1 ? 'max-w-full bg-gr-dark-purple' : 'max-w-0 group-hover:max-w-full transition-all duration-500 bg-black'}`}></span>
                  </span>
                </button>
              </Link>
              <Link href='/team'>
                <button className={`relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-3xl font-bold rounded-lg group ${props.selectedPage == 2 ? 'text-black' : 'text-black'}`}>
                  <span className="relative px-5 py-2.5 transition ease-in-out duration-300">
                    ABOUT
										<span className={`block h-1 ${props.selectedPage == 2 ? 'max-w-full bg-gr-dark-purple' : 'max-w-0 group-hover:max-w-full transition-all duration-500 bg-black'}`}></span>
                  </span>
                </button>
              </Link>
              <Link href='/cars'>
                <button className={`relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-3xl font-bold rounded-lg group ${props.selectedPage == 3 ? 'text-black' : 'text-black'}`}>
                  <span className="relative px-5 py-2.5 transition ease-in-out duration-300">
                    FSAE
										<span className={`block h-1 ${props.selectedPage == 3 ? 'max-w-full bg-gr-dark-purple' : 'max-w-0 group-hover:max-w-full transition-all duration-500 bg-black'}`}></span>
                  </span>
                </button>
             </Link>
              <Link href='/sponsors'>
                <button className={`relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-3xl font-bold rounded-lg group ${props.selectedPage == 4 ? 'text-black' : 'text-black'}`}>
                  <span className="relative px-5 py-2.5 transition ease-in-out duration-300">
                    SPONSORS
										<span className={`block h-1 ${props.selectedPage == 4 ? 'max-w-full bg-gr-dark-purple' : 'max-w-0 group-hover:max-w-full transition-all duration-500 bg-black'}`}></span>
                  </span>
                </button>
              </Link>
				{/*
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
				*/}
            </div>
            </div>
        </nav>
    );
  }
