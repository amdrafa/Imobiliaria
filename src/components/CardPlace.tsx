import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import Avatar from "shared/Avatar/Avatar";
import NcImage from "shared/NcImage/NcImage";
import { nftsImgs } from "contains/fakeData";
import ItemTypeImageIcon from "./ItemTypeImageIcon";
import LikeButton from "./LikeButton";
import Prices from "./Prices";
import { ClockIcon } from "@heroicons/react/outline";
import ItemTypeVideoIcon from "./ItemTypeVideoIcon";
import dayjs from "dayjs";
import { FavoriteContext } from "contexts/FavoriteContext";

export interface CardNFTProps {
  className?: string;
  isLiked?: boolean;
  name?: string;
  state?: string;
  city?: string;
  district?: string;
  street?: string;
  rooms?: number;
  mobiliado?: boolean;
  modalidade?: string;
  quantity?: number;
  categoria?: string;
  bathrooms?: number;
  suites?: number;
  parkingSpace?: number;
  price?: number;
  publishedAt?: string;
  slug?: string;
  fotoPrincipal1?:string;
  foto2?:string;
  foto3?:string;
  foto4?:string;
  realtor?: {
    name?: string;
    creci?: string;
    email?: string;
    phone?: string;
    instagram?: string;
    fotoDePerfil?: string;
    facebook?: string;  
    resume?: string;
  }
  
}



const CardPlace: FC<CardNFTProps> = ({ className = "", isLiked, name, realtor, quantity, publishedAt, price, fotoPrincipal1, slug, modalidade, city, district}) => {
  const renderAvatars = () => {

    

    return (
      <div className="flex -space-x-1 ">
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-900"
          sizeClass="h-5 w-5 text-sm"
        />
        {/* <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-900"
          sizeClass="h-5 w-5 text-sm"
        />
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-900"
          sizeClass="h-5 w-5 text-sm"
        />
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-900"
          sizeClass="h-5 w-5 text-sm"
        /> */}
      </div>
    );
  };


  const todayDate = new Date()

  return (
    <div
      className={`nc-CardNFT relative flex flex-col group !border-0 [ nc-box-has-hover nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="CardNFT"
    >
      <div className="relative flex-shrink-0 ">
        <div>
          <NcImage
            containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0 rounded-3xl overflow-hidden z-0"
            src={fotoPrincipal1}
            className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
          />
        </div>
        
          {/* <ItemTypeVideoIcon className="absolute top-3 left-3 !w-9 !h-9" />
        
          <ItemTypeImageIcon className="absolute top-3 left-3 !w-9 !h-9" />
         */}
        <LikeButton
          slug={slug}
          liked={isLiked}
          className="absolute top-3 left-3 z-10 !h-9"
        />
        <div className="absolute top-3 inset-x-3 flex"></div>
      </div>

      <div className="p-4 py-5 space-y-3">
        <div className="flex justify-between items-center">
          <span className="flex items-center">
          <img className="rounded-full" width={24} src={realtor?.fotoDePerfil} alt="Corretor" />
          <p className="ml-2">{realtor?.name}</p>
          </span>
          <span className="text-neutral-700 dark:text-neutral-400 text-xs">
            {`${quantity} uni.`}
          </span>
        </div>
        <div>
        <h2 className={`text-lg font-medium`}>
          {name}

          {/* Fazer um switch case com cada tipo de imóvel */}
        </h2>

        <p className="text-gray-800 opacity-80 text-sm">{city} - {district}</p>
        <p className="text-gray-700 opacity-40 text-sm">{modalidade}</p>
        
        </div>
        

        <div className="w-2d4 w-full border-b border-neutral-100 dark:border-neutral-700"></div>

        <div className="flex justify-between items-end ">
          <Prices price={new Intl.NumberFormat("pt-br", {
            style: 'currency',
            currency: 'BRL',
          })
          .format(Number(price))} labelTextClassName="bg-white dark:bg-neutral-900 dark:group-hover:bg-neutral-800 group-hover:bg-neutral-50" labelText="Preço" />
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
            <ClockIcon className="w-4 h-4" />
            <span className="ml-1 mt-0.5">
               {Math.ceil((new Date().getTime() - new Date(dayjs(publishedAt).format('YYYY-MM-DD')).getTime()) / (1000 * 60 * 60 * 24))} {Math.ceil((new Date().getTime() - new Date(dayjs(publishedAt).format('YYYY-MM-DD')).getTime()) / (1000 * 60 * 60 * 24)) == 1? 'd atrás' : 'd atrás'}

            </span>
          </div>  
        </div>
      </div>

      <Link to={`/imoveis/${slug}`} className="absolute inset-0"></Link>
    </div>
  );
};

export default CardPlace;
