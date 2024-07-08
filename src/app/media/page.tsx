import Footer from "@/components/footer";
import Header from "@/components/header";
import ImageCard from "@/components/image-card";
import { motion } from "framer-motion";

const images = [
  {
    src: "/media/comp.jpg",
    alt: "24",
  },
  {
    src: "/media/comp2.jpg",
    alt: "24",
  },
  {
    src: "/media/team_photo.jpg",
    alt: "24",
  },
  {
    src: "/media/team_photo2.jpg",
    alt: "24",
  },
  {
    src: "/media/close_up.png",
    alt: "24",
  },
  {
    src: "/media/close_up2.jpg",
    alt: "24",
  },
  {
    src: "/media/car.jpg",
    alt: "24",
  },
  {
    src: "/media/car2.jpg",
    alt: "24",
  },
];

export default function MediaPage() {
  return (
    <main className="">
      <Header
        selectedPage={3}
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
            <h1 className="p-16">MEDIA</h1>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-70 p-8">
        <div className="flex flex-col items-center text-white">
          <h1 className="mb-16 mt-16 lg:ml-64 lg:mr-64">PHOTO GALLERY</h1>
          <div className="flex flex-col items-center text-white">
            <h2 className="mb-16 mt-8 text-2xl font-bold text-white lg:ml-64 lg:mr-64">
              2023-2024 Season
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {images.map((image, index) => (
                <ImageCard key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
/*


import React from 'react';
import Footer from "@/components/footer";
import Header from "@/components/header";
import ImageCard from '@/components/image-card';



const PhotoGallery: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl text-center mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {images.map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
*/
