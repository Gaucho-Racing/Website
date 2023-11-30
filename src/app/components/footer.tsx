import Link from "next/link";
import InstagramIcon from "./icons/instagram";
import LinkedinIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import { SOCIAL_LINKS } from "../utils/consts";
import Image from "next/image";
import AutodeskLogo from "./logos/sponsors/autodesk";


export default function Footer() {
    return (
        <footer className="bg-gr-purple bg-opacity-0 text-white p-8 lg:mr-32 lg:ml-32">
            <div className="flex items-end justify-between">
                <div className="">
                    <div className="flex items-center justify-start ml-2">
                        <Image src="/logo/gr-logo-blank.png" width={50} height={50} alt="Logo" />
                        <h3 className="text-3xl font-bold ml-4 mr-4">
                            Gaucho Racing
                        </h3>
                    </div>
                    <h2 className="text-xl text-gray-400 mt-4 ml-4 mr-4">
                        UCSB's Formula SAE Team
                    </h2>
                </div>
                {/* <div className="bg-sky-200">
                    <AutodeskLogo className="text-white h-20 w-100"/>
                </div> */}
                <div className="">
                    <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-md font-light rounded-lg group bg-gradient-to-br from-gr-purple to-gr-pink text-white">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                            Donate
                        </span>
                    </button>
                </div>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-gr-purple to-gr-pink my-4"></div>
            <div className="flex items-center justify-between w-full">
                <p className="text-md text-gray-400 ml-4 mr-4">
                    © 2020 - {new Date().getFullYear()} Gaucho Racing
                </p>
                <div className="flex">
                    <Link href={SOCIAL_LINKS.instagram}>
                    <InstagramIcon className="h-6 w-6 text-gray-400 hover:text-white ml-4 mr-4" />
                    </Link>
                    <Link href={SOCIAL_LINKS.twitter}>
                    <TwitterIcon className="h-6 w-6 text-gray-400 hover:text-white ml-4 mr-4" />
                    </Link>
                    <Link href={SOCIAL_LINKS.linkedin}>
                    <LinkedinIcon className="h-6 w-6 text-gray-400 hover:text-white ml-4 mr-4" />
                    </Link>
                </div>
            </div>
        </footer>
    );
  }
