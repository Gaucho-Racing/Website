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
        <SideMenu className="" />
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
          backgroundImage: "url('placeholder.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-30 p-16">
          <div className="mt-16 flex flex-col items-center justify-center text-white lg:mb-48 lg:ml-64 lg:mr-64 lg:mt-64">
            <h1 className="p-16" style={{ textAlign: "center" }}>
              OUR TEAM
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 p-8">
        <div className="flex flex-col items-center text-white">
          <h1
            className="mb-16 mt-16 lg:ml-64 lg:mr-64"
            style={{ textAlign: "center" }}
          >
            OFFICERS
          </h1>
          <div className="flex flex-wrap justify-center lg:ml-16 lg:mr-16">
            <TeamCard
              name="Thomas Yu"
              title="President"
              titleColor="text-gr-pink"
              image="lead-images\25\thomas_yu.jpg"
            />
            <TeamCard
              name="Diego Vasquez"
              title="Internal VP"
              titleColor="text-gr-pink"
              image="lead-images\25\diego_vasquez.jpg"
            />
            <TeamCard
              name="Alex Fu"
              title="External VP"
              titleColor="text-gr-pink"
              image="lead-images\25\alex_fu.jpg"
            />
            <TeamCard
              name="Yakov Shur"
              title="Secretary"
              titleColor="text-gr-pink"
              image="lead-images\25\yakov_shur.jpg"
            />
            <TeamCard
              name="Jeff Duong"
              title="Treasurer"
              titleColor="text-gr-pink"
              image="lead-images\25\jeff_duong.jpg"
            />
            <TeamCard
              name="Anirudh Kumar"
              title="Mechanical Chief Engineer"
              titleColor="text-gr-pink"
              image="lead-images\25\anirudh_kumar.jpg"
            />
            <TeamCard
              name="Jason Wei"
              title="Electrical Chief Engineer"
              titleColor="text-gr-pink"
              image="lead-images\25\jason_wei.jpg"
            />
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 p-8">
        <div className="flex flex-col items-center text-white">
          <h1
            className="mb-16 mt-16 lg:ml-64 lg:mr-64"
            style={{ textAlign: "center" }}
          >
            TEAM LEADS
          </h1>
          <div className="flex flex-wrap items-stretch justify-center lg:ml-16 lg:mr-16">
            <TeamCard
              name="Alex Fu"
              title="Aero Lead"
              titleColor="text-gr-purple"
              image="lead-images\25\alex_fu.jpg"
            />
            <TeamCard
              name="Curren Somers"
              title="Aero Lead"
              titleColor="text-gr-purple"
              image="lead-images\25\curren_somers.png"
            />
            <TeamCard
              name="Jeff Duong"
              title="Business Lead"
              titleColor="text-gr-purple"
              image="lead-images\25\jeff_duong.jpg"
            />
            <TeamCard
              name="Ava Tran"
              title="Chassis Lead"
              titleColor="text-gr-purple"
              image="lead-images\25\ava_tran.jpg"
            />
            <TeamCard
              name="Matthew Lin"
              title="Chassis Lead"
              titleColor="text-gr-purple"
              image="lead-images\25\matthew_lin.png"
            />
            <TeamCard
              name="Bharat Kathi"
              title="Data Lead"
              titleColor="text-gr-purple"
              image="lead-images\25\bharat_kathi.jpg"
            />
            <TeamCard
              name="Tien Nguyen"
              title="Electronics Lead"
              titleColor="text-gr-purple"
              image="lead-images\25\tien_nguyen.jpg"
            />
            <TeamCard
              name="Nikunj Parasar"
              title="Firmware Lead"
              titleColor="text-gr-purple"
              image="lead-images\25\nikunj_parasar.jpg"
            />
            <TeamCard
              name="Colin Kwok"
              title="Powertrain Lead"
              titleColor="text-gr-purple"
              image="lead-images\25\colin_kwok.jpg"
            />
            <TeamCard
              name="Ryan Nguyen"
              title="Powertrain Lead"
              titleColor="text-gr-purple"
              image="lead-images\25\ryan_nguyen.png"
            />
            <TeamCard
              name="Anirudh Kumar"
              title="Suspension Lead"
              titleColor="text-gr-purple"
              image="lead-images\25\anirudh_kumar.jpg"
            />
            <TeamCard
              name="Camron Hosseini"
              title="Suspension Lead"
              titleColor="text-gr-purple"
              image="lead-images\25\camron_hosseini.jpg"
            />
            <TeamCard
              name="Amitha Bhat"
              title="Social Media Manager"
              titleColor="text-gr-purple"
              image="lead-images\25\amitha_bhat.jpg"
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
            <p className="" style={{ textAlign: "center" }}>
              At Gaucho Racing, we are proud of the legacy built by our alumni.
              Over the years, countless students have contributed their passion,
              skills, and dedication to our team, driving innovation and
              achieving remarkable milestones. Our alumni have gone on to excel
              in various fields, from automotive engineering to business
              leadership.
            </p>
            <br />
            <p className="" style={{ textAlign: "center" }}>
              Stay connected, share your journey, and continue to be a part of
              the Gaucho Racing family. Your experiences and success stories
              inspire the next generation of Gaucho Racing members.
            </p>
            <OutlineButton className="lg:mt-16">MEET OUR ALUMNI</OutlineButton>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
