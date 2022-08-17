import { SearchIcon } from "@heroicons/react/solid";
import {BiBuilding} from 'react-icons/bi'
import {TbArmchair, TbBed, TbToiletPaper} from 'react-icons/tb'
import {MdOutlineBathroom, MdOutlineBedroomChild, MdOutlineGarage} from 'react-icons/md'
import {BiHomeAlt} from 'react-icons/bi'

interface detailPageProps {

  rooms?: number;
  mobiliado?: boolean;
  categoria?: string;
  bathrooms?: number;
  suites?: number;
  parkingSpace?: number;
}

export function DetailPageInformations({
  
  rooms,
  mobiliado,
  categoria,
  bathrooms,
  suites,
  parkingSpace,
  
 }:detailPageProps){
    return (
        <div className="mb-14">
        <div className="grid grid-cols-2 ">
            
            <div className="flex justify-start items-center text-gray-500 my-2">
                {categoria == 'Apartamento' ? (
                    <>
                    <BiBuilding fontSize={20} className='mr-1' />
                {categoria}
                </>
                ) : (
                    <>
                    <BiHomeAlt fontSize={20} className='mr-1' />
                {categoria}
                </>
                )}
                
            </div>

            <div className="flex justify-start items-center text-gray-500 my-2">
                <TbArmchair fontSize={20} className='mr-1'/>
                {mobiliado ? 'Mobiliado' : 'Não mobiliado'}
            </div>

            <div className="flex justify-start items-center text-gray-500  my-2">
                <TbBed fontSize={20} className='mr-1'/>
                {rooms} {rooms == 1 ? 'Quarto' : 'Quartos'}
            </div>

            

            <div className="flex justify-start items-center text-gray-500  my-2">
            <TbToiletPaper fontSize={20} className='mr-1'/>
                {bathrooms} {bathrooms == 1? 'Banheiro' : 'Banheiros'}
            </div>

            <div className="flex justify-start items-center text-gray-500  my-2">
                <MdOutlineBathroom fontSize={20} className='mr-1'/>
                {suites == 0? '' : suites} {suites == 0 ? 'Nenhuma suíte' : suites == 1 ? 'Suíte' : 'Suítes'}
            </div>

            <div className="flex justify-start items-center text-gray-500  my-2">
                <MdOutlineGarage fontSize={20} className='mr-1'/>
                {parkingSpace == 0? '' : parkingSpace} {parkingSpace == 1? ('Vaga') : ('Vagas')}
            </div>
            </div>

            
        </div>
    )
}