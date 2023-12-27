import Footer from "../components/footer";
import Header from "../components/header";

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
          // opacity: scrollY > windowHeight - 132 ? "1" : "0",
          // transition: "all .3s",
          // visibility: scrollY > windowHeight - 132 ? "visible" : "hidden",
        }}
      />
      <div
        className=""
        style={{
          backgroundImage: "url('team/banner.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-70 p-16">
          <div className="flex flex-col items-center justify-center text-white lg:mb-48 lg:ml-64 lg:mr-64 lg:mt-32">
            <h1 className="p-16 text-5xl font-medium">Our Team</h1>
            <h3 className="text-xl font-thin">
              We have over 100 members across 6 subteams working together to
              design, build, and test our cars.
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 p-16">
        <div className="flex flex-col items-center justify-center text-white lg:mb-32 lg:ml-64 lg:mr-64 lg:mt-16">
          <h1 className="p-16 text-5xl font-medium">Our Officers</h1>
          <h3 className="text-xl font-thin"></h3>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 p-16">
        <div className="flex flex-col items-center justify-center text-white lg:mb-32 lg:ml-64 lg:mr-64 lg:mt-16">
          <h1 className="p-16 text-5xl font-medium">Alumni</h1>
          <h3 className="text-xl font-thin">
            [Something about how awesome our alumni are here]
          </h3>
          <button className="text-md group relative mb-2 me-2 mt-8 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-gr-purple to-gr-pink p-0.5 font-light text-white">
            <span className="relative rounded-md bg-black px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              Meet our Alumni
            </span>
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
