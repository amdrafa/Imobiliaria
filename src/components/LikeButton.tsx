import { FavoriteContext } from "contexts/FavoriteContext";
import { PropertiesQuery } from "graphql/generated";
import React, { useContext, useState } from "react";

export interface LikeButtonProps {
  className?: string;
  liked?: boolean;
  slug?: string;
  // handleClick?: React.Dispatch<React.SetStateAction<PropertiesQuery | undefined>>;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  className,
  liked = false,
  slug
  
}) => {

  const {setFavoritedPropertiesSlugs, favoritedPropertiesSlugs, filteredData} = useContext(FavoriteContext);

  const [isLiked, setIsLiked] = useState(liked);

  return (
    <button
      className={`bg-black/50 px-3.5 h-10 flex items-center justify-center rounded-full text-white ${className}`}
      onClick={() => {

        let filteredFavorites = favoritedPropertiesSlugs;

        const index = filteredFavorites?.findIndex((favorite?) => favorite == slug as string)

        
          // let index = favoritedPropertiesSlugs?.findIndex(item => item == slug)
          // let newFavoritedProperties = favoritedPropertiesSlugs?.splice(index, 1)
          // setFavoritedPropertiesSlugs(newFavoritedProperties as [])

          if(filteredFavorites?.includes(slug as string)){

            filteredFavorites.splice(index as number, 1)

            setFavoritedPropertiesSlugs(filteredFavorites)
            console.log('já existe') 
          }else{
            setFavoritedPropertiesSlugs([...favoritedPropertiesSlugs as [], slug as string])
            console.log('nao existe')
          }
        
          
          
        
        
        
        setIsLiked(!isLiked)
        
        console.log(favoritedPropertiesSlugs, index)
      }}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
          stroke="currentColor"
          fill={isLiked ? "#ef4444" : "none"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
     
    </button>
  );
};

export default LikeButton;
