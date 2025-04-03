import Image from 'next/image'
import React from 'react'
interface MenuItemProps { id: number, name: string, imgSRC: string, price: number | string, description: string }

// COMPONENT ==============================================================================================================================================
const MenuItemCardComponent: React.FC<MenuItemProps> = ({ id, name, imgSRC, price, description }) => {


    return (

        <div key={id} className="menuITemBox">
            <div className="w-60 h-52 relative mx-auto">
                <Image className="rounded-md h-52" src={imgSRC} alt="pic" width={400} height={300} />
                <h5 className="menu-price text-[#da9f5b] font-extrabold mt-2 absolute -top-4 -left-8 px-2">${price}</h5>
            </div>
            <div className="">
                <h4 className="text-white font-bold" style={{ fontSize: "2.2rem" }}>{name}</h4>
                <p className="m-0 text-gray-400 w-fit text-xl tracking-tight font-thin whitespace-nowrap">
                    {description}
                </p>
            </div>
        </div>

    )
}

export default MenuItemCardComponent  