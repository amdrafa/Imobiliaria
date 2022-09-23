import dayjs from "dayjs";
import { Modalidade, PropertiesQuery, usePropertiesQuery } from "graphql/generated";
import { createContext, ReactNode, useEffect, useState } from "react";


type FavoriteProviderProps = {
  children: ReactNode;
};

interface FavoriteContextProps {
    modalidade: string[];
    setModalidade: React.Dispatch<React.SetStateAction<string[]>>;

    saleTypeStates: string[];
    setSaleTypeStates: React.Dispatch<React.SetStateAction<string[]>>;

    fileTypesState: number[];
    setfileTypesState: React.Dispatch<React.SetStateAction<number[]>>;

    bathroomState:number[];
    setBathroomState:React.Dispatch<React.SetStateAction<number[]>>;

    suitesState:number[];
    setSuitesState: React.Dispatch<React.SetStateAction<number[]>>;

    carSpotState: number[];
    setCarSpotState: React.Dispatch<React.SetStateAction<number[]>>;

    isFurnishedState: boolean;
    setIsFurnishedState: React.Dispatch<React.SetStateAction<boolean>>;

    cityStates: string[]; 
    setCityStates:React.Dispatch<React.SetStateAction<string[]>>;

    tabActive: string; 
    setTabActive:React.Dispatch<React.SetStateAction<string>>;

    rangePrices: number[]; 
    setRangePrices: React.Dispatch<React.SetStateAction<number[]>>;
    
    

//   filteredData: PropertiesQuery | undefined;
//   favoritedPropertiesSlugs: string[] | undefined;
//   setFavoritedPropertiesSlugs: React.Dispatch<React.SetStateAction<string[]>>
}

export const TabFilterContext = createContext({} as FavoriteContextProps);

export function TabFilterContextProvider({ children }: FavoriteProviderProps) {

   
  const [modalidade, setModalidade] = useState([''])
  const [saleTypeStates, setSaleTypeStates] = useState<string[]>([]);

  const [cityStates, setCityStates] = useState<string[]>([]);

  const [bathroomState, setBathroomState] = useState<number[]>([]);
  //rooms number
  const [fileTypesState, setfileTypesState] = useState<number[]>([]);

  // suites 

  const [suitesState, setSuitesState] = useState<number[]>([]);

  // vagas

  const [carSpotState, setCarSpotState] = useState<number[]>([]);

  // isFurnished

  const [isFurnishedState, setIsFurnishedState] = useState(false)

  // category

  const [tabActive, setTabActive] = useState("Todos");

  // price range 

  const [rangePrices, setRangePrices] = useState([500, 5000000]);

  useEffect(() => {console.log(tabActive)}, [tabActive])
   

  
  return (
    <TabFilterContext.Provider value={{modalidade, setModalidade, saleTypeStates, setSaleTypeStates, fileTypesState, setfileTypesState, bathroomState, setBathroomState, setSuitesState, suitesState, carSpotState, setCarSpotState, setTabActive, tabActive, isFurnishedState, setIsFurnishedState, rangePrices, setRangePrices, cityStates, setCityStates}}>
      {children}
    </TabFilterContext.Provider>
  );
}
