import Footer from "@/components/footer";
import Header from "@/components/header";
import { OutlineButton } from "@/components/ui/outline-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TeamCard from "@/components/team-card";

export default function TeamPage() {
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
            <h1 className="p-16">OUR TEAM</h1>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 p-16">
        <div className="flex flex-col items-center justify-center text-white lg:ml-64 lg:mr-64 lg:mt-16">
          <h1 className="">OFFICERS</h1>
          <div className="flex flex-col items-stretch lg:mt-16 lg:flex-row">
            <TeamCard
              name="Nicholas"
              title="President"
              titleColor="text-gr-pink"
              image="lead-images\24\Nicholas24.png"
            />
            <TeamCard
              name="Raaghav"
              title="Internal VP"
              titleColor="text-gr-pink"
              image="lead-images\24\Raaghav24.jpg"
            />
            <TeamCard
              name="Aran"
              title="External VP"
              titleColor="text-gr-pink"
              image="lead-images\24\Aran24.jpg"
            />
            <TeamCard
              name="Anirudh"
              title="Mechanical Chief Engineer"
              titleColor="text-gr-pink"
              image="lead-images\24\Anirudh24.png"
            />
            <TeamCard
              name="Jason"
              title="Electrical Chief Engineer"
              titleColor="text-gr-pink"
              image="lead-images\24\Jason24.png"
            />
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 p-16">
        <div className="flex flex-col items-center justify-center text-white lg:ml-64 lg:mr-64 lg:mt-16">
          <h1 className="">TEAM LEADS</h1>
          <div className="flex flex-col items-stretch lg:mt-16 lg:flex-row">
            <TeamCard
              name="Amitha"
              title="Business Lead"
              titleColor="text-gr-purple"
              image="lead-images\24\Amitha24.jpg"
            />
            <TeamCard
              name="Stephen"
              title="Aero Lead"
              titleColor="text-gr-purple"
              image="lead-images\24\Stephen24.png"
            />
            <TeamCard
              name="Roger"
              title="Aero Lead"
              titleColor="text-gr-purple"
              image="lead-images\24\Roger24.png"
            />
            <TeamCard
              name="Dylan"
              title="Chassis Lead"
              titleColor="text-gr-purple"
              image="lead-images\24\Dylan24.png"
            />
            <TeamCard
              name="Thomas"
              title="Chassis Lead"
              titleColor="text-gr-purple"
              image="lead-images\24\Thomas24.png"
            />
          </div>
          <div className="flex flex-col items-stretch lg:mt-16 lg:flex-row">
            <TeamCard
              name="Tien"
              title="Controls Hardware Lead"
              titleColor="text-gr-purple"
              image="lead-images\24\Tien24.jpg"
            />
            <TeamCard
              name="Josh"
              title="Controls Software Lead"
              titleColor="text-gr-purple"
              image="lead-images\24\Josh24.png"
            />
            <TeamCard
              name="Jason"
              title="Powertrain Lead"
              titleColor="text-gr-purple"
              image="lead-images\24\Jason24.png"
            />
            <TeamCard
              name="Anirudh"
              title="Suspension Lead"
              titleColor="text-gr-purple"
              image="lead-images\24\Anirudh24.png"
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
          <div className="flex flex-col items-center justify-center text-white lg:mb-32 lg:ml-64 lg:mr-64 lg:mt-16">
            <h1 className="p-16">Alumni</h1>
            <p className="">
              [Something about how awesome our alumni are here]
            </p>
            <OutlineButton>MEET OUR ALUMNI</OutlineButton>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
