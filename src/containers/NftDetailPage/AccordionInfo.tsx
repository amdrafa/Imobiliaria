import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { DetailPageInformations } from "components/DetailPageInformations";

type AccordingInfoProps = {
  description: string | undefined;
  rooms?: number;
  mobiliado?: boolean;
  categoria?: string;
  bathrooms?: number;
  suites?: number;
  parkingSpace?: number;
  neighborhood?: string;
  city?: string;
  state?: string;
}

export default function AccordionInfo({ description, rooms, mobiliado, categoria, bathrooms, suites, parkingSpace, city, neighborhood, state }: AccordingInfoProps) {
  return (
    <div className="w-full rounded-2xl">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-500 rounded-lg hover:bg-neutral-200 focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
              <span>Descriçãotest</span>
              <ChevronUpIcon
                className={`${open ? "transform rotate-180" : ""
                  } w-5 h-5 text-neutral-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel
              className="px-4 pt-4 pb-2 text-neutral-500 text-sm dark:text-neutral-400"
              as="p"
            >
              <textarea>
                {description}
              </textarea>

            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure defaultOpen as="div" className="mt-5 md:mt-8">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-500 rounded-lg hover:bg-neutral-200 focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
              <span>Informações</span>
              <ChevronUpIcon
                className={`${open ? "transform rotate-180" : ""
                  } w-5 h-5 text-neutral-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 flex flex-col text-xs text-neutral-500 dark:text-neutral-400 overflow-hidden">
              <DetailPageInformations
                rooms={rooms}
                mobiliado={mobiliado}
                categoria={categoria}
                bathrooms={bathrooms}
                suites={suites}
                parkingSpace={parkingSpace}
                bairro={neighborhood}
                cidade={city}
                estado={state}
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
