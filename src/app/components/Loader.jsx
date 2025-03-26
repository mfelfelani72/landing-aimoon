import React from "react";
import loader from "../../../assets/icons/svg/loading.svg";

const Loader = () => {
  return (
    <div className="flex justify-center items-center pt-4">
      <img loading="lazy" alt="loader" src={loader} width={100} height={100} />
    </div>
  );
};

export default Loader;
