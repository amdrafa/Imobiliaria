import React, { FC } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import Avatar from "shared/Avatar/Avatar";
import NcImage from "shared/NcImage/NcImage";
import { nftsImgs, _getPersonNameRd } from "contains/fakeData";
import VerifyIcon from "components/VerifyIcon";

export interface CardAuthorBox2Props {
  className?: string;
}

const CardAuthorBox2: FC<CardAuthorBox2Props> = ({ className = "" }) => {
  return (
    <NavLink
      to={"/page-author"}
      className={`nc-CardAuthorBox2 flex flex-col overflow-hidden [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="CardAuthorBox2"
    >
      <div className="relative flex-shrink-0 ">
        <div>
          <NcImage
            containerClassName="flex aspect-w-7 aspect-h-5 sm:aspect-h-6 w-full h-0"
            src={'https://media.agenteimovel.com.br/images/8/80/8007115/high/20211005161914_2923img.jpg'}
          />
        </div>
      </div>

      <div className="-mt-8 m-8 text-center">
        <Avatar
          containerClassName="ring-2 ring-white"
          sizeClass="w-16 h-16 text-2xl"
          radius="rounded-full"
          userName="Teste"
          imgUrl="https://blog.grupozap.com/wp-content/uploads/2015/10/etica-imobiliaria-para-corretores-zappro.jpg"
        />
        <div className="mt-3">
          <h2
            className={`text-base font-medium flex items-center justify-center`}
          >
            Residencial San Camilo Itajaí/SC
            
          </h2>
          <span
            className={`flex justify-center mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
          >
            Rafael Amaro <VerifyIcon />
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default CardAuthorBox2;
