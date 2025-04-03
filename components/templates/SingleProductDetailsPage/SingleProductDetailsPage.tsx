import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'
import { useRouter } from 'next/router'
import React from 'react'

const SingleProductDetailsPageTemplate = () => {
    const router = useRouter()
    const ID = router.query.productID
    console.info("PRODUCT ID ===> ", ID)


    // RETURN ______________________________________________________________________________________________________________________________________
    return (
        <PageHeaderComponent route={"SINGLE PRODUCT DETAILS"} />
    )
}

export default SingleProductDetailsPageTemplate