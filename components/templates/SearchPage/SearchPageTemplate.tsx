//^ SEARCH TEMPLATE COMPONENT  ===============================================================================================================================================================
import { GetServerSideProps, GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import MenuItemCardComponent from '@/components/modules/MenuItem/MenuItemCardComponent'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/router'


interface SearchPageInterface { menuData: { id: number, name: string, imgSRC: string, price: number | string, description: string }[] }
type SingleMenuItem = { id: number, name: string, imgSRC: string, price: number | string, description: string }


// COMPONENT ===============================================================================================================================================================================
const SearchPageTemplate: React.FC<SearchPageInterface> = ({ menuData }) => {

    const router = useRouter();
    const query = router.query.query;

    const [searchedMenu, setSearchedMenu] = useState(menuData);

    useEffect(() => {
        if (query) {
            console.info("Query:", query);
            const filteredMenu = menuData.filter((item) =>
                item.name.trim().toLowerCase().includes((query as string).trim().toLowerCase())
            );
            setSearchedMenu(filteredMenu);
        }
    }, [query, menuData]);

    function backHandler() { router.back(); }
    function backToMenuHandler() { router.push("/menu") }

    // RETURN _______________________________________________________________________________________________________________________________________________________________________________
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="container">

                    {/* TITLE */}
                    <div className="section-title text-center">
                        <h1 className="text-[#da9f5b] text-uppercase tracking-widest">Search Results</h1>
                        <h1 className="display-4 text-white font-bold">  Of <span>" {query || "..."} "</span>  </h1>
                    </div>

                    {/* SEARCHED PRODUCTS */}
                    <div className='flex flex-col'>
                        <div className="row flex flex-wrap items-center justify-center lg:gap-x-5">
                            {searchedMenu?.length > 0 ? (
                                searchedMenu.map((menuItem: SingleMenuItem) => (
                                    <MenuItemCardComponent key={menuItem.id} {...menuItem} />
                                ))
                            ) : (
                                <div className="w-full flex flex-col items-center justify-center gap-y-10">
                                    <p className="w-full text-3xl font-bold bg-red-950 p-5 rounded-md text-center text-white">
                                        NO PRODUCT FOUND
                                    </p>
                                </div>
                            )}
                        </div>
                        <button className="flex items-center justify-center gap-x-5 px-5 bg-black p-4 text-white border text-3xl font-black hover:bg-zinc-900 duration-300 w-fit mx-auto" onClick={backToMenuHandler}  >
                            <ArrowLeft /> BACK TO MENU
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};


// GET STATIC PROPS   =========================================================================================================================================================================

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const menuReq = await fetch("http://localhost:4000/menu")
    const menuData = await menuReq.json()

    return {
        props: { menuData },
    }
}



export default SearchPageTemplate