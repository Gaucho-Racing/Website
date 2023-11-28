"use client"

import Link from "next/link";
import InstagramIcon from "./components/instagram";
import LinkedinIcon from "./components/linkedin";
import TwitterIcon from "./components/twitter";
import { SOCIAL_LINKS } from "./utils/consts";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

export default function Home() {

  const [calcWidth, setCalcWidth] = useState(0);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const newWindowDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const viewportHeight = newWindowDimensions.height;
    const aspectRatio = 16 / 9;

    if (newWindowDimensions.width < viewportHeight * aspectRatio) {
      setCalcWidth(viewportHeight * aspectRatio);
    } else {
      setCalcWidth(newWindowDimensions.width);
    }
  };

  return (
    <main className=''>
      <div className=''>
        <ReactPlayer 
          playing
          loop
          muted={true}
          url='ucsb-flyover.mp4'
          height={(calcWidth / 16) * 9}
          width={calcWidth}
          controls={false}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            zIndex: -20,
            opacity: 1,
          }}
        />
      </div>
      <div className='bg-purple-900 bg-opacity-70 flex justify-center items-center h-screen'>
        <div className='text-white flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-bold p-4'>
            Gaucho Racing
          </h1>
          <h2 className='text-2xl font-light'>
            University of California, Santa Barbara
          </h2>
          <div className='flex p-8'>
            <Link href={SOCIAL_LINKS.instagram}>
              <InstagramIcon className='h-8 w-8 ml-4 mr-4' />
            </Link>
            <Link href={SOCIAL_LINKS.twitter}>
              <TwitterIcon className='h-8 w-8 ml-4 mr-4' />
            </Link>
            <Link href={SOCIAL_LINKS.linkedin}>
              <LinkedinIcon className='h-8 w-8 ml-4 mr-4' />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

