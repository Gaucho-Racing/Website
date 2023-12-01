import Footer from "../components/footer";
import Header from "../components/header";

export default function TeamPage() {
  return (
    <main className=''>
      <Header selectedPage={2} className='bg-black h-32 w-full flex justify-center items-center fixed top-0 z-10' style={{
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
      }} />
      <div className='' style={{
        backgroundImage: "url('team/banner.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className='bg-black bg-opacity-70 p-16'>
          <div className='text-white flex flex-col items-center justify-center lg:mr-64 lg:ml-64 lg:mt-32 lg:mb-48'>
            <h1 className='text-5xl font-medium p-16'>
              Our Team
            </h1>
            <h3 className='text-xl font-thin'>
              We have over 100 members across 6 subteams working together to design, build, and test our cars.
            </h3>
          </div>
        </div>
      </div>
      <div className='bg-black bg-opacity-70 p-16'>
        <div className='text-white flex flex-col items-center justify-center lg:mr-64 lg:ml-64 lg:mt-16 lg:mb-32'>
          <h1 className='text-5xl font-medium p-16'>
            Our Officers
          </h1>
          <h3 className='text-xl font-thin'>
            
          </h3>
        </div>
      </div>
      <div className='bg-black bg-opacity-70 p-16'>
        <div className='text-white flex flex-col items-center justify-center lg:mr-64 lg:ml-64 lg:mt-16 lg:mb-32'>
          <h1 className='text-5xl font-medium p-16'>
            Alumni
          </h1>
          <h3 className='text-xl font-thin'>
            [Something about how awesome our alumni are here]
          </h3>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-8 overflow-hidden text-md font-light rounded-lg group bg-gradient-to-br from-gr-purple to-gr-pink text-white">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
              Meet our Alumni
            </span>
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

