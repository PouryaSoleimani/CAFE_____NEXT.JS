// SWIPER COMPONENT ========================================================================================================================================
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';


// COMPONENT ================================================================================================================================================
const SwiperComponent = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper carousel-inner container-fluid ">
                <SwiperSlide>
                    <div className="carousel-item active">
                        <Image className="w-100 " src="/img/carousel-1.jpg" alt="Image" width={3000} height={3000} />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center ">
                            <h2 className="text-primary font-weight-medium m-0  animate__animated  animate__fadeInUp animate__delay-2s animate__slow">We Have Been Serving</h2>
                            <h1 className="display-1 text-white m-0  animate__animated  animate__fadeInUp animate__delay-2s animate__slow">COFFEE</h1>
                            <h2 className="text-white m-0  animate__animated  animate__fadeInUp animate__delay-2s animate__slow">* SINCE 1950 *</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-item ">
                        <Image className="w-100" src="/img/carousel-2.jpg" alt="Image" width={3000} height={3000} />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                            <h1 className="display-1 text-white m-0">COFFEE</h1>
                            <h2 className="text-white m-0">* SINCE 1950 *</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>



            <div className="container-fluid p-0 mb-5 " >
                <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
                    <Link className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </Link>
                    <Link className="carousel-control-next" href="#blog-carousel" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SwiperComponent