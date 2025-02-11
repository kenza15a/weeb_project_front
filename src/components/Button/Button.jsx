import clsx from "clsx";
import React from "react";

const Button = ({ text, variant = "accent", type, onClick, className, ...props }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-md transition-all font-semibold",
        {
          "bg-[#9333EA] text-white hover:bg-purple-700": variant === "accent",
          "border border-white text-white hover:bg-white hover:text-black": variant === "clear",
        },
        className
      )}
      type={type}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
