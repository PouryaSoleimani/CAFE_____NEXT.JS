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
                    <h4 className="text-[#da9f5b] text-uppercase tracking-widest">Menu &amp; Pricing</h4>
                    <h1 className="display-4 text-white font-bold">Competitive Pricing</h1>
                </div>
                <div className="row flex flex-wrap items-center justify-center lg:gap-x-10">
                    {menuData.map((menuItem: SingleMenuItem) => (
                        <div className="menuITemBox  align-items-center mb-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="w-32 h-32 relative mx-auto">
                                <Image className="w-100 rounded-full shadow-lg hover:shadow-[#da9f5b] transition-shadow duration-300" src="/img/menu-2.jpg" alt="pic" width={100} height={100} />
                                <h5 className="menu-price text-[#da9f5b] font-semibold mt-2 absolute top-3 -right-10">$7</h5>
                            </div>
                            <div className="">
                                <h4 className="text-white font-bold">Chocolate Coffee</h4>
                                <p className="m-0 text-gray-400">
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




