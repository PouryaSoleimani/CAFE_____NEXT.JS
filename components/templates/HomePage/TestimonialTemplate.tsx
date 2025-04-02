//  TESTEMONIAL TEMPLATE ================================================================================================================================================================
import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
interface commentsProps { comments: [{ id: number | string, username: string, body: string, imgSRC: string, productID: string }] }
type SingleCommentType = { id: number | string, username: string, body: string, imgSRC: string, productID: string }

//  COMPONENT
const TestimonialTemplate: React.FC<commentsProps> = ({ comments }) => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h4>
                    <h1 className="display-4">Our Clients Say</h1>
                </div>
                <div id="SWIPER___CONTAINER" className='flex items-center justify-center w-full px-10 bg-zinc-900/30 py-5 rounded-md border-2 border-zinc-700'>
                    {/* modules={[EffectCards]}  */}
                    <Swiper effect={'cards'} grabCursor={true} loop autoplay className="mySwiper mx-auto" width={270} height={200}>
                        {comments?.map((comment: SingleCommentType) => (
                            <SwiperSlide className='bg-white w-[10rem] flex swiper____slide rounded-md'>
                                <Image className="w-full h-2/3 rounded-t-md shadow shadow-amber-50" src={comment.imgSRC} alt="pic" width={800} height={800} />
                                <div className="swiper__contents px-10 mt-10 text-center whitespace-nowrap">
                                    <h4>{comment.username.toUpperCase()}</h4>
                                    <span>{comment.body}</span>
                                </div>
                                <p>Sed ea amet kasd elitr stet, st</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}




export default TestimonialTemplate