import React from 'react'
import './style.scss'
import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from '../../assets/section4/img1.png';
import img2 from '../../assets/section4/img2.png';
import img3 from '../../assets/section4/img3.png';
import img4 from '../../assets/section4/img4.png';
import img5 from '../../assets/section4/img5.png';
import img6 from '../../assets/section4/img6.png';
import img7 from '../../assets/section4/img7.png';
import img8 from '../../assets/section4/img8.png';
import img9 from '../../assets/section4/img9.png';
import img10 from '../../assets/section4/img10.png';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import Ticker from "react-ticker";
import { Image } from 'antd';



function Section4() {
    // const masonryOptions = {
    //     fitWidth: false,
    //     columnWidth: 300,
    //     gutter: 15,
    //     itemSelector: ".photo-item",
    // };
    const listImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
    return (
        <div className='section4'>
            <Fade left>
                <ContentWrapper>
                    <div class="grid-container">
                        <div class="item1">
                            <img src={img2} alt="" />
                        </div>

                        <div class="item2">
                            <img src={img8} alt="" />
                        </div>

                        <div class="item3">
                            <img src={img7} alt="" />
                        </div>

                        <div class="item4">
                            <img src={img5} alt="" />
                        </div>

                        <div class="item5">
                            <img src={img6} alt="" />
                        </div>

                        <div class="item6">
                            <img src={img3} alt="" />
                        </div>

                        <div class="item7">
                            <img src={img4} alt="" />
                        </div>
                        <div class="item8">
                            <img src={img1} alt="" />
                        </div>
                        <div class="item9">
                            <img src={img2} alt="" />
                        </div>
                        <div class="item10">
                            <img src={img9} alt="" />
                        </div>
                        <div class="item11">

                        </div>
                    </div>

                </ContentWrapper>
            </Fade>


            <ContentWrapper>
                <Swiper className="mySwiper">
                    {listImg.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Image preview={true} src={img} alt="" />
                        </SwiperSlide>

                    ))}
                </Swiper>
            </ContentWrapper>


            <ContentWrapper>
                <div style={{ marginLeft: '10px' }}>
                    <Ticker>
                        {() => (
                            <>
                                <p>
                                    building for <span> green  </span> energy
                                </p>
                            </>
                        )}
                    </Ticker>
                </div>

            </ContentWrapper>
        </div>
    )
}

export default Section4
