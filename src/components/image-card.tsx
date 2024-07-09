import React from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div className="m-4">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={200}
        layout="responsive"
        className="rounded-lg shadow-md"
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;
