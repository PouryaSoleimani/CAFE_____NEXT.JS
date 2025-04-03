import Image from 'next/image'
import React from 'react'
interface SingleProductDetailsPageTemplateProps { singleProduct: { id: number, name: string, imgSRC: string, price: number | string, description: string } }



//  COMPONENT
const SingleProductDetailsComponent: React.FC<SingleProductDetailsPageTemplateProps> = ({ singleProduct }) => {


    // RETURN __________________________________________________________________________________________________________________________________
    return (
        <div id='SINGLE___PRODUCT___CONTAINER' className='w-full h-full flex items-center justify-center'>
            {singleProduct ? (

                <div className='bg-zinc-700/30 p-5 rounded-sm flex flex-col items-center gap-y-5 justify-center border border-zinc-600'>
                    <Image src={singleProduct?.imgSRC} width={400} height={600} alt='pic' />
                    <h1>ITEM</h1>
                </div>

            ) : (

                <h1>LOADING</h1>
            )}

        </div>
    )
}

export default SingleProductDetailsComponent