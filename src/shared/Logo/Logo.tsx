import React from "react";
import { Link } from "react-router-dom";
import logoImg from "images/logo.svg";
import logoLightImg from "images/logo-light.svg";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "",
}) => {
  return (
    <Link
      to="/"
      className={`ttnc-logo inline-block text-primary-6000 ${className}`}
    >
      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        // <img
        //   className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
        //   src={img}
        //   alt="Logo"
        // />
        <div className="flex items-baseline">

          <p className="flex text-primary-6000 text-xl mr-1 font-medium">Simone <p className="text-gray-500 font-normal">Imóveis</p></p>
          <div className="rounded-full bg-primary-6000 w-2 h-2 text-blue-500 mr-2" ></div>
          
        </div>
      ) : (
        "Logo Here"
      )}
      
    </Link>
  );
};

export default Logo;
