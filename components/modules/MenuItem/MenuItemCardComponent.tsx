import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface MenuItemProps { id: number, name: string, imgSRC: string, price: number | string, description: string }

// COMPONENT ==============================================================================================================================================
const MenuItemCardComponent: React.FC<MenuItemProps> = ({ id, name, imgSRC, price, description }) => {


    return (

        <Link href={`/product/${id}`} key={id} className="menuITemBox">
            <div className="w-70 h-52 relative mx-auto">
                <Image className="rounded-md w-72 h-52" src={imgSRC} alt="pic" width={500} height={300} />
                <h5 className="menu-price text-[#da9f5b] font-extrabold mt-2 absolute -top-4 -left-8 px-2">${price}</h5>
            </div>
            <div className="">
                <h4 className="text-white font-bold" style={{ fontSize: "2.2rem" }}>{name}</h4>
                <p className="m-0 text-gray-400 w-fit text-xl tracking-tight font-thin whitespace-nowrap">
                    {description}
                </p>
            </div>
        </Link>

    )
}

export default MenuItemCardComponent  