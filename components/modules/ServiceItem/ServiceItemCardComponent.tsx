import Image from 'next/image';
import React from 'react';
import { FaWifi, FaTree, FaMusic } from 'react-icons/fa';
import { MdLoyalty, MdPets } from 'react-icons/md';
import { RiTakeawayFill } from 'react-icons/ri';
import { BiCoffeeTogo, BiSolidCoffee } from 'react-icons/bi';
import { GiCoffeeBeans } from 'react-icons/gi';
import { AiFillSchedule } from 'react-icons/ai';

interface ServiceItemCardComponentProps { serviceID: number; serviceTitle: string; description: string; imgSRC: string; }

const IconsArray = [
    { id: 1, icon: FaWifi },
    { id: 2, icon: FaTree },
    { id: 3, icon: FaMusic },
    { id: 4, icon: MdLoyalty },
    { id: 5, icon: MdPets },
    { id: 6, icon: RiTakeawayFill },
    { id: 7, icon: BiCoffeeTogo },
    { id: 8, icon: GiCoffeeBeans },
    { id: 9, icon: BiSolidCoffee },
    { id: 10, icon: AiFillSchedule },
];

const ServiceItemCardComponent: React.FC<ServiceItemCardComponentProps> = ({ serviceID, description, imgSRC, serviceTitle }) => {

    const myICON = IconsArray.find((item) => item.id === serviceID);

    return (
        <div className="col-lg-6 mb-5 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="bg-dark rounded p-2 lg:p-4 flex items-center justify-center h-full">
                <div className="row flex flex-col items-center justify-center gap-4">
                    <div className="col-sm-5">
                        <div className="img-fluid mb-3 mb-sm-0">
                            <Image src={imgSRC} alt="pic" width={500} height={400} className='h-40 mt-2' />
                        </div>
                    </div>
                    <div className="col-sm-7 ">
                        <h4 className="flex items-center tracking-tighter -translate-x-5 lg:-translate-x-0 whitespace-nowrap gap-x-2">
                            <span className="service-icon text-[#da9f5b] text-3xl p-2 m-0">
                                {myICON?.icon && <myICON.icon className='w-8 h-8' />} {/* Render the icon dynamically */}
                            </span>
                            {serviceTitle}
                        </h4>
                        <p className="m-0 text-zinc-500 mt-4">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItemCardComponent;