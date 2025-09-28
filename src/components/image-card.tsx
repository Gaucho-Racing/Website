import { useState } from "react";
import Image from "next/image";
import ExpandIcon from "./icons/expand";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="m-2 relative group cursor-pointer transition-transform duration-200 hover:scale-105">
          <Image
            src={src}
            alt={alt}
            width={300}
            height={200}
            className="rounded-lg shadow-md object-cover"
            loading="lazy"
            style={{ width: '300px', height: '200px' }}
          />
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100  bg-black bg-opacity-40 rounded-full p-2">
            <ExpandIcon className="text-white" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 bg-black">
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={600}
            quality={100}
            className="w-full h-auto rounded-lg"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageCard;
