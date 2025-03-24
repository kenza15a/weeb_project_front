import React from "react";
import Button from "../../Button/Button";
import clsx from "clsx";

const Hero = ({
  title,
  description,
  image,
  displayButton,
  displayImage,
  centeredDescription,
  className,
  ...props
}) => {
  return (
    <section
      className={clsx(
        "flex flex-col justify-center items-center gap-4 p-4",
        className
      )}
    >
      <h1 className="text-3xl text-left md:text-6xl md:text-center text-white font-bold">
        {title}
      </h1>

      {/* Handle line breaks */}
      <p
        className={
          centeredDescription
            ? "text-white text-sm text-center"
            : "text-white text-sm md:text-center"
        }
      >
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>

      {/* Conditionally render buttons */}
      {displayButton && (
        <div className="w-full flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
          <Button
            text="Découvrir les articles"
            type="button"
            variant="accent"
            className="!min-w-max px-16 md:px-4"
          />
          <Button
            text="S'abonner à la newsletter"
            variant="clear"
            className="!min-w-max px-14 md:px-4"
          />
        </div>
      )}

      {/* Conditionally render image */}
      {displayImage && (
        <div className="md:w-[60%] md:h-[30%]">
          <img src={image} alt="hero" className="w-full h-full" />
        </div>
      )}
    </section>
  );
};

export default Hero;
