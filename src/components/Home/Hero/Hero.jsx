import React from "react";
import Button from "../../Button/Button";
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
      <div className="flex justify-center items-center mt-4 gap-4">
        <Button text="Découvrir les articles" type="button" variant="accent" />
        <Button text="Sabonner a la newsletter " variant="clear" />
      </div>
      <img src={image} alt="hero" className="w-max h-max" />
    </section>
  );
};

export default Hero;
