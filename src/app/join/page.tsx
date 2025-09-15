"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SideMenu from "@/components/sidebar";
import { OutlineButton } from "@/components/ui/outline-button";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function JoinPage() {
  const [windowHeight, setWindowHeight] = useState(0);
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
    const newWindowDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    setWindowHeight(newWindowDimensions.height);
    setWindowWidth(newWindowDimensions.width);
  };

  return (
    <main className="">
      {windowWidth < breakpoint ? (
        <SideMenu selectedPage={6} className="" />
      ) : (
        <Header
          selectedPage={6}
          className=""
          style={{
            background: "rgba(0,0,0)",
            position: "fixed",
            zIndex: 1,
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
          }}
        />
      )}

      <div
        className=""
        style={{
          backgroundImage: "url('/join/join-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-60 p-16">
          <div className="mt-16 flex flex-col items-center justify-center text-white lg:mb-48 lg:ml-64 lg:mr-64 lg:mt-64">
            <h1 className="p-16 text-center">JOIN US</h1>
          </div>
        </div>
      </div>

      <div className="bg-black bg-opacity-70 p-8">
        <div>
          <div className="flex flex-col items-center justify-center text-center text-white lg:mb-16 lg:ml-64 lg:mr-64 lg:mt-16">
            <h1 className="p-8">HOW CAN I JOIN?</h1>
            <p className="text-xl">
              Our team is open to all years and majors. You only need to be
              interested in contributing! Come to a weekly meeting or ask in our
              Discord server to learn more!{" "}
            </p>

            <p className="pt-8 text-xl">
              We use Discord, a social messaging app and website, as our main
              communication hub.{" "}
              <b>
                Joining our Discord server is the first step to getting
                involved!
              </b>{" "}
              All announcements and discussions regarding club activities can be
              found there.
            </p>
          </div>
          <div className="flex flex-col items-stretch lg:mx-32 lg:mt-32 lg:flex-row">
            <Card className="m-4 flex flex-1 flex-col">
              <CardHeader>
                <CardTitle className="text-center">
                  <h2>COME TO A MEETING</h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  <b>When:</b> Mondays 7:30-8:30PM
                </p>
                <p className="mt-4">
                  <b>Where:</b> Engineering II Room 1519
                </p>
                <p className="mt-4">
                  Come see what we're all about! We'd love to meet you and
                  answer any questions about us.
                </p>
                <p className="mt-4">
                  Any updates to the meeting time or location will be announced
                  via Discord, so be sure to join and check in regularly.
                </p>
              </CardContent>
            </Card>
            <Card className="m-4 flex flex-1 flex-col">
              <CardHeader>
                <CardTitle className="text-center">
                  <h2>DISCORD SERVER</h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  To create an account and join, scan below or visit{" "}
                  <a
                    href="https://discord.gauchoracing.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gr-purple underline transition-colors hover:text-gr-pink"
                  >
                    discord.gauchoracing.com
                  </a>{" "}
                  to be invited.
                </p>
                <div className="mt-4 flex justify-center">
                  <a href="https://discord.gauchoracing.com" target="_blank">
                    <Image
                      src="/join/discord-qr.png"
                      alt="Discord QR Code"
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
