import React from "react";

import { Image } from "../../core/components/Image.jsx";

import desktop from "../../../../assets/images/png/desktop.png";

const Drvafaeijahan = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden">
        <Image
          src={desktop}
          alt="desktop"
          className={"width-theme h-full"}
        />
      </div>
    </>
  );
};

export default Drvafaeijahan;
