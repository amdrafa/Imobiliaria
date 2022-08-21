import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/imoveis/:slug"?: {};
  "/home2"?: {};
  "/home3"?: {};
  //
  "/nft-detailt"?: {};
  "/page-collection"?: {};
  "/page-search"?: {};
  "/corretores"?: {};
  "/page-upload-item"?: {};
  "/home-header-2"?: {};
  "/connect-wallet"?: {};
  //
  "/account"?: {};
  "/contato"?: {};
  "/contatos/creci/:slug"?: {};
  //
  "/blog"?: {};
  "/blog-single"?: {};

  "/about"?: {};
  "/contact"?: {};
  "/login"?: {};
  "/signup"?: {};
  "/forgot-pass"?: {};
  "/page404"?: {};
  "/subscription"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
