import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'
import SearchPageTemplate from '@/components/templates/SearchPage/SearchPageTemplate'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
interface SearchPageInterface { query: string | string[] | undefined, menuData: [{ id: number, name: string, imgSRC: string, price: number | string, description: string }] }




const SearchPage: React.FC<SearchPageInterface> = ({ menuData }) => {

    const router = useRouter()
    const query = router.query.query


    return (
        <>
            <PageHeaderComponent route={"SEARCH PAGE"} />
            <SearchPageTemplate query={query} menuData={menuData} />
        </>
    )
}

// GET STATIC PROPS   ===============================================================================================================================================================

export const getStaticProps: GetStaticProps = async (ctx) => {


    const menuReq = await fetch("http://localhost:4000/menu")
    const menuData = await menuReq.json()

    return {
        props: { menuData },
    }
}


export default SearchPage