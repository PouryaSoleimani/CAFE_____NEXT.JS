import Image from 'next/image'
import React from 'react'
interface MenuItemProps { id: number, name: string, imgSRC: string, icon: string, price: string, description: string }

// COMPONENT ==============================================================================================================================================
const MenuItemCardComponen: React.FC<MenuItemProps> = ({ id, name, imgSRC, icon, price, description }) => {
    return (
        <div className="menuITemBox row align-items-center mb-5 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="col-4 col-sm-3">
                <Image className="w-100 rounded-full shadow-lg hover:shadow-[#da9f5b] transition-shadow duration-300" src="/img/menu-1.jpg" alt="pic" width={100} height={100} />
                <h5 className="menu-price text-[#da9f5b] font-semibold mt-2">$5</h5>
            </div>
            <div className="col-8 col-sm-9">
                <h4 className="text-white font-bold">Black Coffee</h4>
                <p className="m-0 text-gray-400">
                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
                </p>
            </div>
        </div>
    )
}

export default MenuItemCardComponent 