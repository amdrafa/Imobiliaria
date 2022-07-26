import Logo from "shared/Logo/Logo";
import SocialsList1 from "shared/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";
import React from "react";
import SocialsList from "shared/SocialsList/SocialsList";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "1",
    title: "Explorar",
    menus: [
      { href: "/", label: "Home" },
      { href: "/favoritos", label: "Favoritos" },
      { href: "/vendas", label: "Anunciar Imóvel" },
      { href: "/corretores", label: "Corretores" },
    ],
  },
  {
    id: "2",
    title: "Contatos",
    menus: [
      { href: "/contato", label: "E-mail" },
      { href: "/contato", label: "Entrar em contato" },
      { href: "/contato", label: "Endereço" },
      { href: "/contato", label: "48 9 9128-9814" },

    ],
  },

];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-20 lg:pt-32 lg:pb-28 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-1 lg:grid-cols-3 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <a target={'_blank'} href="https://www.instagram.com/angelasimone.l" className="text-primary-700 opacity-60 cursor-pointer ml-1.5 ">@angelasimone.l</a>

          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
