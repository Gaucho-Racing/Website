import { motion } from "framer-motion";
import Image from "next/image";

type LogoSliderProps = {
  logos?: string[];
};

const defaultLogos = [
  "home/where-we-work/spacex.png",
  "home/where-we-work/nvidia.png",
  "home/where-we-work/boeing.png",
  "home/where-we-work/rivian.png",
  "home/where-we-work/nasa.png",
  "home/where-we-work/honda-racing.png",
  "home/where-we-work/hp.png",
  "home/where-we-work/tesla.png",
  "home/where-we-work/blue-origin.png",
  "home/where-we-work/itt.png",
  "home/where-we-work/haas.png",
  "home/where-we-work/applied-materials.png",
  "home/where-we-work/ey.png",
  "home/where-we-work/northrop-grumman.png",
  "home/where-we-work/arm.png",
  "home/where-we-work/western-digital.png",
];

export default function LogoSlider({ logos = defaultLogos }: LogoSliderProps) {
  const firstRowBaseLogos = logos.filter((_, index) => index % 2 === 0);
  const secondRowBaseLogos = logos.filter((_, index) => index % 2 !== 0);

  const firstRowLogos = [
    ...(firstRowBaseLogos.length ? firstRowBaseLogos : logos),
    ...(firstRowBaseLogos.length ? firstRowBaseLogos : logos),
  ];
  const secondRowLogos = [
    ...(secondRowBaseLogos.length ? secondRowBaseLogos : logos),
    ...(secondRowBaseLogos.length ? secondRowBaseLogos : logos),
  ];

  return (
    <div
      className="relative w-full overflow-hidden py-6"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, transparent 1%, black, black, transparent 100%, transparent)",
      }}
    >
      <div className="flex flex-col gap-4">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {firstRowLogos.map((logo, index) => (
            <div
              key={`row1-${logo}-${index}`}
              className="flex shrink-0 items-center justify-center rounded-md p-4"
            >
              <Image
                src={`/${logo}`}
                alt="Company logo"
                width={200}
                height={75}
                className="max-h-28 object-contain"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {secondRowLogos.map((logo, index) => (
            <div
              key={`row2-${logo}-${index}`}
              className="mx-6 flex h-24 w-56 shrink-0 items-center justify-center rounded-md p-4"
            >
              <Image
                src={`/${logo}`}
                alt="Company logo"
                width={200}
                height={75}
                className="max-h-28 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
