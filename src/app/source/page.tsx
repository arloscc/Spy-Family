"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import AudioPlayer from "react-h5-audio-player";
import { Instagram, X } from "react-feather";
import Link from "next/link";
import Nav from "../Nav/page";

export default function Watchvi() {
  return (
    <>
      <div className="bg-black ">
        <div className="-mx-8 w-50">
          <Nav />
        </div>
      </div>

      <div className="font-extrabold  text-center my-32 text-md sm:text-text-2xl md:text-6xl">
        <h1 className=" p-2">WATCH SPY X FAMILY</h1>
        <h1 className="">
          ON
          <span className="text-red-600">
            <Link href="https://www.youtube.com/watch?v=R29FeOXqcgA&list=PLPanbgyToztbu7tZq6L49MPhra92n2ixf">
              YOUTUBE
            </Link>
          </span>
        </h1>
      </div>

      <div className="content-center flex justify-center -py-12">
        <ReactPlayer url="https://www.youtube.com/watch?v=R29FeOXqcgA&list=PLPanbgyToztbu7tZq6L49MPhra92n2ixf" />
      </div>
    </>
  );
}
