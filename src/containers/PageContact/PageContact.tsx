import React, { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SocialsList from "shared/SocialsList/SocialsList";
import Label from "components/Label/Label";
import Input from "shared/Input/Input";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import NcImage from "shared/NcImage/NcImage";
import VerifyIcon from "components/VerifyIcon";
import authorBanner from "images/nfts/authorBanner.png";
import facebook from "images/socials/facebook.svg";
import youtube from "images/socials/youtube.svg";
import instagram from "images/instagram.png"
import whatsapp from "images/socials/_Group_-3.svg"
import { useSimoneQuery } from "graphql/generated";
import QrCodeImg from "images/qr-code.png";
import metamaskImg from "images/metamask.webp";
import walletconnectImg from "images/walletconnect.png";
import walletlinkImg from "images/walletlink.png";
import fortmaticImg from "images/fortmatic.webp";
import NcModal from "shared/NcModal/NcModal";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { useParams } from "react-router-dom";
import Page404 from "containers/Page404/Page404";

export interface PageContactProps {
  className?: string;
}



const PageContact: FC<PageContactProps> = ({ className = "" }) => {

  const plans = [
    {
      name: "Whatsapp",
      img: whatsapp,
    },
    {
      name: "Telefone",
      img: walletlinkImg,
    },
    {
      name: "Endereço",
      img: walletconnectImg,
    },
    
    
  ];

  const {slug} = useParams<{slug: string;}>()

  const [searchCreci, setSearchCreci] = useState<string | undefined>(slug ? slug : 'CRECI 41.359F');

  const [showModal, setShowModal] = useState(false);

  const [showModalPhone, setShowModalPhone] = useState(false);

  const [showModalInformations, setShowModalInformations] = useState(false);

  const {data: realtor, error, loading } = useSimoneQuery({variables: {
    creci: searchCreci
  }})

  const info = [
    {
      title: "🗺 ENDEREÇO",
      desc: realtor?.corretor?.endereco ? realtor?.corretor?.endereco : 'Endereço não registrado',
    },
    {
      title: "💌 E-MAIL",
      desc: realtor?.corretor?.email ? realtor?.corretor?.email : 'E-mail não registrado',
    },
    
  ];


  const renderContentWhatsapp = () => {
    return (
      realtor?.corretor?.whatsappQrCode ? (
        <>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          Escanear QR Code
        </h3>
        <span className="text-sm">
          Aponte a câmera do seu celular para o código para ser redirecionado automaticamente.
        </span>

        {loading ? (
          'LOADING'
        ) : (
          <div className="p-5 border bg-white dark:bg-neutral-300 border-neutral-200 dark:border-neutral-700 rounded-xl flex items-center justify-center mt-4">
          <NcImage className="w-40" src={realtor?.corretor?.whatsappQrCode?.url} />
        </div>
        )}

        <div className="mt-5 space-x-3">
          <ButtonPrimary targetBlank href={realtor?.corretor?.whatsappLink?.toString()} type="submit">Enviar mensagem</ButtonPrimary>
          <ButtonSecondary type="button" onClick={() => setShowModal(false)}>Voltar</ButtonSecondary>
        </div>
      </>
      ) : (
        <>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          Escanear QR Code
        </h3>
        <span className="text-sm">
          Aponte a câmera do seu celular para o código para ser redirecionado automaticamente.
        </span>

        <div className="p-5 border bg-white dark:bg-neutral-300 border-neutral-200 dark:border-neutral-700 rounded-xl flex items-center justify-center mt-4">
          QR Code não disponível
        </div>

        <div className="mt-5 space-x-3">
          {realtor?.corretor?.whatsappLink ? (
            <ButtonPrimary targetBlank href={realtor?.corretor?.whatsappLink?.toString()} type="submit">Enviar mensagem</ButtonPrimary>
          ) : (
            <ButtonPrimary targetBlank href={`/notfound`} type="submit">Enviar mensagem</ButtonPrimary>
          )}
          <ButtonSecondary type="button" onClick={() => setShowModal(false)}>Voltar</ButtonSecondary>
        </div>
      </>
      )
    );
  };

  const renderContentInformations = () => {
    return (
      <form action="#">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          Endereço
        </h3>
        {/* <span className="text-sm">
          Aponte a câmera do seu celular para o código para ser redirecionado automaticamente.
        </span> */}

        <div className="max-w-sm space-y-8 mt-6 mb-6">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
             
            </div>

            <div className="mt-5 space-x-3">
          {realtor?.corretor?.whatsappLink ? (
            <ButtonPrimary targetBlank href={realtor?.corretor?.whatsappLink?.toString()} type="submit">Enviar mensagem</ButtonPrimary>
          ) : (
            <ButtonPrimary targetBlank href={`/notfound`} type="submit">Enviar mensagem</ButtonPrimary>
          )}
          <ButtonSecondary type="button" onClick={() => setShowModal(false)}>Voltar</ButtonSecondary>
        </div>
      </form>
    );
  };


  const renderContentCellphone = () => {
    return (
      <form action="#">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          Número de telefone
        </h3>
        <span className="text-sm">
          Se preferir, ligue diretamente para o corretor.
        </span>

        <div className="text-lg py-4 hover:text-blue-400 hover:cursor-pointer">
          {realtor?.corretor?.telefone}
        </div>

        <div className="mt-5 space-x-3">
          {realtor?.corretor?.whatsappLink ? (
            <ButtonPrimary targetBlank href={realtor?.corretor?.whatsappLink?.toString()} type="submit">Enviar mensagem</ButtonPrimary>
          ) : (
            <ButtonPrimary targetBlank href={`/notfound`} type="submit">Enviar mensagem</ButtonPrimary>
          )}
          <ButtonSecondary type="button" onClick={() => setShowModal(false)}>Voltar</ButtonSecondary>
        </div>
      </form>
    );
  };

  return (

    <div
      className={`nc-PageContact overflow-hidden ${className}`}
      data-nc-id="PageContact"
    >
      <Helmet>
        <title>Contato || Angela Simone</title>
      </Helmet>

      {loading ? ('') : 
      !realtor?.corretor ? (
        <Page404 />
      ) : (
        <>
        <div className="w-full mb-14">
        <div className="relative w-full h-32 md:h-44 2xl:h-44">
          <NcImage
            containerClassName="absolute inset-0"
            src={authorBanner}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container -mt-10 lg:-mt-16">
          <div className="relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row">
            <div className="w-32 lg:w-44 flex-shrink-0 mt-0 sm:mt-0">
              <NcImage
                src={realtor?.corretor?.fotoperfil?.url}
                containerClassName="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden"
              />
            </div>
            <div className="pt-5 md:pt-1 md:ml-6 xl:ml-14 flex-grow">
              <div className="max-w-screen-sm">
                <h2 className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold hover:text-gray-700 hover:cursor-pointer">
                  <span>{realtor?.corretor?.nome}</span>
                  <VerifyIcon
                    className="ml-2"
                    iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  />
                </h2>
                <div className="flex items-center text-sm font-medium space-x-2.5 mt-2.5 text-green-600 cursor-pointer">
                  <span className="text-neutral-600 dark:text-neutral-300">
                  {realtor?.corretor?.creci}
                  </span>
                  
                </div>

                <span className="block mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                {realtor?.corretor?.resumo?.text}
                </span>
              </div>
              <div className="mt-4 ">
                <SocialsList 
                itemClass="block w-7 h-7"
                socials={[
                  { name: "Facebook", icon: facebook, href:  realtor?.corretor?.facebook == undefined || realtor?.corretor?.facebook == ''  ? 'notfound' : `https://www.facebook.com/${realtor?.corretor?.facebook}` },
                  { name: "Whatsapp", icon: whatsapp, href: realtor?.corretor?.whatsappLink == undefined || realtor?.corretor?.whatsappLink == '' ? 'notfound' : `${realtor?.corretor?.whatsappLink}`  },
                  { name: "Instagram", icon: instagram, href: realtor?.corretor?.instagram == undefined || realtor?.corretor?.instagram == '' ? 'notfound' : `https://www.instagram.com/${realtor?.corretor?.instagram}` },
                  { name: "Youtube", icon: youtube, href: realtor?.corretor?.youtube == undefined ||realtor?.corretor?.youtube == '' ? 'notfound' : `https://www.youtube.com/${realtor?.corretor?.youtube}` },
                ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mb-24 lg:mb-32">

        <div className="container max-w-full mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 md:grid-cols-1 gap-12 ">
            
            <div className="mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">
            <div className="space-y-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  onClick={() => plan.name == 'Whatsapp' ? setShowModal(true) : plan.name == 'Telefone' ? setShowModalPhone(true) : setShowModalInformations(true)}
                  typeof="button"
                  tabIndex={0}
                  className="relative rounded-xl hover:shadow-lg hover:bg-neutral-50 border 
                border-neutral-200 dark:border-neutral-700 px-3 sm:px-5 py-4 cursor-pointer flex 
                focus:outline-none focus:shadow-outline-blue focus:border-blue-500 dark:bg-neutral-800 
                dark:text-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
                >
                  <div className="flex items-center w-full">
                    <NcImage
                      src={plan.img}
                      containerClassName="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 p-2 sm:p-3 bg-white rounded-full overflow-hidden shadow-lg"
                    />
                    <div
                      className={`ml-4 sm:ml-8 font-semibold text-xl sm:text-2xl `}
                    >
                      {plan.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ---- */}
            <div className="pt-2 ">
              <ButtonPrimary href={"/"} className="flex-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5 12H3.67004"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="ml-2">Voltar para página principal</span>
              </ButtonPrimary>
            </div>
          </div>
          </div>
        </div>
      </div>
        </>
      )}

      {/* OTHER SECTIONS */}
      
      <NcModal
        renderTrigger={() => null}
        isOpenProp={showModal}
        renderContent={renderContentWhatsapp}
        contentExtraClass="max-w-md"
        onCloseModal={() => setShowModal(false)}
        modalTitle="Entre em contato"
      />

      <NcModal
        renderTrigger={() => null}
        isOpenProp={showModalInformations}
        renderContent={renderContentInformations}
        contentExtraClass="max-w-md"
        onCloseModal={() => setShowModalInformations(false)}
        modalTitle="Entre em contato"
      />

      <NcModal
        renderTrigger={() => null}
        isOpenProp={showModalPhone}
        renderContent={renderContentCellphone}
        contentExtraClass="max-w-md"
        onCloseModal={() => setShowModalPhone(false)}
        modalTitle="Entre em contato"
      />


    </div>
  );
};

export default PageContact;
