import React from "react";

import SocialIcons from "./SocialIcons";
import { Icons } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-auto text-white">

      <div
        className="flex flex-col md:flex-row justify-between gap-5 text-center py-4 text-white text-sm items-center"
      >
        <span>© 2022 Reflect. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
