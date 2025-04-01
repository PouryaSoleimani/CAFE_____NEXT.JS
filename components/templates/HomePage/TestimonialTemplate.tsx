//  TESTEMONIAL TEMPLATE ================================================================================================================================================================
import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

//  COMPONENT
const TestimonialTemplate = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h4>
                    <h1 className="display-4">Our Clients Say</h1>
                </div>
                <div id="SWIPER___CONTAINER" className='w-screen flex items-center justify-center'>
                    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} loop className="mySwiper mx-auto" width={270} height={200}>
                        <SwiperSlide className='bg-white w-[10rem] flex'>
                            <Image className="w-full h-64" src="/img/testimonial-1.jpg" alt="pic" width={800} height={800} />
                            <div className="ml-3">
                                <h4>Client Name</h4>
                                <span>Profession</span>
                            </div>
                            <p className="m-0">Sed ea amet kasd elitr stet, st</p>
                        </SwiperSlide>
                        <SwiperSlide className='bg-white w-[10rem]'>
                            <div className="testimonial-item">
                                <div className="d-flex align-items-center mb-3">
                                    <Image className="/img-fluid" src="/img/testimonial-2.jpg" alt="pic" width={100} height={100} />
                                    <div className="ml-3">
                                        <h4>Client Name</h4>
                                        <span>Profession</span>
                                    </div>
                                </div>
                                <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-white w-[10rem]'>
                            <div className="testimonial-item">
                                <div className="d-flex align-items-center mb-3">
                                    <Image className="/img-fluid" src="/img/testimonial-3.jpg" alt="pic" width={100} height={100} />
                                    <div className="ml-3">
                                        <h4>Client Name</h4>
                                        <span>Profession</span>
                                    </div>
                                </div>
                                <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                            </div>
                        </SwiperSlide >
                        <SwiperSlide className='bg-white w-[10rem]'>
                            <div className="testimonial-item">
                                <div className="d-flex align-items-center mb-3">
                                    <Image className="/img-fluid" src="/img/testimonial-4.jpg" alt="pic" width={100} height={100} />
                                    <div className="ml-3">
                                        <h4>Client Name</h4>
                                        <span>Profession</span>
                                    </div>
                                </div>
                                <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default TestimonialTemplate