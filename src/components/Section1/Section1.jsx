import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import bg1 from '../../assets/background1.jpg'
import bg2 from '../../assets/background2.jpg'
import bg3 from '../../assets/background3.jpg'
import { Slide } from './Slide'
import './style.scss'
import styled from 'styled-components';

function Section1() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    const slides = [
        {
            title: 'Building For Green  ',
            subTitle: 'Energy',
            desc: "We provide types of services for Wind Farm projects in Vietnam. With 153+ MW of Wind turbines installed since established, we are confident to provide the best services to our customer.",
            bg: bg1
        },
        {
            title: 'Victory ',
            subTitle: 'Park',
            desc: "We provide types of services for Wind Farm projects in Vietnam. With 153+ MW of Wind turbines installed since established, we are confident to provide the best services to our customer.",
            bg: bg2


        },
        {
            title: 'Site ',
            subTitle: 'Conditions',
            desc: "We provide types of services for Wind Farm projects in Vietnam. With 153+ MW of Wind turbines installed since established, we are confident to provide the best services to our customer.",
            bg: bg3

        }
    ]
    return (
        <div className='section1'>

            <CustomSwiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {slides.map(({ title, subTitle, desc, bg }, index) => (

                    <SwiperSlide key={index}><Slide title={title} subTitle={subTitle} desc={desc} bg={bg} /></SwiperSlide>
                ))}

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>

            </CustomSwiper>
        </div>
    )
}


const CustomSwiper = styled(Swiper)`

    & .swiper-pagination{
        display: flex;
        justify-content: space-around
    }


    & .swiper-pagination-bullet {
        background-size: cover;
        background-position: center;
        width: 8rem;
        height: 8rem;
        border-radius: 50%;

        &:hover,
        &.active {
            scale:1.3;
            transition : 0.3s ease-in-out
        }

        
    }
    & .swiper-pagination-bullet:first-child {
            background-image: url(${bg1});
        }
    & .swiper-pagination-bullet:nth-child(2){
            background-image: url(${bg2});
        }
    & .swiper-pagination-bullet:last-child {
            background-image: url(${bg3});
        }

        & .swiper-pagination-bullet-active{
            scale:1.3;
            transition : 0.3s ease-in-out
        }
    
   
}

`
export default Section1
