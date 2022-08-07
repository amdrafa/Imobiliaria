import React from "react";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "./SectionVideos";
import { Helmet } from "react-helmet";
import SectionHero from "components/SectionHero/SectionHero";
import Vector1 from "images/Vector1.png";
import SectionLargeSlider from "./SectionLargeSlider";
import SectionSliderCollections from "components/SectionSliderCollections";
import SectionGridFeatureNFT from "./SectionGridFeatureNFT";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Anunciar imóvel</title>
      </Helmet>
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-20 mt-12 mb-20 sm:space-y-24 sm:my-24 lg:space-y-32 lg:my-32">
        {/* SECTION HERO */}
        <SectionHero
          className="pb-10"
          subHeading="Além de procurar, aqui você também pode solicitar a venda do seu imóvel."
          heading={
            <span>
              Anuncie 🏘️
              <br /> venda e alugue <br /> seus {` `}
              <span className="relative pr-3">
                <img
                  className="w-full absolute bottom-3 -left-1"
                  src={Vector1}
                  alt="Apartamentos"
                />
                <span className="relative">Imóveis</span>
              </span>
            </span>
          }
        />

        {/* SECTION 2 */}
        <SectionHowItWork />
      </div>

    </div>
  );
}

export default PageHome;
