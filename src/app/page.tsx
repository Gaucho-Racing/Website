'use client'
import Link from "next/link";
import InstagramIcon from "./components/instagram";
import LinkedinIcon from "./components/linkedin";
import TwitterIcon from "./components/twitter";
import { SOCIAL_LINKS } from "./utils/consts";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <main className=''>
      <ReactPlayer playing muted={true} url='ucsb-flyover.mp4' className='absolute top-0 left-0 w-full h-full' />
      <div className='bg-black bg-opacity-50 flex justify-center items-center h-screen'>
        <div className='text-white flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-bold p-4'>
            Gaucho Racing
          </h1>
          <h2 className='text-2xl font-light'>
            University of California, Santa Barbara
          </h2>
          <div className='flex p-8'>
            <Link href={SOCIAL_LINKS.instagram}>
              <InstagramIcon className='h-8 w-8 ml-4 mr-4' />
            </Link>
            <Link href={SOCIAL_LINKS.twitter}>
              <TwitterIcon className='h-8 w-8 ml-4 mr-4' />
            </Link>
            <Link href={SOCIAL_LINKS.linkedin}>
              <LinkedinIcon className='h-8 w-8 ml-4 mr-4' />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

