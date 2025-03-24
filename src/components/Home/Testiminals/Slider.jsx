import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const Slider = ({ imagesArray, className }) => {
  const containerRef = useRef(null);
  const [loopWidth, setLoopWidth] = useState(0);
  const controls = useAnimationControls();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const calculatedWidth = (135 + 48) * imagesArray.length;
      setLoopWidth(calculatedWidth);
    }
  }, [imagesArray]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && loopWidth > 0) {
      const startX = 0;
      const endX = -loopWidth;

      controls.start({
        x: [startX, endX],
        transition: {
          x: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        },
      });
    } else if (!isInView) {
      controls.stop();
    }
  }, [isInView, loopWidth, controls]);

  return (
    <div className="overflow-hidden w-[80%] py-8" ref={containerRef}>
      <motion.div
        className="inline-flex space-x-12"
        animate={controls}
        initial={{ x: 0 }}
      >
        {imagesArray.map((image, index) => (
          <img
            key={`first-${index}`}
            src={image}
            alt="testimonial logo"
            className="h-[26px] w-[135px]"
          />
        ))}
        {imagesArray.map((image, index) => (
          <img
            key={`second-${index}`}
            src={image}
            alt="testimonial logo"
            className="h-[26px] w-[135px]"
          />
        ))}
        {imagesArray.map((image, index) => (
          <img
            key={`third-${index}`}
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
