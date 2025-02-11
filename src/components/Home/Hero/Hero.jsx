import React from "react";

const Hero = ({ title, description, image }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-4  p-4">
      <h1 className="text-6xl text-center">{title}</h1>
      {/* Handle line breaks */}
      <p className="text-white text-sm  text-center">
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <img src={image} alt="hero" className="w-max h-max" />
    </section>
  );
};

export default Hero;
