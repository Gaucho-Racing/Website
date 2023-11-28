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
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

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
      {showNavbar ? <nav className='bg-black h-32 w-full flex justify-center items-center fixed top-0 z-10'>
        <div className='flex items-center mt-3 mb-3'>
          <button className="relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-md font-light text-white rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
              ABOUT
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-md font-light text-gray-400 hover:text-white rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
              TEAM
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-md font-light text-gray-400 hover:text-white rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
              CARS
            </span>
          </button>
          <img src='logo/mechanic-logo.png' alt='Logo' className='h-24 ml-4 mr-4' />
          <button className="relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-md font-light text-gray-400 hover:text-white rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
              SPONSORS
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-md font-light text-gray-400 hover:text-white rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
              NEWS
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center mt-2 p-0.5 mb-2 me-2 overflow-hidden text-md font-light text-gray-400 hover:text-white rounded-lg group hover:bg-gradient-to-br from-gr-purple to-gr-pink">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md">
              CONTACT
            </span>
          </button>
        </div>
      </nav> : <div></div>}
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
      <div className='bg-gr-purple bg-opacity-50 flex justify-center items-center h-screen'>
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
      <div className='' style={{
        backgroundImage: "url('home/about.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className='bg-black bg-opacity-60 p-64'>
          <div className='text-white flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-medium p-8'>
              Our Story
            </h1>
            <h3 className='text-xl font-thin'>
              Gaucho Racing is the continuation of a long history of motorsports in Santa Barbara.
              Though teams have come and gone, it is our goal to create something that is lasting and will persevere through the years to highlight the engineering and business prowess of UC Santa Barbara Students.
              We put a strong focus on educating new members, providing them with the tools they need to succeed, both in school and outside.
            </h3>
          </div>
        </div>
      </div>
      <div className='bg-black bg-opacity-50 p-64'>
        <div className='text-white flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold p-8'>
            Our Story
          </h1>
          <h3 className='text-xl font-light'>
            Gaucho Racing is the continuation of a long history of motorsports in Santa Barbara.
            Though teams have come and gone, it is our goal to create something that is lasting and will persevere through the years to highlight the engineering and business prowess of UC Santa Barbara Students.
            We put a strong focus on educating new members, providing them with the tools they need to succeed, both in school and outside.
          </h3>
        </div>
      </div>
    </main>
  );
}

