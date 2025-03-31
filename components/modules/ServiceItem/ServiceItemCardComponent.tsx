import Image from 'next/image';
import React from 'react';
import { FaWifi, FaTree, FaMusic } from 'react-icons/fa';
import { MdLoyalty, MdPets } from 'react-icons/md';
import { RiTakeawayFill } from 'react-icons/ri';
import { BiCoffeeTogo, BiSolidCoffee } from 'react-icons/bi';
import { GiCoffeeBeans } from 'react-icons/gi';
import { AiFillSchedule } from 'react-icons/ai';

interface ServiceItemCardComponentProps { ID: number; serviceTitle: string; description: string; imgSRC: string }


// COMPONENT =================================================================================================================
const ServiceItemCardComponent: React.FC<ServiceItemCardComponentProps> = ({ ID, description, imgSRC, serviceTitle }) => {
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
    // Find the icon based on the ID
    const ICON = IconsArray[ID]
    console.info(ICON)
    return (
        <div className="col-lg-6 mb-5 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="bg-dark rounded p-4 d-flex flex-column justify-content-center align-items-center h-100">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <div className="img-fluid mb-3 mb-sm-0">
                            <Image src={imgSRC} alt="pic" width={300} height={300} />
                        </div>
                    </div>
                    <div className="col-sm-7 align-baseline">
                        <h4 className="flex items-center gap-3">
                            <span className="service-icon text-[#da9f5b] text-3xl" >
                                {/* {ICON &&React.createElement(ICON)} */}
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