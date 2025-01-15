import React from "react";
import logo from "../Asset/assets/Udaan_logo.png"; // Update the path to match your actual file structure
import { assets } from '../Asset/assets/assets';
const Footer=()=>{
    return(
        <div className="container px-4 2xl:px-20 mx-auto height-100 flex items-center justify-between gap-4 mt-20 border-t border-gray-300">
           <img src={logo} alt="Udaan Logo" style={{ height: '120px' }} />
           <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-700 max-sm:hidden">Copyright 2025 Udaan | All rights reserved.</p>
           <div className="flex gap-2.5">
            <img width={38} src={assets.facebook_icon} alt="" />
            <img width={38} src={assets.twitter_icon} alt="" />
            <img width={38} src={assets.instagram_icon} alt="" />
           </div>

        </div>
    )
}

export default Footer;  //exporting the component