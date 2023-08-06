import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import bg1 from "../../assets/background1.jpg";
import bg2 from "../../assets/background2.jpg";
import bg3 from "../../assets/background3.jpg";
import active1 from "../../assets/active_slide1.png";
import active2 from "../../assets/active_slide2.png";
import active3 from "../../assets/active_slide3.png";

import Slide from "./Slide";
import "./style.scss";
import styled from "styled-components";

function Section1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const onAutoplayTimeLeft = (s, time, progress) => {
    const currentOnTotalTime = currentSlide * 5000 + (5000 - time);
    setProgress((currentOnTotalTime / 15000) * 100);
  };

  const slides = useMemo(
    () => [
      {
        title: "Building For <br /><span>Green</span> Energy",
        desc: "We provide types of services for Wind Farm projects in Vietnam. With 153+ MW of Wind turbines installed since established, we are confident to provide the best services to our customer.",
        bg: bg1,
      },
      {
        title: "Victory <br /><span>Park</span>",
        subTitle: "Park",
        desc: "We provide types of services for Wind Farm projects in Vietnam. With 153+ MW of Wind turbines installed since established, we are confident to provide the best services to our customer.",
        bg: bg2,
      },
      {
        title: "Site <br /><span>Conditions</span>",
        desc: "We provide types of services for Wind Farm projects in Vietnam. With 153+ MW of Wind turbines installed since established, we are confident to provide the best services to our customer.",
        bg: bg3,
      },
    ],
    []
  );
  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };
  return (
    <div className='section1'>
      <CustomSwiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={handleSlideChange}
        className='mySwiper'>
        {slides.map(({ title, subTitle, desc, bg }, index) => (
          <SwiperSlide key={index}>
            <Slide title={title} subTitle={subTitle} desc={desc} bg={bg} />
          </SwiperSlide>
        ))}
        <div className='progress-section'>
          <div className='default-progress' style={{ width: 30 + "%" }}></div>
          <div className='progress-bar'>
            <div className='progress' style={{ width: progress + "%" }}></div>
          </div>
        </div>
      </CustomSwiper>
    </div>
  );
}

const CustomSwiper = styled(Swiper)`

    & .swiper-pagination{
        display: flex;
        justify-content: space-evenly
    }


    & .swiper-pagination-bullet {
        background-size: cover;
        background-position: center;
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        opacity: 1;
        border: 0.2rem solid white;
        &:hover,
        &.active {
            scale:1.3;
            transition : 0.3s ease-in-out
        }

        
    }
    & .swiper-pagination-bullet:first-child {
            background-image: url(${bg1});
            &.swiper-pagination-bullet-active {
                background-image: url(${active1});
            }
        }
    & .swiper-pagination-bullet:nth-child(2){
            background-image: url(${bg2});
            &.swiper-pagination-bullet-active {
                background-image: url(${active2});
            }
        }
    & .swiper-pagination-bullet:last-child {
            background-image: url(${bg3});
            &.swiper-pagination-bullet-active {
                background-image: url(${active3});
            }
        }

    & .swiper-pagination-bullet-active{
        scale:1.3;
        transition : 0.3s ease-in-out
    }
    
   
}

`;
export default Section1;
