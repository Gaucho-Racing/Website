import React from "react";

interface CarProps {
  name: string;
  year: string;
  description: string;
  imageUrl: string;
  imageOnLeft: boolean;
}

const Car: React.FC<CarProps> = ({
  name,
  year,
  description,
  imageUrl,
  imageOnLeft,
}) => {
  return (
    <div
      className={`mb-16 mt-16 flex flex-col justify-center md:flex-row lg:ml-16 lg:mr-16 2xl:ml-72 2xl:mr-72 ${imageOnLeft ? "md:flex-row-reverse" : ""}`}
    >
      <div className="w-full p-4 md:w-1/2">
        <img
          src={imageUrl}
          alt={`${name} car`}
          className="h-auto w-full rounded-lg shadow-md"
          loading="lazy"
        />
      </div>
      <div
        className={`w-full p-4 md:w-1/2 ${imageOnLeft ? "text-right" : "text-left"}`}
      >
        <h2 className="font mb-4 text-5xl">{name}</h2>
        <p className="mb-4 text-2xl font-semibold text-gr-pink">{year}</p>
        <p className="text-md whitespace-pre-line text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Car;
