import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import PageHome from "containers/PageHome/Vendas";
import Page404 from "containers/Page404/Page404";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import AccountPage from "containers/AccountPage/AccountPage";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageLogin from "containers/PageLogin/PageLogin";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSingle from "containers/BlogPage/BlogSingle";
import SiteHeader from "containers/SiteHeader";
import NftDetailPage from "containers/NftDetailPage/DetailPage";
import PageSearch from "containers/PageSearch";
import PageUploadItem from "containers/PageUploadItem";
import PageConnectWallet from "containers/PageConnectWallet";
import Favoritos from "containers/PageHome/Favoritos";
import PageHome3 from "containers/PageHome/PageHome3";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import { FavoriteContextProvider } from "contexts/FavoriteContext";
import { TabFilterContextProvider } from "contexts/TabFilterContext";

export const pages: Page[] = [
  { path: "/", exact: true, component: PageSearch },
  { path: "/imoveis/:slug", exact: true, component: PageSearch },
  { path: "/favoritos", exact: true, component: Favoritos },
  { path: "/vendas", exact: true, component: PageHome },
  //
  
  { path: "/corretores", component: AuthorPage },
  { path: "/contato", component: PageContact },
  { path: "/contatos/creci/:slug", component: PageContact },
  
  
];

const Routes = () => {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
    <TabFilterContextProvider>
    <FavoriteContextProvider>
      <ScrollToTop />
      <SiteHeader />
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route
              key={path}
              component={component}
              exact={!!exact}
              path={path}
            />
          );
        })}
        <Route component={Page404} />
      </Switch>
      <Footer />
      </FavoriteContextProvider>
      </TabFilterContextProvider>
    </BrowserRouter>
    </ApolloProvider>
  );
};

export default Routes;
