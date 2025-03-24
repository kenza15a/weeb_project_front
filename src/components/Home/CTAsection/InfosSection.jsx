import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const InfosSection = ({
  title, // mst be a component so that we can ajust the style dynamically
  Subtitle,
  titleClasses,
  description,
  buttonText,
  illustrationComponent,
  reverse = false,
  mobileDisplay = false,
  mobileIllustrationComponent,
}) => {
  return (
    <section
      className={clsx(
        "mb-12 flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-20 md:py-12",
        { "md:flex-row-reverse": reverse } // Reverse layout for desktop when needed
      )}
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 gap-2 flex flex-col text-left ">
        <h3 className="text-sm md:text-md font-bold text-white uppercase md:mb-4 mb-2">
          {Subtitle}
        </h3>
        {title /*an h2 component */}
        <p className="text-white opacity-70 mt-4 text-sm text-left ">
          {description}
        </p>
        <Link
          to="#"
          className=" text-white text-md  mt-6 flex flex-row items-center gap-x-2  "
        >
          {buttonText}
          <FaArrowRight />
        </Link>
      </div>

      {/* Dynamic Illustration Component (Image or Animation) */}
      <div className="w-full md:w-1/2 md:flex hidden justify-center">
        {illustrationComponent}
      </div>
      {mobileDisplay && (
        <div className="w-full md:w-1/2 md:hidden flex justify-center">
          {mobileIllustrationComponent}
        </div>
      )}
    </section>
  );
};

export default InfosSection;
