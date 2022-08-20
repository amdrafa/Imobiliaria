import { SocialType } from "shared/SocialsShare/SocialsShare";
import React, { FC } from "react";


export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}



const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block w-6 h-6",
  socials
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
      data-nc-id="SocialsList"
    >
      {socials?.map((item, i) => (
        <a
          key={i}
          className={`${itemClass} flex`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <img src={item.icon} alt="" />
          
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
