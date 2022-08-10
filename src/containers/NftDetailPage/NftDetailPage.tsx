import React, { FC } from "react";
import Avatar from "shared/Avatar/Avatar";
import Badge from "shared/Badge/Badge";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import NcImage from "shared/NcImage/NcImage";
import LikeSaveBtns from "./LikeSaveBtns";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import VerifyIcon from "components/VerifyIcon";
import { nftsLargeImgs, personNames } from "contains/fakeData";
import TimeCountDown from "./TimeCountDown";
import TabDetail from "./TabDetail";
import collectionPng from "images/nfts/collection.png";
import ItemTypeVideoIcon from "components/ItemTypeVideoIcon";
import LikeButton from "components/LikeButton";
import AccordionInfo from "./AccordionInfo";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import { SearchIcon } from "@heroicons/react/solid";
import { NftDetailPageInformations } from "components/NftDetailPageInformations";

export interface NftDetailPageProps {
  className?: string;
  isPreviewMode?: boolean;
}

const NftDetailPage: FC<NftDetailPageProps> = ({
  className = "",
  isPreviewMode,
}) => {
  const renderSection1 = () => {
    return (
      <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
        {/* ---------- 1 ----------  */}
        <div className="pb-9 space-y-5">
          <div className="flex justify-between items-center">
            <Badge name="Disponível" color="green" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Residencial Águas Claras
          </h2>

          {/* ---------- 4 ----------  */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
            <div className="flex items-center ">
              <Avatar sizeClass="h-9 w-9" radius="rounded-full" imgUrl="https://rankim.com.br/blog/wp-content/uploads/2016/06/Stand-de-Vendas-de-Imoveis.jpg" />
              <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
                <span className="text-sm">Corretor</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
                  <span>Angela Simone</span>
                  <VerifyIcon iconClass="w-4 h-4" />
                </span>
              </span>
            </div>
            
          </div>

          

        </div>

        {/* ---------- 7 ----------  */}
        {/* PRICE */}
        <div className="pb-9 pt-6">
          <div className="block">

          <NftDetailPageInformations />


          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-1 flex flex-col sm:flex-row items-baseline p-6 border-2 border-green-500 rounded-xl relative">
              <span className="absolute bottom-full translate-y-1 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400">
                Preço
              </span>
              <span className="text-3xl xl:text-4xl font-semibold text-green-500">
                R$500.000,00
              </span>
            </div>
            

            <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-5 mt-2 sm:mt-0 sm:ml-10">
              [1 em estoque]
            </span>
          </div>

          
          </div>

          

          <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <ButtonPrimary href={"/connect-wallet"} className="flex-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 12H14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="ml-2.5">Comprar</span>
            </ButtonPrimary>
            <ButtonSecondary href={"/connect-wallet"} className="flex-1">
            <SearchIcon className="w-5 h-5 ml-2.5" />

              <span className="ml-2.5">Ver mais</span>
            </ButtonSecondary>
          </div>

          {/* <NftDetailPageInformations /> */}
        </div>

        

        {/* ---------- 9 ----------  */}
        {/* <div className="pt-9">
          <TabDetail />
        </div> */}
      </div>
    );
  };

  return (
    <div
      className={`nc-NftDetailPage  ${className}`}
      data-nc-id="NftDetailPage"
    >
      {/* MAIn */}
      <main className="container mt-11 flex ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          {/* CONTENT */}
          <div className="space-y-8 lg:space-y-10">
            {/* HEADING */}
            <div className="relative">
              <NcImage
                src='https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9bJDwnbk9Kawbnev1nxMNm9yHFhIP-MQkSx9WYNv32x+8YNgtlIDncoEbY3hjiWI2qud2-Smkxm0-KrI4LzDyJL7Zp79170f7Z+iEkKetJx+aeM3FX19WbFbYivEXYq8H2N9jyiihEv-ZL1lWTEIzyZujAdU3ECeZ7WhqFpujj78WqmA7y7VFPC+SxgWCqxAAdk57ENDsQK-XFB8p0pK9JGl+XaFOuW-M4DugSALG1In8oevXbnpmdnCJ5YnGrlrPXoH40EZTKZew-iTSP984RIB5LqWUUXD3lXE0bVyIZOnD94azfIFwlzHTeFK6Bnpk9XPhaX5PhzSLiBstfzauqOkPv6mTbzzJFypjJhGpM2Kf5gLaNrxQDQdFyQnZRFArjGkqb6b8BC5LG-KugJSVEGTi45k9CQoMQob-4JO+z31y9i2eQCN.jpg'
                containerClassName="aspect-w-11 aspect-h-12 rounded-3xl overflow-hidden"
              />

              {/* META FAVORITES */}
              <LikeButton className="absolute left-6 top-3 " />
            </div>

            <AccordionInfo 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          </div>

          {/* SIDEBAR */}
          <div className="pt-10 lg:pt-0 xl:pl-10 border-t-2 border-neutral-200 dark:border-neutral-700 lg:border-t-0">
            {renderSection1()}
          </div>
        </div>
      </main>

      {/* OTHER SECTION */}
      
        <div className="container py-14 lg:py-14">
          {/* SECTION 1 */}
          
        </div>
      
    </div>
  );
};

export default NftDetailPage;
