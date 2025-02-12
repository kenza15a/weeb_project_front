import React from "react";

const LinkList = ({ blockTitle, links }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-bold">{blockTitle}</p>
      <ul className="flex flex-col gap-2 list-none text-black text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
