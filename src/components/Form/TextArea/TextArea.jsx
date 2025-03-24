import React from "react";

const TextArea = ({ label, name, value, onChange, className }) => {
  return (
    <div className="w-full flex flex-col items-center mt-4">
      <label className="block text-headings  text-md mb-[2px] text-[1.1rem]">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full max-h-[40px] md:max-h-[80px]  md:max-w-[60%]  bg-transparent border-t border-purple-500 focus:border-2 focus:border-headings focus:mt-3 outline-none py-1 text-white resize-none ${className}`}
        rows="4" 
      />
    </div>
  );
};

export default TextArea;
