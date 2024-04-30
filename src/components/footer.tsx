import Link from "next/link";
import InstagramIcon from "./icons/instagram";
import LinkedinIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import { DONATION_LINKS, SOCIAL_LINKS } from "../lib/consts";
import Image from "next/image";
import { OutlineButton } from "./ui/outline-button";

export default function Footer() {
  return (
    <footer className="bg-gr-purple bg-opacity-0 p-8 text-white lg:pl-32 lg:pr-32">
      <div className="flex items-end justify-between">
        <div className="">
          <div className="ml-2 flex items-center justify-start">
            <Image
              src="/logo/gr-logo-blank.png"
              width={50}
              height={50}
              alt="Logo"
            />
            <h1 className="ml-4 mr-4 text-4xl">Gaucho Racing</h1>
          </div>
          {/* <h2 className="ml-4 mr-4 mt-4 text-xl text-gray-400">
            UCSB's Formula SAE Team
          </h2> */}
        </div>
        {/* <div className="bg-sky-200">
                    <AutodeskLogo className="text-white h-20 w-100"/>
                </div> */}
        <div className="">
          <OutlineButton>
            <Link href={DONATION_LINKS.paypal}>DONATE</Link>
          </OutlineButton>
        </div>
      </div>
      <div className="my-4 h-0.5 w-full bg-gradient-to-r from-gr-pink to-gr-purple"></div>
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
