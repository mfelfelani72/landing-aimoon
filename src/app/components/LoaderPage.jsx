import React, { useEffect } from "react";

// Components

import Loader from "./Loader.jsx";

// Functions

import { cn } from "../../../utils/lib/cn.js";

const LoaderPage = ({ className, ...props }) => {

  // functions
  useEffect(() => {
    // Set new background color
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <div className={cn("flex flex-col h-full items-center justify-center pb-2 mx-auto w-full md:max-w-[480px] lg:max-w-[640px] xl:max-w-[800px] rounded-[30px] bg-white", className)}>
      <main>
        <h1 className="text-3xl text-[#e15b64] font-black tracking-tight text-center md:text-2xl lg:text-3xl xl:text-4xl">
          AIMOONHUB
        </h1>
        <Loader />
      </main>
    </div>
  );
};

export default LoaderPage;
