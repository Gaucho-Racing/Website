import Image from "next/image";
import Link from "next/link";

interface SectionCardProps extends React.PropsWithChildren {
  className?: string;
  title: string;
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
}

const SectionCard = (props: SectionCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-between text-black ${props.className}`}
    >
      <div className="items-center">
        <div
          className="h-48 w-full lg:h-96"
          style={{
            backgroundImage: `url('${props.imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <h1 className="p-4 text-center text-3xl font-medium lg:p-16 lg:text-5xl">
          {props.title}
        </h1>
        {props.children}
      </div>
      <Link href={props.buttonLink ?? "/"}>
        <button className="text-md group relative mb-2 me-2 mt-8 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-gr-purple to-gr-pink p-0.5 text-black">
          <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-white">
            {props.buttonText ?? "Learn More"}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default SectionCard;
