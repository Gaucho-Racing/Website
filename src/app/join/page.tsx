"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SideMenu from "@/components/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
        <div className="flex flex-col text-white">
          <h1 className="mb-16 mt-16 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <div className="flex flex-col lg:ml-32 lg:mr-32 lg:flex-row lg:gap-8">
            <div className="flex-1 pt-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    What is Gaucho Racing?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-lg">
                    Gaucho Racing is UCSB's student-run Formula SAE team that
                    designs, builds, and races a mini electric formula-style
                    racecar from the ground up. As a team, we provide a hands-on
                    learning environment where students of all majors gain
                    practical experience in engineering, project management, and
                    business.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    When are meetings?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-lg">
                    Usually, we hold general meetings every Monday at 7PM. Any
                    updates regarding meeting times and locations will be posted
                    in our Discord server (
                    <a
                      href="https://discord.gauchoracing.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gr-purple underline transition-colors hover:text-gr-pink"
                    >
                      discord.gauchoracing.com
                    </a>
                    ) or on Instagram (
                    <a
                      href="https://instagram.com/gauchoracingucsb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gr-purple underline transition-colors hover:text-gr-pink"
                    >
                      @gauchoracingucsb
                    </a>
                    ). Different subteams will have their own additional
                    meetings throughout the week.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How can I join?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-lg">
                    Attending a meeting and joining our discord server are the
                    first steps to getting involved! We provide onboarding
                    activities to help get new members up to speed. We also ask
                    that new members participate in 2 coffee chats with a
                    returning member of the team, sometime throughout fall
                    quarter.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What are Coffee Chats?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-lg">
                    We ask that new members participate in 2 coffee chats in
                    their first fall quarter. Our coffee chat program is a way
                    for new members to get more comfortable within the club,
                    make connections, and get project guidance! A coffee chat is
                    a casual 1-1 meeting with a returning member (or 1-2 if your
                    friends want to join!), and could be anything from a meal,
                    to any hangout, or just chatting. This is not an interview,
                    but a friendly and casual connection!
                    <br />
                    <br />
                    Join our discord to learn more and to ask any questions!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Who is allowed to join?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-lg">
                    Anyone! Gaucho Racing is open to ALL majors and has no
                    formal interview process. At the beginning of every school
                    year we have coffee chats and onboarding assignments for
                    interested members, taught by senior members.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    Do I need previous experience to join?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-lg">
                    No experience is necessary! Gaucho Racing is a project-based
                    learning club. We teach you everything you need to know,
                    from the basics of car design to advanced fabrication
                    techniques. As long as you're passionate and willing to
                    learn, you'll be a great addition to the team!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    Do you guys have applications?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-lg">
                    We don't have any applications or interviews, and anyone is
                    welcome to join - you only need to be interested in
                    contributing! To get members up to speed, we do onboarding
                    and ask that new members participate in 2 coffee chats.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">
                    What kind of work do team members do?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-lg">
                    Members get hands-on experience by joining one of our
                    technical or business subteams. Technical subteams focus on
                    the car's core systems, such as the battery, suspension, and
                    aerodynamics. On the other hand, business subteams handle
                    vital tasks like sponsorship, marketing, and finance.
                    Everyone contributes to the project, learning valuable
                    skills like CAD, manufacturing, electrical design, and
                    project management.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left">
                    What is the time commitment?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-lg">
                    Besides general and subteam meetings, the amount of time you
                    spend on the car is up to you. However, the more time you
                    put in, the more you will learn! Due to the nature of the
                    project, very active members might contribute up to 25 hours
                    a week whilst seniors and leads may put in even more! We do
                    try to be flexible and accommodating of times!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left">
                    Who gets to drive the car?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-lg">
                    By competition rules, we are required to have 4 drivers! Our
                    past drivers usually have some sort of racing experience,
                    but we do expect all our drivers to put time into developing
                    the car either technically or in the business side.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-left">
                    What is Discord?
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-lg">
                    Discord is a popular social messaging app and website, which
                    we use as our main communication hub. Joining our Discord
                    server is the first step to getting involved! All
                    announcements and discussions regarding club projects and
                    activities can be found there. You can find directions to
                    create an account or an invitation to join our server by
                    visiting:
                    <br />
                    <a
                      href="https://discord.gauchoracing.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gr-purple underline transition-colors hover:text-gr-pink"
                    >
                      discord.gauchoracing.com
                    </a>
                    <br /> <br />
                    You can learn more about Discord here:
                    <br />
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gr-purple underline transition-colors hover:text-gr-pink"
                    >
                      discord.com
                    </a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mt-8 flex flex-col lg:mt-0 lg:max-w-md">
              <Card className="m-4 flex-col p-6">
                <CardHeader>
                  <CardTitle className="text-center">
                    <h2>COME TO A MEETING</h2>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-purple-400">
                    <b>First General Meeting (9/29):</b>
                  </p>
                  <p className="mt-2 text-purple-400">
                    <b>When:</b> Sept. 29 - 7:00-8:30PM
                  </p>
                  <p className="text-purple-400">
                    <b>Where:</b> Location TBA!
                  </p>

                  <p className="mt-8">
                    <b>Following Meetings:</b>
                  </p>
                  <p className="mt-2">
                    <b>When:</b> Mondays - 7:00PM
                  </p>
                  <p>
                    <b>Where:</b> ESB 1001
                  </p>
                </CardContent>
              </Card>

              <Card className="m-4 flex flex-1 flex-col p-2">
                <CardHeader>
                  <CardTitle className="text-center">
                    <h2>DISCORD INVITE</h2>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>
                    To create an account and join, scan or visit{" "}
                    <a
                      href="https://discord.gauchoracing.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gr-purple underline transition-colors hover:text-gr-pink"
                    >
                      discord.gauchoracing.com
                    </a>{" "}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <a href="https://discord.gauchoracing.com" target="_blank">
                      <Image
                        src="/join/discord-qr.png"
                        alt="Discord QR Code"
                        width={210}
                        height={210}
                        className="rounded-lg"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center text-white lg:mb-16 lg:ml-64 lg:mr-64 lg:mt-16">
          <h1 className="p-8">READY TO JOIN?</h1>
          <p className="text-xl">
            We're looking forward to having you on the team! We'd love to meet
            with you and answer any questions you have about Gaucho Racing. Come
            to a weekly meeting or ask in our Discord server to learn more!{" "}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
