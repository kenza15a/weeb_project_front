import React from "react";
import { Link } from "react-router-dom";

const LogoBlock = () => {
  return (
    <div className="flex flex-col flex-start pt-0 items-start min-h-full">
      <Link to="/" className=" text-black  font-bold
 text-left text-lg">
        weeb{" "}
      </Link>
    </div>
  );
};

export default LogoBlock;
