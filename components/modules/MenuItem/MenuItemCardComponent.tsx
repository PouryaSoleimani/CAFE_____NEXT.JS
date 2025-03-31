import Image from 'next/image'
import React from 'react'
interface MenuItemProps { id: number, name: string, imgSRC: string, price: number | string, description: string }

// COMPONENT ==============================================================================================================================================
const MenuItemCardComponent: React.FC<MenuItemProps> = ({ id, name, imgSRC, price, description }) => {
    return (
        <div key={id} className="menuITemBox hover:scale-105 transition-all duration-300">
            <div className="w-64 h-52 relative mx-auto">
                <Image className="rounded-md h-52 shadow-lg hover:shadow-[#da9f5b] transition-all duration-300" src={imgSRC} alt="pic" width={200} height={300} />
                <h5 className="menu-price text-[#da9f5b] font-extrabold mt-2 absolute -top-4 -left-10">${price}</h5>
            </div>
            <div className="">
                <h4 className="text-white font-bold" style={{ fontSize: "2.2rem" }}>{name}</h4>
                <p className="m-0 text-gray-400 w-fit text-2xl font-extralight whitespace-nowrap">
                    {description}
                </p>
                <button className='bg-[#da9f5b] text-zinc-900 px-4 py-3 mt-4 text-2xl hover:bg-black hover:text-[#da9f5b]'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default MenuItemCardComponent 