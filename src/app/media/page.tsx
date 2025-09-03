"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SideMenu from "@/components/sidebar";
import ImageCard from "@/components/image-card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images25 = [
  {
    src: "/media/25/team.jpg",
    alt: "25",
  },
  {
    src: "/media/25/comp.jpg",
    alt: "25",
  },
  {
    src: "/media/25/closeup1.jpg",
    alt: "25",
  },
  {
    src: "/media/25/comp2.jpg",
    alt: "25",
  },
  {
    src: "/media/25/comp3.jpg",
    alt: "25",
  },
  {
    src: "/media/25/comp4.jpg",
    alt: "25",
  },
  {
    src: "/media/25/comp5.jpg",
    alt: "25",
  },
  {
    src: "/media/25/closeup4.jpg",
    alt: "25",
  },
];

const imagesSoCalShootout24 = [
  {
    src: "/media/SoCalShootoutNov2024/1.jpg",
    alt: "24",
  },
  {
    src: "/media/SoCalShootoutNov2024/2.jpg",
    alt: "24",
  },
  {
    src: "/media/SoCalShootoutNov2024/3.jpg",
    alt: "24",
  },
  {
    src: "/media/SoCalShootoutNov2024/4.jpg",
    alt: "24",
  },
  {
    src: "/media/SoCalShootoutNov2024/5.jpg",
    alt: "24",
  },
  {
    src: "/media/SoCalShootoutNov2024/6.jpg",
    alt: "24",
  },
  {
    src: "/media/SoCalShootoutNov2024/7.jpg",
    alt: "24",
  },
  {
    src: "/media/SoCalShootoutNov2024/8.jpg",
    alt: "24",
  },
];

const images24 = [
  {
    src: "/media/24/comp.jpg",
    alt: "24",
  },
  {
    src: "/media/24/comp2.jpg",
    alt: "24",
  },
  {
    src: "/media/24/comp3.jpg",
    alt: "24",
  },
  {
    src: "/media/24/comp4.jpg",
    alt: "24",
  },
  {
    src: "/media/24/team_photo.jpg",
    alt: "24",
  },
  {
    src: "/media/24/team_photo2.jpg",
    alt: "24",
  },
  {
    src: "/media/24/close_up.png",
    alt: "24",
  },
  {
    src: "/media/24/close_up2.jpg",
    alt: "24",
  },
  {
    src: "/media/24/car.jpg",
    alt: "24",
  },
  {
    src: "/media/24/car2.jpg",
    alt: "24",
  },
];

export default function MediaPage() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const breakpoint = 1024;

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const newWindowDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    setWindowHeight(newWindowDimensions.height);
    setWindowWidth(newWindowDimensions.width);
  };

  return (
    <main className="">
      {windowWidth < breakpoint ? (
        <SideMenu selectedPage={3} className="" />
      ) : (
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
      )}

      <div
        className=""
        style={{
          backgroundImage: "url('/media/25/closeup1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-60 p-16">
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
              2024-2025 Season
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {images25.map((image, index) => (
                <ImageCard key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
            <h2 className="mb-16 mt-8 text-2xl font-bold text-white lg:ml-64 lg:mr-64">
              SoCal Shootout
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {imagesSoCalShootout24.map((image, index) => (
                <ImageCard key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
            <h2 className="mb-16 mt-8 text-2xl font-bold text-white lg:ml-64 lg:mr-64">
              2023-2024 Season
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {images24.map((image, index) => (
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
