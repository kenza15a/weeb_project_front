/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterIcons = () => {
  return (
    <div className="flex space-x-4 mt-4 ">
      <a
        href="#"
        aria-label="YouTube"
        className="text-black hover:text-gray-400 text-2xl"
      >
        <FaYoutube size={20} />
      </a>
      <a
        href="#"
        aria-label="Facebook"
        className="text-black hover:text-gray-400 text-2xl"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="#"
        aria-label="Twitter"
        className="text-black hover:text-gray-400 text-2xl"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="text-black hover:text-gray-400 text-2xl"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="#"
        aria-label="LinkedIn"
        className="text-white hover:text-gray-400 text-2xl"
      >
        <FaLinkedinIn size={20} />
      </a>
    </div>
  );
};

export default FooterIcons;
