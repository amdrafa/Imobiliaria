import dayjs from "dayjs";
import { Modalidade, PropertiesQuery, usePropertiesQuery } from "graphql/generated";
import { createContext, ReactNode, useEffect, useState } from "react";


type FavoriteProviderProps = {
  children: ReactNode;
};

interface FavoriteContextProps {
  filteredData: PropertiesQuery | undefined;
  favoritedPropertiesSlugs: string[] | undefined;
  setFavoritedPropertiesSlugs: React.Dispatch<React.SetStateAction<string[]>>
}

export const FavoriteContext = createContext({} as FavoriteContextProps);

export function FavoriteContextProvider({ children }: FavoriteProviderProps) {

    let [favoritedPropertiesSlugs, setFavoritedPropertiesSlugs] = useState([''])
  
    const {data: properties} = usePropertiesQuery({variables: {
      searchValue: '',
      modalidadeValue: [Modalidade.Venda, Modalidade.Aluguel],
      roomsValue: [1,2,3,4,5],
      bathroomsValue: [0,1,2,3,4,5],
      suitesValue: [0,1,2,3,4,5],
      ParkingCarValue: [0,1,2,3,4,5]
    }})

    let filteredData = properties;

    

    useEffect(() => {

        console.log(properties, filteredData)

    }, [ properties, filteredData ])

  
  return (
    <FavoriteContext.Provider value={{filteredData, favoritedPropertiesSlugs, setFavoritedPropertiesSlugs}}>
      {children}
    </FavoriteContext.Provider>
  );
}
