import { SearchIcon } from "@heroicons/react/solid";
import {BiBuilding} from 'react-icons/bi'
import {TbBed, TbToiletPaper} from 'react-icons/tb'
import {MdOutlineGarage} from 'react-icons/md'


export function NftDetailPageInformations(){
    return (
        <div className="grid grid-cols-2">
            <div className="flex justify-start items-center text-gray-500 my-2">
                <BiBuilding fontSize={20} className='mr-1' />
                Apartamento
            </div>

            <div className="flex justify-start items-center text-gray-500  my-2">
                <TbBed fontSize={20} className='mr-1'/>
                Quartos
            </div>

            <div className="flex justify-start items-center text-gray-500  my-2">
            <TbToiletPaper fontSize={20} className='mr-1'/>
                Banheiros
            </div>

            <div className="flex justify-start items-center text-gray-500  my-2">
                <MdOutlineGarage fontSize={20} className='mr-1'/>
                Suites
            </div>

            <div className="flex justify-start items-center text-gray-500  my-2">
                <MdOutlineGarage fontSize={20} className='mr-1'/>
                Vagas
            </div>

            <div className="flex justify-start items-center text-gray-500 my-2">
                <SearchIcon className="w-5 h-5 ml-2.5" color="text-gray-500"/>
                Mobiliado
            </div>
        </div>
    )
}