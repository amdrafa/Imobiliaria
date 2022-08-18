import React, { useState } from "react";
import {BsArrowLeftCircle} from 'react-icons/bs'
import NcImage from "shared/NcImage/NcImage";

export interface LikeButtonProps {
  className?: string;
  liked?: boolean;
}

const ImageCarrousel = () => {


  return (
    <ul
      className={`flex overflow-x-auto snap-x snap-mandatory gap-5`}
    >
     <li className="shrink-0  snap-center">
     <img className="max-h-[600px]" src="https://midias.agazeta.com.br/2021/01/20/apartamentos-laterais-do-golden-barro-vermelho-em-vitoria-estao-a-venda-a-partir-de-r-718-mil-403229-article.jpg" alt="test" />
     </li>
     <li className="shrink-0 snap-center">
     <img className="max-h-[600px]" src="https://midias.agazeta.com.br/2021/01/20/apartamentos-laterais-do-golden-barro-vermelho-em-vitoria-estao-a-venda-a-partir-de-r-718-mil-403229-article.jpg" alt="test" />
     </li>
     <li  className="shrink-0 snap-center">
     <img className="max-h-[600px]" src="https://www.estilofontana.com.br/blog/wp-content/uploads/2019/05/apartamento-decorado-1-1170x780.jpg" alt="test" />
     </li>
     <li className="shrink-0 snap-center">
     <img className="max-h-[600px]" src="https://midias.agazeta.com.br/2021/01/20/apartamentos-laterais-do-golden-barro-vermelho-em-vitoria-estao-a-venda-a-partir-de-r-718-mil-403229-article.jpg" alt="test" />
     </li>
     
     
     
    </ul>
  );
};

export default ImageCarrousel;
