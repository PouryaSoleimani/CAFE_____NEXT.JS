// ^SWIPER COMPONENT ========================================================================================================================================
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import styles from './../../modules/Swiper/SwiperComponent.module.css';

// COMPONENT ================================================================================================================================================
const SliderTemplate = () => {
    return (
        <div className={styles.swiperContainer}>
            <Swiper navigation={true} modules={[Navigation, Autoplay, EffectFade]} className="mySwiper carousel-inner max-h-[100vh]" loop={true} autoplay={{ delay: 5000, disableOnInteraction: false, }} effect="fade" speed={800} pagination={{ clickable: true }}   >
                <SwiperSlide className='h-[100vh]'>
                    <Image className="w-100 h-[100vh]" src="/img/carousel-1.jpg" alt="Image" width={2000} height={2200} />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary font-weight-medium m-0 ">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0 ">COFFEE</h1>
                        <h2 className="text-white m-0 ">* SINCE 1950 *</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-[100vh] '>
                    <Image className="w-100 h-[100vh]" src="/img/carousel-2.jpg" alt="Image" width={2000} height={2000} loading='lazy' />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0">COFFEE</h1>
                        <h2 className="text-white m-0">* SINCE 1950 *</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-[100vh]'>
                    <Image className="w-100 h-[100vh]" src="/img/caousel-3.webp" alt="Image" width={2000} height={2000} loading="lazy" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0">COFFEE</h1>
                        <h2 className="text-white m-0">* SINCE 1950 *</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-[100vh]'>
                    <Image className="w-100 h-[100vh]" src="/img/carousel-8.webp" alt="Image" width={2000} height={2500} />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0">COFFEE</h1>
                        <h2 className="text-white m-0">* SINCE 1950 *</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-[100vh]'>
                    <Image className="w-100 h-[100vh]" src="/img/carousel-5.jpg" alt="Image" width={2000} height={2000} loading="lazy" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0">COFFEE</h1>
                        <h2 className="text-white m-0">* SINCE 1950 *</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-[100vh]'>
                    <Image className="w-100 h-[100vh]" src="/img/carousel-6.webp" alt="Image" width={2000} height={2000} loading="lazy" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0">COFFEE</h1>
                        <h2 className="text-white m-0">* SINCE 1950 *</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-[100vh]'>
                    <Image className="w-100 h-[100vh]" src="/img/carousel-9.webp" alt="Image" width={2000} height={2000} loading="lazy" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0">COFFEE</h1>
                        <h2 className="text-white m-0">* SINCE 1950 *</h2>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="overlay-bottom"></div>
        </div>
    )
}

export default SliderTemplate