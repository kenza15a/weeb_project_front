import React from "react";

const InfosSection = ({ title, description, buttonText, illustrationComponent, reverse = false }) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-2 p-4 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-white opacity-70 mt-4">{description}</p>
        <button className="mt-6 btn-primary">{buttonText} →</button>
      </div>

      {/* Dynamic Illustration Component (Image or Animation) */}
      <div className="md:w-1/2 flex justify-center">
        {illustrationComponent}
      </div>
    </section>
  );
};

export default InfosSection;
