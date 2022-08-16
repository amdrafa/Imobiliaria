import React, { FC, Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import NcImage from "shared/NcImage/NcImage";
import CardNFT from "components/CardPlace";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import authorBanner from "images/nfts/authorBanner.png";
import { nftsImgs } from "contains/fakeData";
import NftMoreDropdown from "components/NftMoreDropdown";
import ButtonDropDownShare from "components/ButtonDropDownShare";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SocialsList from "shared/SocialsList/SocialsList";
import FollowButton from "components/FollowButton";
import VerifyIcon from "components/VerifyIcon";
import { Tab } from "@headlessui/react";
import CardAuthorBox3 from "components/CardAuthorBox3/CardAuthorBox3";
import ArchiveFilterListBox from "components/ArchiveFilterListBox";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";

import { gql, useQuery } from "@apollo/client";
import { useRealtorsQuery, useSimoneQuery } from "graphql/generated";

export interface AuthorPageProps {
  className?: string;
}

const AuthorPage: FC<AuthorPageProps> = ({ className = "" }) => {


 const {data:realtors} = useRealtorsQuery()

 useEffect(() => {
  console.log(realtors)
  
 }, [realtors])

  return (
    <div className={`nc-AuthorPage  ${className}`} data-nc-id="AuthorPage">
      <Helmet>
        <title>Corretores</title>
      </Helmet>

      {/* HEADER */}
      <div className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <NcImage
            containerClassName="absolute inset-0"
            src={authorBanner}
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="-mt-24 grid grid-cols-1-2 gap-24">

        {realtors?.corretores.map(realtor => {
          return (
            
              <div key={realtor.creci} className="container -mt-10 lg:-mt-12">
          <div className="relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-2xl flex flex-col md:flex-row">
            <div className="w-32 lg:w-44 flex-shrink-0 mt-0 sm:mt-0">
              <NcImage
                src={realtor.fotoperfil.url} 
                containerClassName="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden"
              />
            </div>
            <div className="pt-5 md:pt-1 md:ml-6 xl:ml-14 flex-grow">
              <div className="max-w-screen-sm">
                <h2 className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold hover:text-gray-700 hover:cursor-pointer">
                  <span>{realtor.nome}</span>
                  <VerifyIcon
                    className="ml-2"
                    iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  />
                </h2>
                <div className="flex items-center text-sm font-medium space-x-2.5 mt-2.5 text-green-600 cursor-pointer">
                  <span className="text-neutral-600 dark:text-neutral-300">
                  {realtor.creci}
                  </span>
                  
                </div>

                <span className="block mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                {realtor.resumo.text}
                </span>
              </div>
              <div className="mt-4 ">
                <SocialsList itemClass="block w-7 h-7" />
              </div>
            </div>
            <div className="absolute md:static left-5 top-4 sm:left-auto sm:top-5 sm:right-5 flex flex-row-reverse justify-end">
              <div className="invisible lg:visible">
              <ButtonPrimary sizeClass="px-4 py-2 sm:px-5">Entrar em contato</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
            
          )
        })}

</div>
      </div>
      {/* ====================== END HEADER ====================== */}

      
    </div>
  );
};

export default AuthorPage;
