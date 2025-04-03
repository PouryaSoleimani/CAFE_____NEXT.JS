import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'
import SingleProductDetailsComponent from '@/components/modules/SingleProductDetails/SingleProductDetailsComponent'
import { useRouter } from 'next/router'
import React from 'react'

interface SingleProductDetailsPageTemplateProps { singleProduct: { id: number, name: string, imgSRC: string, price: number | string, description: string, rate: number } }

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

export default SingleProductDetailsPageTemplate;