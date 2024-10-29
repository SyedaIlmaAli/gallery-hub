"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import TypeWriterComponent from "typewriter-effect";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-[90%]">
      <div className=" flex flex-col justify-center items-center h-[200px]">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl space-y-5 font-extrabold">
          <h1 className="text-cyan-500 pb-1">Gallery Hub</h1>
        </div>
        <div className="text-[16px] sm:text-2xl pb-1">
          <h2>Discover the Essence of Pure Pixels</h2>
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-r font-semibold from-blue-400 to-cyan-500 text-[16px] sm:text-2xl">
          <TypeWriterComponent
            options={{
              strings: [
                "Generative Fill.",
                "Blur Effect.",
                "Pixelate Effect.",
                "Convert To Gray Effect.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="pt-3">
          <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold  bg-gradient-to-r from-teal-300 to-cyan-900">
            <Link href="/gallery">Start Now</Link>
          </Button>
        </div>
      </div>
      <div className="pt-10">
        <div className="flex px-5 sm:px-10 py-5 justify-end text-center text-[12px] md:text-[15px] border rounded-md border-gray-500 ">
          <p>
            Welcome to Gallery Hub – where every photo has a story! Easily
            upload, organize, and explore your favorite memories. With simple
            tools to search and personalize, you can create albums that capture
            your unique moments. Favorite the images you love, and build a
            gallery that&apos;s truly yours. Gallery Hub makes it easy to bring
            your photos to life, your way.
          </p>
        </div>
      </div>
    </div>
  );
}
