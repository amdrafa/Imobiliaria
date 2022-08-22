import { NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Procurar imóveis",
  },
  {
    id: ncNanoId(),
    href: "/favoritos",
    name: "Favoritos",
  },
  {
    id: ncNanoId(),
    href: "/vendas",
    name: "Vender imóvel",
  },
  {
    id: ncNanoId(),
    href: "/corretores",
    name: "Corretores",
  },
  {
    id: ncNanoId(),
    href: "/contato",
    name: "Contato",
  },
  
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  
  {
    id: ncNanoId(),
    href: "/favoritos",
    name: "Favoritos",
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Descubra mais",
    type: "dropdown",
    children: otherPageChildMenus,
  },
];
