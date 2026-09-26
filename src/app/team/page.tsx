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
            <h1 className="p-16 pb-4 text-center">OUR TEAM</h1>
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
              image="/team/lead-images/27/Headshot_Alexander_Fu.jpg"
              website="https://www.linkedin.com/in/alexanderjfu1/"
            />
            <TeamCard
              name="Manas Bhargavan"
              title="Internal VP"
              titleColor="text-gr-pink"
              image="/team/lead-images/27/placeholder.png"
              website="https://www.linkedin.com/in/manasija-bhargavan-9b7798292/"
              zoom={1}
            />
            <TeamCard
              name="Jackson Tiengtum"
              title="External VP"
              titleColor="text-gr-pink"
              image="/team/lead-images/27/Headshot_Jackson_Tiengtum.jpg"
              website="https://www.linkedin.com/in/jtiengtum/"
            />
            <TeamCard
              name="Graydon Bushan"
              title="Secretary"
              titleColor="text-gr-pink"
              image="/team/lead-images/27/Headshot_Graydon_Bushan.jpg"
              website="https://www.gauchoracing.com"
            />
            <TeamCard
              name="Zachary Rogers"
              title="Treasurer"
              titleColor="text-gr-pink"
              image="/team/lead-images/27/Headshot_Zach_Rogers.jpg"
              website="https://www.linkedin.com/in/zachary-rogers-ucsb/"
            />
            <TeamCard
              name="Ava  Tran"
              title="Mechanical TD"
              titleColor="text-gr-pink"
              image="/team/lead-images/27/Headshot_Ava_Tran.jpg"
              website="https://www.linkedin.com/in/avatran/"
            />
            <TeamCard
              name="Vin  Shin"
              title="Electrical TD"
              titleColor="text-gr-pink"
              image="/team/lead-images/27/Headshot_Vin_Shin.jpg"
              website="https://www.linkedin.com/in/vinshin623/"
              zoom={1.05}
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
              title="Drivetrain Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/Headshot_Satvik_Subbaraman.jpg"
              website="https://www.linkedin.com/in/satvik-subbaraman/"
            />
            <TeamCard
              name="Brian Tham"
              title="Drivetrain Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/Headshot_Brian_Tham.jpg"
              website="https://www.linkedin.com/in/brianrtham/"
            />
            <TeamCard
              name="Koa Shen"
              title="Manufacturing Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/Headshot_Koa_Shen.jpg"
              website="https://www.linkedin.com/in/koa-shen/"
            />
            <TeamCard
              name="Jeremy Sevilla"
              title="Chassis Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/Headshot_Jeremy_Sevilla.jpg"
              website="https://www.linkedin.com/in/jeremy-sevilla/"
            />
            <TeamCard
              name="Curtis Butsko"
              title="Suspension Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/Headshot_Curtis_Butsko.jpg"
              website="https://www.linkedin.com/in/curtisbutsko/"
            />
            <TeamCard
              name="Forrest Drury"
              title="Aerodynamics Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/Headshot_Forrest_Drury.jpg"
              website="https://www.linkedin.com/in/forrest-drury-734218335/"
            />
            <TeamCard
              name="Kelvin Quach"
              title="Aerodynamics Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/placeholder.png"
              website="https://www.linkedin.com/in/kelvin-quach-095764291/"
              zoom={1}
            />
            <TeamCard
              name="Casey Zwicker"
              title="Powertrain Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/Headshot_Casey_Zwicker.jpg"
              website="https://www.linkedin.com/in/casey-zwicker/"
            />
            <TeamCard
              name="Milo Pitera"
              title="LV & Harness Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/Headshot_Milo_Pitera.jpg"
              website="https://www.linkedin.com/in/milo-pitera-410502310/"
            />
            <TeamCard
              name="Daniel Hansen"
              title="Elec. Controls Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/Headshot_Daniel_Hansen.jpg"
              website="https://www.linkedin.com/in/daniel-hansen-cs/"
            />
            <TeamCard
              name="Shravya Salem"
              title="Driverless Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/Headshot_Shravya_Salem_Sathish.jpg"
              website="https://www.linkedin.com/in/shravya-salem-sathish/"
            />
            <TeamCard
              name="Austin Chan"
              title="DevOps Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/placeholder.png"
              website="https://www.linkedin.com/in/austinchan2/"
              zoom={1}
            />
            <TeamCard
              name="Alyssa Story"
              title="Business Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/Headshot_Alyssa_Story.jpg"
              website="https://www.linkedin.com/in/alyssa-story-76353a373/"
              zoom={1}
            />
            <TeamCard
              name="Olivia Lewis"
              title="Business Lead"
              titleColor="text-gr-purple"
              image="/team/lead-images/27/Headshot_Olivia_Lewis.jpg"
              website="https://www.linkedin.com/in/olivia-lewis-793792386/"
            />
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 p-8">
        <div className="flex flex-col items-center text-white">
          <h1 className="mb-16 mt-16 text-center lg:ml-64 lg:mr-64">
            FACULTY ADVISORS
          </h1>
          <TeamCard
            name="Kirk Fields"
            title="UCSB R&D Engineer"
            titleColor="text-gr-purple"
            image="/team/lead-images/26/kirk-fields-26.jpg"
            website="https://me.ucsb.edu/index.php/people/kirk-fields"
            zoom={1}
          />
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
