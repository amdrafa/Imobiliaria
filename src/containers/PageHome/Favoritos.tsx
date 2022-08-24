import { useContext } from "react";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import { Helmet } from "react-helmet";
import { FavoriteContext } from "contexts/FavoriteContext";

function Favoritos() {

  const {filteredData, favoritedPropertiesSlugs} = useContext(FavoriteContext)
  
  // const {data: properties } = usePropertiesQuery()

  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Favoritos || Angela Simone</title>
      </Helmet>
      {/* GLASSMOPHIN */}

      <BgGlassmorphism />
      


      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-2">

        {/* SECTION */}
        <div className="relative py-0 lg:py-14">

          <div className="text-3xl font-semibold ">Imóveis favoritos</div>
          
            
            
        
          {Number(filteredData?.imovels.filter((property) => {
                  return favoritedPropertiesSlugs?.includes(property.slug?.toString() as any)
                }).length) < 1? <div className="text-xl text-primary-400">Nenhum imóvel favoritado.</div> : ''
                }

          
          
              <SectionGridAuthorBox
                sectionStyle="style1"
                boxCard="box4"
                data={filteredData?.imovels.filter((property) => {
                  return favoritedPropertiesSlugs?.includes(property.slug?.toString() as any)
                })}
              />
          
        </div>
        
      </div>
    </div>
  );
}

export default Favoritos;
