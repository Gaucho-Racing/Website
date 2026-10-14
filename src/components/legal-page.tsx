"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SideMenu from "@/components/sidebar";
import { LEGAL_LAST_UPDATED } from "@/lib/legal";
import { useEffect, useState } from "react";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [windowWidth, setWindowWidth] = useState(0);
  const breakpoint = 1024;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="bg-black text-white">
      {windowWidth < breakpoint ? (
        <SideMenu selectedPage={0} className="" />
      ) : (
        <Header
          selectedPage={0}
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

      <article className="mx-auto max-w-3xl px-6 pb-16 pt-32 lg:pt-48">
        <h1>{title}</h1>
        <p className="mt-4 text-gray-400">Last updated {LEGAL_LAST_UPDATED}</p>
        <div className="mt-12 space-y-10 text-lg leading-relaxed text-gray-300 [&_a]:text-gr-pink [&_a]:underline [&_h2]:mb-4 [&_h2]:text-white [&_li]:mt-2 [&_p+p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </article>

      <Footer />
    </main>
  );
}
