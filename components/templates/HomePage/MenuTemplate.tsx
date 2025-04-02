import MenuItemCardComponent from '@/components/modules/MenuItem/MenuItemCardComponent'
import React from 'react'


interface MenuTemplateProps { menuData: [{ id: number, name: string, imgSRC: string, price: number | string, description: string }] }
type SingleMenuItem = { id: number, name: string, imgSRC: string, price: number | string, description: string }

// COMPONENT ===============================================================================================================================================================================
const MenuTemplate: React.FC<MenuTemplateProps> = ({ menuData }) => {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h1 className="text-[#da9f5b] text-uppercase tracking-widest">Menu &amp; Pricing</h1>
                    <h1 className="display-4 text-white font-bold">Competitive Pricing</h1>
                </div>
                <div className="row flex flex-wrap items-center justify-center lg:gap-x-2">
                    {menuData.map((menuItem: SingleMenuItem) => (
                        <MenuItemCardComponent key={menuItem.id}  {...menuItem} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default MenuTemplate




