import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/imoveis/:slug"?: {};
  "/favoritos"?: {};
  "/vendas"?: {};
  //
  
  "/corretores"?: {};


  //
  "/account"?: {};
  "/contato"?: {};
  "/contatos/creci/:slug"?: {};
  

}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
