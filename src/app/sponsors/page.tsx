import Footer from "../../components/footer";
import Header from "../../components/header";
import { OutlineButton } from "@/components/ui/outline-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TeamCard from "@/components/team-card";
import Image from "next/image";
import Link from "next/link";
import AutodeskIcon from "@/components/sponsors/autodesk";
import TeslaIcon from "@/components/sponsors/tesla";

export default function SponsorsPage() {
  return (
    <main className="">
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
            <h1 className="p-16">OUR SPONSORS</h1>
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
          <div className="flex flex-col items-center justify-center text-white lg:mb-32 lg:ml-64 lg:mr-64 lg:mt-16">
            {/* <h1 className="p-16 text-center">TITLE SPONSORS</h1> */}
            <div className="flex flex-col items-center lg:mt-16 lg:flex-row">
              <Image
                className="m-4 lg:m-8 lg:ml-16"
                src="/logo/sponsor/2024/asfinance-logo-white.png"
                alt="UCSB AS Finance Board"
                width={200}
                height={200}
              />
              <Image
                className="m-4 lg:m-8 lg:ml-16"
                src="/logo/sponsor/2024/urca-wordmark-white.png"
                alt="UCSB URCA"
                width={500}
                height={100}
              />
            </div>
            <div className="flex flex-col items-center lg:mt-16 lg:flex-row">
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/singlestore-wordmark-white.png"
                alt="SingleStore"
                width={500}
                height={200}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/firefly-wordmark-white.png"
                alt="FireFly Aerospace"
                width={500}
                height={200}
              />
            </div>
            <div className="flex flex-col items-center lg:mt-16 lg:flex-row">
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/cadence-wordmark-white.png"
                alt="Cadence"
                width={400}
                height={200}
              />
            </div>
            {/* <h1 className="p-16 text-center lg:mt-16">GOLD SPONSORS</h1> */}
            <div className="flex flex-col items-center lg:mt-16 lg:flex-row">
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/tesla-wordmark-white.png"
                alt="Tesla"
                width={300}
                height={100}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/hesse-logo-white.png"
                alt="Hesse Mechatronics"
                width={300}
                height={100}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/bambu-wordmark-white.png"
                alt="Bambu Lab"
                width={300}
                height={100}
              />
            </div>
            {/* <h1 className="p-16 text-center lg:mt-16">SILVER SPONSORS</h1> */}
            <div className="flex flex-col items-center lg:mt-16 lg:flex-row">
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/itt-logo-white.png"
                alt="ITT"
                width={150}
                height={100}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/nf-logo-white.png"
                alt="Neal Feay"
                width={130}
                height={100}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/haasfoundation-logo-white.png"
                alt="Gene Haas Founation"
                width={140}
                height={100}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/milpasmotors-logo-white.png"
                alt="Milpas Motors"
                width={150}
                height={100}
              />
            </div>
            <div className="flex flex-col items-center lg:flex-row">
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/hakko-wordmark-white.png"
                alt="Hakko"
                width={250}
                height={100}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/solidworks-wordmark-white.png"
                alt="Solidworks"
                width={290}
                height={100}
              />
            </div>
            {/* <h1 className="p-16 text-center lg:mt-16">BRONZE SPONSORS</h1> */}
            <div className="flex flex-col items-center lg:mt-16 lg:flex-row">
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/redbull-logo-white.png"
                alt="Red Bull"
                width={130}
                height={100}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/drivetowardcure-logo-white.png"
                alt="Drive Toward A Cure"
                width={100}
                height={100}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/celsius-logo-white.png"
                alt="Celsius"
                width={100}
                height={100}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/digitalocean-logo-white.png"
                alt="DigitalOcean"
                width={140}
                height={100}
              />
            </div>
            <div className="flex flex-col items-center lg:flex-row">
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/formlabs-wordmark-white.png"
                alt="Formlabs"
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 p-16">
        <div className="flex flex-col items-center justify-center text-white lg:mb-32 lg:ml-64 lg:mr-64 lg:mt-16">
          <h1 className="p-16">SPONSOR US</h1>
          <p className="text-xl">
            We'd love to have you as a sponsor! Whether it is fueling us with
            pizza, supplying us with materials, or just throwing some cash our
            way, your donations are crucial to making this all possible! If you
            want to learn more about some of the benefits in sponsoring our
            team, please check out our sponsorship packet below.
          </p>
          <Link href="/sponsorship.pdf">
            <OutlineButton>SPONSORSHIP PACKET</OutlineButton>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
