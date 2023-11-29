import Link from "next/link";
import InstagramIcon from "./icons/instagram";
import LinkedinIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import { SOCIAL_LINKS } from "../utils/consts";

export default function Footer() {
    return (
        <footer className="bg-gr-purple bg-opacity-0 text-white p-4 flex justify-center">
          <div className="container flex justify-between items-center">
            <div>
                {/* <h3 className="text-2xl font-bold mb-4 ml-4 mr-4">
                    Gaucho Racing
                </h3> */}
                <div className='flex'>
                    <Link href={SOCIAL_LINKS.instagram}>
                    <InstagramIcon className='h-6 w-6 text-gray-400 hover:text-white ml-4 mr-4' />
                    </Link>
                    <Link href={SOCIAL_LINKS.twitter}>
                    <TwitterIcon className='h-6 w-6 text-gray-400 hover:text-white ml-4 mr-4' />
                    </Link>
                    <Link href={SOCIAL_LINKS.linkedin}>
                    <LinkedinIcon className='h-6 w-6 text-gray-400 hover:text-white ml-4 mr-4' />
                    </Link>
                </div>
            </div>
            <div className="content-center">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-8 overflow-hidden text-md font-light rounded-lg group bg-gradient-to-br from-gr-purple to-gr-pink text-white">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                        Donate
                    </span>
                </button>
            </div>
          </div>
        </footer>
    );
  }
