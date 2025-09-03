"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SideMenu from "@/components/sidebar";
import { OutlineButton } from "@/components/ui/outline-button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SponsorsPage() {
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
    <main className="overflow-hidden">
      {windowWidth < breakpoint ? (
        <SideMenu selectedPage={5} className="" />
      ) : (
        <Header
          selectedPage={5}
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
          backgroundImage: "url('/media/25/comp5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-70 p-8">
          <div className="mt-16 flex flex-col items-center justify-center text-center text-white lg:mb-48 lg:ml-64 lg:mr-64 lg:mt-64">
            <h1 className="p-16 text-center">OUR SPONSORS</h1>
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
          <div className="flex flex-col items-center justify-center text-center text-white lg:mx-16">
            <h2 className="m-16 text-center">PLATINUM &nbsp;SPONSORS</h2>
            {/* 1st row of platinum sponsors */}
            <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center p-[2vh]">
                  <a href="https://asfb.as.ucsb.edu/" target="_blank">
                    <Image
                      className="m-2 lg:m-4"
                      src="/logo/sponsor/2026/platinum/asfinance-logo-white.png"
                      alt="UCSB AS Finance Board"
                      width={160}
                      height={150}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  UC Santa Barbara Associated Students Finance and Business
                  Committee is dedicated to managing the allocation of student
                  fees to support campus activities. The Committee plays a
                  crucial role in empowering student organizations by providing
                  the necessary financial resources to host programs, events,
                  and other initiatives. For our Formula SAE team, their support
                  has been instrumental in securing funding that aids in the
                  development and execution of our project.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://urca.ucsb.edu/" target="_blank">
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/platinum/urca-wordmark-white.png"
                      alt="UCSB URCA"
                      width={400}
                      height={100}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  UC Santa Barbara's Undergraduate Research & Creative
                  Activities (URCA) is an initiative designed to enrich the
                  academic journey of undergraduates through engagement in
                  research and creative pursuits. This season, URCA has
                  supported our Formula SAE team with monetary funding derived
                  from our research projects aimed at enhancing our race car's
                  performance. This financial assistance not only fuels our
                  innovative developments but also aligns with URCA’s mission to
                  prepare students for future challenges by applying their
                  academic knowledge in practical, real-world scenarios.
                </p>
              </div>
            </div>
            {/* 2nd row of platinum sponsors */}
            <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href=" https://www.arts.ucsb.edu/" target="_blank">
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/platinum/ucsb-art-white.png"
                      alt="UCSB Art Department"
                      width={300}
                      height={100}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  The UC Santa Barbara Art Department has generously supported
                  Gaucho Racing by granting us access to their manufacturing
                  spaces and capabilities. This collaboration has enabled us to
                  fabricate key components such as our chassis right on campus.
                  Their support has played a vital role in advancing our
                  engineering efforts and strengthening our educational mission.
                  We’re excited to continue working together to push the
                  boundaries of student-driven innovation.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://www.singlestore.com/" target="_blank">
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/platinum/singlestore-wordmark-white.png"
                      alt="SingleStore"
                      width={400}
                      height={200}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  SingleStore is a premier provider of scalable, high-speed
                  database management systems known for their ability to support
                  real-time analytics and operational intelligence. Our Formula
                  SAE team has been granted access to SingleStore's software,
                  allowing us to efficiently process and analyze data collected
                  from our race car. Singlestore's software has proven essential
                  in optimizing our vehicle's performance, demonstrating the
                  power of advanced data management in a competitive engineering
                  environment.
                </p>
              </div>
            </div>
            {/* 3rd row of platinum sponsors */}
            <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://www.tesla.com/" target="_blank">
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/platinum/tesla-wordmark-white.png"
                      alt="Tesla"
                      width={300}
                      height={80}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  Tesla is at the forefront of electric vehicle and clean energy
                  solutions. Renowned for advancing sustainable energy, Tesla
                  produces electric vehicles, battery storage, and solar
                  products aimed at reducing global dependence on fossil fuels.
                  Tesla has significantly boosted our Formula SAE team's efforts
                  by providing state-of-the-art battery cells for our car. These
                  high-quality cells enhance both the performance and
                  reliability of our vehicle, allowing us to compete
                  effectively.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a
                    href="https://www.cadence.com/en_US/home.html"
                    target="_blank"
                  >
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/platinum/cadence-wordmark-white.png"
                      alt="Cadence"
                      width={350}
                      height={200}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  Cadence Design Systems is a leading provider in electronic
                  design automation, renowned for its software, hardware, and
                  intellectual property. These tools are crucial for designing,
                  simulating, and verifying the complex electronic systems in
                  our race car, including sensor networks, power control
                  systems, and onboard diagnostics. Access to Cadence’s
                  sophisticated software not only accelerates our design process
                  but also enhances precision and innovation, significantly
                  boosting our engineering capabilities and competitive edge in
                  collegiate racing.
                </p>
              </div>
            </div>
            {/* 4th row of platinum sponsors */}
            <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://fireflyspace.com/" target="_blank">
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/platinum/firefly-wordmark-white.png"
                      alt="FireFly Aerospace"
                      width={475}
                      height={200}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  Firefly Aerospace is an innovative aerospace firm focused on
                  providing economical and dependable launch vehicles,
                  spacecraft, and in-space services. This season, our Formula
                  SAE team was fortunate to receive a donation of prepreg carbon
                  fiber from Firefly Aerospace. This high-quality material is
                  crucial for constructing lightweight, high-strength components
                  for our race car, significantly enhancing its structural
                  integrity and performance. Firefly Aerospace's support not
                  only aids in the development of our vehicle but also provides
                  us with valuable experience in utilizing advanced materials
                  used in the aerospace industry.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a
                    href="https://www.hesse-mechatronics.com/en/"
                    target="_blank"
                  >
                    <Image
                      className="m-4 lg:m-8"
                      src="/logo/sponsor/2026/platinum/hesse-logo-white.png"
                      alt="Hesse Mechatronics"
                      width={250}
                      height={100}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  Hesse Mechatronics is a leading provider of high-precision
                  wire bonding equipment and technology, essential for
                  microelectronic assembly. Our Formula SAE team has
                  continuously benefited from Hesse Mechatronics' support
                  through the donation of wire bonds and batteries. These
                  components are critical for ensuring reliable electrical
                  connections and power management in our race car. The
                  provision of these high-quality materials has allowed us to
                  enhance the durability and efficiency of our vehicle's
                  electronic systems, crucial for maintaining performance in
                  competitive racing environments.
                </p>
              </div>
            </div>

            {/* 5th row of platinum sponsors*/}
            <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://www.amk-motion.com/en/" target="_blank">
                    <Image
                      className="m-4 lg:m-8"
                      src="/logo/sponsor/2026/platinum/amk-motion-white.png"
                      alt="AMK Motion"
                      width={350}
                      height={200}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  AMK Motion is a global leader in advanced drive and motion
                  technology, setting the gold standard for Formula SAE motors.
                  Recognizing their unmatched expertise, our team is proud to
                  collaborate with AMK Motion to integrate their
                  state-of-the-art in-hub motors into our race car. These
                  cutting-edge components significantly enhance our vehicle's
                  performance, delivering unparalleled efficiency and power. The
                  precision and reliability of AMK's technology provide us with
                  a competitive edge, shaving crucial seconds off our times
                  during dynamic events and pushing our car’s capabilities to
                  new heights.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://www.kenesto.com/" target="_blank">
                    <Image
                      className="m-4 lg:m-8"
                      src="/logo/sponsor/2026/platinum/kenesto-logo-white.png"
                      alt="Kenesto"
                      width={300}
                      height={100}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  Kenesto is a powerful provider of cloud-based product
                  management and collaboration solutions, created specifically
                  for engineers and designers. Kenesto has generously given our
                  team access to their flexible platform for easy collaboration
                  on design work, critically improving our CAD file management,
                  version control processes, and overall organization. The
                  highly robust services that Kenesto provides are critical to
                  Gaucho Racing's growth, enabling our organization to design
                  more cleanly and efficiently.
                </p>
              </div>
            </div>

            {/* 6th row of platinum sponsors*/}
            <div className="center-column grid max-w-xl grid-cols-1 gap-8 lg:grid-cols-1">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://www.nocturnalwelding.com/" target="_blank">
                    <Image
                      className="m-4 lg:m-8"
                      src="/logo/sponsor/2026/platinum/nocturnal-welding-logo-white.png"
                      alt="Nocturnal Welding"
                      width={190}
                      height={200}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  Elijah Langworthy, AKA Nocturnal Welding, is a local machinist
                  and welder in the Camarillo Area. He has been instrumental in
                  our team since our formation and has helped our team
                  manufacture components, including welding our accumulator
                  container for GR24 and our decoupled suspension modules for
                  GR25. His crucial work has helped ensure that our critical
                  components are completed with high quality and accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* gold sponsors */}
          <div className="flex flex-col items-center justify-center text-center text-white lg:mx-16 lg:mb-32">
            <h2 className="mt-16 text-center lg:mt-32">GOLD &nbsp;SPONSORS</h2>
            {/* 1st row of gold sponsors */}
            <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://www.ansys.com/" target="_blank">
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/gold/ansys-wordmark-white.png"
                      alt="Ansys"
                      width={200}
                      height={100}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  Ansys is a global leader in engineering simulation software,
                  crucial for optimizing product designs and improving
                  manufacturing processes. Our Formula SAE team has been
                  equipped with Ansys software, enabling advanced simulations of
                  our race car's structural, thermal, and fluid dynamics. This
                  powerful tool helps refine our designs for enhanced
                  performance and safety, directly contributing to our
                  competitive success in collegiate racing. Ansys's support is
                  instrumental in fostering practical engineering skills among
                  our team members.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://itt.com/" target="_blank">
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/gold/itt-logo-white.png"
                      alt="ITT"
                      width={175}
                      height={100}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  ITT Inc. is a global manufacturer known for its diversified
                  high-technology engineering solutions in the aerospace,
                  automotive, rail, energy, and industrial sectors. Last season,
                  ITT enhanced Gaucho Racings capabilities by granting us access
                  to their industrial-grade oven, allowing us to cure our
                  composite components. For GR25, ITT has become a leading
                  partner in our program, providing resources that will support
                  both our mechanical and electrical teams. ITT has also
                  recognized the talent within Gaucho Racing and is actively
                  recruiting directly from our team, offering team members
                  direct pathways into their professional careers.
                </p>
              </div>
            </div>
            {/* 2nd row of gold sponsors */}
            <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://www.altium.com/" target="_blank">
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/gold/altium-white.png"
                      alt="Altium"
                      width={200}
                      height={100}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  Altium is a world-renowned software company specializing in
                  electronic design automation and PCB-focused programs. Since
                  2023, they have generously supported our team by providing
                  access to their cutting-edge software, empowering our
                  engineers to design and optimize complex electronic systems.
                  Our Powertrain, Electronics, and Data team have extensively
                  utilized Altium’s applications to develop custom circuitry for
                  critical components such as our Battery Management system,
                  sensor integration, and motor controller. This partnership has
                  been essential in advancing our abilities to meet industry
                  standards.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://aws.amazon.com/" target="_blank">
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/gold/aws-white.png"
                      alt="AWS"
                      width={125}
                      height={100}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  Amazon Web Services (AWS) is the largest provider of cloud
                  computing and cloud solution services in the world. Since
                  partnering with us, AWS has provided our team with free
                  credits to utilize their cloud services, which we have
                  leverage to store our car data, host our website, and manage
                  our internal IT infrastructure. This support has allowed us to
                  efficiently streamline our team processes, better benchmark
                  our car performance, and train our members to use the same
                  advanced tools relied upon by top professionals in the field.
                </p>
              </div>
            </div>
            {/* 3rd row of gold sponsors */}
            <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://bambulab.com/en" target="_blank">
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/gold/bambu-wordmark-white.png"
                      alt="Bambu Lab"
                      width={250}
                      height={100}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  Bambu Lab is a cutting-edge company specializing in 3D
                  printing technology. This season, they generously provided our
                  Formula SAE team with free 3D printing products. These
                  resources have been pivotal in rapidly prototyping parts for
                  our race car, allowing for quick iterations and enhancements.
                  Bambu Lab's support has significantly boosted our design and
                  testing capabilities, helping us stay agile and innovative in
                  the dynamic environment of collegiate racing.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://hexagon.com/" target="_blank">
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/gold/hexagon-white.png"
                      alt="Hexagon"
                      width={275}
                      height={100}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  Hexagon is an international, multidisciplinary powerhouse
                  focused in various sectors including surveying, manufacturing,
                  aerospace, agriculture, and healthcare. Our team utilizes
                  their simulation software including Adams, a industry standard
                  vehicle dynamics simulation platform. With this software, our
                  team is able to efficiently map our suspension geometry,
                  simulate and visualize lap times, and gain a better
                  understanding of our car, giving us a competitive edge in
                  FSAE.
                </p>
              </div>
            </div>
            {/* 4th row of gold sponsors */}
            <div className="center-column grid max-w-xl grid-cols-1 gap-8 lg:grid-cols-1">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <a href="https://www.solidworks.com/" target="_blank">
                    <Image
                      className="mt-4 lg:mt-8"
                      src="/logo/sponsor/2026/gold/solidworks-wordmark-white.png"
                      alt="Solidworks"
                      width={300}
                      height={100}
                    />
                  </a>
                </div>
                <p className="text-sm">
                  Solidworks is a leading provider of computer-aided design and
                  simulation software. At Gaucho Racing, we rely heavily on
                  Solidworks to model and integrate all major components,
                  ensuring seamless design and development of our projects. Its
                  advanced tools enable our team to optimize performance,
                  streamline workflows, and bring innovative engineering
                  solutions to life. Solidworks plays a crucial role in helping
                  us maintain precision and efficiency throughout our design
                  process.
                </p>
              </div>
            </div>
          </div>
          {/* silver sponsors */}
          <h2 className="mb-8 mt-16 text-center lg:mt-32">
            SILVER &nbsp;SPONSORS
          </h2>
          {/* 1st row of silver sponsors */}
          <div className="flex flex-col items-center justify-center lg:mt-8 lg:flex-row">
            <a href="https://airtech.com/" target="_blank">
              <Image
                className="m-4 lg:m-6"
                src="/logo/sponsor/2026/silver/airtech-white.png"
                alt="Airtech"
                width={200}
                height={100}
              />
            </a>
            <a href="https://www.skf.com/us" target="_blank">
              <Image
                className="m-4 lg:m-6"
                src="/logo/sponsor/2026/silver/skf-white.png"
                alt="SKF"
                width={200}
                height={100}
              />
            </a>
            <a href="https://www.vi-grade.com/" target="_blank">
              <Image
                className="m-4 lg:m-6"
                src="/logo/sponsor/2026/silver/vi-grade-white.png"
                alt="Vi-Grade"
                width={200}
                height={100}
              />
            </a>
            <a
              href="https://www.youtube.com/@thesantabarbaracarshowchan3555"
              target="_blank"
            >
              <Image
                className="m-4 lg:m-6"
                src="/logo/sponsor/2026/silver/sb-car-show-white.png"
                alt="Santa Barbara Car Show Channel"
                width={215}
                height={100}
              />
            </a>
          </div>
          {/* 2nd row of silver sponsors */}
          <div className="flex flex-col items-center justify-center lg:mt-4 lg:flex-row">
            <a
              href="https://www.haascnc.com/content/ghf/en/home.html"
              target="_blank"
            >
              <Image
                className="m-4 lg:m-6"
                src="/logo/sponsor/2026/silver/haasfoundation-logo-white.png"
                alt="Gene Haas Founation"
                width={140}
                height={100}
              />
            </a>
            <a href="https://formlabs.com/" target="_blank">
              <Image
                className="m-4 lg:m-6"
                src="/logo/sponsor/2026/silver/formlabs-wordmark-white.png"
                alt="Formlabs"
                width={215}
                height={100}
              />
            </a>
            <a href="https://hakkousa.com/" target="_blank">
              <Image
                className="m-4 lg:m-6"
                src="/logo/sponsor/2026/silver/hakko-wordmark-white.png"
                alt="Hakko"
                width={215}
                height={100}
              />
            </a>
            <a href="https://www.triadmagnetics.com/about-us/" target="_blank">
              <Image
                className="m-4 lg:m-6"
                src="/logo/sponsor/2026/silver/triad-magnetics-white.png"
                alt="Triad Magnetics"
                width={215}
                height={100}
              />
            </a>
          </div>
          {/* bronze sponsors */}
          <h2 className="mb-8 mt-16 whitespace-pre text-center lg:mt-32">
            BRONZE &nbsp;SPONSORS
          </h2>
          <div className="flex flex-col items-center justify-center lg:mt-8 lg:flex-row">
            <a href="https://www.confluent.io/" target="_blank">
              <Image
                className="m-4 lg:mr-0"
                src="/logo/sponsor/2026/bronze/confluent-white.png"
                alt="Confluent"
                width={200}
                height={100}
              />
            </a>
            <a href="https://www.coroflex-cable.com/en/" target="_blank">
              <Image
                className="m-4 lg:ml-0"
                src="/logo/sponsor/2026/bronze/coroflex-white.png"
                alt="Coroflex"
                width={200}
                height={100}
              />
            </a>
            <a href="https://www.celsius.com/" target="_blank">
              <Image
                className="m-4 lg:m-10"
                src="/logo/sponsor/2026/bronze/celsius-logo-white.png"
                alt="Celsius"
                width={80}
                height={100}
              />
            </a>
            <a href="https://www.redbull.com/us-en" target="_blank">
              <Image
                className="m-4 lg:m-10"
                src="/logo/sponsor/2026/bronze/redbull-logo-white.png"
                alt="Red Bull"
                width={115}
                height={100}
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center lg:mt-4 lg:flex-row">
            <a href="https://semiq.com/" target="_blank">
              <Image
                className="m-4 lg:m-10"
                src="/logo/sponsor/2026/bronze/semiq-white.png"
                alt="SemiQ"
                width={200}
                height={125}
              />
            </a>
            <a href="https://www.digikey.com/" target="_blank">
              <Image
                className="m-4 lg:m-10"
                src="/logo/sponsor/2026/bronze/digikey-white.png"
                alt="Digikey"
                width={150}
                height={125}
              />
            </a>
            <a href="https://inertialsense.com/" target="_blank">
              <Image
                className="m-4 lg:m-10"
                src="/logo/sponsor/2026/bronze/inertialsense-white.png"
                alt="Inertial Sense"
                width={200}
                height={125}
              />
            </a>
            <a href="https://www.tapplastics.com/" target="_blank">
              <Image
                className="m-4 lg:m-10"
                src="/logo/sponsor/2026/bronze/tapplastics-white.png"
                alt="Tap Plastics"
                width={200}
                height={125}
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center lg:mt-4 lg:flex-row">
            <a href="https://www.tglobaltechnology.com/" target="_blank">
              <Image
                className="m-4 lg:m-10"
                src="/logo/sponsor/2026/bronze/tglobal-white.png"
                alt="T-Global Technology"
                width={180}
                height={125}
              />
            </a>
            <a href="https://storkecentr.al/" target="_blank">
              <Image
                className="m-4 lg:m-10"
                src="/logo/sponsor/2026/bronze/storkecentral-white.png"
                alt="StorkeCentral"
                width={250}
                height={125}
              />
            </a>
            <a href="https://vantage-dc.com/" target="_blank">
              <Image
                className="m-4 lg:m-10"
                src="/logo/sponsor/2026/bronze/vantage-dc-logo.png"
                alt="Vantage Data Centers"
                width={140}
                height={140}
              />
            </a>
            <a href="https://californiafilament.com/" target="_blank">
              <Image
                className="m-4 lg:m-10"
                src="/logo/sponsor/2026/bronze/CaliforniaFilament-white.png"
                alt="California Filament"
                width={165}
                height={165}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 p-8">
        <div className="flex flex-col items-center justify-center text-center text-white lg:mb-32 lg:ml-32 lg:mr-32 lg:mt-16">
          <h1 className="p-8">SPONSOR US</h1>
          <p className="text-xl">
            We'd love to have you as a sponsor! Whether it is fueling us with
            pizza, supplying us with materials, or just throwing some cash our
            way, your donations are crucial to making this all possible! If you
            want to learn more about some of the benefits in sponsoring our
            team, please check out our sponsorship packet below.
          </p>
          <a href="/Sponsorship Package GR26.pdf" target="_blank">
            <OutlineButton>SPONSORSHIP PACKET</OutlineButton>
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
