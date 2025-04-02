import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'
import MenuTemplate from '@/components/templates/HomePage/MenuTemplate'
import { GetStaticProps } from 'next'
import React from 'react'
interface MenuPageProps { menuData: [{ id: number, name: string, imgSRC: string, icon: string, price: number | string, description: string }], }


// COMPONENT ==================================================================================================================================
const MenuPage: React.FC<MenuPageProps> = ({ menuData }) => {
    return (
        <>
            <PageHeaderComponent route={"MENU PAGE"} />
            <MenuTemplate menuData={menuData} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const menuReq = await fetch("http://localhost:4000/menu")
    const menuData = await menuReq.json()


    return {
        props: { menuData: menuData },
        revalidate: 43200
    }
}

export default MenuPage