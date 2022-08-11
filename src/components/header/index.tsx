import React from "react";
import Button from "../button";

const Header = () => {
  return (
    <div className="w-[85%] mx-auto h-[100px] flex items-center justify-between">
      <div className="w-[120px] ">
        <img src="/assets/logo.png" alt="ASALytics Logo" />
      </div>

      <Button text="ANALYZE ASAs" styles="border-2 border-black bg-black py-[1em] px-[2em] md:text-[16px] text-[12px] hover:bg-primary hover:text-black "/>
      
    </div>
  );
};

export default Header;
