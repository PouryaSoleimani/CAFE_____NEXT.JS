//  TESTEMONIAL TEMPLATE ================================================================================================================================================================
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/effect-cards';
interface commentsProps { comments: [{ id: number | string, username: string, body: string, imgSRC: string, productID: string }] }
type SingleCommentType = { id: number | string, username: string, body: string, imgSRC: string, productID: string }

//  COMPONENT ===================================================================================================================================================================================
const TestimonialCommentsTemplate: React.FC<commentsProps> = ({ comments }) => {

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h4>
                    <h1 className="display-4">What Do Our Clients Say</h1>
                </div>
                <div id="SWIPER___CONTAINER" className='flex items-center justify-center w-full px-2 lg:px-10 bg-zinc-900/30 py-5 rounded-md border-2 border-zinc-700'>
                    <Swiper grabCursor={true} rewind loop scrollbar autoplay className="mySwiper mx-auto" width={300} height={270}>
                        {comments?.map((comment: SingleCommentType) => (
                            <SwiperSlide key={comment.id} className='bg-zinc-900/70 w-[10rem] flex swiper____slide rounded-md'>
                                <Image className="w-full h-2/3 rounded-t-md shadow shadow-amber-50" src={comment.imgSRC} alt="pic" width={800} height={800} loading='eager' />
                                <div className="swiper__contents px-10 mt-10 text-center whitespace-nowrap">
                                    <h4>{comment.username.toUpperCase()}</h4>
                                    <span className='text-xl mt-2 font-semibold text-white'>{comment.body}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}




export default TestimonialCommentsTemplate