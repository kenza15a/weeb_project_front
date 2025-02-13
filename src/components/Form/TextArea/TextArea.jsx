import React from "react";

const TextArea = ({ label, name, value, onChange, className }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <label className="block text-headings mb-1">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-transparent border-b border-purple-500 focus:outline-1 focus:border-headings py-1 text-white resize-none ${className}`}
        rows="4"
      />
    </div>
  );
};

export default TextArea;
