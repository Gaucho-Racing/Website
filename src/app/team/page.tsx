"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SideMenu from "@/components/sidebar";
import { OutlineButton } from "@/components/ui/outline-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TeamCard from "@/components/team-card";
import { useEffect, useState } from "react";
import placeholderImage from "src/assets/images/placeholder-profile.png";
import { notify } from "@/lib/notify";

export default function TeamPage() {
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
        <SideMenu selectedPage={2} className="" />
      ) : (
        <Header
          selectedPage={2}
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
          backgroundImage: "url('team/team-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-60 p-16">
          <div className="mt-16 flex flex-col items-center justify-center text-white lg:mb-48 lg:ml-64 lg:mr-64 lg:mt-64">
            <h1 className="p-16 text-center">OUR TEAM</h1>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 p-8">
        <div className="flex flex-col items-center text-white">
          <h1 className="mb-16 mt-16 text-center lg:ml-64 lg:mr-64">
            OFFICERS
          </h1>
          <div className="flex flex-wrap justify-center lg:ml-16 lg:mr-16">
            <TeamCard
              name="Alex Fu"
              title="President"
              titleColor="text-gr-pink"
              image="team/lead-images/26/alex-fu-26.jpg"
            />
            <TeamCard
              name="Manas Bhargavan"
              title="Internal VP"
              titleColor="text-gr-pink"
              image="team/lead-images/26/manas-bhargavan-26.jpg"
            />
            <TeamCard
              name="Jackson Tiengtum"
              title="External VP"
              titleColor="text-gr-pink"
              image="team/lead-images/26/jackson-tiengtum-26.jpg"
            />
            <TeamCard
              name="Jeremy Sevilla"
              title="Secretary"
              titleColor="text-gr-pink"
              image="team/lead-images/26/jeremy-sevilla-26.jpg"
            />
            <TeamCard
              name="Zachary Rogers"
              title="Treasurer"
              titleColor="text-gr-pink"
              image="team/lead-images/26/zachary-rogers-26.jpg"
            />
            <TeamCard
              name="Colin Kwok"
              title="Mechanical TD"
              titleColor="text-gr-pink"
              image="team/lead-images/26/colin_kwok.jpg"
            />
            <TeamCard
              name="Ryan Nguyen"
              title="Electrical TD"
              titleColor="text-gr-pink"
              image="team/lead-images/26/ryan_nguyen.jpg"
            />
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 p-8">
        <div className="flex flex-col items-center text-white">
          <h1 className="mb-16 mt-16 text-center lg:ml-64 lg:mr-64">
            TEAM LEADS
          </h1>
          <div className="flex flex-wrap items-stretch justify-center lg:ml-16 lg:mr-16">
            <TeamCard
              name="Satvik Subbaraman"
              title="Drivetrain"
              titleColor="text-gr-purple"
              image="team/lead-images/26/satvik-subbaraman-26.jpg"
            />
            <TeamCard
              name="Brian Tham"
              title="Drivetrain"
              titleColor="text-gr-purple"
              image="team/lead-images/26/brian-tham-26.jpg"
            />
            <TeamCard
              name="Koa Shen"
              title="Chassis"
              titleColor="text-gr-purple"
              image="team/lead-images/26/koa-shen-26.jpg"
            />
            <TeamCard
              name="Ava Tran"
              title="Chassis"
              titleColor="text-gr-purple"
              image="team/lead-images/26/ava-tran-26.jpg"
            />
            <TeamCard
              name="Thomas Yu"
              title="Systems"
              titleColor="text-gr-purple"
              image="team/lead-images/26/thomas-yu-26.jpg"
            />
            <TeamCard
              name="Diego Vasquez"
              title="Fabrication"
              titleColor="text-gr-purple"
              image="team/lead-images/26/diego-vasquez-26.jpg"
            />
            <TeamCard
              name="Curtis Butsko"
              title="Suspension"
              titleColor="text-gr-purple"
              image="team/lead-images/26/curtis-butsko-26.jpg"
            />
            <TeamCard
              name="Forrest Drury"
              title="Aero"
              titleColor="text-gr-purple"
              image="team/lead-images/26/forrest-drury-26.jpg"
            />
            <TeamCard
              name="Kelvin Quach"
              title="Aero"
              titleColor="text-gr-purple"
              image="team/lead-images/26/kelvin-quach-26.jpg"
            />
            <TeamCard
              name="Owen Liu"
              title="High Voltage"
              titleColor="text-gr-purple"
              image="team/lead-images/26/owen-liu-26.jpg"
            />
            <TeamCard
              name="Vamsi Vempati"
              title="High Voltage"
              titleColor="text-gr-purple"
              image="team/lead-images/26/vamsi-vempati-26.jpg"
            />
            <TeamCard
              name="Vin Shin"
              title="Low Voltage"
              titleColor="text-gr-purple"
              image="team/lead-images/26/vin-shin-26.jpg"
            />
            <TeamCard
              name="Andrey Otvagin"
              title="Low Voltage"
              titleColor="text-gr-purple"
              image="team/lead-images/26/andrey-otvagin-26.jpg"
            />
            <TeamCard
              name="Daniel Hansen"
              title="Firmware"
              titleColor="text-gr-purple"
              image="team/lead-images/26/daniel-hansen-26.jpg"
            />
            <TeamCard
              name="Jake Jurek"
              title="Data"
              titleColor="text-gr-purple"
              image="team/lead-images/26/jake-jurek-26.jpg"
            />
            <TeamCard
              name="Austin Chan"
              title="DevOps"
              titleColor="text-gr-purple"
              image="team/lead-images/26/austin-chan-26.jpg"
            />
            <TeamCard
              name="Alyssa Story"
              title="Business"
              titleColor="text-gr-purple"
              image="team/lead-images/26/alyssa-story-26.jpg"
            />
          </div>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: "url('placeholder.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-70 p-16">
          <div
            className="flex flex-col items-center justify-center text-white 
                          lg:mb-32 lg:ml-64 lg:mr-64 lg:mt-16"
          >
            <h1 className="p-16">ALUMNI</h1>
            <p className="text-center">
              At Gaucho Racing, we are proud of the legacy built by our alumni.
              Over the years, countless students have contributed their passion,
              skills, and dedication to our team, driving innovation and
              achieving remarkable milestones. Our alumni have gone on to excel
              in various fields, from automotive engineering to business
              leadership.
            </p>
            <br />
            <p className="text-center">
              Stay connected, share your journey, and continue to be a part of
              the Gaucho Racing family. Your experiences and success stories
              inspire the next generation of Gaucho Racing members.
            </p>
            <OutlineButton
              className="lg:mt-16"
              onClick={() => notify.info("Work in progress! Come back later.")}
            >
              MEET OUR ALUMNI
            </OutlineButton>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
