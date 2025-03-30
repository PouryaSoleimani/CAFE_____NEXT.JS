// SWIPER COMPONENT ========================================================================================================================================
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import styles from './SwiperComponent.module.css';

// COMPONENT ================================================================================================================================================
const SwiperComponent = () => {
    return (
        <div className={styles.swiperContainer}>
            <Swiper navigation={true} modules={[Navigation, Autoplay, EffectFade]} className="mySwiper carousel-inner container-fluid" loop={true} autoplay={{ delay: 5000, disableOnInteraction: false, }} effect="fade" speed={800} pagination={{ clickable: true }}   >
                <SwiperSlide>
                    <Image className="w-100 " src="/img/carousel-1.jpg" alt="Image" width={3000} height={3000} />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary font-weight-medium m-0 ">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0 ">COFFEE</h1>
                        <h2 className="text-white m-0 ">* SINCE 1950 *</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-100" src="/img/carousel-2.jpg" alt="Image" width={3000} height={3000} />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0">COFFEE</h1>
                        <h2 className="text-white m-0">* SINCE 1950 *</h2>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container-fluid p-0 mb-5">
                <div className="overlay-bottom"></div>
            </div>
        </div>
    )
}

export default SwiperComponent