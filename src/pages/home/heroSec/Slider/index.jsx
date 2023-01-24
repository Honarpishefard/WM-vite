/* eslint-disable react/prop-types */
import React from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.css';

export function Slider({ children }) {
    function SwiperSlideFn() {
        return children.map((item) => (
            <SwiperSlide style={{ color: 'white' }}>{item}</SwiperSlide>
        ));
    }

    return (
        <Swiper
            style={{ '--swiper-navigation-size': '25px' }}
            className="slider"
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}>
            {SwiperSlideFn()}
        </Swiper>
    );
}
