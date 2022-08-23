import React, { FC, useState } from "react";
import Logo from "shared/Logo/Logo";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
import NotifyDropdown from "./NotifyDropdown";
import AvatarDropdown from "./AvatarDropdown";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Navigation from "shared/Navigation/Navigation";
import { Disclosure } from "@headlessui/react";
import { BiBuildingHouse, BiWallet } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";


export interface MainNav2LoggedProps {}

const MainNav2Logged: FC<MainNav2LoggedProps> = () => {
  const [searchBoxValue, setSearchBoxValue] = useState("");

  function handleSearchBox(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setSearchBoxValue(event.target.value);
  }

  return (
    <div className={`nc-MainNav2Logged relative z-10 ${"onTop "}`}>
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo img="https://picsum.photos/200/300?grayscale" />
          <div className="hidden sm:block flex-grow max-w-xs">
            <div className="relative">
              <Input
                placeholder="Procurar"
                className="pr-10 w-full"
                sizeClass="h-[42px] pl-4 py-3"
                onChange={handleSearchBox}
              />

              <span className="absolute top-1/2 -translate-y-1/2 right-3 text-neutral-500">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input type="submit" hidden value="" />
            </div>

            <div className="absolute">
              <a href="/">
                {(searchBoxValue.includes("imo") ||
                  searchBoxValue.includes("cas") ||
                  searchBoxValue.includes("apa") ||
                  searchBoxValue.includes("sit") ||
                  searchBoxValue.includes("cha") ||
                  searchBoxValue.includes("com") ||
                  searchBoxValue.includes("gal") ||
                  searchBoxValue.includes("terr")) && (
                  <div className="mt-2 p-1.5 pl-4 rounded-2xl w-80 bg-primary-400 drop-shadow-lg text-gray-600 cursor-pointer hover:bg-primary-300 hover:text-white">
                    <div className="flex items-center">
                      <BiBuildingHouse fontSize={20} className={"text-white"} />
                      <p className="ml-1 text-lg font-semibold text-primary-100 ">
                        Imóveis
                      </p>
                    </div>

                    <p className={"text-white"}>Procure um imóvel...</p>
                  </div>
                )}
              </a>

              <a href="/favoritos">
                {searchBoxValue.includes("fav") && (
                  <div className="mt-2 p-1.5 pl-4 rounded-2xl w-80 bg-primary-400 drop-shadow-lg text-gray-600 cursor-pointer hover:bg-primary-300 hover:text-white">
                    <div className="flex items-center">
                      <AiOutlineHeart fontSize={20} className={"text-white"} />
                      <p className="ml-1 text-lg font-semibold text-primary-100 ">
                        Favoritos
                      </p>
                    </div>

                    <p className={"text-white"}>
                      Veja seus imóveis favoritados
                    </p>
                  </div>
                )}
              </a>

              <a href="/vendas">
                {(searchBoxValue.includes("ven") || searchBoxValue.includes("vender") || searchBoxValue.includes("anu")) && (
                  <div className="mt-2 p-1.5 pl-4 rounded-2xl w-80 bg-primary-400 drop-shadow-lg text-gray-600 cursor-pointer hover:bg-primary-300 hover:text-white">
                    <div className="flex items-center">
                      <BiWallet fontSize={20} className={"text-white"} />
                      <p className="ml-1 text-lg font-semibold text-primary-100 ">
                        Vendas
                      </p>
                    </div>

                    <p className={"text-white"}>
                      Veja como vender seu imóvel
                    </p>
                  </div>
                )}
              </a>


              <a href="/corretores">
                {(searchBoxValue.includes("cont") || searchBoxValue.includes("tel") || searchBoxValue.includes("cel") || searchBoxValue.includes("corre") || searchBoxValue.includes("corr")) && (
                  <div className="mt-2 p-1.5 pl-4 rounded-2xl w-80 bg-primary-400 drop-shadow-lg text-gray-600 cursor-pointer hover:bg-primary-300 hover:text-white">
                    <div className="flex items-center">
                      <RiContactsLine fontSize={20} className={"text-white"} />
                      <p className="ml-1.5 text-lg font-semibold text-primary-100 ">
                        Corretores
                      </p>
                    </div>

                    <p className={"text-white"}>
                      Veja os corretores afiliados
                    </p>
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center xl:flex space-x-2">
            <Navigation />
            <div className="hidden sm:block h-6 border-l border-neutral-300 dark:border-neutral-6000"></div>
            <div className="flex">
              <SwitchDarkMode />
            </div>
            <div></div>
            <ButtonPrimary href="/vendas" sizeClass="px-4 py-2 sm:px-5">
              Anunciar Imóvel
            </ButtonPrimary>
            <div></div>
          </div>
          <div className="flex items-center space-x-3 xl:hidden">
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2Logged;
