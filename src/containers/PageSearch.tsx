import React, { FC, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionSliderCollections from "components/SectionSliderCollections";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import HeaderFilterSearchPage from "components/HeaderFilterSearchPage";
import Input from "shared/Input/Input";
import ButtonCircle from "shared/Button/ButtonCircle";
import CardPlace from "components/CardPlace";
import { Categoria, Modalidade, usePropertiesQuery } from "graphql/generated";
import NcImage from "shared/NcImage/NcImage";
import authorBanner from "images/nfts/authorBanner.png";
import { Link, useParams } from "react-router-dom";
import DetailPage from "./NftDetailPage/DetailPage";
import { FavoriteContext } from "contexts/FavoriteContext";
import { TabFilterContext } from "contexts/TabFilterContext";

export interface PageSearchProps {
  className?: string;
}

const PageSearch: FC<PageSearchProps> = ({ className = "" }) => {

  const {modalidade, saleTypeStates, fileTypesState, bathroomState, suitesState, carSpotState, isFurnishedState, tabActive} = useContext(TabFilterContext)

  const [defaultFileType, setDefaultFileType] = useState([1,2,3,4,5])

  const [defaultBathroomsNumber, setDefaultBathroomsNumber] = useState([0,1,2,3,4,5])

  const [defaultSuitesNumber, setDefaultSuitesNumber] = useState([0,1,2,3,4,5])

  const [defaultParkingCarNumber, setDefaultParkingCarNumber] = useState([0,1,2,3,4,5])

  const [defaultCategory, setDefaultCategory] = useState([Categoria.Apartamento, Categoria.Casa, Categoria.Chacara, Categoria.Comercial, Categoria.Galpao, Categoria.Sitio, Categoria.Terreno])

  const [updatedModalidade, setUpdatedModalidade] = useState([Modalidade.Aluguel, Modalidade.Venda])

  //Modalidade

  useEffect(() => {

    const updateValues = async () => {

      let updatedValue = []

      if(saleTypeStates.includes('Venda') && saleTypeStates.includes('Aluguel')){
        setUpdatedModalidade([Modalidade.Aluguel, Modalidade.Venda])
        return ;
      }

      if(saleTypeStates.includes('Venda') && !saleTypeStates.includes('Aluguel')){
          setUpdatedModalidade(updatedModalidade.filter(item => {
          return item == 'Venda';
        }))
        return ;
      }

      if(saleTypeStates.includes('Aluguel') && !saleTypeStates.includes('Venda')){
        setUpdatedModalidade(updatedModalidade.filter(item => {
        return item == 'Aluguel';
      }))
      return ;
      }

    
      if(!saleTypeStates.includes('Aluguel') && !saleTypeStates.includes('Venda')){
        setUpdatedModalidade([Modalidade.Aluguel, Modalidade.Venda])
      return ;
      }
      
  
    }
    updateValues()
    
  }, [saleTypeStates])

  //Rooms

  useEffect(() => {

    if(fileTypesState.length >= 1){
      setDefaultFileType(fileTypesState)
    }else{
      setDefaultFileType([1,2,3,4,5])
    }
    
  }, [fileTypesState])

  // bathrooms

  useEffect(() => {

    if(bathroomState.length >= 1){
      setDefaultBathroomsNumber(bathroomState)
    }else{
      setDefaultBathroomsNumber([0,1,2,3,4,5])
    }
    
  }, [bathroomState])

  // Suites

  useEffect(() => {

    if(suitesState.length >= 1){
      setDefaultSuitesNumber(suitesState)
    }else{
      setDefaultSuitesNumber([0,1,2,3,4,5])
    }
    
  }, [suitesState])

  // parking car

  useEffect(() => {

    if(carSpotState.length >= 1){
      setDefaultParkingCarNumber(carSpotState)
    }else{
      setDefaultParkingCarNumber([0,1,2,3,4,5])
    }
    
  }, [carSpotState])

  // Category

  useEffect(() => {

    switch(tabActive){
      case 'Todos':
        setDefaultCategory([Categoria.Apartamento, Categoria.Casa, Categoria.Chacara, Categoria.Comercial, Categoria.Galpao, Categoria.Sitio, Categoria.Terreno])
      break;

      case 'Apartamento':
        setDefaultCategory([Categoria.Apartamento])
      break;

      case 'Casa':
        setDefaultCategory([Categoria.Casa])
      break;

      case 'Terreno':
        setDefaultCategory([Categoria.Terreno])
      break;

      case 'Comercial':
        setDefaultCategory([Categoria.Comercial])
      break;

      case 'Galpao':
        setDefaultCategory([Categoria.Galpao])
      break;

      case 'Sitio':
        setDefaultCategory([Categoria.Sitio])
      break;

      case 'Chacara':
        setDefaultCategory([Categoria.Chacara])
      break;
    }

    // if(tabActive.length >= 1){
    //   setDefaultCategory()
    // }else{
    //   setDefaultCategory([Categoria.Apartamento, Categoria.Casa, Categoria.Chacara, Categoria.Comercial, Categoria.Galpao, Categoria.Sitio, Categoria.Terreno])
    // }
    
  }, [tabActive])

  const [mainSearchValue, setMainSearchValue] = useState('')

  const {data: properties} = usePropertiesQuery({variables: {
    searchValue: mainSearchValue,
    modalidadeValue: updatedModalidade,
    roomsValue: defaultFileType,
    bathroomsValue: defaultBathroomsNumber,
    suitesValue: defaultSuitesNumber,
    ParkingCarValue: defaultParkingCarNumber,
    categoryValue: defaultCategory
  }})
  
  const {favoritedPropertiesSlugs} = useContext(FavoriteContext)

  const {slug} = useParams<{slug: string;}>()

  function handleMainSearch(event:React.ChangeEvent<HTMLInputElement>){
    setMainSearchValue(event?.target?.value)
  }

  function handleSubmitMainSearch(event: React.FormEvent<HTMLFormElement>){
    
    event.preventDefault()


  }


  return (
    slug? (
      <>
      <Helmet>
        <title>Imóvel || Angela Simone</title>
      </Helmet>
      <DetailPage 
      slug={slug}
      />
      </>
      
    ) : (
      <div className={`nc-PageSearch  ${className}`} data-nc-id="PageSearch">
      <Helmet>
        <title>Home || Angela Simone</title>
      </Helmet>

      
      <div className="relative w-full h-40">
          <NcImage
            containerClassName="absolute inset-0"
            src={authorBanner}
            className="object-cover w-full h-full"
          />
        </div>
      <div className="container">
        <header className="max-w-2xl mx-auto -mt-10 flex flex-col lg:-mt-7">
          <form className="relative w-full " method="post" onSubmit={handleSubmitMainSearch}>
            <label
              htmlFor="search-input"
              className="text-neutral-500 dark:text-neutral-300"
            >
              <Input
                className="shadow-lg border-0 dark:border"
                id="search-input"
                type="search"
                placeholder="Procure aqui seu imóvel"
                sizeClass="pl-14 py-5 pr-5 md:pl-16"
                rounded="rounded-full"
                onChange={handleMainSearch}
              />
              <ButtonCircle
                className="absolute right-2.5 top-1/2 transform -translate-y-1/2"
                size=" w-11 h-11"
                type="submit"
              >
                <i className="las la-arrow-right text-xl"></i>
              </ButtonCircle>
              <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6">
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
            </label>
          </form>
        </header>
      </div>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>
          {/* FILTER */}
          <HeaderFilterSearchPage />

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
            
          {properties?.imovels?.map(item => {
            return (
              
              <CardPlace
              isLiked={favoritedPropertiesSlugs?.includes(item?.slug as string)}
              key={item?.nome?.toString()}
              slug={item?.slug?.toString()}
              name={item?.nome?.toString()}
              state={item?.estado?.toString()}
              city={item?.cidade?.toString()}
              district={item?.bairro?.toString()}
              street={item?.rua?.toString()}
              rooms={Number(item?.quartos)}
              quantity={Number(item?.unidades)}
              categoria={item?.categoria?.toString()}
              mobiliado={true}
              modalidade={item?.modalidade?.toString()}
              bathrooms={Number(item?.banheiros)}
              suites={Number(item?.suites)}
              parkingSpace={Number(item?.vagas)}
              price={item?.preco?.toString()}
              publishedAt={item?.publishedAt}
              fotoPrincipal1={item?.fotoPrincipal1?.url}
              foto2={item?.foto2?.url}
              foto3={item?.foto3?.url}
              foto4={item?.foto4?.url}
              realtor={{
                name: item?.corretor?.nome,
                creci: item?.corretor?.creci,
                email: item?.corretor?.email,
                phone: item?.corretor?.telefone,
                fotoDePerfil: item?.corretor?.fotoperfil?.url,
                instagram: item?.corretor?.instagram?.toString(),
                facebook: item?.corretor?.facebook?.toString(),
              }}
              />
              
            )
          })}
            
          </div>

          {/* PAGINATION */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
          </div>
        </main>

      </div>
    </div>
    )
  );
};

export default PageSearch;
