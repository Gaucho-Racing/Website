import Link from "next/link";
import InstagramIcon from "./icons/instagram";
import LinkedinIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import { SOCIAL_LINKS } from "../utils/consts";
import Image from "next/image";
import AutodeskLogo from "./logos/sponsors/autodesk";

export default function Footer() {
  return (
    <footer className="bg-gr-purple bg-opacity-0 p-8 text-white lg:ml-32 lg:mr-32">
      <div className="flex items-end justify-between">
        <div className="">
          <div className="ml-2 flex items-center justify-start">
            <Image
              src="/logo/gr-logo-blank.png"
              width={50}
              height={50}
              alt="Logo"
            />
            <h3 className="ml-4 mr-4 text-3xl font-bold">Gaucho Racing</h3>
          </div>
          <h2 className="ml-4 mr-4 mt-4 text-xl text-gray-400">
            UCSB's Formula SAE Team
          </h2>
        </div>
        {/* <div className="bg-sky-200">
                    <AutodeskLogo className="text-white h-20 w-100"/>
                </div> */}
        <div className="">
          <button className="text-md group relative mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-gr-purple to-gr-pink p-0.5 font-light text-white">
            <span className="relative rounded-md bg-black px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              Donate
            </span>
          </button>
        </div>
      </div>
      <div className="my-4 h-0.5 w-full bg-gradient-to-r from-gr-purple to-gr-pink"></div>
      <div className="flex w-full items-center justify-between">
        <p className="text-md ml-4 mr-4 text-gray-400">
          © 2020 - {new Date().getFullYear()} Gaucho Racing
        </p>
        <div className="flex">
          <Link href={SOCIAL_LINKS.instagram}>
            <InstagramIcon className="ml-4 mr-4 h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
          <Link href={SOCIAL_LINKS.twitter}>
            <TwitterIcon className="ml-4 mr-4 h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
          <Link href={SOCIAL_LINKS.linkedin}>
            <LinkedinIcon className="ml-4 mr-4 h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
