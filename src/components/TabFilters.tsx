import React, { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonThird from "shared/Button/ButtonThird";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import Checkbox from "shared/Checkbox/Checkbox";
import Slider from "rc-slider";
import Radio from "shared/Radio/Radio";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { BiBuildingHouse } from "react-icons/bi";
import { TbBed } from "react-icons/tb";
import { TbToiletPaper } from "react-icons/tb";
import { MdOutlineShower } from "react-icons/md";
import { BiCar } from "react-icons/bi";
import { TbArmchair, TbWallet } from "react-icons/tb";

import { TabFilterContext } from "contexts/TabFilterContext";

//
const TabFilters = () => {
  function handleMobileTabChange(event: React.ChangeEvent<HTMLInputElement>) {}

  // DEMO DATA
  const typeOfSales = [
    {
      name: "Aluguel",
    },
    {
      name: "Venda",
    },
  ];

  const RoomsNumber = [
    {
      name: "1",
    },
    {
      name: "2",
    },
    {
      name: "3",
    },
    {
      name: "4",
    },
    {
      name: "5",
    },
  ];

  const carSpot = [
    {
      name: "1",
    },
    {
      name: "2",
    },
    {
      name: "3",
    },
    {
      name: "4",
    },
    {
      name: "5",
    },
  ];

  const Suites = [
    {
      name: "1",
    },
    {
      name: "2",
    },
    {
      name: "3",
    },
    {
      name: "4",
    },
    {
      name: "5",
    },
  ];

  const bathrooms = [
    {
      name: "1",
    },
    {
      name: "2",
    },
    {
      name: "3",
    },
    {
      name: "4",
    },
    {
      name: "5",
    },
  ];

  const {
    modalidade,
    setModalidade,
    setSaleTypeStates,
    saleTypeStates,
    fileTypesState,
    setfileTypesState,
    bathroomState,
    setBathroomState,
    setSuitesState,
    suitesState,
    carSpotState,
    setCarSpotState,
    isFurnishedState,
    setIsFurnishedState,
    rangePrices,
    setRangePrices
  } = useContext(TabFilterContext);

  const [isOpenMoreFilter, setisOpenMoreFilter] = useState(false);
  //

  

  //
  const closeModalMoreFilter = () => setisOpenMoreFilter(false);
  const openModalMoreFilter = () => setisOpenMoreFilter(true);

  //
  const handleChangeFileTypes = (checked: boolean, name: number) => {
    checked
      ? setfileTypesState([...fileTypesState, name])
      : setfileTypesState(fileTypesState.filter((i) => i !== name));
  };

  const handleChangeBathroom = (checked: boolean, name: number) => {
    checked
      ? setBathroomState([...bathroomState, name])
      : setBathroomState(bathroomState.filter((i) => i !== name));
  };

  const handleChangeSuites = (checked: boolean, name: number) => {
    checked
      ? setSuitesState([...suitesState, name])
      : setSuitesState(suitesState.filter((i) => i !== name));
  };

  const handleChangeCarSpot = (checked: boolean, name: number) => {
    checked
      ? setCarSpotState([...carSpotState, name])
      : setCarSpotState(carSpotState.filter((i) => i !== name));
  };

  const handleChangeSaleType = (checked: boolean, name: string) => {
    checked
      ? setSaleTypeStates([...saleTypeStates, name])
      : setSaleTypeStates(saleTypeStates.filter((i) => i !== name));
    setModalidade(saleTypeStates);
  };

  //

  // OK
  const renderXClear = () => {
    return (
      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center ml-3 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  };

  // OK
  const renderTabsTypeOfSales = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border focus:outline-none
               ${
                 open
                   ? "!border-primary-500 "
                   : "border-neutral-300 dark:border-neutral-700"
               }
                ${
                  !!saleTypeStates.length
                    ? "!border-primary-500 bg-primary-50 text-primary-900"
                    : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
                }
                `}
            >
              <BiBuildingHouse fontSize={18} fontWeight={"sm"} />

              <span className="ml-2">Modalidade</span>
              {!saleTypeStates.length ? (
                <ChevronDownIcon className="w-4 h-4 ml-3" />
              ) : (
                <span onClick={() => setSaleTypeStates([])}>
                  {renderXClear()}
                </span>
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex flex-col px-5 py-4 space-y-5">
                    <div className="w-full" />
                    {typeOfSales.map((item) => (
                      <div key={item.name} className="">
                        <Checkbox
                          name={item.name}
                          label={item.name}
                          defaultChecked={saleTypeStates.includes(item.name)}
                          onChange={(checked) =>
                            handleChangeSaleType(checked, item.name)
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        close();
                        setSaleTypeStates([]);
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Limpar
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={close}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Aplicar
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  // OK

  // OK
  const renderRoomsNumber = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border focus:outline-none 
              ${open ? "!border-primary-500 " : ""}
                ${
                  !!fileTypesState.length
                    ? "!border-primary-500 bg-primary-50 text-primary-900"
                    : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
                }
                `}
            >
              <TbBed fontSize={18} />

              <span className="ml-2">Quartos</span>
              {!fileTypesState.length ? (
                <ChevronDownIcon className="w-4 h-4 ml-3" />
              ) : (
                <span onClick={() => setfileTypesState([])}>
                  {renderXClear()}
                </span>
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex flex-col px-5 py-6 space-y-5">
                    {RoomsNumber.map((item) => (
                      <div key={item.name} className="">
                        <Checkbox
                          name={item.name}
                          label={item.name}
                          defaultChecked={fileTypesState.includes(
                            Number(item.name)
                          )}
                          onChange={(checked) =>
                            handleChangeFileTypes(checked, Number(item.name))
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        close();
                        setfileTypesState([]);
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Limpar
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={close}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Aplicar
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderCarSpot = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border focus:outline-none 
              ${open ? "!border-primary-500 " : ""}
                ${
                  !!carSpotState.length
                    ? "!border-primary-500 bg-primary-50 text-primary-900"
                    : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
                }
                `}
            >
              <BiCar fontSize={18} />

              <span className="ml-2">Vagas</span>
              {!carSpotState.length ? (
                <ChevronDownIcon className="w-4 h-4 ml-3" />
              ) : (
                <span onClick={() => setCarSpotState([])}>
                  {renderXClear()}
                </span>
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex flex-col px-5 py-6 space-y-5">
                    {carSpot.map((item) => (
                      <div key={item.name} className="">
                        <Checkbox
                          name={item.name}
                          label={item.name}
                          defaultChecked={carSpotState.includes(
                            Number(item.name)
                          )}
                          onChange={(checked) =>
                            handleChangeCarSpot(checked, Number(item.name))
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        close();
                        setCarSpotState([]);
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Limpar
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={close}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Aplicar
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  //Bathrooms

  const renderSuitesNumber = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border focus:outline-none 
              ${open ? "!border-primary-500 " : ""}
                ${
                  !!suitesState.length
                    ? "!border-primary-500 bg-primary-50 text-primary-900"
                    : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
                }
                `}
            >
              <MdOutlineShower fontSize={20} />

              <span className="ml-2">Suites</span>
              {!suitesState.length ? (
                <ChevronDownIcon className="w-4 h-4 ml-3" />
              ) : (
                <span onClick={() => setSuitesState([])}>{renderXClear()}</span>
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex flex-col px-5 py-6 space-y-5">
                    {Suites.map((item) => (
                      <div key={item.name} className="">
                        <Checkbox
                          name={item.name}
                          label={item.name}
                          defaultChecked={suitesState.includes(
                            Number(item.name)
                          )}
                          onChange={(checked) =>
                            handleChangeSuites(checked, Number(item.name))
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        close();
                        setSuitesState([]);
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Limpar
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={close}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Aplicar
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  // suites

  const renderBathroomNumber = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border focus:outline-none 
              ${open ? "!border-primary-500 " : ""}
                ${
                  !!bathroomState.length
                    ? "!border-primary-500 bg-primary-50 text-primary-900"
                    : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
                }
                `}
            >
              <TbToiletPaper fontSize={18} />
              <span className="ml-2">Banheiros</span>
              {!bathroomState.length ? (
                <ChevronDownIcon className="w-4 h-4 ml-3" />
              ) : (
                <span onClick={() => setBathroomState([])}>
                  {renderXClear()}
                </span>
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex flex-col px-5 py-6 space-y-5">
                    {bathrooms.map((item) => (
                      <div key={item.name} className="">
                        <Checkbox
                          name={item.name}
                          label={item.name}
                          defaultChecked={bathroomState.includes(
                            Number(item.name)
                          )}
                          onChange={(checked) =>
                            handleChangeBathroom(checked, Number(item.name))
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        close();
                        setBathroomState([]);
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Limpar
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={close}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Aplicar
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  // OK
  const renderTabsPriceRage = () => {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BRL",

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-900 focus:outline-none `}
            >
              <TbWallet fontSize={18} />
              <span className="ml-2">
                {formatter.format(rangePrices[0])} -{" "}
                {formatter.format(rangePrices[1])}
              </span>
              {renderXClear()}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 ">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex flex-col px-5 py-6 space-y-8">
                    <div className="space-y-5">
                      <span className="font-medium">Preço</span>
                      <Slider
                        range
                        min={100}
                        max={5000000}
                        step={1}
                        defaultValue={[rangePrices[0], rangePrices[1]]}
                        allowCross={false}
                        onChange={(_input: number | number[]) =>
                          setRangePrices(_input as number[])
                        }
                      />
                    </div>

                    <div className="flex justify-between space-x-5">
                      <div>
                        <label
                          htmlFor="minPrice"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          Preço mínimo
                        </label>
                        <div className="mt-1 relative rounded-md">
                          <input
                            type="text"
                            name="minPrice"
                            disabled
                            id="minPrice"
                            className="block w-[150px] pr-10 pl-4 sm:text-sm border-neutral-200 dark:border-neutral-700 rounded-full bg-transparent"
                            value={formatter.format(rangePrices[0])}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="maxPrice"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          Preço máximo
                        </label>
                        <div className="mt-1 relative rounded-md">
                          <input
                            type="text"
                            disabled
                            name="maxPrice"
                            id="maxPrice"
                            className=" block w-44 pr-10 pl-4 sm:text-sm border-neutral-200 dark:border-neutral-700 rounded-full bg-transparent"
                            value={formatter.format(rangePrices[1])}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        setRangePrices([500, 5000000]);
                        close();
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Limpar
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={close}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Aplicar
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  // OK
  const isFurnished = () => {
    return (
      <div
        className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border focus:outline-none cursor-pointer  ${
          isFurnishedState
            ? "border-primary-500 bg-primary-50 text-primary-900"
            : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
        }`}
        onClick={() => setIsFurnishedState(!isFurnishedState)}
      >
        <TbArmchair fontSize={18} />
        <span className="line-clamp-1 ml-2">Mobiliado</span>
        {isFurnishedState && renderXClear()}
      </div>
    );
  };

  // OK
  const renderMoreFilterItem = (
    data: {
      name: string;
      description?: string;
      defaultChecked?: boolean;
      onchangeFunction?: ((checked: boolean) => void) | undefined;
    }[]
  ) => {
    const list1 = data.filter((_, i) => i < data.length / 2);
    const list2 = data.filter((_, i) => i >= data.length / 2);
    return (
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col space-y-5">
          {list1.map((item) => (
            <Checkbox
              key={item.name}
              name={item.name}
              subLabel={item.description}
              label={item.name}
              defaultChecked={!!item.defaultChecked}
              onChange={item.onchangeFunction}
            />
          ))}
        </div>
        <div className="flex flex-col space-y-5">
          {list2.map((item) => (
            <Checkbox
              key={item.name}
              name={item.name}
              subLabel={item.description}
              label={item.name}
              defaultChecked={!!item.defaultChecked}
            />
          ))}
        </div>
      </div>
    );
  };

  // FOR RESPONSIVE MOBILE
  const renderTabMobileFilter = () => {

    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BRL",

    })

    return (
      <div className="flex-shrink-0">
        <div
          className={`flex flex-shrink-0 items-center justify-center px-4 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-900 focus:outline-none cursor-pointer`}
          onClick={openModalMoreFilter}
        >
          <span>
            <span className="hidden sm:inline"></span> Filtros (4)
          </span>
          {renderXClear()}
        </div>

        <Transition appear show={isOpenMoreFilter} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
            onClose={closeModalMoreFilter}
          >
            <div className="min-h-screen text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 dark:bg-opacity-60" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                className="inline-block py-8 h-screen w-full"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-flex flex-col w-full max-w-4xl text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Filtros
                    </Dialog.Title>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalMoreFilter} />
                    </span>
                  </div>

                  <div className="flex-grow overflow-y-auto">
                    <div className="px-8 md:px-10 divide-y divide-neutral-200 dark:divide-neutral-800">
                      {/* --------- */}
                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Modalidade</h3>
                        <div className="mt-6 relative ">
                          <div className="grid grid-cols-2">
                            {typeOfSales.map((item) => (
                              <div key={item.name} className="">
                                <Checkbox
                                  name={item.name}
                                  label={item.name}
                                  defaultChecked={saleTypeStates.includes(
                                    item.name
                                  )}
                                  onChange={(checked) =>
                                    handleChangeSaleType(checked, item.name)
                                  }
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* --------- */}
                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Quartos</h3>
                        <div className="mt-6 relative ">
                          <div className="grid grid-cols-5">
                            {RoomsNumber.map((item) => (
                              <div key={item.name} className="">
                                <Checkbox
                                  name={item.name}
                                  label={item.name}
                                  defaultChecked={fileTypesState.includes(
                                    Number(item.name)
                                  )}
                                  onChange={(checked) =>
                                    handleChangeFileTypes(
                                      checked,
                                      Number(item.name)
                                    )
                                  }
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* --------- */}

                      <div className="py-7">
                        <h3 className="text-xl font-medium">Banheiros</h3>
                        <div className="mt-6 relative ">
                          <div className="grid grid-cols-5">
                            {bathrooms.map((item) => (
                              <div key={item.name} className="">
                                <Checkbox
                                  name={item.name}
                                  label={item.name}
                                  defaultChecked={bathroomState.includes(
                                    Number(item.name)
                                  )}
                                  onChange={(checked) =>
                                    handleChangeBathroom(
                                      checked,
                                      Number(item.name)
                                    )
                                  }
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="py-7">
                        <h3 className="text-xl font-medium">Suites</h3>
                        <div className="mt-6 relative ">
                          <div className="grid grid-cols-5">
                            {Suites.map((item) => (
                              <div key={item.name} className="">
                                <Checkbox
                                  name={item.name}
                                  label={item.name}
                                  defaultChecked={suitesState.includes(
                                    Number(item.name)
                                  )}
                                  onChange={(checked) =>
                                    handleChangeSuites(
                                      checked,
                                      Number(item.name)
                                    )
                                  }
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="py-7">
                        <h3 className="text-xl font-medium">
                          Vagas de garagem
                        </h3>
                        <div className="mt-6 relative ">
                          <div className="grid grid-cols-5">
                            {carSpot.map((item) => (
                              <div key={item.name} className="">
                                <Checkbox
                                  name={item.name}
                                  label={item.name}
                                  defaultChecked={carSpotState.includes(
                                    Number(item.name)
                                  )}
                                  onChange={(checked) =>
                                    handleChangeCarSpot(
                                      checked,
                                      Number(item.name)
                                    )
                                  }
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* --------- */}
                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Preços</h3>
                        <div className="mt-6 relative ">
                          <div className="relative flex flex-col space-y-8">
                            <div className="space-y-5">
                              <Slider
                                range
                                className="text-red-400"
                                min={500}
                                max={5000000}
                                defaultValue={rangePrices}
                                allowCross={false}
                                onChange={(_input: number | number[]) =>
                                  setRangePrices(_input as number[])
                                }
                              />
                            </div>

                            <div className="flex justify-between space-x-5">
                              <div>
                                <label
                                  htmlFor="minPrice"
                                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                >
                                  Preço mínimo
                                </label>
                                <div className="mt-1 relative rounded-md">
                                  <input
                                    type="text"
                                    name="Preço Mínimo"
                                    disabled
                                    id="Preço Mínimo"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900 ml-1.5"
                                    value={formatter.format(rangePrices[0])}
                                  />
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor="Preço máximo"
                                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                >
                                  Preço máximo
                                </label>
                                <div className="mt-1 relative rounded-md">
                                  {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-neutral-500 sm:text-sm">
                                      R$
                                    </span>
                                  </div> */}
                                  <input
                                    type="text"
                                    disabled
                                    name="Preço máximo"
                                    id="maxPrice"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900 ml-1.5"
                                    value={formatter.format(rangePrices[1])}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* --------- */}
                      {/* ---- */}
                    </div>
                  </div>

                  <div className="p-6 flex-shrink-0 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        setRangePrices([500, 5000000]);
                        setSaleTypeStates([]);
                        setBathroomState([])
                        setCarSpotState([])
                        setSuitesState([])
                        setfileTypesState([]);
                        closeModalMoreFilter();
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Limpar
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={closeModalMoreFilter}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Aplicar
                    </ButtonPrimary>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    );
  };

  return (
    <div className="flex lg:space-x-4">
      {/* FOR DESKTOP */}
      <div className="hidden lg:flex space-x-4">
        {renderTabsPriceRage()}
        {renderTabsTypeOfSales()}
        {renderRoomsNumber()}
        {renderBathroomNumber()}
        {renderSuitesNumber()}
        {renderCarSpot()}
      </div>

      {/* FOR RESPONSIVE MOBILE */}
      <div className="flex overflow-x-auto lg:hidden space-x-4">
        {renderTabMobileFilter()}
        {isFurnished()}
      </div>
    </div>
  );
};

export default TabFilters;
