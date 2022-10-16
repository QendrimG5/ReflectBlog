import React from "react";

import SocialIcons from "./SocialIcons";
import { Icons } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-auto text-white">

      <div
        className="flex flex-col md:flex-row-reverse justify-between gap-4 text-center py-4 text-white text-sm items-center"
      >
        <span className="order-3 md:order-1">© 2022 Reflect. All rights reserved.</span>
        <span className="order-2 md:order-2">Terms · Privacy Policy</span>
        <span className="order-1 md:order-3"><SocialIcons Icons={Icons} /></span>
      </div>
    </footer>
  );
};

export default Footer;
