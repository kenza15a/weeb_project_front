import React from "react";
import LinkList from "./LinkList";
import clsx from "clsx";

const FooterBlocksArea = ({ blocks,className }) => {
  //block.id block.link
  return (
    <div className={clsx("flex flex-row md:flex-row  md:justify-end  md:gap-x-40 flex-wrap",className)}>
      {blocks.map((block, index) => (
        <LinkList blockTitle={block.title} links={block.links} key={index} />
      ))}
    </div>
  );
};

export default FooterBlocksArea;
