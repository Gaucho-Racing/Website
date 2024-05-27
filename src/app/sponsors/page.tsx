import Footer from "../../components/footer";
import Header from "../../components/header";
import { OutlineButton } from "@/components/ui/outline-button";
import Image from "next/image";
import Link from "next/link";

export default function SponsorsPage() {
  return (
    <main className="overflow-hidden">
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
          <div className="mt-16 flex flex-col items-center justify-center text-center text-white lg:mb-48 lg:ml-64 lg:mr-64 lg:mt-64">
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
          <div className="mx-8 flex flex-col items-center justify-center text-white lg:mx-16 lg:mb-32 lg:mt-16">
            <h2 className="m-8 text-center">PLATINUM &nbsp;SPONSORS</h2>
            {/* 1st row of platinum sponsors */}
            <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <Image
                    className="m-2 lg:m-4"
                    src="/logo/sponsor/2024/asfinance-logo-white.png"
                    alt="UCSB AS Finance Board"
                    width={160}
                    height={150}
                  />
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
                  <Image
                    className="mt-4 lg:mt-8"
                    src="/logo/sponsor/2024/urca-wordmark-white.png"
                    alt="UCSB URCA"
                    width={400}
                    height={100}
                  />
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
                  <Image
                    className="mt-4 lg:mt-8"
                    src="/logo/sponsor/2024/singlestore-wordmark-white.png"
                    alt="SingleStore"
                    width={400}
                    height={200}
                  />
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
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <Image
                    className="mt-4 lg:mt-8"
                    src="/logo/sponsor/2024/tesla-wordmark-white.png"
                    alt="Tesla"
                    width={300}
                    height={80}
                  />
                </div>
                <p className="text-sm">
                  Tesla, is at the forefront of electric vehicle and clean
                  energy solutions. Renowned for advancing sustainable energy,
                  Tesla produces electric vehicles, battery storage, and solar
                  products aimed at reducing global dependence on fossil fuels.
                  Tesla has significantly boosted our Formula SAE team's efforts
                  by providing state-of-the-art battery cells for our car. These
                  high-quality cells enhance both the performance and
                  reliability of our vehicle, allowing us to compete
                  effectively.
                </p>
              </div>
            </div>
            {/* 3rd row of platinum sponsors */}
            <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <Image
                    className="mt-4 lg:mt-8"
                    src="/logo/sponsor/2024/cadence-wordmark-white.png"
                    alt="Cadence"
                    width={350}
                    height={200}
                  />
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
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <Image
                    className="mt-4 lg:mt-8"
                    src="/logo/sponsor/2024/firefly-wordmark-white.png"
                    alt="FireFly Aerospace"
                    width={475}
                    height={200}
                  />
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
            </div>
            {/* 4th row of platinum sponsors */}
            <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <Image
                    className="m-4 lg:m-8"
                    src="/logo/sponsor/2024/hesse-logo-white.png"
                    alt="Hesse Mechatronics"
                    width={275}
                    height={100}
                  />
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
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <Image
                    className="mt-4 lg:mt-8"
                    src="/logo/sponsor/2024/ansys-wordmark-white.png"
                    alt="Ansys"
                    width={300}
                    height={200}
                  />
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
            </div>

            <h2 className="mt-16 text-center lg:mt-32">GOLD &nbsp;SPONSORS</h2>
            <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <Image
                    className="mt-4 lg:mt-8"
                    src="/logo/sponsor/2024/itt-logo-white.png"
                    alt="ITT"
                    width={175}
                    height={100}
                  />
                </div>
                <p className="text-sm">
                  ITT Inc. is a global manufacturer known for its diversified
                  high-technology engineering solutions. This season, ITT has
                  enhanced our Formula SAE team's capabilities by granting us
                  access to their industrial-grade oven. This equipment has been
                  invaluable for curing composite materials used in constructing
                  our race car, ensuring optimal strength and lightweight
                  properties. Access to ITT's oven has enabled precise control
                  over our fabrication processes, improving the quality and
                  durability of our vehicle components.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-48 flex-col items-center justify-center">
                  <Image
                    className="mt-4 lg:mt-8"
                    src="/logo/sponsor/2024/bambu-wordmark-white.png"
                    alt="Bambu Lab"
                    width={250}
                    height={100}
                  />
                </div>
                <p className="text-sm">
                  Bambu Lab is a cutting-edge company specializing in 3D
                  printing technology. This season, they generously provided our
                  Formula SAE team with free 3D printing products. These
                  resources have been pivotal in rapidly prototyping parts for o
                  ur race car, allowing for quick iterations and enhancements.
                  Bambu Lab's support has significantly boosted our design and
                  testing capabilities, helping us stay agile and innovative in
                  the dynamic environment of collegiate racing.
                </p>
              </div>
            </div>
            <h2 className="mt-16 text-center lg:mt-32">
              SILVER &nbsp;SPONSORS
            </h2>
            <div className="flex flex-col items-center justify-center lg:mt-16 lg:flex-row">
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/formlabs-wordmark-white.png"
                alt="Formlabs"
                width={250}
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
            <h2 className="mt-16 whitespace-pre text-center lg:mt-32">
              BRONZE &nbsp;SPONSORS
            </h2>
            <div className="flex flex-col items-center justify-center lg:mt-16 lg:flex-row">
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/redbull-logo-white.png"
                alt="Red Bull"
                width={115}
                height={100}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/drivetowardcure-logo-white.png"
                alt="Drive Toward A Cure"
                width={90}
                height={100}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/celsius-logo-white.png"
                alt="Celsius"
                width={80}
                height={100}
              />
              <Image
                className="m-4 lg:m-8"
                src="/logo/sponsor/2024/digitalocean-logo-white.png"
                alt="DigitalOcean"
                width={120}
                height={100}
              />
            </div>
            <div className="flex flex-col items-center lg:flex-row"></div>
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
          <a href="/sponsorship.pdf" target="_blank">
            <OutlineButton>SPONSORSHIP PACKET</OutlineButton>
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
