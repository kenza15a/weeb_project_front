import React from "react";

const Input = ({ label, type = "text", name, value, onChange, className }) => {
  return (
    <div className="w-full flex flex-col relative">
      <label className="text-headings  text-md leading-none -mb-[8px] text-center text-[1.1rem] ">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-transparent border-b border-headings focus:border-2 focus:border-headings focus:mt-3 outline-none py-[2px] text-white ${className}`}
      />
    </div>
  );
};

export default Input;
