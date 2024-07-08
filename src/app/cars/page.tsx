import Footer from "@/components/footer";
import Header from "@/components/header";
import Car from "@/components/car";

export default function MediaPage() {
  return (
    <main className="">
      <Header
        selectedPage={4}
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
            <h1 className="p-16">CARS</h1>
          </div>
        </div>
      </div>
      <div className="justify-center bg-black bg-opacity-70 p-8">
        <h1 className="mb-16 mt-16 text-center lg:ml-64 lg:mr-64">OUR CARS</h1>
        <div className="flex flex-col items-center text-white">
          <Car
            name="GR 24"
            year="2 0 2 3 - 2 0 2 4"
            description={`Nickname: Do You Have an SOP for That? \n 
              A marker of many significant milestones: it was the first student formula car to drive on UCSB campus and the first to pass mechanical tech inspection at competition.`}
            imageUrl="/cars/24.jpg"
            imageOnLeft={false}
          />
          <Car
            name="GR 23"
            year="2 0 2 2 - 2 0 2 3"
            description={`Our first car and our team's first ever exposure to competition. While it never drove, it provided our team with invaluable experience for future builds.`}
            imageUrl="/cars/23.jpeg"
            imageOnLeft={true}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
