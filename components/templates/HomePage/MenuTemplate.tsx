import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
interface MenuTemplateProps { menuData: [{ id: number, name: string, imgSRC: string, icon: string, price: number | string, description: string }] }
type SingleMenuItem = { id: number, name: string, imgSRC: string, icon: string, price: number | string, description: string }

// COMPONENT ===============================================================================================================================================================================
const MenuTemplate: React.FC<MenuTemplateProps> = ({ menuData }) => {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h1 className="text-[#da9f5b] text-uppercase tracking-widest">Menu &amp; Pricing</h1>
                    <h1 className="display-4 text-white font-bold">Competitive Pricing</h1>
                </div>
                <div className="row flex flex-wrap items-center justify-center lg:gap-x-10">
                    {menuData.map((menuItem: SingleMenuItem) => (
                        <div className="menuITemBox hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="w-44 h-44 relative mx-auto">
                                <Image className="w-100 rounded-md shadow-lg hover:shadow-[#da9f5b] transition-shadow duration-300" src={menuItem.imgSRC} alt="pic" width={200} height={200} />
                                <h5 className="menu-price text-[#da9f5b] font-bold mt-2 absolute -top-4 -left-10">${menuItem.price}</h5>
                            </div>
                            <div className="">
                                <h4 className="text-white font-bold text-5xl">Chocolate Coffee</h4>
                                <p className="m-0 text-gray-400 w-fit text-2xl">
                                    Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const req = await fetch("http://localhost:4000/menu")
    const data = await req.json()
    return {
        props: { data },
    }
}


export default MenuTemplate




