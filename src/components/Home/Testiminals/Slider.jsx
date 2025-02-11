import React from "react";
import { motion } from "framer-motion";
const Slider = ({ imagesArray, className }) => {
  return (
    <div className="overflow-hidden w-[80%] py-8 ">
      <motion.div
        className="flex space-x-12"
        animate={{ x: ["0%", "-100%"] }} // Move from start to end
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity, // Infinite loop
        }}
      >
        {/* Duplicate images to create seamless loop */}
        {[...imagesArray, ...imagesArray].map((image, index) => (
          <img
            key={index}
            src={image}
            alt="testimonial logo"
            className="h-[26px] w-[135px]"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
