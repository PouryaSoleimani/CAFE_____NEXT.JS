import { Star, StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { BiStar } from 'react-icons/bi'
import { RiShieldStarFill, RiStarFill, RiStarSFill } from 'react-icons/ri'


interface SingleProductDetailsPageTemplateProps { singleProduct: { id: number, name: string, imgSRC: string, price: number | string, description: string, rate: number } }



//  COMPONENT __________________________________________________________________________________________________________________________________________________________
const SingleProductDetailsComponent: React.FC<SingleProductDetailsPageTemplateProps> = ({ singleProduct }) => {


    // RETURN ____________________________________________________________________________________________________________________________________________________________
    return (
        <div id='SINGLE___PRODUCT___CONTAINER' className='w-full h-full flex items-center justify-center'>
            {singleProduct ? (

                <div className='bg-zinc-800/50 p-5 rounded-sm flex flex-col items-center gap-y-5 justify-center border border-zinc-600'>
                    <Image src={singleProduct?.imgSRC} width={300} height={600} alt='pic' />
                    <div className='flex gap-x-1'>
                        {Array.from({ length: singleProduct.rate }, (_, i) => (<span key={i}><RiStarFill className='text-2xl text-yellow-400' /></span>))}
                        {Array.from({ length: 5 - singleProduct.rate }, (_, i) => (<span key={i}><BiStar className='text-2xl text-yellow-400' /></span>))}
                    </div>
                    <h1 className='text-white underline decoration-amber-800'>{singleProduct.name}</h1>
                    <h3 className='bg-black px-3 py-1 text-white rounded-sm'>PRICE : ${singleProduct.price}</h3>
                </div>

            ) : (

                <h1>LOADING</h1>
            )}

        </div>
    )
}

export default SingleProductDetailsComponent