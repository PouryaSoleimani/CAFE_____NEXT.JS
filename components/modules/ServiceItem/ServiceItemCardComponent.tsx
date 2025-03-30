// ^ SERVICE ITEM CARD COMPONENT =============================================================================================================
import Image from 'next/image'
import React from 'react'
interface ServiceItemCardComponentProps { imageSRC: string; iconName: React.ElementType; serviceTitle: string; }


const ServiceItemCardComponent: React.FC<ServiceItemCardComponentProps> = ({ imageSRC, iconName, serviceTitle }) => {
    return (
        <div className="col-lg-6 mb-5 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="bg-dark rounded p-4 d-flex flex-column justify-content-center align-items-center h-100">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <div className="img-fluid mb-3 mb-sm-0">
                            <Image src={imageSRC} alt="pic" width={300} height={300} />
                        </div>
                    </div>
                    <div className="col-sm-7 align-baseline">
                        <h4><span className="fa fa-truck service-icon">{React.createElement(iconName)}</span> {serviceTitle}</h4>
                        <p className="m-0 text-zinc-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure nam sequi, quaerat ad hic tempore ea culpa quisquam, ab eaque aut voluptas perspiciatis beatae atque sed quibusdam aliquam est?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceItemCardComponent