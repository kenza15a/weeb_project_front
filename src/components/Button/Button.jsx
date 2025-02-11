import clsx from "clsx";
import React from "react";

const Button = ({ text, type, OnClick, className, ...props }) => {
  return (
    <button
      className={clsx(
        "bg-button text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-all text-semibold",
        className
      )}
      type={type}
      onClick={OnClick}
    >
      {text}
    </button>
  );
};

export default Button;
