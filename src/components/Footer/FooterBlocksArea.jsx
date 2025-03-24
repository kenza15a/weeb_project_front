import React from "react";
import LinkList from "./LinkList";
import clsx from "clsx";

const FooterBlocksArea = ({ blocks, className }) => {
  //block.id block.linkS
  return (
    <div
      className={clsx(
        "grid grid-cols-2 p-x-1 py-3 gap-3 md:flex  md:flex-row  md:justify-end  md:gap-x-40 md:flex-wrap",
        className
      )}
    >
      {blocks.map((block, index) => (
        <LinkList blockTitle={block.title} links={block.links} key={index} />
      ))}
    </div>
  );
};

export default FooterBlocksArea;
