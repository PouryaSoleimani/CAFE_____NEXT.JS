
// ^ SINGLE PRODUCT DETAILS PAGE ================================================================================================================================
import React from 'react';
import SingleProductDetailsPageTemplate from '@/components/templates/SingleProductDetailsPage/SingleProductDetailsPage'
import { GetStaticPaths, GetStaticProps } from 'next'


interface SingleProductDetailsPageTemplateProps {
    singleProduct: { id: number, name: string, imgSRC: string, price: number | string, description: string, rate: number }
}



//  COMPONENT  _________________________________________________________________________________________________________________________________________
const SingleProductDetailsPage: React.FC<SingleProductDetailsPageTemplateProps> = ({ singleProduct }) => {
    return (
        <>
            <SingleProductDetailsPageTemplate singleProduct={singleProduct} />
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
        fallback: "blocking",
    }

}


// GET STATIC PROPS ______________________________________________________________________________________________________________________________________

export const getStaticProps: GetStaticProps = async (ctx) => {
    const productID = ctx?.params?.productID;

    const request = await fetch(`http://localhost:4000/menu/${productID?.toString()}`)
    const singleProduct = await request.json()


    return {
        props: { singleProduct },
    }
}
export default SingleProductDetailsPage