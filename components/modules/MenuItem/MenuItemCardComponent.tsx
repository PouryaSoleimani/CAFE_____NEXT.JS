import Image from 'next/image'
import React from 'react'
interface MenuItemProps { id: number, name: string, imgSRC: string, price: number | string, description: string }

// COMPONENT ==============================================================================================================================================
const MenuItemCardComponent: React.FC<MenuItemProps> = ({ id, name, imgSRC, price, description }) => {
    return (
        <div key={id} className="menuITemBox hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="w-44 h-44 relative mx-auto">
                <Image className="w-72 h-52 rounded-md shadow-lg hover:shadow-[#da9f5b] transition-shadow duration-300" src={imgSRC} alt="pic" width={200} height={300} />
                <h5 className="menu-price text-[#da9f5b] font-extrabold mt-2 absolute -top-4 -left-10">${price}</h5>
            </div>
            <div className="">
                <h4 className="text-white font-bold" style={{ fontSize: "2.2rem" }}>{name}</h4>
                <p className="m-0 text-gray-400 w-fit text-2xl font-extralight">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default MenuItemCardComponent 