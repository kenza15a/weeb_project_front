import React from "react";
import FooterBlocksArea from "./FooterBlocksArea";
import FooterSocialArea from "./FooterSocialArea";
import { title } from "framer-motion/client";
import LogoBlock from "./LogoBlock";

const Footer = () => {
  const blocks = [
    {
      title: "PRODUCT",
      links: [
        { name: "Pricing", url: "#" },
        { name: "Overview", url: "#" },
        { name: "Browse", url: "#" },
        { name: "Accessibility", url: "#" },
        { name: "Five", url: "#" },
      ],
    },
    {
      title: "SOLUTIONS",
      links: [
        { name: "Brainstorming", url: "#" },
        { name: "Ideation", url: "#" },
        { name: "Wireframing", url: "#" },
        { name: "Research", url: "#" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { name: "Help Center", url: "#" },
        { name: "Blog", url: "#" },
        { name: "Tutorials", url: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { name: "About", url: "#" },
        { name: "Press", url: "#" },
        { name: "Events", url: "#" },
        { name: "Careers", url: "#" },
      ],
    },
  ];

  return (
    <footer className=" bg-white min-h-[30vh] text-gray-400 py-8 px-8 md:px-12 flex flex-col justify-center items-center gap-y-4">
      <div className="w-full h-full flex flex-row justify-around  gap-x-20   ">
        <LogoBlock />
        <FooterBlocksArea blocks={blocks} className="ml-520" />
      </div>

      <FooterSocialArea />
    </footer>
  );
};

export default Footer;
