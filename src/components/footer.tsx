"use client";

import Link from "next/link";
import InstagramIcon from "./icons/instagram";
import LinkedinIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import { DONATION_LINKS, SOCIAL_LINKS } from "../lib/consts";
import Image from "next/image";
import { OutlineButton } from "./ui/outline-button";
import { useEffect, useState } from "react";

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(0);
  const breakpoint = 1024;

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);
  };

  return (
    <footer className="mb-16 mt-8 bg-gr-purple bg-opacity-0 text-white lg:pl-32 lg:pr-32">
      <div className="flex items-end justify-between">
        <div className="">
          <div className="mb-1 ml-5 flex items-center justify-start">
            <Image
              src="/logo/gr-logo-blank.png"
              width={65}
              height={65}
              alt="Logo"
            />
            {windowWidth > breakpoint && (
              <h1 className="ml-4 mr-4 text-4xl">Gaucho Racing</h1>
            )}
          </div>
          {/* <h2 className="ml-4 mr-4 mt-4 text-xl text-gray-400">
            UCSB's Formula SAE Team
          </h2> */}
        </div>
        {/* <div className="bg-sky-200">
                    <AutodeskLogo className="text-white h-20 w-100"/>
                </div> */}
        <div className="mr-5">
          <Link href={DONATION_LINKS.gofundme} target="blank">
            <OutlineButton>DONATE</OutlineButton>
          </Link>
        </div>
      </div>
      <div className="my-4 h-0.5 w-full bg-gradient-to-r from-gr-pink to-gr-purple"></div>
      <div className="flex w-full items-center justify-between">
        <p className="text-md ml-4 mr-4 text-gray-400">
          © 2020 - {new Date().getFullYear()} Gaucho Racing
        </p>
        <div className="flex">
          <Link href={SOCIAL_LINKS.instagram} target="blank">
            <InstagramIcon className="ml-4 mr-4 h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
          <Link href={SOCIAL_LINKS.twitter} target="blank">
            <TwitterIcon className="ml-4 mr-4 h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
          <Link href={SOCIAL_LINKS.linkedin} target="blank">
            <LinkedinIcon className="ml-4 mr-4 h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
