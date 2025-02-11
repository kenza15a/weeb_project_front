import React from "react";
import { motion } from "framer-motion";

const RotatingSquares = () => {
  return (
    <div className="relative w-60 h-60 flex items-center justify-center">
      {/* Four rotating squares */}
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className="absolute w-full h-full border-2 border-purple-600"
          initial={{ rotate: index * 15 }} // Different starting positions
          animate={{ rotate: [index * 15, index * 15 + 360] }} // Full rotation
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15, // Adjust speed
          }}
        />
      ))}

      {/* Central Solid Square */}
      <motion.div
        className="absolute w-48 h-48 bg-pink-600 hover:animate-pulse"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 360] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 7,
        }}
      />
    </div>
  );
};

export default RotatingSquares;
