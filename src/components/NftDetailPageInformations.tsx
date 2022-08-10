import { SearchIcon } from "@heroicons/react/solid";
import {BiBuilding} from 'react-icons/bi'
import {TbArmchair, TbBed, TbToiletPaper} from 'react-icons/tb'
import {MdOutlineBathroom, MdOutlineBedroomChild, MdOutlineGarage} from 'react-icons/md'


export function NftDetailPageInformations(){
    return (
        <div className="mb-14">
        <div className="grid grid-cols-2 ">
            
            <div className="flex justify-start items-center text-gray-500 my-2">
                <BiBuilding fontSize={20} className='mr-1' />
                Apartamento
            </div>

            <div className="flex justify-start items-center text-gray-500 my-2">
                <TbArmchair fontSize={20} className='mr-1'/>
                Mobiliado
            </div>

            <div className="flex justify-start items-center text-gray-500  my-2">
                <TbBed fontSize={20} className='mr-1'/>
                2 Quartos
            </div>

            

            <div className="flex justify-start items-center text-gray-500  my-2">
            <TbToiletPaper fontSize={20} className='mr-1'/>
                1 Banheiro
            </div>

            <div className="flex justify-start items-center text-gray-500  my-2">
                <MdOutlineBathroom fontSize={20} className='mr-1'/>
                2 Suites
            </div>

            <div className="flex justify-start items-center text-gray-500  my-2">
                <MdOutlineGarage fontSize={20} className='mr-1'/>
                2 Vagas
            </div>
            </div>

            
        </div>
    )
}