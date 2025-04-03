import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'
import SingleProductDetailsComponent from '@/components/modules/SingleProductDetails/SingleProductDetailsComponent'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

interface SingleProductDetailsPageTemplateProps { singleProduct: { id: number, name: string, imgSRC: string, price: number | string, description: string } }

const SingleProductDetailsPageTemplate: React.FC<SingleProductDetailsPageTemplateProps> = ({ singleProduct }) => {

    const router = useRouter()
    const ID = router.query.productID
    console.info("PRODUCT ID ===> ", ID)


    // RETURN ______________________________________________________________________________________________________________________________________
    return (
        <>
            <PageHeaderComponent route={"SINGLE PRODUCT DETAILS"} />
            <SingleProductDetailsComponent singleProduct={singleProduct} />
        </>
    )
}



// GET STATIC PATHS ______________________________________________________________________________________________________________________________________
export const getStaticPaths: GetStaticPaths = async () => {
    const request = await fetch(`http://localhost:4000/menu`)
    const allProducts = await request.json()
    const paths = allProducts.map((item: any) => ({
        params: { productID: item.id.toString() }
    }))
    return {
        paths,
        fallback: false,
    }
}

// GET STATIC PROPS ______________________________________________________________________________________________________________________________________
export const getStaticProps: GetStaticProps = async (ctx) => {
    const productID = ctx?.params?.query;

    const request = await fetch(`http://localhost:4000/menu/${productID}`)
    const singleProduct = await request.json()


    return {
        props: { singleProduct },
    }
}


export default SingleProductDetailsPageTemplate;