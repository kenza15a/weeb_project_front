import React from "react";
import Button from "../../Button/Button";
const Hero = ({ title, description, image }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-4  p-4">
      <h1 className="text-3xl md:text-6xl md:text-center">{title}</h1>
      {/* Handle line breaks */}
      <p className="text-white text-sm  md:text-center">
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
        <Button
          text="Découvrir les articles"
          type="button"
          variant="accent"
          className="!min-w-max px-12 md:px-4"
        />
        <Button
          text="Sabonner a la newsletter "
          variant="clear"
          className="!min-w-max px-8 md:px-4"
        />
      </div>
      <img src={image} alt="hero" className="w-max h-max" />
    </section>
  );
};

export default Hero;
