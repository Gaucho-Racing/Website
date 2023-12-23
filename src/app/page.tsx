"use client";

import Link from "next/link";
import InstagramIcon from "./components/icons/instagram";
import LinkedinIcon from "./components/icons/linkedin";
import TwitterIcon from "./components/icons/twitter";
import { SOCIAL_LINKS } from "./utils/consts";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Image from "next/image";
import Header from "./components/header";
import { Client, HydrationProvider } from "react-hydration-provider";

export default function HomePage() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [calcWidth, setCalcWidth] = useState(0);
  const [scrollY, setScrollY] = useState(0);

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
    setScrollY(window.scrollY);
  };

  const handleResize = () => {
    const newWindowDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    setWindowHeight(newWindowDimensions.height);
    setWindowWidth(newWindowDimensions.width);

    const viewportHeight = newWindowDimensions.height;
    const aspectRatio = 16 / 9;

    if (newWindowDimensions.width < viewportHeight * aspectRatio) {
      setCalcWidth(viewportHeight * aspectRatio);
    } else {
      setCalcWidth(newWindowDimensions.width);
    }
  };

  return (
    <HydrationProvider>
      <main className="">
        <Header
          selectedPage={1}
          className="fixed bottom-0 left-0 right-0 top-0 z-10 h-24"
        />
        <div
          style={{
            width: "100%",
            height: "80vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Client>
            <ReactPlayer
              playing
              loop
              muted={true}
              url="ucsb-flyover.mp4"
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
                transition: "all .3s",
              }}
            />
          </Client>
          <div
            className={`absolute flex w-full items-center justify-center bg-gr-purple bg-opacity-50`}
            style={{ height: "80vh" }}
          >
            <div className="flex flex-col items-center justify-center text-white">
              <h1 className="p-4 text-5xl font-bold">Gaucho Racing</h1>
              <h2 className="text-2xl font-light">
                University of California, Santa Barbara
              </h2>
              <div className="flex p-8">
                <Link href={SOCIAL_LINKS.instagram}>
                  <InstagramIcon className="ml-4 mr-4 h-8 w-8" />
                </Link>
                <Link href={SOCIAL_LINKS.twitter}>
                  <TwitterIcon className="ml-4 mr-4 h-8 w-8" />
                </Link>
                <Link href={SOCIAL_LINKS.linkedin}>
                  <LinkedinIcon className="ml-4 mr-4 h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-200 p-16">
          <div className="flex items-center justify-start bg-red-300">
            <div className="flex flex-col items-center justify-center bg-sky-200 text-black">
              <Image
                src="/home/fsae.jpeg"
                alt="FSAE"
                height={200}
                width={1000}
                objectFit="cover"
                className="ml-4 mr-4"
              />
              <h1 className="p-16 text-5xl font-medium">About FSAE</h1>
              <h3 className="text-xl font-thin">
                Formula SAE is a collegiate engineering competitions with over
                500 participating schools that challenges teams of students to
                design and build a formula style car. The car is evaluated in
                automotive design and performance through a series of intensive
                events which focus on safety, handling and speed. Members on
                each team must develop and practice engineering, leadership,
                communication and marketing skills to be successful in this ever
                evolving competition.
              </h3>
              <button className="text-md group relative mb-2 me-2 mt-8 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-gr-purple to-gr-pink p-0.5 text-black">
                <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-white">
                  Learn More
                </span>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center bg-sky-200 text-black">
              <Image
                src="/home/about.jpeg"
                alt="FSAE"
                height={200}
                width={1000}
                objectFit="cover"
                className="ml-4 mr-4"
              />
              <h1 className="p-16 text-5xl font-medium">Our Mission</h1>
              <h3 className="text-xl font-thin">
                Gaucho Racing aims to enable students to gain hands-on
                experience in all phases of the engineering process and propel
                them forward into their careers. As part of UCSB’s official SAE
                International Student Chapter, our main focus is to participate
                each year in the Formula SAE Electric Competition. This involves
                students working together as a team to research, design, and
                manufacture a single seater electric race car from the ground
                up.
              </h3>
              <button className="text-md group relative mb-2 me-2 mt-8 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-gr-purple to-gr-pink p-0.5 text-black">
                <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-white">
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-16">
          <div className="flex flex-col items-center justify-center text-black lg:mb-32 lg:ml-64 lg:mr-64 lg:mt-16">
            <h1 className="p-16 text-5xl font-medium">Join the Ride</h1>
            <h3 className="text-xl font-thin">
              Are you passionate about electric vehicles, cutting-edge
              technology, and being part of a dynamic team? Join us on our
              journey as we continue to make strides in the world of Formula SAE
              Electric. Whether you're an engineering enthusiast, a future
              driver, or someone eager to contribute to sustainable innovation,
              there's a place for you at Gaucho Racing.
            </h3>
            <h3 className="mt-2 text-xl font-thin lg:mt-4">
              Explore the future of automotive technology with us - where every
              innovation drives us closer to excellence on and off the track!
            </h3>
            <button className="text-md group relative mb-2 me-2 mt-8 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-gr-purple to-gr-pink p-0.5 font-light text-white">
              <span className="relative rounded-md bg-black px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                Join Us
              </span>
            </button>
          </div>
        </div>
        <Footer />
      </main>
    </HydrationProvider>
  );
}
