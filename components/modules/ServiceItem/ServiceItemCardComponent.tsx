// ^ SERVICE ITEM CARD COMPONENT =============================================================================================================
import Image from 'next/image';
import React from 'react';
import { FaAward } from 'react-icons/fa';
interface ServiceItemCardComponentProps {
    id: number;
    serviceTitle: string;
    description: string;
    imgSRC: string;
    iconName: React.ElementType;
}

const ServiceItemCardComponent: React.FC<ServiceItemCardComponentProps> = ({ description, imgSRC, iconName: Icon, serviceTitle }) => {
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
                            {Icon && <Icon className="service-icon text-[#da9f5b] text-3xl" />} 
                            {serviceTitle}
                        </h4>
                        <p className="m-0 text-zinc-500 mt-4">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItemCardComponent;