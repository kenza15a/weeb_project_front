import React from "react";
import FooterIcons from "./FooterIcons";

const FooterSocialArea = () => {
  return (
    <div className="container mx-auto flex flex-row justify-between items-center">
      <p className="text-sm opacity-70">
        © 2025 Weeb, Inc. All rights reserved.
      </p>
      <FooterIcons />
    </div>
  );
};

export default FooterSocialArea;
