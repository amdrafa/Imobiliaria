import dayjs from "dayjs";
import { Modalidade, PropertiesQuery, usePropertiesQuery } from "graphql/generated";
import { createContext, ReactNode, useEffect, useState } from "react";


type FavoriteProviderProps = {
  children: ReactNode;
};

interface FavoriteContextProps {
    modalidade: string[];
    setModalidade: React.Dispatch<React.SetStateAction<string[]>>
//   filteredData: PropertiesQuery | undefined;
//   favoritedPropertiesSlugs: string[] | undefined;
//   setFavoritedPropertiesSlugs: React.Dispatch<React.SetStateAction<string[]>>
}

export const TabFilterContext = createContext({} as FavoriteContextProps);

export function TabFilterContextProvider({ children }: FavoriteProviderProps) {

   
  const [modalidade, setModalidade] = useState([''])

  useEffect(() => {console.log(modalidade)}, [modalidade])
   

  
  return (
    <TabFilterContext.Provider value={{modalidade, setModalidade}}>
      {children}
    </TabFilterContext.Provider>
  );
}
