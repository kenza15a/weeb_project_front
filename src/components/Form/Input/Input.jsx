import React from "react";

const Input = ({ label, type = "text", name, value, onChange, className }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <label className="block text-headings mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-transparent border-b border-headings focus:border-1 focus:border-headings  py-1 text-white ${className}`}
      />
    </div>
  );
};

export default Input;
