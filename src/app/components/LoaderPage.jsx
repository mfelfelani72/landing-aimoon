import React from "react";
import Loader from "./Loader.jsx";

const LoaderPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center pb-2 mx-auto w-full md:max-w-[480px] lg:max-w-[640px] xl:max-w-[800px] rounded-[30px] bg-white">
      <main>
        <h1 className="mt-72 text-3xl text-[#e15b64] font-black tracking-tight text-center md:text-2xl lg:text-3xl xl:text-4xl">
          AIMOONHUB
        </h1>
        <Loader />
      </main>
    </div>
  );
};

export default LoaderPage;
