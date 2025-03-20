"use client";
import React, { useRef, useState } from "react";

const Tab = () => {
  const cntainerRef = useRef(null);
  const [position, setPosition] = useState(10);
  const [radius, setRadius] = useState(250);
  const handleMouseenter = (event) => {
    const rect = cntainerRef.current.getBoundingClientRect();
    setPosition(((event.clientX - rect.left) / 180) * 35);
    setRadius(250 + (event.clientX - rect.left) * 2);
  };
  // const animateTransition = () => {};
  const handleMouseLeave = () => {
    setPosition(10);
    setRadius(250);
  };
  console.log(position, radius);
  return (
    <div
      aria-label="Center Top"
      className="h-14 z-60 lg:border-r border-b border-primaryBorder box-border lg:max-w-[640px] lg:w-[640px] fixed top-0 bg-gray-00 py-4 sm:px-6 lg:left-auto lg:right-auto flex items-center justify-between hidden lg:flex justify-center left-12 right-12 px-2"
    >
      <div className="flex items-center justify-center w-full relative">
        <div className="absolute left-0">
          <h1 className="text-base text-gray-1k font-semibold">Scroll</h1>
        </div>
        <div
          ref={cntainerRef}
          onMouseMove={handleMouseenter}
          onMouseLeave={handleMouseLeave}
          className="flex rounded-xl relative bg-clip-padding"
        >
          <a
            className="px-4 py-2 uppercase bg-clip-padding bg-gray-00 rounded-l-xl !border border-transparent flex items-center"
            href="/scroll"
          >
            <p className="text-green-300 dark:text-green-200 font-semibold text-xs">
              Newest
            </p>
          </a>
          <a
            className="px-4 uppercase flex gap-2 items-center bg-clip-padding bg-gray-00 !border-y border-transparent !border-r rounded-r-xl"
            href="/snap/trending"
          >
            <p className="text-gray-1k font-semibold text-xs">Trending</p>
          </a>
          <div
            className="circle-gradient rounded-xl absolute top-0 left-0 w-full h-full -z-5 circle-gradient-vars"
            style={{
              "--gradient-position-x": `${position}%`,
              "--circle-size": `${radius}px`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
