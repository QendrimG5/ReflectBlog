import React from "react";

import SocialIcons from "./SocialIcons";
import { Icons } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-10 bg-secondary text-white">
  
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      text-center py-5 text-white text-sm items-center"
      >
        <span>© 2022 Reflect. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
