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
            <h1 className="p-16">Platinum</h1>
            <div className="flex flex-col items-stretch lg:mt-16 lg:flex-row">
              <AutodeskIcon className="h-32 w-64 bg-black text-white" />
              <TeslaIcon className="h-16 w-32 bg-black text-white" />
            </div>
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
            <h1 className="p-16">Tier 2</h1>
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
            <h1 className="p-16">Tier 3</h1>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
