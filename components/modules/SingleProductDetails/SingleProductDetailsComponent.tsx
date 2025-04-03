import React from 'react'
interface SingleProductDetailsPageTemplateProps { singleProduct: { id: number, name: string, imageSRC: string, price: number | string, description: string } }



//  COMPONENT
const SingleProductDetailsComponent: React.FC<SingleProductDetailsPageTemplateProps> = ({ singleProduct }) => {
    return (
        <h1>{singleProduct?.name}</h1>
    )
}

export default SingleProductDetailsComponent