import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function SlideModal({ label, image }) {
    return (
        <div className='slide-modal'>
            <div className='content-left'>
                <p>{label}</p>
            </div>
            <div className='content-center'>
                <img src={image} alt="" />
            </div>
            <div className='content-right'>
                <p>The Company comprises dynamic qualified personnel, experienced in the field of offshore transportation and installation</p>
            </div>
        </div>
    )
}

export default SlideModal
