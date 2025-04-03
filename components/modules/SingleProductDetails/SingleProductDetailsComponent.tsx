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
                    <Image src={singleProduct?.imgSRC} width={300} height={600} alt='pic' />
                    <h1 className='text-white underline decoration-amber-800'>{singleProduct.name}</h1>
                    <h3 className='bg-black px-3 py-1 text-white rounded-sm'>${singleProduct.price}</h3>
                </div>

            ) : (

                <h1>LOADING</h1>
            )}

        </div>
    )
}

export default SingleProductDetailsComponent