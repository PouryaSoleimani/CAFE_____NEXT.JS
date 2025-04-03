// SEARCH TEMPLATE COMPONENT  ===============================================================================================================================================================
import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import MenuItemCardComponent from '@/components/modules/MenuItem/MenuItemCardComponent'


interface SearchPageInterface { query: any, menuData: { id: number, name: string, imgSRC: string, price: number | string, description: string }[] }
type SingleMenuItem = { id: number, name: string, imgSRC: string, price: number | string, description: string }


// COMPONENT ===============================================================================================================================================================================
const SearchPageTemplate: React.FC<SearchPageInterface> = ({ query, menuData }) => {
    const [searchedMenu, setSearchedMenu] = useState(menuData)

    useEffect(() => {
        const filteredMenu = searchedMenu.filter(item => { return item.name.includes(query) })
        setSearchedMenu(filteredMenu)
    }, [])

    // RETURN
    return (
        <>
            <div className='text-white '>{query}</div>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="section-title text-center mb-5">
                        <h1 className="text-[#da9f5b] text-uppercase tracking-widest">Search Results</h1>
                        <h1 className="display-4 text-white font-bold">Of <span>"{query}"</span></h1>
                    </div>
                    <div className="row flex flex-wrap items-center justify-center lg:gap-x-5">
                        {searchedMenu?.map((menuItem: SingleMenuItem) => (
                            <MenuItemCardComponent key={menuItem.id}  {...menuItem} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}



// GET STATIC PROPS   =========================================================================================================================================================================

export const getStaticProps: GetStaticProps = async (ctx) => {
    const query = ctx?.params?.query
    console.log(ctx, query)

    const menuReq = await fetch("http://localhost:4000/menu")
    const menuData = await menuReq.json()

    return {
        props: { query, menuData },
    }
}



export default SearchPageTemplate