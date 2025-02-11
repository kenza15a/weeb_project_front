import React from "react";
import Slider from "./Slider";

const Testimonials = ({ titleText, imagesArray, ...props }) => {
  return (
    <section className="flex flex-col items-center gap-y-2">
      <h2 className="text-4xl font-bold text-white">{titleText}</h2>
      <Slider imagesArray={imagesArray} />
    </section>
  );
};

export default Testimonials;
