"use client";

import Link from "next/link";
import InstagramIcon from "../components/icons/instagram";
import LinkedinIcon from "../components/icons/linkedin";
import TwitterIcon from "../components/icons/twitter";
import { FSAE_LINKS, SOCIAL_LINKS } from "../lib/consts";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import Image from "next/image";
import Header from "../components/header";
import { Client, HydrationProvider } from "react-hydration-provider";
import { Button } from "@/components/ui/button";
import { OutlineButton } from "@/components/ui/outline-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
        <motion.div>
          <Header
            selectedPage={1}
            className="z-10"
            style={{
              background: "rgba(0,0,0)",
              position: "fixed",
              zIndex: 1,
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
              opacity: scrollY > windowHeight - 132 ? "1" : "0",
              transition: "all .3s",
              visibility: scrollY > windowHeight - 132 ? "visible" : "hidden",
            }}
          />
        </motion.div>
        <Client>
          <div className="">
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
                // opacity: 1,
                opacity: scrollY < windowHeight - 132 ? "1" : "0",
                transition: "all .3s",
                visibility: scrollY < windowHeight - 132 ? "visible" : "hidden",
              }}
            />
          </div>
        </Client>
        <div
          className={`z-10 flex h-screen w-full items-center justify-center bg-gr-purple bg-opacity-50`}
          style={{}}
        >
          <div className="flex flex-col items-center justify-center text-white">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.25 }}
              style={{
                position: "absolute",
                top: `${windowHeight / 2 - 220}px`,
              }}
            >
              <Image
                src="/logo/mechanic-logo.png"
                alt="Logo"
                height={48}
                width={460}
              />
            </motion.div>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 50, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.25, delay: 0.15 }}
            >
              <h2 className="">University of California, Santa Barbara</h2>
            </motion.div>
            <motion.div
              className="flex p-8"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 50, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.25 }}
              >
                <Link href={SOCIAL_LINKS.instagram} target="blank">
                  <InstagramIcon className="ml-4 mr-4 h-8 w-8" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.25 }}
              >
                <Link href={SOCIAL_LINKS.twitter} target="blank">
                  <TwitterIcon className="ml-4 mr-4 h-8 w-8" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.25 }}
              >
                <Link href={SOCIAL_LINKS.linkedin} target="blank">
                  <LinkedinIcon className="ml-4 mr-4 h-8 w-8" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="absolute bottom-0 transform"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                animate={{
                  y: [0, 0, 10, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  bounce: 0.75,
                  type: "tween",
                }}
              >
                <Image
                  src="/home/scroll-down.png"
                  alt="Logo"
                  height={50}
                  width={100}
                  className="mb-16 ml-4 mr-4"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div
          className=""
          style={{
            backgroundImage: "url('home/about25.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-black bg-opacity-70 p-16">
            <div className="flex flex-col items-center justify-center text-white lg:mb-48 lg:ml-64 lg:mr-64 lg:mt-32">
              <h1 className="p-16">OUR STORY</h1>
              <p className="text-xl">
                Gaucho Racing is the continuation of a long history of
                motorsports in Santa Barbara. Though teams have come and gone,
                it is our goal to create something that is lasting and will
                persevere through the years to highlight the engineering and
                business prowess of UC Santa Barbara Students. We put a strong
                focus on educating new members, providing them with the tools
                they need to succeed, both in school and outside.
              </p>
              <p className="mt-2 text-xl lg:mt-4">
                Gaucho Racing strives to build a diverse and multidisciplinary
                team, able to challenge each other's ideas and assumptions, as
                we believe this leads to the best work, innovation and growth.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-black bg-opacity-70 p-16">
          <div className="flex flex-col items-center justify-center text-white lg:mb-8 lg:ml-64 lg:mr-64 lg:mt-8">
            <h1 className="p-16">OUR MISSION</h1>
            <p className="text-xl">
              Gaucho Racing aims to enable students to gain hands-on experience
              in all phases of the engineering process and propel them forward
              into their careers. As part of UCSB’s official SAE International
              Student Chapter, our main focus is to participate each year in the
              Formula SAE Electric Competition. This involves students working
              together as a team to research, design, and manufacture a single
              seater electric race car from the ground up.
            </p>
            <p className="mt-2 text-xl lg:mt-4">
              Our team is also responsible for funding this project each year
              which will connect our students with industry sponsors and build
              crucial relationships for our success. Through this project,
              students will gain essential engineering and networking skills in
              demand in this industry and be prepared to launch their futures in
              engineering.
            </p>
            <div className="flex w-full justify-center pt-8">
              <Link href="/team">
                <OutlineButton>MORE ABOUT US</OutlineButton>
              </Link>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            backgroundImage: "url('home/fsae.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-black bg-opacity-70 p-16">
            <div className="flex flex-col items-center justify-center text-white lg:mb-48 lg:ml-64 lg:mr-64 lg:mt-32">
              <h1 className="p-16">ABOUT FSAE</h1>
              <p className="text-xl">
                FSAE Electric, initiated in 2013, is a cutting-edge addition to
                the Formula SAE competition. It focuses on the development of
                vehicles powered exclusively by electric motors, aligning with
                the global shift towards sustainable and eco-friendly
                transportation solutions.
              </p>
              <p className="mt-2 text-xl lg:mt-4">
                Each year, over 400 teams from universities worldwide
                participate in events hosted globally. Teams go head-to-head,
                defending their design choices in static events under the
                scrutiny of industry judges. The real test comes in dynamic
                events, where our vehicles' performance and our drivers' skills
                are put to the ultimate test. Winning top honors requires
                excelling in multiple categories, showcasing the culmination of
                our team's hard work and dedication.
              </p>
              <div className="flex w-full justify-center pt-8">
                <Link href={FSAE_LINKS.ev}>
                  <OutlineButton>MORE ABOUT FSAE</OutlineButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black bg-opacity-70 p-16">
          <div className="flex flex-col items-center justify-center text-white lg:mb-32 lg:ml-16 lg:mr-16 lg:mt-16">
            <h1 className="p-16">GET INVOLVED</h1>
            <p className="text-xl lg:ml-48 lg:mr-48">
              Are you passionate about electric vehicles, cutting-edge
              technology, and being part of a dynamic team? Join us on our
              journey as we continue to make strides in the world of Formula SAE
              Electric. Whether you're an engineering enthusiast, a future
              driver, or someone eager to contribute to sustainable innovation,
              there's a place for you at Gaucho Racing.
            </p>
            <div className="flex flex-col items-stretch lg:mt-32 lg:flex-row">
              <Card className="m-4 flex flex-1 flex-col">
                <CardHeader>
                  <CardTitle className="text-center">
                    <h2>JOIN OUR NEWSLETTER</h2>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Stay up to date with the latest Gaucho Racing news! We'll
                    send you updates about all the cool things we've been
                    working on.
                  </p>
                  <div className="mt-6 flex">
                    <div className="relative mb-6 flex-grow">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <input
                        type="email"
                        id="email-input"
                        className="block w-full rounded-lg border border-slate-700 bg-transparent p-2.5 ps-10 text-sm text-white focus:border-gr-pink focus:ring-gr-pink"
                        placeholder="name@gauchoracing.com"
                      ></input>
                    </div>
                    <div className="ml-2">
                      <Button>Subscribe</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="m-4 flex flex-1 flex-col">
                <CardHeader>
                  <CardTitle className="text-center">
                    <h2>COME TO A MEETING</h2>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    <b>When:</b> Mondays 7:30-8:30
                  </p>
                  <p className="mt-2">
                    <b>Where:</b> Engineering II Room 1519
                  </p>
                  <p className="mt-2">
                    Come see what we're all about! We'd love to meet you and
                    answer any questions about our organization.
                  </p>
                </CardContent>
              </Card>
              <Card className="m-4 flex flex-1 flex-col">
                <CardHeader>
                  <CardTitle className="text-center">
                    <h2>CONTACT US</h2>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    <b>Email:</b> ucsantabarbarasae@gmail.com
                  </p>
                  <p className="mt-2">
                    <b>Address:</b>
                    <br />
                    CoE Machine shop,
                    <br />
                    Arts Building 524, Room 0249
                    <br />
                    Santa Barbara, CA 93106
                  </p>
                  <p className="mt-2">
                    Feel free to send us an email or even some physical mail!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </HydrationProvider>
  );
}
